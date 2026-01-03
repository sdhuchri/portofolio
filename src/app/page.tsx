'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import FontLoader from '@/components/FontLoader';
import PageLoader from '@/components/PageLoader';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = 'suryana.dhuchri@gmail.com';
    navigator.clipboard.writeText(email);
    window.location.href = `mailto:${email}?subject=Project Inquiry&body=Hi Suryana, I'd like to discuss...`;

    // Show feedback
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 3000);
  };

  return (
    <>
      <PageLoader onLoadingComplete={() => setPageLoaded(true)} />
      <FontLoader />
      <main
        className={`transition-all duration-1000 ease-out ${pageLoaded
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-5'
          }`}
      >
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center"
        >
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10 dark:bg-primary/10 opacity-60 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-3xl -z-10 dark:bg-slate-800/20 opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Profile Image - Show on mobile first */}
              <ScrollReveal yOffset={80} triggerTrigger={1.05} triggerComplete={0.8} className="lg:order-2 lg:w-[350px] flex-shrink-0">
                <div className="relative w-full max-w-[200px] sm:max-w-[240px] lg:max-w-full mx-auto group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-full rotate-6 opacity-20 dark:opacity-30 blur-sm transform transition-transform duration-500 group-hover:rotate-3"></div>
                  <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-700">
                    <Image
                      src="/image/57616257.jpg"
                      alt="Professional portrait of Suryana Dhuchri"
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Left Content */}
              <div className="flex-1 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                <AnimatedSection animation="fade-in-up" delay={200}>
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm mx-auto lg:mx-0">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 tracking-wide">
                        Available for New Opportunities
                      </span>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight">
                      Hi, I'm <span className="text-primary dark:text-blue-400">Suryana Dhuchri.</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400">
                      AI Engineer & Fullstack Developer
                    </h2>

                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      I build intelligent systems that drive business value. Specialized in{' '}
                      <span className="font-semibold text-gray-900 dark:text-white">scalable Fullstack systems</span>,{' '}
                      <span className="font-semibold text-gray-900 dark:text-white">Agentic AI</span>, and end-to-end
                      product delivery.
                    </p>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-in-up" delay={400}>
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                    <Link
                      href="/resume/CV Suryana 2026.pdf"
                      download="CV_Suryana_Dhuchri_2026.pdf"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary rounded-lg transition-all hover:bg-primary-hover shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:scale-105"
                    >
                      Download CV
                      <span className="material-symbols-outlined text-[20px] ml-2">download</span>
                    </Link>
                    <Link
                      href="#projects"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-gray-700 dark:text-white bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-sm hover:shadow-md"
                    >
                      View Projects
                    </Link>
                    <Link
                      href="#contact"
                      className="w-full sm:w-auto inline-flex items-center justify-center text-base font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                    >
                      Contact Me <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Core Technologies */}
            <ScrollReveal yOffset={60} triggerTrigger={0.9} triggerComplete={0.8}>
              <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800/60">
                <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 text-center lg:text-left">
                  Core Technologies
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      category: 'Fullstack',
                      techs: 'Go · Node.js · PHP · Next.js',
                      icon: 'code_blocks',
                      color: 'blue',
                      gradient: 'from-blue-500/10 to-indigo-500/10',
                      border: 'group-hover:border-blue-500/50',
                      text: 'text-blue-600 dark:text-blue-400'
                    },
                    {
                      category: 'AI Engineering',
                      techs: 'AI Agents · RAG · AI APIs',
                      icon: 'smart_toy',
                      color: 'purple',
                      gradient: 'from-purple-500/10 to-pink-500/10',
                      border: 'group-hover:border-purple-500/50',
                      text: 'text-purple-600 dark:text-purple-400'
                    },
                    {
                      category: 'Data',
                      techs: 'SQL Server · PostgreSQL · MySQL',
                      icon: 'database',
                      color: 'teal',
                      gradient: 'from-teal-500/10 to-emerald-500/10',
                      border: 'group-hover:border-teal-500/50',
                      text: 'text-teal-600 dark:text-teal-400'
                    },
                    {
                      category: 'Systems',
                      techs: 'REST APIs · Integration · Workflows',
                      icon: 'hub',
                      color: 'orange',
                      gradient: 'from-orange-500/10 to-red-500/10',
                      border: 'group-hover:border-orange-500/50',
                      text: 'text-orange-600 dark:text-orange-400'
                    },
                  ].map((item, index) => (
                    <ScrollReveal key={index} yOffset={40 + (index * 20)} triggerTrigger={0.9} triggerComplete={0.8}>
                      <div
                        className={`group relative p-4 rounded-xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${item.border}`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

                        <div className="relative flex flex-col h-full z-10">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`p-2 rounded-lg bg-gray-50 dark:bg-slate-800 ${item.text}`}>
                              <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white text-sm">{item.category}</h3>
                          </div>
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-relaxed pl-1">
                            {item.techs}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 relative overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          {/* Decorative Elements */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">

              {/* 1. Label */}
              <ScrollReveal yOffset={40} triggerTrigger={1} triggerComplete={0.8}>
                <h3 className="text-primary dark:text-blue-400 font-display font-bold text-lg mb-3">About Me</h3>
              </ScrollReveal>

              {/* 2. Headline - Parallax effect lebih kuat */}
              <ScrollReveal yOffset={80} triggerTrigger={0.9} triggerComplete={0.5}>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                  Building practical AI-enabled systems within real-world enterprise environments.
                </h2>
              </ScrollReveal>

              {/* 3. Body Text - Muncul berurutan sesuai scroll */}
              <div className="prose prose-lg text-gray-600 dark:text-gray-400 space-y-6 mx-auto leading-relaxed">
                <ScrollReveal yOffset={60} triggerTrigger={0.85} triggerComplete={0.6}>
                  <p>
                    I am an AI Engineer and Fullstack Developer with strong experience delivering production-ready applications
                    across the full software development lifecycle. My work focuses on integrating AI capabilities into
                    existing systems, building scalable backend services, and delivering reliable web applications used
                    in day-to-day operations.
                  </p>
                </ScrollReveal>

                <ScrollReveal yOffset={60} triggerTrigger={0.8} triggerComplete={0.55}>
                  <p>
                    With a background in enterprise system integration, I have worked extensively on internal applications,
                    APIs, and data-driven workflows, ensuring code quality, maintainability, and system reliability. I am
                    comfortable owning features end-to-end, from requirement analysis and system design to implementation
                    and ongoing maintenance.
                  </p>
                </ScrollReveal>

                <ScrollReveal yOffset={60} triggerTrigger={0.75} triggerComplete={0.5}>
                  <p>
                    Based in Indonesia, I am open to collaborating with international teams, particularly within structured,
                    engineering-driven environments where clarity, reliability, and long-term maintainability matter.
                  </p>
                </ScrollReveal>
              </div>

              {/* 4. Stats - Muncul terakhir */}
              <ScrollReveal yOffset={100} triggerTrigger={0.8} triggerComplete={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-10 border-t border-gray-100 dark:border-gray-800">
                  {[
                    { value: '5+', label: 'Years Experience' },
                    { value: '20+', label: 'Projects Delivered' },
                    { value: '10+', label: 'Tech Stack Mastery' },
                  ].map((stat, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4">
                      <span className="block text-5xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</span>
                      <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 relative bg-slate-50 dark:bg-slate-950 overflow-hidden">
          {/* Modern Dot Pattern with Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1.5px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none opacity-100 dark:opacity-40"></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <ScrollReveal yOffset={40} triggerTrigger={0.9} triggerComplete={0.6}>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h3 className="text-primary dark:text-blue-400 font-display font-bold text-lg mb-2">My Toolkit</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Technical Expertise</h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'layers',
                  color: 'blue',
                  title: 'Fullstack & System Engineering',
                  skills: [
                    'Next.js (Frontend Applications)',
                    'JavaScript / Node.js',
                    'Go (Golang)',
                    'PHP',
                    'REST API Development',
                    'API & System Integration',
                    'End-to-End Application Delivery',
                  ],
                },
                {
                  icon: 'psychology',
                  color: 'purple',
                  title: 'AI Engineering',
                  skills: [
                    'AI Agents Development',
                    'Retrieval-Augmented Generation (RAG)',
                    'Agent Orchestration',
                    'AI API Integration',
                    'Conversational AI',
                    'AI-Driven Automation',
                  ],
                },
                {
                  icon: 'database',
                  color: 'teal',
                  title: 'Data & Architecture',
                  skills: [
                    'SQL Server',
                    'PostgreSQL',
                    'MySQL',
                    'Database Design',
                    'Kafka',
                    'Data Processing Pipelines',
                    'Enterprise App Integration',
                  ],
                },
              ].map((category, index) => (
                <ScrollReveal key={index} yOffset={60 + (index * 20)} triggerTrigger={0.9} triggerComplete={0.5}>
                  <div className="group h-full bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden hover:-translate-y-1">
                    {/* Decorative Background Icon */}
                    <div className="absolute -top-6 -right-6 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12">
                      <span className="material-symbols-outlined text-[180px] text-gray-900 dark:text-white pointer-events-none select-none">
                        {category.icon}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-5 mb-6 border-b border-gray-100 dark:border-slate-700 pb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-${category.color}-50 dark:bg-${category.color}-900/20 flex items-center justify-center text-${category.color}-600 group-hover:scale-110 transition-transform duration-300 shadow-sm shrink-0`}
                        >
                          <span className="material-symbols-outlined text-[28px]">{category.icon}</span>
                        </div>

                        <h4 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {category.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-300
                              bg-gray-50 dark:bg-slate-900/50 text-gray-600 dark:text-gray-300 border-gray-100 dark:border-slate-700
                              group-hover:border-${category.color}-200 dark:group-hover:border-${category.color}-800/50 
                              group-hover:text-${category.color}-700 dark:group-hover:text-${category.color}-300
                              hover:!bg-${category.color}-50 dark:hover:!bg-${category.color}-900/30
                            `}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-800 to-transparent"></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <ScrollReveal yOffset={40} triggerTrigger={0.9} triggerComplete={0.7}>
                <div className="text-left">
                  <h3 className="text-primary dark:text-blue-400 font-display font-bold text-lg mb-2">Portfolio</h3>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">What I've Built</h2>
                </div>
              </ScrollReveal>
              <ScrollReveal yOffset={40} triggerTrigger={0.9} triggerComplete={0.7}>
                <div className="hidden md:flex items-center gap-1 font-medium text-gray-400 dark:text-gray-500 italic">
                  And many more...
                </div>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: '/image/financingapp.JPG',
                  tags: [
                    { label: 'Banking', color: 'blue' },
                    { label: 'Enterprise', color: 'gray' },
                  ],
                  title: 'Financing Application System',
                  description:
                    'Internal financing application used at BCA Syariah to support end-to-end financing workflows, including application processing, validation, and core banking integration.',
                },
                {
                  image: '/image/estrapp.JPG',
                  tags: [
                    { label: 'FinTech', color: 'orange' },
                    { label: 'Compliance', color: 'gray' },
                  ],
                  title: 'Suspicious Transaction Monitoring',
                  description:
                    'An internal monitoring system to identify and review potentially suspicious transactions, integrated with BI-FAST transaction flows to support compliance oversight.',
                },
                {
                  image: '/image/hrapp.JPG',
                  tags: [
                    { label: 'AI Systems', color: 'purple' },
                    { label: 'HR', color: 'gray' },
                  ],
                  title: 'Smart Recruitment Platform',
                  description:
                    'An internal HR application integrated with agentic AI to assist recruitment workflows, including AI-based CV screening, scoring, and an AI interviewer.',
                },
              ].map((project, index) => (
                <ScrollReveal key={index} yOffset={80 + (index * 20)} triggerTrigger={0.85} triggerComplete={0.5}>
                  <div className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover-lift h-full flex flex-col">
                    <div className="h-48 relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-1 text-xs font-semibold bg-${tag.color}-50 dark:bg-${tag.color}-900/20 text-${tag.color}-600 dark:text-${tag.color}-300 rounded border border-${tag.color}-100 dark:border-${tag.color}-800/30`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-4 leading-relaxed flex-1">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative bg-background-light dark:bg-background-dark overflow-hidden">
          {/* Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 dark:via-blue-900/10 to-transparent pointer-events-none"></div>
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-100/20 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <ScrollReveal yOffset={40} triggerTrigger={0.9} triggerComplete={0.7}>
              <div className="mb-12">
                <h3 className="text-primary dark:text-blue-400 font-display font-bold text-lg mb-2">Career</h3>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Professional Experience
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              {[
                {
                  icon: 'smart_toy',
                  title: 'AI Engineer / Fullstack Developer',
                  period: '2025 - Present',
                  company: 'PT Bank BCA Syariah',
                  description:
                    'Focused on integrating AI capabilities into existing enterprise systems, including RAG-based workflows and AI API integration, to support automation and internal decision-making.',
                  isActive: true,
                },
                {
                  icon: 'terminal',
                  title: 'Senior Fullstack Developer',
                  period: '2021 - 2024',
                  company: 'PT Bank BCA Syariah',
                  description:
                    'Delivered and maintained internal enterprise web applications, designing backend services and REST APIs while ensuring system reliability and maintainability.',
                  isActive: false,
                },
                {
                  icon: 'code',
                  title: 'Junior Fullstack Developer',
                  period: '2018 - 2020',
                  company: 'PT Bank BCA Syariah',
                  description: 'Supported development and maintenance of internal applications, contributing to backend and frontend tasks across the development lifecycle.',
                  isActive: false,
                },
              ].map((exp, index) => (
                <ScrollReveal
                  key={index}
                  yOffset={60 + (index * 20)}
                  triggerTrigger={0.85}
                  triggerComplete={0.5}
                  className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${exp.isActive ? 'is-active' : ''
                    }`}
                >
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-white ${exp.isActive
                      ? 'bg-primary text-white'
                      : 'bg-slate-300 dark:bg-slate-800 text-slate-500'
                      } shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}
                  >
                    <span className="material-symbols-outlined text-[20px]">{exp.icon}</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover-lift">
                    <div className="flex flex-col sm:flex-row justify-between mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg">{exp.title}</h3>
                      <span
                        className={`text-sm font-medium ${exp.isActive ? 'text-primary dark:text-blue-400' : 'text-gray-500'
                          }`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-gray-500 mb-4">{exp.company}</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 pb-32 bg-primary dark:bg-blue-900/20 text-white relative overflow-hidden scroll-mt-32">
          <div className="absolute inset-0 bg-primary dark:bg-slate-900 opacity-90 z-0"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

          <ScrollReveal yOffset={60} triggerTrigger={0.9} triggerComplete={0.5}>
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                Let’s work together
              </h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                I’m open to opportunities involving AI-enabled systems, fullstack development, and enterprise applications.
                If you’re looking for someone who can deliver reliable systems and integrate AI into real-world workflows,
                feel free to get in touch.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleEmailClick}
                  className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-50 transition-all hover:scale-105 w-full sm:w-auto cursor-pointer"
                >
                  Say Hello
                </button>
                <Link
                  href="https://www.linkedin.com/in/suryana-dhuchri-aa8458274/"
                  className="px-8 py-4 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto"
                >
                  Connect on LinkedIn
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="bg-background-light dark:bg-slate-950 py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © 2026 Suryana Dhuchri. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              {/* GitHub */}
              <Link
                href="https://github.com/sdhuchri"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/suryana-dhuchri-aa8458274/"
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </Link>

              {/* WhatsApp */}
              <Link
                href="https://wa.me/6285959072207"
                className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 transition-colors flex items-center gap-1"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.5 20.15 9.09 19.73 7.85 18.99L7.56 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.97 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.61 14.9C16.36 14.78 15.14 14.18 14.91 14.1C14.68 14.01 14.51 13.97 14.34 14.22C14.17 14.47 13.69 15.03 13.54 15.2C13.39 15.37 13.24 15.39 12.99 15.27C12.74 15.14 11.94 14.88 10.99 14.04C10.25 13.38 9.75 12.57 9.5 12.14C9.25 11.71 9.47 11.48 9.6 11.36C9.71 11.25 9.85 11.08 9.97 10.94C10.09 10.8 10.13 10.7 10.21 10.53C10.29 10.36 10.25 10.22 10.19 10.1C10.13 9.97 9.65 8.79 9.45 8.31C9.26 7.84 9.06 7.9 8.9 7.9L8.46 7.9C8.29 7.9 8.01 7.96 7.78 8.21C7.55 8.46 6.9 9.07 6.9 10.31C6.9 11.55 7.8 12.75 7.93 12.92C8.06 13.09 9.71 15.63 12.23 16.72C13.98 17.48 14.65 17.4 15.39 17.29C16.05 17.19 17.2 16.58 17.44 15.91C17.68 15.24 17.68 14.66 17.61 14.54C17.54 14.42 17.37 14.36 17.12 14.24H16.61V14.9Z" clipRule="evenodd" /></svg>
              </Link>

              {/* Email */}
              <button
                onClick={handleEmailClick}
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy Email"
              >
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </button>
            </div>
          </div>
        </footer>
      </main>

      {/* Copy Toast Notification */}
      <div
        className={`fixed bottom-24 right-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg shadow-xl transform transition-all duration-300 z-50 flex items-center gap-3 ${showCopyToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        <span className="material-symbols-outlined text-green-400 dark:text-green-600">check_circle</span>
        <div className="flex flex-col">
          <span className="font-bold text-sm">Email Copied!</span>
          <span className="text-xs opacity-80">suryana.dhuchri@gmail.com</span>
        </div>
      </div>
    </>
  );
}
