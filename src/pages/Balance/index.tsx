import moment from "moment"
import React, { useEffect, useState } from "react"
import { DoughnutChart } from "../../components/DoughnutChart"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { LineChart } from "../../components/LineChart"
import api from "../../service/api"
import { getID } from "../../service/auth"
import { Button, Card, CardBlack, Container, IFrame, Text } from '../../styleglobal'

interface IDarf {
    customerDarf: number
    filename: string
    urlFile: string
    dueDate: string
    value: number
}
interface IBalance {
    patrimony: number
    balance: number
    balanceFree: number
    releases: number
}
function Balance() {

    const [darf, setDarf] = useState<IDarf[]>([])
    const [days, setDays] = useState<number>(30)
    const [balance, setBalance] = useState<IBalance>({
        patrimony: 0.00,
        balance: 0.00,
        balanceFree: 0.00,
        releases: 0.00
    })
    useEffect(() => {
        try {
            api.get(`/darf/${getID()}`)
                .then(result => {
                    console.log(result.status)
                    setDarf(result.data)
                }).catch(function (error) {
                    console.log(error.response.data.message)
                })

        } catch (error) {
            console.log(error)
        }
        try {
            api.get(`/patrimony/${getID()}`)
                .then(result => {
                    console.log(result.status)
                    setBalance(result.data)
                }).catch(function (error) {
                    console.log(error.response.data.message)
                })

        } catch (error) {
            console.log(error)
        }
    }, [])

    const releasesColor = (e: any) => {
        return e === undefined ? "white" : e < 0 ? "red" : "green"
    }
    const adjustData = (e: string) => {
        const adjDate: Date = new Date(e)
        return moment(adjDate).format("DD/MM/YYYY")
    }

    return (
        <Container style={{ backgroundColor: '#ECECEC' }}>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-around', margin: '10px' }}>
                <CardBlack >
                    <Text style={{ fontSize: '16px' }}>Patrimônio Total</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px' }}>R$ {balance === undefined ? "0,00" : balance.patrimony}</Text>
                </CardBlack>
                <CardBlack>
                    <Text style={{ fontSize: '16px' }}>Saldo Bloqueado</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px' }}>R$ {balance === undefined ? "0,00" : balance.balance}</Text>
                </CardBlack>
                <CardBlack>
                    <Text style={{ fontSize: '16px' }}>Disponível para investir</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px' }}>R$ {balance === undefined ? "0,00" : balance.balanceFree}</Text>
                </CardBlack>
                <CardBlack>
                    <Text style={{ fontSize: '16px' }}>Lançamentos futuros</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px', color: `${releasesColor(balance?.releases)}` }}>R$ {balance === undefined ? "0,00" : balance.releases}</Text>
                </CardBlack>
            </div>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '35%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Patrimônio Total</Text>
                    <DoughnutChart releases={balance.releases} balance={balance.balance} balanceFree={balance.balanceFree} patrimony={balance.patrimony} />
                </div>
                <div style={{ width: '55%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Rentabilidade</Text>
                    <div>
                        <button onClick={()=>setDays(365)} style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>12 meses</button>
                        <button onClick={()=>setDays(180)} style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>6 meses</button>
                        <button onClick={()=>setDays(90)} style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>3 meses</button>
                        <button onClick={()=>setDays(30)} style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>30 dias</button>
                    </div>
                    <LineChart days={days} />
                </div>
            </div>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '53%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Calendário Econômico</Text>
                    <IFrame src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_previous&features=datepicker,timezone&countries=32,5&calType=day&timeZone=12&lang=12" >
                    </IFrame>
                </div>
                <div style={{ width: '47%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Suas Darf's</Text>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid #000' }}>
                        <Text style={{ color: '#000' }}>Vencimento</Text>
                        <Text style={{ color: '#000' }}>Valor</Text>
                        <Text style={{ color: '#000' }}>Baixar</Text>
                    </div>
                    {darf && darf.map((darfs, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom: '1px solid #000' }}>
                            <Text style={{ color: '#000' }}>{adjustData(darfs.dueDate)}</Text>
                            <Text style={{ color: '#000' }}>R$ {darfs.value}</Text>
                            <a href={darfs.urlFile} target='_blank' rel="noreferrer" >
                                <button style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>Download</button>
                            </a>
                        </div>))}
                </div>
            </div>
            <Footer />
        </Container >
    )
}

export default Balance