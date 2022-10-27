import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Patrimônio', 'Lançamentos'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        '#000',
        '#efb810',
      ],
      borderColor: [
        '#000',
        '#F8FD04',
      ],

      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
