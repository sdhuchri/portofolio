'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';

const EMAIL = 'suryana.dhuchri@gmail.com';
const CV_PATH = '/resume/Suryana_Dhuchri_CV_2026_ATS_EN.pdf';

const MARQUEE_ITEMS = [
  'Agentic AI',
  'MCP Tools',
  'LangGraph',
  'Mastra',
  'RAG Pipelines',
  'Core Banking',
  'Automation',
];

type Experience = {
  period: string;
  company: string;
  loc: string;
  active?: boolean;
  title: string;
  bullets: string[];
};

const EXPERIENCE: Experience[] = [
  {
    period: '2025 — PRESENT',
    company: 'PT Bank BCA Syariah',
    loc: 'AI & Innovation Division',
    active: true,
    title: 'AI Engineer / Fullstack Developer',
    bullets: [
      "Designated lead for the bank's AI transformation: agentic workflows, MCP tooling, RAG-based document intelligence, and LLM-powered automation embedded in production banking systems.",
      'Remodeling LISA, the internal machine learning system, to modernize its architecture and improve predictive accuracy.',
      'Architected a Smart Recruitment Platform with AI-driven CV screening, candidate scoring, and a conversational AI interviewer — now used internally for hiring.',
    ],
  },
  {
    period: '2021 — 2024',
    company: 'PT Bank BCA Syariah',
    loc: 'Core Banking Division',
    title: 'Senior Fullstack Developer / Core Banking',
    bullets: [
      'Deep exposure to financial transaction systems, account management, and cross-system data consistency at enterprise scale.',
      'Delivered a Suspicious Transaction Monitoring system integrated with BI-FAST flows, strengthening compliance and anti-fraud posture.',
      'Built the internal Financing Application System end-to-end; owned backend services and REST APIs across multiple enterprise applications.',
    ],
  },
  {
    period: '2018 — 2020',
    company: 'PT Bank BCA Syariah',
    loc: 'Fullstack Division',
    title: 'Junior Fullstack Developer',
    bullets: [
      'Foundational enterprise SDLC experience: backend and frontend development across internal applications, code review practices, and production deployment workflows.',
    ],
  },
];

type Project = {
  num: string;
  cat: string;
  agentic?: boolean;
  title: string;
  sub: string;
  desc: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    num: '01',
    cat: 'Agentic SaaS',
    agentic: true,
    title: 'Business UMKM+',
    sub: 'AI business web app',
    desc: "An all-in-one web app for Indonesian small businesses. Owners run everything from one place — automated financial reports, tax prep, and AI-generated content. Wired through MCP to Mekari, Odoo & Accurate, and connected to WhatsApp Business so each owner's customers chat directly with their own AI bot.",
    stack: ['MCP', 'LangGraph', 'WhatsApp API', 'Vector DB', 'Next.js'],
  },
  {
    num: '02',
    cat: 'Agentic AI',
    agentic: true,
    title: 'NegotiAI',
    sub: 'autonomous negotiator',
    desc: 'A negotiation platform where AI agents do the haggling. Enterprise deals can drag on for months — NegotiAI puts an autonomous negotiator on each side. Buyer and seller set their terms, then two agents trade offers back and forth until they reach a deal.',
    stack: ['Multi-Agent', 'LangGraph', 'Mastra', 'LLM APIs'],
  },
  {
    num: '03',
    cat: 'Agentic AI',
    agentic: true,
    title: 'Agentic Sprint Planner',
    sub: '& flow maker',
    desc: 'A multi-agent system that ingests product requirements and autonomously generates complete sprint plans alongside visual workflow diagrams — cutting planning overhead from hours to minutes.',
    stack: ['Next.js', 'Python', 'Agent Orchestration', 'LLM APIs'],
  },
  {
    num: '04',
    cat: 'Financial AI',
    title: 'AI Market Analysis',
    sub: 'for trading',
    desc: 'An intelligent market-analysis engine combining real-time financial data with LLM reasoning to deliver narrative trading insights tailored to user strategy — multiple data sources unified into one coherent layer.',
    stack: ['LLM Agents', 'RAG', 'Financial APIs', 'Real-time'],
  },
  {
    num: '05',
    cat: 'Generative AI',
    title: 'AI Image & Video',
    sub: 'generator',
    desc: 'An end-to-end media generation platform orchestrating multiple generative models — handling prompt refinement, output optimization, and downstream delivery for creators and marketing use-cases.',
    stack: ['Next.js', 'Generative APIs', 'Queue Workers'],
  },
  {
    num: '06',
    cat: 'Enterprise AI',
    title: 'Smart Recruitment',
    sub: 'platform',
    desc: 'An agentic recruitment suite with automated CV parsing, candidate scoring, and a conversational AI interviewer. Deployed internally at BCA Syariah to streamline hiring.',
    stack: ['Agentic AI', 'RAG', 'Next.js', 'Go'],
  },
  {
    num: '07',
    cat: 'Banking · Compliance',
    title: 'Suspicious Transaction',
    sub: 'monitoring',
    desc: "A real-time monitoring platform integrated with BI-FAST transaction flows, identifying and triaging suspicious activity to support the bank's regulatory compliance obligations.",
    stack: ['Go', 'PostgreSQL', 'Kafka', 'Integration'],
  },
];

