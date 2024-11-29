import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BodyRecordChart = () => {
  const data = {
    labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
    datasets: [
      {
        label: 'Yellow Line',
        data: [85, 83, 78, 79, 76, 74, 72, 70, 69, 68, 67, 66],
        borderColor: '#F8D33F',
        backgroundColor: '#F8D33F',
        pointBorderColor: '#F8D33F',
        pointBackgroundColor: '#F8D33F',
        pointRadius: 5,
        tension: 0.4,
      },
      {
        label: 'Blue Line',
        data: [85, 84, 80, 77, 75, 74, 73, 72, 71, 70, 68, 66],
        borderColor: '#4DD8CC',
        backgroundColor: '#4DD8CC',
        pointBorderColor: '#4DD8CC',
        pointBackgroundColor: '#4DD8CC',
        pointRadius: 5,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 16 / 5, // Set the aspect ratio
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#444444', // Vertical grid line color
        },
        ticks: {
          color: '#FFFFFF',
        },
      },
      y: {
        grid: {
          display: false, // Remove horizontal grid lines
        },
        ticks: {
          display: false, // Hide Y-axis labels
        },
      },
    },
  };

  return (
    <div className="bg-darkslategray-100 p-6 shadow-md">
      <div className="flex items-center mb-4">
        <h1 className="text-white text-lg font-light font-inter mr-2">BODY<br/> RECORD</h1>
        <h2 className="text-white text-xl font-medium font-inter">2021.05.21</h2>
      </div>
      <div className="relative" style={{ width: '100%', height: 'auto' }}>
        <Line data={data} options={options} />
      </div>
      <div className="flex justify-start mt-4 space-x-4">
        <button className="text-white bg-yellow-500 py-1 px-4 rounded font-hiragino-kaku-gothic-pro">日</button>
        <button className="text-white bg-yellow-500 py-1 px-4 rounded font-hiragino-kaku-gothic-pro">週</button>
        <button className="text-white bg-yellow-500 py-1 px-4 rounded font-hiragino-kaku-gothic-pro">月</button>
        <button className="text-white bg-yellow-600 py-1 px-4 rounded font-hiragino-kaku-gothic-pro">年</button>
      </div>
    </div>
  );
};

export default BodyRecordChart;
