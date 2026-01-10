import React from 'react';
import './Certifications.css';

const Certifications = () => {
    return (
        <div className="certifications-container">

            <div className="cert-section" data-aos="fade-up">
                <h2>🏆 Certifications</h2>
                <ul className="cert-list">
                    <li className="cert-item">
                        <strong>GeeksforGeeks</strong> — 160 Days of Problem Solving
                    </li>
                    <li className="cert-item">
                        <strong>HP LIFE</strong> — AI for Beginners (2025)
                    </li>
                </ul>
            </div>

            <div className="leadership-section" data-aos="fade-up">
                <h2>🤝 Leadership</h2>
                <ul className="cert-list">
                    <li className="cert-item leadership">
                        <strong>Team Leader – Smart India Hackathon</strong>
                        <span className="cert-desc">Led a team from idea to working prototype; shortlisted at prototype stage.</span>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default Certifications;
