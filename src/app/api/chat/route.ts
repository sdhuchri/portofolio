import OpenAI from 'openai';
import { PORTFOLIO_CONTEXT } from "@/lib/portfolioContext";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { reply: "I'm offline (OpenAI Configuration missing). Please check .env.local" },
                { status: 200 }
            );
        }

        const openai = new OpenAI({ apiKey });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Cost effective and fast
            messages: [
                {
                    role: "system",
                    content: PORTFOLIO_CONTEXT
                },
                { role: "user", content: message },
            ],
            max_tokens: 300,
            temperature: 0.7,
        });

        const reply = completion.choices[0].message.content || "Sorry, no response.";

        return NextResponse.json({ reply });
    } catch (error: any) {
        console.error("OpenAI API Error:", error);
        return NextResponse.json(
            { reply: `Sorry, something went wrong. Error: ${error.message || error}` },
            { status: 500 }
        );
    }
}
