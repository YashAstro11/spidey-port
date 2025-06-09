import React, { useState } from 'react';
import './SpiderFacts.css';

const facts = [
  "🕷️ Peter Parker was 15 when he became Spider-Man.",
  "🕸️ Spider-Man debuted in *Amazing Fantasy #15* in 1962.",
  "🕷️ The web-shooters were invented by Peter, not part of his powers.",
  "🕸️ He once lifted over 100 tons in a moment of pure will.",
  "🕷️ There’s a Spider-Verse with hundreds of Spideys — even Spider-Ham!"
];

const SpiderFacts = () => {
  const [visible, setVisible] = useState(false);
  const [shownFacts, setShownFacts] = useState([]);

  const toggleFacts = () => {
    if (!visible) {
      // Shuffle and pick 3 facts
      const shuffled = [...facts].sort(() => 0.5 - Math.random());
      setShownFacts(shuffled.slice(0, 3));
    }
    setVisible(!visible);
  };

  return (
    <div className="spider-facts">
      <button onClick={toggleFacts} className="facts-toggle">
        {visible ? "🕸️ Hide Spider Facts" : "🕷️ Reveal Spider Facts"}
      </button>

      {visible && (
        <ul>
          {shownFacts.map((fact, idx) => (
  <li key={idx} style={{ '--i': idx }}>{fact}</li>
))}

        </ul>
      )}
    </div>
  );
};

export default SpiderFacts;
