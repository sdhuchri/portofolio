'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
    role: 'user' | 'bot';
    text: string;
}

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: 'Hi! I am Suryana\'s AI Assistant. Ask me anything about his experience, skills, or resume.' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setInputValue('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I'm having trouble connecting right now." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4 font-sans">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[320px] sm:w-[350px] md:w-[400px] h-[450px] sm:h-[500px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right mb-2">
                    {/* Header */}
                    <div className="p-4 bg-primary text-white flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">AI Assistant</h3>
                                <p className="text-xs text-blue-100 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950/50 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-slate-700">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-primary text-white rounded-tr-none'
                                        : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-slate-700 rounded-tl-none shadow-sm'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-slate-700 shadow-sm flex gap-1.5 items-center">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about Suryana..."
                                className="w-full pl-4 pr-12 py-3 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white border-none focus:ring-2 focus:ring-primary/50 text-sm placeholder:text-gray-400 transition-shadow"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoading}
                                className="absolute right-2 p-2 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-hover transition-colors flex items-center justify-center shadow-lg shadow-blue-500/20"
                            >
                                <span className="material-symbols-outlined text-[18px]">send</span>
                            </button>
                        </div>
                        <div className="text-center mt-2 text-[10px] text-gray-400 dark:text-gray-500">
                            AI can make mistakes. Check important info.
                        </div>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={toggleChat}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 font-bold text-xs sm:text-sm tracking-wide ${isOpen
                    ? 'bg-gray-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white animate-pulse-glow shadow-blue-500/40'
                    }`}
            >
                {isOpen ? (
                    <>
                        <span className="hidden sm:inline">Close</span>
                        <span className="material-symbols-outlined sm:ml-2 text-[16px] sm:text-[18px]">close</span>
                    </>
                ) : (
                    <>
                        <span className="material-symbols-outlined mr-1 sm:mr-2 text-[18px] sm:text-[20px] animate-bounce">auto_awesome</span>
                        <span className="hidden sm:inline">Chat with my AI</span>
                        <span className="sm:hidden">AI Chat</span>
                    </>
                )}
            </button>
        </div>
    );
}
