'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FontLoader from '@/components/FontLoader';
import PageLoader from '@/components/PageLoader';
import Image from 'next/image';
import Link from 'next/link';
import { TiltCard, ScrollProgressBar } from '@/components/Parallax';

const CV_PATH = '/resume/Suryana Dhuchri CV 2026 2_4.pdf';

const STATS = [
  { value: '7+', label: 'Years Enterprise' },
  { value: '20+', label: 'Systems Shipped' },
  { value: '10+', label: 'AI Projects Built' },
  { value: '∞', label: 'Still Curious' },
];

const EXPERIENCE = [
  {
    period: '2018 / 2020',
    title: 'Junior Fullstack Developer',
    company: 'PT Bank BCA Syariah',
    location: 'Fullstack Division',
    bullets: [
      'Foundational enterprise SDLC experience: backend and frontend development across internal applications, code review practices, and production deployment workflows.',
    ],
  },
  {
    period: '2021 / 2024',
    title: 'Senior Fullstack Developer / Core Banking',
    company: 'PT Bank BCA Syariah',
    location: 'Core Banking Division',
    bullets: [
      'Contributed to the Core Banking team with deep exposure to financial transaction systems, account management, and cross-system data consistency at enterprise scale.',
      'Delivered a Suspicious Transaction Monitoring system integrated with BI-FAST flows, strengthening compliance and anti-fraud posture.',
      'Built the internal Financing Application System end-to-end; owned backend services and REST APIs across multiple enterprise applications.',
    ],
  },
  {
    period: '2025 / Present',
    title: 'AI Engineer / Fullstack Developer',
    company: 'PT Bank BCA Syariah',
    location: 'AI & Innovation Division',
    bullets: [
      "Designated lead for the bank's AI transformation initiatives: agentic workflows, RAG-based document intelligence, and LLM-powered automation embedded in production banking systems.",
      'Currently remodeling LISA, the internal machine learning system, to modernize its architecture and improve predictive accuracy.',
      'Architected a Smart Recruitment Platform with AI-driven CV screening, candidate scoring, and a conversational AI interviewer, now used internally for hiring.',
      'Continuously integrating LLM APIs and RAG pipelines into existing enterprise workflows for intelligent decision-support.',
    ],
    active: true,
  },
];

const PROJECTS = [
  {
    n: '01',
    cat: 'Agentic AI',
    title: 'Agentic Sprint Planner',
    sub: '& Flow Diagram Maker',
    desc: 'A multi-agent system that ingests product requirements and autonomously generates complete sprint plans alongside visual workflow diagrams. Reduces planning overhead for engineering teams from hours to minutes.',
    stack: ['Next.js', 'Python', 'Agent Orchestration', 'LLM APIs'],
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    n: '02',
    cat: 'Financial AI',
    title: 'AI Market Analysis',
    sub: 'for Trading',
    desc: 'An intelligent market-analysis engine combining real-time financial data with LLM reasoning to deliver narrative trading insights tailored to user strategy. Multiple data sources unified into one coherent analysis layer.',
    stack: ['LLM Agents', 'RAG', 'Financial APIs', 'Real-time Pipelines'],
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    n: '03',
    cat: 'Generative AI',
    title: 'AI Image & Video',
    sub: 'Generator',
    desc: 'End-to-end media generation platform orchestrating multiple generative AI models. Handles prompt refinement, output optimization, and downstream delivery, built for creators and marketing use-cases.',
    stack: ['Next.js', 'Generative Model APIs', 'Queue Workers'],
    accent: 'from-pink-500 to-orange-500',
  },
  {
    n: '04',
    cat: 'Enterprise AI',
    title: 'Smart Recruitment',
    sub: 'Platform',
    desc: 'Agentic AI recruitment suite featuring automated CV parsing, candidate scoring, and a conversational AI interviewer. Deployed internally at BCA Syariah to streamline hiring.',
    stack: ['Agentic AI', 'RAG', 'Next.js', 'Go'],
    accent: 'from-blue-500 to-cyan-500',
    image: '/image/hrapp.JPG',
  },
  {
    n: '05',
    cat: 'Banking / Compliance',
    title: 'Suspicious Transaction',
    sub: 'Monitoring',
    desc: "Real-time monitoring platform integrated with BI-FAST transaction flows, identifying and triaging suspicious activity to support the bank's regulatory compliance obligations.",
    stack: ['Go', 'PostgreSQL', 'Kafka', 'Enterprise Integration'],
    accent: 'from-amber-500 to-red-500',
    image: '/image/estrapp.JPG',
  },
];

