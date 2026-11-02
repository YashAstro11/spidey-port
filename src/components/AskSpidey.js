import React, { useState, useRef, useEffect } from 'react';
import { X, Send, User } from 'lucide-react';
import { botKnowledge } from '../data/portfolioData';
import './AskSpidey.css';

const suggestedPrompts = [
  "Tell me about the SlotinSolutions internship",
  "Is LearnTok live?",
  "What is Jinete?",
  "Technical Skills",
  "How to download resume?",
  "Contact Info",
];

const AskSpidey = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [chatLog, setChatLog] = useState([
    {
      sender: 'spidey',
      text: "🕷️ Hey there! I'm Yash's rule-based portfolio assistant. Ask me anything about his projects (LearnTok, Jinete), internship at SlotinSolutions, tech skills, or how to get in touch!",
    },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chatLog, isOpen]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    // Add user message
    const newLog = [...chatLog, { sender: 'user', text: query }];
    setChatLog(newLog);
    setInputVal('');

    // Rule-based matching
    const lowerQ = query.toLowerCase();
    let reply = botKnowledge.defaultReply;

    // Check greetings
    const isGreeting = botKnowledge.greetings.some((g) => lowerQ === g || lowerQ.startsWith(g + ' '));
    if (isGreeting) {
      reply = "🕸️ Friendly Neighborhood greetings! What would you like to know about Yash's development experience or featured apps?";
    } else {
      for (const item of botKnowledge.responses) {
        if (item.keywords.some((kw) => lowerQ.includes(kw))) {
          reply = item.answer;
          break;
        }
      }
    }

    setTimeout(() => {
      setChatLog((prev) => [...prev, { sender: 'spidey', text: reply }]);
    }, 350);
  };

  return (
    <div className="ask-spidey-wrapper">
      {/* Floating Toggle Button */}
      <button
        type="button"
        className={`spidey-fab-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close Spidey Chat' : 'Open Spidey Chat'}
      >
        {isOpen ? <X size={22} /> : <span className="fab-content">🕷️ <span>Ask Spidey</span></span>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="spidey-chat-window">
          {/* Header */}
          <div className="chat-window-header">
            <div className="header-left">
              <div className="bot-avatar-badge">🕷️</div>
              <div className="bot-title-group">
                <h4 className="bot-name">Spidey Assistant</h4>
                <span className="bot-status">Portfolio Knowledge Base</span>
              </div>
            </div>
            <button
              type="button"
              className="chat-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Suggestions */}
          <div className="quick-prompts-bar">
            {suggestedPrompts.slice(0, 4).map((p, i) => (
              <button
                key={i}
                type="button"
                className="prompt-chip"
                onClick={() => handleSend(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages Log */}
          <div className="chat-messages-area">
            {chatLog.map((entry, idx) => (
              <div
                key={idx}
                className={`chat-bubble-row ${entry.sender === 'user' ? 'user-row' : 'spidey-row'}`}
              >
                {entry.sender === 'spidey' && (
                  <div className="sender-avatar spidey-avatar">🕷️</div>
                )}
                <div className="chat-bubble">
                  <p>{entry.text}</p>
                </div>
                {entry.sender === 'user' && (
                  <div className="sender-avatar user-avatar">
                    <User size={13} />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="chat-input-form"
          >
            <input
              type="text"
              placeholder="Ask about internship, skills, LearnTok..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className="chat-text-input"
            />
            <button
              type="submit"
              className="chat-send-btn"
              disabled={!inputVal.trim()}
              aria-label="Send"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AskSpidey;
