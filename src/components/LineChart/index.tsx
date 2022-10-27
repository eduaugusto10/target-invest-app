import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import api from "../../service/api";
import { getID, getToken, logoutToken } from "../../service/auth";

import { useNavigate } from 'react-router-dom';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface IOperation {
    month: string
    balance: number
    period: string
    year: string
    day: string
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Lucro versus Prejuízo Mensal',
        },
    },
    scales: {
        x: {
            grid: {
                drawBorder: true,
                color: '#c3c3c3'

            }
        },
        y: {
            grid: {
                drawBorder: true,
                color: '#c3c3c3'

            }
        }
    }
};
export function LineChart(days: any) {
    const history = useNavigate()
    const [dataValue, setDataValue] = useState<IOperation[]>([])
    const monthName = ['', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

    useEffect(() => {
        api.get(`/balance/${getID()}/${days.days}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }).then(result => {
            console.log(days)
            setDataValue(result.data)
        }).catch(error => {
            logoutToken()
            history("/");
        })
    }, [days])

    return (
        <div style={{ width: '100%', height: '85%', backgroundColor: '#fff' }}>
            <Line options={options} data={
                {
                    labels: dataValue.map((valueData) => days.days > 30 ? monthName[parseInt(valueData.month)] : parseInt(valueData.day)),
                    datasets: [
                        {
                            label: 'Saldo Mensal',
                            data: dataValue.map((valueData) => valueData.balance),
                            borderColor: '#efb810',
                            backgroundColor: '#efb810',
                            tension: 0.1
                        }],
                }
            } />
        </div>
    )
}