const TOOLKIT = [
  {
    label: 'AI / ML',
    title: 'intelligence.',
    items: ['Agentic AI Systems', 'RAG Pipelines', 'LLM API Integration', 'Agent Orchestration', 'ML Model Remodeling', 'Generative AI'],
  },
  {
    label: 'Languages',
    title: 'syntax.',
    items: ['Go (Golang)', 'JavaScript / TypeScript', 'Node.js', 'Python', 'PHP', 'SQL'],
  },
  {
    label: 'Stack',
    title: 'fullstack.',
    items: ['Next.js · React', 'REST API Design', 'System Integration', 'PostgreSQL · MySQL', 'SQL Server', 'Kafka · Pipelines'],
  },
  {
    label: 'Domain',
    title: 'banking.',
    items: ['Core Banking Systems', 'BI-FAST Payment Rails', 'Compliance Monitoring', 'Enterprise Integration', 'Thought Machine Vault', 'HSM / AWS Fundamentals'],
  },
];

const EDUCATION = [
  { year: '2018', title: 'Bachelor of Technology', org: 'STTI NIIT I-Tech, Jakarta' },
  { year: '2016', title: 'High School Diploma', org: 'CCIT Fakultas Teknik, Universitas Indonesia, Depok' },
  { year: '2025', title: 'GitHub Copilot Certification', org: 'Jakarta' },
  { year: '2021 / 2022', title: 'Thought Machine Vault, AWS Secure Cloud, RPA, HSM, Scrum', org: 'PT Bank BCA Syariah' },
];


