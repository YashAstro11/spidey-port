import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './SpiderScan.css';

const SpiderScan = () => {
  const resumeUrl = "https://drive.google.com/file/d/1Crlz184kQh93Cao80wWzU-zM8yhOu8sE/view?usp=drive_link"; // Replace with your actual resume link

  return (
    <div className="spider-scan">
      <h2>🕸️ Spider Scan</h2>
      <p>Scan to view my resume!</p>
      <div className="qr-wrapper">
       <QRCodeSVG value={resumeUrl} size={160} fgColor="#e62429" bgColor="white" />
      </div>
    </div>
  );
};

export default SpiderScan;
