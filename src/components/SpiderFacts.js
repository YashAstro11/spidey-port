import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import './SpiderFacts.css';

const facts = [
  "Peter Parker created his iconic web-shooters using chemical engineering and sheer ingenuity.",
  "Spider-Man's spider-sense detects incoming danger before it physically manifests—much like robust unit testing and exception handling!",
  "In Amazing Spider-Man #33, Peter lifted over 100 tons through pure willpower when trapped under heavy machinery.",
  "Miles Morales and Miguel O'Hara (Spider-Man 2099) showcase how different architectural takes on the same mantle can create greatness.",
  "The Spider-Verse contains hundreds of Spider-heroes across the multiverse, proving collaboration always beats working in isolation.",
];

const SpiderFacts = () => {
  const [currentFactIdx, setCurrentFactIdx] = useState(0);

  const nextFact = () => {
    setCurrentFactIdx((prev) => (prev + 1) % facts.length);
  };

  return (
    <div className="spider-facts-banner">
      <div className="section-container">
        <div className="spidey-card facts-inner-card">
          <div className="facts-left">
            <span className="facts-badge">🕷️ Spidey Lore Easter Egg</span>
            <p className="fact-quote">"{facts[currentFactIdx]}"</p>
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm next-fact-btn"
            onClick={nextFact}
            title="Next lore fact"
          >
            <RefreshCw size={14} />
            <span>Next Lore Fact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpiderFacts;
