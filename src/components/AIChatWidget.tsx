'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
    role: 'user' | 'bot';
    text: string;
}

const SUGGESTIONS = ['What does he do?', 'Tell me about NegotiAI', 'Is he open to work?'];

const INTRO =
    "Hi! I'm Suryana's AI assistant. Ask me anything about his experience, projects, or skills — or how to get in touch.";

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([{ role: 'bot', text: INTRO }]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggest, setShowSuggest] = useState(true);
    const bodyRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const openChat = () => setIsOpen(true);
    const closeChat = () => setIsOpen(false);

    useEffect(() => {
        if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen) {
            const t = setTimeout(() => inputRef.current?.focus(), 300);
            return () => clearTimeout(t);
        }
    }, [isOpen]);

    const ask = async (question: string) => {
        const q = question.trim();
        if (!q || isLoading) return;

        setShowSuggest(false);
        setMessages((prev) => [...prev, { role: 'user', text: q }]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: q }),
            });
            const data = await response.json();
            setMessages((prev) => [
                ...prev,
                {
                    role: 'bot',
                    text:
                        data.reply ||
                        'Sorry, I had trouble with that. Try again, or reach Suryana at suryana.dhuchri@gmail.com.',
                },
            ]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'bot',
                    text: 'Something went wrong reaching the assistant. You can contact Suryana directly: suryana.dhuchri@gmail.com or WhatsApp +62 859 5907 2207.',
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        ask(inputValue);
    };

    return (
        <>
            {/* Floating button */}
            <button
                className="chat-fab"
                aria-label="Ask AI about Suryana"
                onClick={openChat}
                style={isOpen ? { opacity: 0, pointerEvents: 'none' } : undefined}
            >
                <span className="badge" />
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            </button>

            {/* Panel */}
            <aside className={`chat-panel${isOpen ? ' open' : ''}`} aria-label="AI assistant">
                <div className="chat-head">
                    <div className="av">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/image/57616257.jpg" alt="" />
                    </div>
                    <div className="who">
                        <div className="n">
                            <span className="live" /> Ask about Suryana
                        </div>
                        <div className="r">AI ASSISTANT · POWERED BY CLAUDE</div>
                    </div>
                    <button className="chat-close" aria-label="Close" onClick={closeChat}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" style={{ width: 18, height: 18 }}>
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="chat-body" ref={bodyRef}>
                    {messages.map((msg, idx) =>
                        msg.role === 'bot' ? (
                            <div className="msg bot" key={idx}>
                                <ReactMarkdown
                                    components={{
                                        ul: ({ children }) => <ul>{children}</ul>,
                                        ol: ({ children }) => <ul>{children}</ul>,
                                        p: ({ children }) => <p>{children}</p>,
                                        a: ({ href, children }) => (
                                            <a href={href} target="_blank" rel="noopener noreferrer">
                                                {children}
                                            </a>
                                        ),
                                    }}
                                >
                                    {msg.text}
                                </ReactMarkdown>
                            </div>
                        ) : (
                            <div className="msg user" key={idx}>
                                {msg.text}
                            </div>
                        )
                    )}
                    {isLoading && (
                        <div className="chat-typing">
                            <span />
                            <span />
                            <span />
                        </div>
                    )}
                </div>

                {showSuggest && (
                    <div className="chat-suggest">
                        {SUGGESTIONS.map((s) => (
                            <button key={s} onClick={() => ask(s)}>
                                {s}
                            </button>
                        ))}
                    </div>
                )}

                <form className="chat-input" onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Ask a question…"
                        aria-label="Your question"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="chat-send" aria-label="Send" type="submit" disabled={!inputValue.trim() || isLoading}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                    </button>
                </form>
            </aside>
        </>
    );
}