type ToolkitCard = {
  feat?: boolean;
  label: string;
  title: string;
  items: string[];
  tilt: number;
  delay?: string;
};

const TOOLKIT: ToolkitCard[] = [
  {
    feat: true,
    label: 'Agentic & MCP — the new core',
    title: 'orchestration.',
    items: ['AI Agents', 'MCP Tools & Servers', 'LangGraph', 'Mastra', 'Agent Orchestration', 'RAG Pipelines'],
    tilt: 4,
  },
  {
    label: 'AI / ML',
    title: 'intelligence.',
    items: ['LLM API Integration', 'Vector Databases', 'Generative AI', 'ML Model Remodeling', 'Prompting & Eval'],
    tilt: 6,
    delay: 'd1',
  },
  {
    label: 'Automation & Data',
    title: 'pipelines.',
    items: ['Web Scraping', 'Crawling', 'Workflow Automation', 'Real-time Pipelines', 'Kafka'],
    tilt: 6,
    delay: 'd2',
  },
  {
    label: 'Languages & Stack',
    title: 'fullstack.',
    items: ['Go (Golang)', 'TypeScript / JS', 'Node.js · Python', 'Next.js · React', 'PostgreSQL · SQL', 'REST API Design'],
    tilt: 6,
    delay: 'd1',
  },
  {
    label: 'Domain',
    title: 'banking.',
    items: ['Core Banking Systems', 'BI-FAST Payment Rails', 'Compliance Monitoring', 'Thought Machine Vault', 'HSM / AWS'],
    tilt: 6,
    delay: 'd2',
  },
];

const EDUCATION = [
  { year: '2018', title: 'Bachelor of Technology', org: 'STTI NIIT I-Tech, Jakarta', delay: '' },
  { year: '2016', title: 'High School Diploma', org: 'CCIT Fakultas Teknik, Universitas Indonesia, Depok', delay: 'd1' },
  { year: '2025', title: 'GitHub Copilot Certification', org: 'Jakarta', delay: '' },
  { year: '2021 / 22', title: 'Vault · AWS · RPA · HSM · Scrum', org: 'PT Bank BCA Syariah', delay: 'd1' },
];

