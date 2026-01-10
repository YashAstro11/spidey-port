import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { useInView } from 'react-intersection-observer';
import './SkillsRadar.css'; // We'll add animation CSS

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillsRadar = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const data = {
    labels: [
      'React Native 📱',
      'Expo 🚀',
      'Redux 🔄',
      'Firebase 🔥',
      'TypeScript 📘',
      'C++ 💻',
    ],
    datasets: [
      {
        label: 'Spidey Skill Levels',
        data: [9, 9, 8, 8, 8, 7],
        backgroundColor: 'rgba(230, 36, 41, 0.3)',
        borderColor: '#e62429',
        pointBackgroundColor: '#0b5cab',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#0b5cab',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const skills = [
              'React Native – Building cross-platform apps',
              'Expo – Fast iteration and deployment',
              'Redux – Complex state management made easy',
              'Firebase – Auth, Firestore, and Realtime Database',
              'TypeScript – Type-safe and scalable code',
              'C++ – Solid foundation in DSA and logic',
            ];
            return skills[tooltipItem.dataIndex];
          },
        },
      },
      legend: {
        labels: { color: '#fff' },
      },
    },
    scales: {
      r: {
        angleLines: { display: true },
        suggestedMin: 0,
        suggestedMax: 10,
        grid: { color: 'rgba(255, 255, 255, 0.2)' },
        pointLabels: {
          color: '#fff',
          font: { size: 14 },
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`skills-container ${inView ? 'fade-in' : 'hidden'}`}
    >
      <h2 className="skills-title">🕷️ Spidey Skill Radar</h2>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillsRadar;
