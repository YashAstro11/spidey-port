import React, { useState } from 'react';
import './AskSpidey.css';

const responses = {
  "tech stack": "🕸️ I use React.js, JavaScript, Firebase, and a bit of AI magic!",
  "women safety": "🛡️ It's a location-based analytics project focused on women's safety, using data visualization and alerts.",
  "contact": "📫 You can contact me through the form below or at yashastro11@gmail.com",
  "default": "🕷️ Sorry, my spider-sense didn’t catch that. Try asking about my tech stack, projects, or contact info."
};

const AskSpidey = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [question, setQuestion] = useState('');

  const handleAsk = () => {
    const lowerQ = question.toLowerCase();
    const reply = Object.keys(responses).find(key => lowerQ.includes(key)) || "default";
    setChat([...chat, { q: question, a: responses[reply] }]);
    setQuestion('');
  };

  return (
    <div className={`spidey-chat ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>🕷️ Ask Spidey</button>
      {isOpen && (
        <div className="chat-box">
          <div className="chat-log">
            {chat.map((entry, i) => (
              <div key={i} className="chat-entry">
                <p><strong>You:</strong> {entry.q}</p>
                <p><strong>Spidey:</strong> {entry.a}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={question}
            placeholder="Ask me anything..."
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          />
          <button onClick={handleAsk}>🕸️ Send</button>
        </div>
      )}
    </div>
  );
};

export default AskSpidey;
