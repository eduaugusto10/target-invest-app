import { DoughnutChart } from "../../components/DoughnutChart"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { LineChart } from "../../components/LineChart"
import { Button, Card, CardBlack, Container, IFrame, Text } from '../../styleglobal'

function Balance() {
    return (
        <Container style={{ backgroundColor: '#ECECEC' }}>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'row', width: '80%', justifyContent: 'space-around', margin: '10px' }}>
                <CardBlack >
                    <Text style={{ fontSize: '16px' }}>Patrimonial Total</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px' }}>R$ 9.999,99</Text>
                </CardBlack>
                <CardBlack>
                    <Text style={{ fontSize: '16px' }}>Saldo Bloqueado</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px' }}>R$ 9.999,99</Text>
                </CardBlack>
                <CardBlack>
                    <Text style={{ fontSize: '16px' }}>Disponível para investir</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px' }}>R$ 9.999,99</Text>
                </CardBlack>
                <CardBlack>
                    <Text style={{ fontSize: '16px' }}>Lançamentos futuros</Text>
                    <div style={{ width: '89%', border: '1px solid #efb810 ' }}></div>
                    <Text style={{ fontSize: '26px' }}>R$ 9.999,99</Text>
                </CardBlack>
            </div>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '35%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight:'bold' }}>Patrimônio Total</Text>
                    <DoughnutChart />
                </div>
                <div style={{ width: '55%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight:'bold' }}>Lucro</Text>
                    <div>
                        <button style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>12 meses</button>
                        <button style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>6 meses</button>
                        <button style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>3 meses</button>
                        <button style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>30 dias</button>
                    </div>
                    <LineChart />
                </div>
            </div>
            <div style={{ width: '80%', display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '53%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight:'bold' }}>Calendário Econômico</Text>
                    <IFrame src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_previous&features=datepicker,timezone&countries=32,5&calType=day&timeZone=12&lang=12" >
                    </IFrame>
                </div>
                <div style={{ width: '47%', borderRadius: '20px', padding: '20px', backgroundColor: '#D4D4D4', margin: '15px' }}>
                    <Text style={{ color: '#000', fontWeight:'bold' }}>Suas Darf's</Text>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom:'1px solid #000' }}>
                        <Text style={{ color: '#000' }}>Novembro 2022</Text>
                        <Text style={{ color: '#000' }}>R$ 235,22</Text>
                        <button style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>Download</button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', borderBottom:'1px solid #000' }}>
                        <Text style={{ color: '#000' }}>Outubro 2022</Text>
                        <Text style={{ color: '#000' }}>R$ 235,22</Text>
                        <button style={{ border: 'none', borderRadius: '20px', width: '90px', height: '25px', backgroundColor: '#DEDCDC', cursor: 'pointer' }}>Download</button>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}

export default Balance()