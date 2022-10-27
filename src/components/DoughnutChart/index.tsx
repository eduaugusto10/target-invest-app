import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
interface IBalance {
  patrimony?: number
  balance: number
  balanceFree: number
  releases: number
}

export function DoughnutChart({ releases, balance,patrimony,balanceFree }: IBalance) {

  const data = {
    labels: ['Patrimônio', 'Lançamentos'],
    datasets: [
      {
        label: '# of Votes',
        data: [patrimony, releases],
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
  return <Doughnut data={data} />;
}
