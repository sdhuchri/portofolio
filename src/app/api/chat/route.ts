import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';
import { PORTFOLIO_CONTEXT } from '@/lib/portfolioContext';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export const runtime = 'nodejs';

let cvTextPromise: Promise<string> | null = null;

async function loadCvText(): Promise<string> {
  if (!cvTextPromise) {
    cvTextPromise = (async () => {
      try {
        const pdfPath = path.join(process.cwd(), 'public', 'resume', 'Suryana Dhuchri CV 2026 2_4.pdf');
        const buffer = await fs.readFile(pdfPath);
        const pdfParse = (await import('pdf-parse')).default;
        const data = await pdfParse(buffer);
        return data.text.trim();
      } catch (err) {
        console.warn('CV PDF parse failed, falling back to context only:', err);
        return '';
      }
    })();
  }
  return cvTextPromise;
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
    const region = process.env.AWS_REGION || 'us-east-1';
    const modelId = process.env.BEDROCK_MODEL_ID || 'anthropic.claude-3-5-haiku-20241022-v1:0';

    if (!accessKeyId || !secretAccessKey) {
      return NextResponse.json(
        { reply: "I'm offline — Bedrock credentials missing. Set AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in .env.local" },
        { status: 200 }
      );
    }

    const cvText = await loadCvText();

    const systemPrompt = `${PORTFOLIO_CONTEXT}

# RAW CV CONTENT (parsed from the official 2026 CV PDF — additional source of truth)
${cvText || '(CV PDF not available — rely on the structured context above.)'}
`;

    const client = new BedrockRuntimeClient({
      region,
      credentials: { accessKeyId, secretAccessKey },
    });

    const body = JSON.stringify({
      anthropic_version: 'bedrock-2023-05-31',
      max_tokens: 400,
      temperature: 0.7,
      system: systemPrompt,
      messages: [{ role: 'user', content: message }],
    });

    const command = new InvokeModelCommand({
      modelId,
      contentType: 'application/json',
      accept: 'application/json',
      body,
    });

    const response = await client.send(command);
    const decoded = JSON.parse(new TextDecoder().decode(response.body));
    const reply = decoded?.content?.[0]?.text || 'Sorry, no response.';

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('Bedrock API Error:', error);
    return NextResponse.json(
      { reply: `Sorry, something went wrong. Error: ${msg}` },
      { status: 500 }
    );
  }
}