export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.85]);

  const aboutRef = useRef<HTMLDivElement>(null);

  const projectsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: projectsProgress } = useScroll({ target: projectsRef, offset: ['start end', 'end start'] });
  const projectsX = useTransform(projectsProgress, [0, 1], ['0%', '-60%']);
  const projectsXSmooth = useSpring(projectsX, { stiffness: 80, damping: 25 });

  const handleEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'suryana.dhuchri@gmail.com';
    navigator.clipboard.writeText(email);
    window.location.href = `mailto:${email}?subject=Project Inquiry&body=Hi Suryana, I'd like to discuss...`;
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 3000);
  };

  return (
    <>
      <PageLoader onLoadingComplete={() => setPageLoaded(true)} />
      <FontLoader />
      <ScrollProgressBar />

      {/* Static mesh background — CSS-only, no JS repaints */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="blob-1 absolute -top-1/4 -left-1/4 h-[60vw] w-[60vw] rounded-full bg-gradient-to-br from-blue-400/25 to-violet-500/25 blur-[100px] dark:from-blue-600/15 dark:to-violet-700/15" />
        <div className="blob-2 absolute top-1/2 -right-1/4 h-[55vw] w-[55vw] rounded-full bg-gradient-to-br from-pink-400/15 to-amber-300/15 blur-[100px] dark:from-pink-600/10 dark:to-amber-500/10" />
        <div className="blob-3 absolute -bottom-1/4 left-1/3 h-[50vw] w-[50vw] rounded-full bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 blur-[100px] dark:from-emerald-700/10 dark:to-cyan-700/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <main
        className={`relative transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        style={{  }}
      >
        <Navbar />

        {/* HERO — 3D parallax, mouse-tracked */}
        <section
          id="home"
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
        >
          <motion.div
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            className="container mx-auto px-6 md:px-12 lg:px-20 relative"
          >
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left text */}
              <div className="lg:col-span-7 space-y-7 text-center lg:text-left relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 tracking-wide">
                    Available · Open to remote work
                  </span>
                </motion.div>

                <div className="space-y-4">
                  <p className="text-xs md:text-sm font-bold text-primary dark:text-blue-400 tracking-[0.3em] uppercase">
                    AI Engineer · Fullstack Developer
                  </p>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.95] tracking-tight text-gray-900 dark:text-white">
                    Suryana
                    <br />
                    <span className="italic font-normal bg-gradient-to-r from-primary via-blue-500 to-violet-500 dark:from-blue-400 dark:via-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
                      Dhuchri.
                    </span>
                  </h1>
                  <p className="text-lg md:text-2xl font-light italic text-gray-600 dark:text-gray-300 max-w-2xl leading-snug">
                    Building <span className="not-italic font-semibold text-gray-900 dark:text-white">intelligent systems</span> at the
                    intersection of enterprise banking and modern AI.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2"
                >
                  <Link
                    href={CV_PATH}
                    download="Suryana_Dhuchri_CV_2026.pdf"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg overflow-hidden shadow-lg shadow-blue-900/20 transition-transform hover:scale-105"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center">
                      Download CV
                      <span className="material-symbols-outlined text-[20px] ml-2">download</span>
                    </span>
                  </Link>
                  <Link
                    href="#projects"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 dark:text-white bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-700  transition-all"
                  >
                    View Selected Works
                  </Link>
                </motion.div>
              </div>

              {/* Right portrait */}
              <div className="lg:col-span-5 flex justify-center relative z-10">
                  <TiltCard intensity={10} className="relative w-[180px] sm:w-[280px] lg:w-[380px] aspect-square">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-violet-500 to-pink-500 rounded-3xl blur-xl opacity-40 dark:opacity-50" style={{ transform: 'translateZ(-40px)' }} />
                    <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-violet-500 rounded-3xl opacity-20" style={{ transform: 'translateZ(-20px)' }} />
                    <div
                      className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 dark:border-slate-800/80 bg-white dark:bg-slate-800"
                      style={{ transform: 'translateZ(40px)' }}
                    >
                      <Image
                        src="/image/57616257.jpg"
                        alt="Suryana Dhuchri portrait"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 240px, 380px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-lg">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Based</div>
                      <div className="text-sm font-bold text-gray-900 dark:text-white">Bekasi · ID</div>
                    </div>
                    <div className="absolute -top-4 -right-4 px-4 py-3 rounded-xl bg-gradient-to-br from-primary to-violet-600 text-white shadow-lg">
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">7+ Years</div>
                      <div className="text-sm font-bold">Enterprise</div>
                    </div>
                  </TiltCard>
              </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400"
            >
              <span className="tracking-widest uppercase">Scroll</span>
              <span className="material-symbols-outlined">expand_more</span>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERTISE STRIP */}
        <section className="relative py-0 overflow-hidden">
          <div className="relative bg-primary dark:bg-slate-900 border-y border-blue-800/30 dark:border-slate-800">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-32 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-32 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-800/40 dark:divide-slate-800">
                {[
                  { label: 'AI Engineering',  items: ['Agentic AI', 'RAG', 'LLM APIs'] },
                  { label: 'Fullstack',       items: ['Next.js', 'Go', 'Node.js'] },
                  { label: 'Core Banking',    items: ['BI-FAST', 'Vault', 'Compliance'] },
                  { label: 'Systems',         items: ['Integration', 'Kafka', 'REST APIs'] },
                ].map((col, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="group flex flex-col items-center justify-center py-12 px-6 text-center relative overflow-hidden hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                      {col.label}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      {col.items.map((item, j) => (
                        <span key={j} className="text-sm md:text-base text-blue-200/80 font-medium">{item}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT — parallax background */}
        <section id="about" ref={aboutRef} className="relative py-20 md:py-32 overflow-hidden">
          <motion.div
style={{ }}
            className="absolute inset-0 -z-10 pointer-events-none"
          >
            <div className="absolute inset-x-0 top-1/4 text-center text-[20vw] md:text-[15vw] font-display font-bold text-gray-900/[0.03] dark:text-white/[0.03] select-none leading-none">
              PROFILE
            </div>
          </motion.div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold text-primary dark:text-blue-400 tracking-[0.3em] uppercase mb-6"
              >
                Profile
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05] mb-12"
              >
                On building things that{' '}
                <span className="italic font-normal bg-gradient-to-r from-primary to-violet-500 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                  actually ship.
                </span>
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-5">
                  <p>
                    <span className="font-display text-7xl float-left mr-3 mt-1 leading-none text-primary dark:text-blue-400">I</span>
                    design and build AI-powered systems that live inside real enterprise environments, not demos or
                    playgrounds. For the past 7 years at <strong className="text-gray-900 dark:text-white">BCA Syariah</strong>,
                    I&apos;ve owned features end-to-end, from ambiguous requirements through design, implementation, and the
                    ongoing reality of maintaining software that others depend on.
                  </p>
                  <p>
                    My day job is AI Engineering: <strong className="text-gray-900 dark:text-white">agentic systems, RAG
                    pipelines, LLM integrations</strong>, grounded by deep roots in core banking and full-stack delivery.
                    A rare combination where I know both the new stack and the legacy one.
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-5">
                  <p>
                    Lately I&apos;ve been remodeling <strong className="text-gray-900 dark:text-white">LISA</strong>, the
                    bank&apos;s machine learning system, and leading broader AI initiatives. Outside work I build constantly:
                    agentic sprint planners, AI trading analysis, generative media tooling. Always learning, always
                    shipping.
                  </p>
                  <p>
                    I care about code that is <strong className="text-gray-900 dark:text-white">maintainable, honest, and
                    useful</strong>. Available for freelance and collaboration with teams that value clarity over theatre.
                  </p>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 pt-10 border-t border-gray-200 dark:border-slate-800"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {STATS.map((s, i) => (
                  <TiltCard key={i} intensity={10} className="group p-6 rounded-2xl bg-white dark:bg-slate-900  border border-gray-200/60 dark:border-slate-800/60 shadow-sm">
                    <div className="font-display text-5xl md:text-6xl font-bold text-gray-900 dark:text-white" style={{ transform: 'translateZ(20px)' }}>
                      {s.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-2">
                      {s.label}
                    </div>
                  </TiltCard>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE — Seven years, one bank */}
        <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="mb-16 max-w-4xl">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-bold text-primary dark:text-blue-400 tracking-[0.3em] uppercase mb-4">
                Experience
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Seven years,{' '}
                <span className="italic font-normal bg-gradient-to-r from-primary to-violet-500 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                  one bank.
                </span>
              </motion.h2>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <TiltCard intensity={4} className="group relative p-6 md:p-10 rounded-3xl bg-white dark:bg-slate-900  border border-gray-200 dark:border-slate-800 shadow-lg overflow-hidden">
                    {exp.active && (
                      <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800/50">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-green-700 dark:text-green-400">Active</span>
                      </div>
                    )}
                    <div className="grid md:grid-cols-12 gap-4 md:gap-6" style={{ transform: 'translateZ(20px)' }}>
                      <div className="md:col-span-3">
                        <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">
                          {exp.period}
                        </div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">{exp.company}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{exp.location}</div>
                      </div>
                      <div className="md:col-span-9">
                        <h3 className="font-display text-xl md:text-3xl font-bold italic text-gray-900 dark:text-white mb-4 md:mb-5 leading-tight pr-20 md:pr-0">
                          {exp.title}
                        </h3>
                        <ul className="space-y-3">
                          {exp.bullets.map((b, j) => (
                            <li key={j} className="flex gap-3 text-gray-600 dark:text-gray-300 leading-relaxed">
                              <span className="mt-2.5 h-1 w-1 rounded-full bg-primary dark:bg-blue-400 shrink-0" />
                              <span className="text-sm md:text-base">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS — horizontal scroll on desktop, vertical stack on mobile */}
        {/* Mobile: vertical */}
        <section id="projects" className="md:hidden relative py-20 overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold text-primary dark:text-blue-400 tracking-[0.3em] uppercase mb-3">
              Selected Projects
            </motion.p>
            <h2 className="font-display text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-10">
              Selected{' '}
              <span className="italic font-normal bg-gradient-to-r from-primary to-violet-500 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                works.
              </span>
            </h2>

            <div className="space-y-6">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900  shadow-lg"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-10`} />
                  {p.image && (
                    <div className="absolute inset-0 opacity-25 dark:opacity-20">
                      <Image src={p.image} alt={p.title} fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/30 dark:from-slate-900/95 dark:via-slate-900/60 dark:to-slate-900/30" />

                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-display text-5xl font-bold text-gray-200 dark:text-slate-700 leading-none">
                        {p.n}
                      </span>
                      <span className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest rounded-full bg-gradient-to-r ${p.accent} text-white shadow-md`}>
                        {p.cat}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">
                      {p.title}{' '}
                      <span className="italic font-normal text-gray-600 dark:text-gray-300">{p.sub}</span>
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((s, j) => (
                        <span key={j} className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Desktop: horizontal scroll-pinned */}
        <section id="projects-desktop" ref={projectsRef} className="hidden md:block relative h-[400vh]">
          <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-8">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-bold text-primary dark:text-blue-400 tracking-[0.3em] uppercase mb-4">
                Selected Projects
              </motion.p>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Selected{' '}
                <span className="italic font-normal bg-gradient-to-r from-primary to-violet-500 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                  works.
                </span>
              </h2>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">→ scroll to navigate</p>
            </div>

            <motion.div style={{ x: projectsXSmooth }} className="flex gap-8 px-6 md:px-12 lg:px-20 will-change-transform">
              {PROJECTS.map((p, i) => (
                <TiltCard
                  key={i}
                  intensity={8}
                  className="group relative shrink-0 w-[600px] lg:w-[680px] h-[60vh] rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900  shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  {p.image && (
                    <div className="absolute inset-0 opacity-30 dark:opacity-25 group-hover:opacity-50 transition-opacity">
                      <Image src={p.image} alt={p.title} fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent dark:from-slate-900/95 dark:via-slate-900/40" />

                  <div className="relative h-full p-8 md:p-12 flex flex-col justify-between" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex items-start justify-between">
                      <span className="font-display text-7xl md:text-8xl font-bold text-gray-200 dark:text-slate-700 leading-none">
                        {p.n}
                      </span>
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-gradient-to-r ${p.accent} text-white shadow-md`}>
                        {p.cat}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                        {p.title}{' '}
                        <span className="italic font-normal text-gray-600 dark:text-gray-300">{p.sub}</span>
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {p.stack.map((s, j) => (
                          <span key={j} className="px-3 py-1 text-xs font-semibold rounded-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 ">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TOOLKIT */}
        <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="mb-16 max-w-4xl">
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-bold text-primary dark:text-blue-400 tracking-[0.3em] uppercase mb-4">
                Toolkit
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                What I{' '}
                <span className="italic font-normal bg-gradient-to-r from-primary to-violet-500 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                  use.
                </span>
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TOOLKIT.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <TiltCard intensity={12} className="group h-full p-6 rounded-2xl bg-white dark:bg-slate-900  border border-gray-200 dark:border-slate-800 shadow-lg overflow-hidden">
                    <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500 mb-3" style={{ transform: 'translateZ(15px)' }}>
                      {t.label}
                    </div>
                    <div className="font-display text-2xl font-bold italic text-gray-900 dark:text-white mb-5 pb-4 border-b border-dashed border-gray-200 dark:border-slate-700" style={{ transform: 'translateZ(25px)' }}>
                      {t.title}
                    </div>
                    <ul className="space-y-2.5" style={{ transform: 'translateZ(15px)' }}>
                      {t.items.map((it, j) => (
                        <li key={j} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          <span className="h-px w-3 bg-gray-300 dark:bg-slate-600 group-hover:w-5 group-hover:bg-primary dark:group-hover:bg-blue-400 transition-all" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMATION */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-bold text-primary dark:text-blue-400 tracking-[0.3em] uppercase mb-4">
              Formation
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-12"
            >
              Education{' '}
              <span className="italic font-normal bg-gradient-to-r from-primary to-violet-500 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                & craft.
              </span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
              {EDUCATION.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900  border border-gray-200 dark:border-slate-800"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 shrink-0 w-24">
                    {e.year}
                  </div>
                  <div>
                    <div className="font-display font-bold italic text-gray-900 dark:text-white text-lg leading-tight">{e.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{e.org}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden p-10 md:p-16 bg-gradient-to-br from-primary via-blue-700 to-violet-700 dark:from-slate-900 dark:via-blue-950 dark:to-violet-950 shadow-2xl">
              <motion.div
                animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-pink-400/30 blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-400/30 blur-3xl"
              />

              <div className="relative text-center text-white">
                <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-70 mb-4">Let&apos;s build</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Clarity over{' '}
                  <span className="italic font-normal text-pink-200">theatre.</span>
                </h2>
                <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                  Available for freelance and collaboration with teams that value maintainable, honest, and useful systems.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleEmail}
                    className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-50 transition-all hover:scale-105 cursor-pointer w-full sm:w-auto"
                  >
                    suryana.dhuchri@gmail.com
                  </button>
                  <Link
                    href="https://wa.me/6285959072207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white/10  border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition-all hover:scale-105 w-full sm:w-auto"
                  >
                    +62 859 5907 2207
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-10 border-t border-gray-200 dark:border-slate-800">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2026 Suryana Dhuchri · suryanadhuchri.dev
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://github.com/sdhuchri" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" title="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="https://www.linkedin.com/in/suryana-dhuchri-aa8458274/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </Link>
              <Link href="https://wa.me/6285959072207" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors" title="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" clipRule="evenodd" /></svg>
              </Link>
              <button onClick={handleEmail} className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer" title="Copy Email">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Toast */}
      <div className={`fixed bottom-24 right-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg shadow-xl transform transition-all duration-300 z-50 flex items-center gap-3 ${showCopyToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <span className="material-symbols-outlined text-green-400 dark:text-green-600">check_circle</span>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Email Copied!</span>
          <span className="text-xs opacity-80">suryana.dhuchri@gmail.com</span>
        </div>
      </div>
    </>
  );
}

