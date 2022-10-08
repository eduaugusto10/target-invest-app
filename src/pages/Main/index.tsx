import React from "react";
import Header from "../../components/Header";
import { LineChart } from "../../components/LineChart";
import { Container, InvestingCard, Title, IFrame, CardChard } from "../../styleglobal";


function Main() {



    return (
        <Container>
            <Header />
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', alignContent: 'center', alignItems: 'center' }}>
                <div  style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <Title >Este é o resultado mensal dos seus investimentos conosco</Title>
                    <CardChard style={{backgroundColor:'#FFF'}}>
                        <LineChart />
                    </CardChard>
                </div>
                <Title>Notícias do Mercado Financeiro</Title>
                <InvestingCard>
                    <div style={{ margin: '10px', height: '100%' }}>
                        <IFrame src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=32,5&calType=day&timeZone=12&lang=12" >
                        </IFrame>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <iframe src="https://ssltsw.investing.com?lang=12&forex=2103,1617,1513,1,3,9,10&commodities=8833,8849,8830,8836,8832,8918,8911&indices=23660,166,172,27,179,170,174&stocks=358,474,446,345,346,347,348&tabs=1,3,4,2" width="317" height="467">
                        </iframe>
                    </div>
                </InvestingCard>
            </div>
        </Container>
    )
}

export default Main