import moment from "moment"
import React, { useEffect, useState } from "react"
import { DoughnutChart } from "../../components/DoughnutChart"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { LineChart } from "../../components/LineChart"
import api from "../../service/api"
import { getID } from "../../service/auth"
import { Button, ButtonTime, Card, CardBlack, Container, Darf, DivBalance, DivBalance2, Donunts, IFrame, Investing, Rentab, Text } from '../../styleglobal'

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
            <DivBalance >
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
            </DivBalance>
            <DivBalance2 >
                <Donunts >
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Patrimônio Total</Text>
                    <DoughnutChart releases={balance.releases} balance={balance.balance} balanceFree={balance.balanceFree} patrimony={balance.patrimony} />
                </Donunts>
                <Rentab >
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Rentabilidade</Text>
                    <div>
                        <ButtonTime onClick={() => setDays(365)} >12 meses</ButtonTime>
                        <ButtonTime onClick={() => setDays(180)} >6 meses</ButtonTime>
                        <ButtonTime onClick={() => setDays(90)} >3 meses</ButtonTime>
                        <ButtonTime onClick={() => setDays(30)} >30 dias</ButtonTime>
                    </div>
                    <LineChart days={days} />
                </Rentab>
            </DivBalance2>
            <DivBalance2 >
                <Investing>
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Calendário Econômico</Text>
                    <IFrame src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_previous&features=datepicker,timezone&countries=32,5&calType=day&timeZone=12&lang=12" >
                    </IFrame>
                </Investing>
                <Darf >
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
                </Darf>
            </DivBalance2>
            <Footer />
        </Container >
    )
}

export default Balance