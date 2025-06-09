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
      'React ⚛️',
      'C++ 👾',
      'Web Dev 🕸️',
      'Problem Solving 🧠',
      'Creativity 🎨',
      'Teamwork 🤝',
    ],
    datasets: [
      {
        label: 'Spidey Skill Levels',
        data: [8, 7, 9, 8, 9, 7],
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
              'React – Building components like a boss',
              'C++ – Strong with memory and logic',
              'Web Dev – Expert in HTML, CSS, JS',
              'Problem Solving – Thinks like Peter, solves like Tony',
              'Creativity – UI/UX superhero',
              'Teamwork – Works great in squads',
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