export default function Home() {
  const [toast, setToast] = useState({ title: 'Email copied', sub: EMAIL, show: false });
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (title: string, sub: string) => {
    setToast({ title, sub, show: true });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 3200);
  };

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      navigator.clipboard?.writeText(EMAIL);
    } catch {
      /* clipboard unavailable */
    }
    window.location.href = `mailto:${EMAIL}?subject=Project Inquiry&body=Hi Suryana, I'd like to discuss...`;
    showToast('Email copied', EMAIL);
  };

  const handleCV = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(CV_PATH, { method: 'HEAD' });
      if (res.ok) {
        const a = document.createElement('a');
        a.href = CV_PATH;
        a.download = 'Suryana-Dhuchri-CV-2026.pdf';
        a.click();
        return;
      }
    } catch {
      /* fall through to email */
    }
    try {
      navigator.clipboard?.writeText(EMAIL);
    } catch {
      /* clipboard unavailable */
    }
    window.location.href = `mailto:${EMAIL}?subject=CV Request&body=Hi Suryana, could you send your latest CV?`;
    showToast('CV on request', 'Email opened · ' + EMAIL);
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- Reveal on scroll ---- */
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => io.observe(el));

    /* ---- Stat counters ---- */
    const animateCount = (el: HTMLElement) => {
      const raw = el.getAttribute('data-count') || '';
      if (raw === '∞') {
        el.textContent = '∞';
        return;
      }
      const target = parseFloat(raw);
      const suffix = el.getAttribute('data-suffix') || '';
      if (prefersReduced) {
        el.textContent = target + suffix;
        return;
      }
      const dur = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const statIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            animateCount(en.target as HTMLElement);
            statIO.unobserve(en.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => statIO.observe(el));

    /* ---- Portrait + card tilt ---- */
    const tiltHandlers: { el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }[] = [];
    if (!prefersReduced && window.matchMedia('(hover: hover)').matches) {
      document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
        const intensity = parseFloat(el.getAttribute('data-tilt') || '8') || 8;
        el.style.transformStyle = 'preserve-3d';
        const move = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateY(${px * intensity}deg) rotateX(${-py * intensity}deg)`;
        };
        const leave = () => {
          el.style.transform = '';
        };
        el.addEventListener('mousemove', move);
        el.addEventListener('mouseleave', leave);
        tiltHandlers.push({ el, move, leave });
      });
    }

    /* ---- Projects horizontal scroll progress ---- */
    const scroller = document.querySelector<HTMLElement>('.proj-scroll');
    const fills = document.querySelectorAll<HTMLElement>('.proj-progress .fill');
    let updFill: (() => void) | null = null;
    if (scroller) {
      updFill = () => {
        const max = scroller.scrollWidth - scroller.clientWidth;
        const p = max > 0 ? scroller.scrollLeft / max : 0;
        const count = scroller.querySelectorAll('.proj-card').length;
        const perCard = count ? 1 / count : 0.14;
        fills.forEach((f) => {
          f.style.width = Math.max(14, (perCard + p * (1 - perCard)) * 100) + '%';
        });
      };
      scroller.addEventListener('scroll', updFill, { passive: true });
      updFill();
    }

    return () => {
      io.disconnect();
      statIO.disconnect();
      tiltHandlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
      if (scroller && updFill) scroller.removeEventListener('scroll', updFill);
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <>
      {/* Background field */}
      <div className="bg-field" aria-hidden="true">
        <div className="grid-dots" />
        <div className="blob b1" />
        <div className="blob b2" />
      </div>

      <Navbar />

      <main>
        {/* ============================ HERO ============================ */}
        <section className="hero wrap" id="home">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="status-pill reveal">
                <span className="live" /> AVAILABLE · OPEN TO WORK
              </div>
              <p className="role reveal d1">AI Engineer · Fullstack Developer</p>
              <h1 className="h-display reveal d1">
                Suryana
                <br />
                <span className="line2 serif-it">Dhuchri.</span>
              </h1>
              <p className="lede reveal d2">
                Building <b>intelligent, agentic systems</b> at the intersection of enterprise banking and modern AI.
              </p>
              <div className="hero-cta reveal d3">
                <a className="btn btn-primary" href={CV_PATH} download onClick={handleCV}>
                  Download CV
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v12M7 11l5 4 5-4M5 21h14" />
                  </svg>
                </a>
                <a className="btn btn-ghost" href="#work">
                  View selected work
                </a>
              </div>
            </div>

            <div className="portrait-wrap reveal d2">
              <div className="portrait" data-tilt="9">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/image/57616257.jpg" alt="Suryana Dhuchri portrait" />
              </div>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">
            <span className="bar" />
            scroll
          </div>
        </section>

        {/* ============================ MARQUEE ============================ */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <span className="marquee-item" key={dup}>
                {MARQUEE_ITEMS.map((item, i) => (
                  <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 56 }}>
                    {item} <span className="sep" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ============================ ABOUT ============================ */}
        <section className="section wrap" id="about">
          <div className="sec-head">
            <span className="eyebrow reveal">Profile</span>
            <h2 className="h-display reveal d1">
              On building things that <span className="serif-it">actually ship.</span>
            </h2>
          </div>
          <div className="about-cols">
            <div className="reveal d1">
              <p className="dropcap">
                I design and build AI-powered systems that live inside real enterprise environments — not demos or
                playgrounds. For the past 7 years at <b>BCA Syariah</b>, I&apos;ve owned features end-to-end, from
                ambiguous requirements through design, implementation, and the ongoing reality of maintaining software
                that others depend on.
              </p>
              <p>
                My day job is AI Engineering: <b>agentic systems, MCP tools, RAG pipelines, and LLM integrations</b> —
                grounded by deep roots in core banking and full-stack delivery. A rare combination where I know both the
                new stack and the legacy one.
              </p>
            </div>
            <div className="reveal d2">
              <p>
                Lately I&apos;ve been remodeling <b>LISA</b>, the bank&apos;s machine learning system, and leading
                broader AI initiatives. Outside work I build constantly: an AI business web app for small businesses,
                autonomous negotiation agents, agentic sprint planners, generative media tooling. Always learning, always
                shipping.
              </p>
              <p>
                I care about code that is <b>maintainable, honest, and useful</b>. Open to full-time roles,
                collaboration, and freelance with teams that value clarity over theatre.
              </p>
            </div>
          </div>

          <div className="stats">
            <div className="stat reveal" data-tilt="6">
              <div className="num">
                <span data-count="7" data-suffix="+">0</span>
              </div>
              <div className="lbl">Years Enterprise</div>
            </div>
            <div className="stat reveal d1" data-tilt="6">
              <div className="num">
                <span data-count="20" data-suffix="+">0</span>
              </div>
              <div className="lbl">Systems Shipped</div>
            </div>
            <div className="stat reveal d2" data-tilt="6">
              <div className="num">
                <span data-count="12" data-suffix="+">0</span>
              </div>
              <div className="lbl">AI Projects Built</div>
            </div>
            <div className="stat reveal d3" data-tilt="6">
              <div className="num">
                <span data-count="∞">∞</span>
              </div>
              <div className="lbl">Still Curious</div>
            </div>
          </div>
        </section>

        {/* ============================ EXPERIENCE ============================ */}
        <section className="section wrap" id="experience">
          <div className="sec-head">
            <span className="eyebrow reveal">Experience</span>
            <h2 className="h-display reveal d1">
              Seven years, <span className="serif-it">one bank.</span>
            </h2>
          </div>
          <div className="xp-list">
            {EXPERIENCE.map((xp, i) => (
              <article className="xp reveal" key={i}>
                <span className="num-ghost">
                  {String(i + 1).padStart(2, '0')} / {String(EXPERIENCE.length).padStart(2, '0')}
                </span>
                <div className="xp-meta">
                  <div className="period">{xp.period}</div>
                  <div className="company">{xp.company}</div>
                  <div className="loc">{xp.loc}</div>
                  {xp.active && (
                    <div className="active-tag">
                      <span className="live" /> Active
                    </div>
                  )}
                </div>
                <div className="xp-detail">
                  <h3 className="xp-title">{xp.title}</h3>
                  <ul>
                    {xp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ============================ PROJECTS ============================ */}
        <section className="section projects" id="work">
          <div className="wrap">
            <div className="proj-head">
              <div className="sec-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow reveal">Selected Projects</span>
                <h2 className="h-display reveal d1">
                  Selected <span className="serif-it">works.</span>
                </h2>
              </div>
              <div className="proj-hint reveal d2">
                drag / scroll <span className="arrow">→</span>
              </div>
            </div>
          </div>

          <div className="proj-scroll reveal d1">
            {PROJECTS.map((p) => (
              <article className={`proj-card${p.agentic ? ' agentic' : ''}`} data-tilt="4" key={p.num}>
                <span className="top-line" />
                <span className="glow" />
                <div className="proj-top">
                  <span className="proj-num">{p.num}</span>
                  <span className="proj-cat">{p.cat}</span>
                </div>
                <h3>
                  {p.title} <span className="sub">{p.sub}</span>
                </h3>
                <p className="desc">{p.desc}</p>
                <div className="proj-stack">
                  {p.stack.map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="wrap">
            <div className="proj-progress">
              <div className="fill" />
            </div>
          </div>
        </section>

        {/* ============================ TOOLKIT ============================ */}
        <section className="section wrap" id="toolkit">
          <div className="sec-head">
            <span className="eyebrow reveal">Toolkit</span>
            <h2 className="h-display reveal d1">
              What I <span className="serif-it">use.</span>
            </h2>
          </div>
          <div className="tk-grid">
            {TOOLKIT.map((t, i) => (
              <div
                className={`tk-card${t.feat ? ' feat' : ''} reveal${t.delay ? ' ' + t.delay : ''}`}
                data-tilt={t.tilt}
                key={i}
              >
                <div className="glow" />
                <div className="tk-label">{t.label}</div>
                <div className="tk-title">{t.title}</div>
                <div className="tk-items">
                  {t.items.map((it, j) => (
                    <span className="tk-item" key={j}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================ EDUCATION ============================ */}
        <section className="section wrap" id="formation">
          <div className="sec-head">
            <span className="eyebrow reveal">Formation</span>
            <h2 className="h-display reveal d1">
              Education <span className="serif-it">&amp; craft.</span>
            </h2>
          </div>
          <div className="edu-grid">
            {EDUCATION.map((e, i) => (
              <div className={`edu reveal${e.delay ? ' ' + e.delay : ''}`} key={i}>
                <div className="year">{e.year}</div>
                <div>
                  <div className="title">{e.title}</div>
                  <div className="org">{e.org}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================ CONTACT ============================ */}
        <section className="section wrap" id="contact">
          <div className="contact-card reveal">
            <div className="glow1" />
            <div className="glow2" />
            <span className="eyebrow">Get in touch</span>
            <h2 className="h-display">
              Let&apos;s build something <span className="serif-it">worth shipping.</span>
            </h2>
            <p className="sub">
              Open to full-time roles, collaborations, and select freelance work — anywhere teams value AI systems that
              are maintainable, honest, and genuinely useful. If that sounds like your team, let&apos;s talk.
            </p>
            <div className="contact-actions">
              <button className="btn btn-accent" onClick={handleEmail}>
                {EMAIL}
              </button>
              <a
                className="btn btn-ghost"
                href="https://wa.me/6285959072207"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  color: 'var(--invert-ink)',
                  borderColor: 'color-mix(in oklab,var(--invert-ink) 30%,transparent)',
                }}
              >
                +62 859 5907 2207
              </a>
            </div>
          </div>
        </section>

        {/* ============================ FOOTER ============================ */}
        <footer className="footer wrap">
          <div className="footer-inner">
            <div className="copy">© 2026 Suryana Dhuchri · suryanadhuchri.dev</div>
            <div className="socials">
              <a href="https://github.com/sdhuchri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/suryana-dhuchri-aa8458274/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="https://wa.me/6285959072207" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z" />
                </svg>
              </a>
              <button
                className="socials-mail"
                onClick={handleEmail}
                aria-label="Copy email"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 11,
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--ink-2)',
                  cursor: 'pointer',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 18, height: 18 }}
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* ============================ TOAST ============================ */}
      <div className={`toast${toast.show ? ' show' : ''}`}>
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <div>
          <div className="t">{toast.title}</div>
          <div className="s">{toast.sub}</div>
        </div>
      </div>
    </>
  );
}
