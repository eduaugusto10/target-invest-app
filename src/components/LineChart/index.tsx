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
}

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Lucro versus Prejuízo Mensal',
        },
    },

};
export function LineChart() {
    const history = useNavigate()
    const [dataValue, setDataValue] = useState<IOperation[]>([])
    const monthName = ['', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    useEffect(() => {
        api.get(`/balance/${getID()}`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }).then(result => {
            console.log(result)
            console.log(getID())
            setDataValue(result.data)
        }).catch(error => {
            console.log("sessão finalizada")
            logoutToken()
            history("/");
        })
    }, [])

    return (
        <div style={{ width: '100%' }}>
            <Line options={options} data={
                {
                    labels: dataValue.map((valueData) => monthName[parseInt(valueData.month)]),
                    datasets: [
                        {
                            label: 'Saldo Mensal',
                            data: dataValue.map((valueData) => valueData.balance),
                            borderColor: '#efb810',
                            backgroundColor: '#efb810'
                        }],
                }
            } />
        </div>
    )
}
