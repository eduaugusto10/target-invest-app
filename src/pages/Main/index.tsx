import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { LineChart } from "../../components/LineChart";
import api from "../../service/api";
import { Card, Container, Text } from "../../styleglobal";


function Main() {



    return (
        <Container>
            <Header />
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center', alignContent:'center', alignItems:'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignContent: 'center', alignItems: 'center' }}>
                    <span style={{ color: 'white', fontSize: '1.6rem', margin: '20px', borderBottom: '1px solid #efb810' }}>Este é o resultado mensal dos seus investimentos conosco</span>
                    <Card style={{ width: '650px', alignContent: 'center', alignItems: 'center' }}>
                        <LineChart />
                    </Card>
                </div>
                <Text style={{ fontSize: '1.6rem', margin: '20px', borderBottom: '1px solid #efb810' }}>Notícias do Mercado Financeiro</Text>
                <div style={{width:'100%',display: 'flex', flexDirection: 'row', backgroundColor: '#FFF',  alignContent:'center', alignItems:'center', textAlign: 'center', justifyContent:'space-between', marginBottom:'40px' }}>
                    <div style={{ margin:'10px' }}>
                        <iframe src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=32,5&calType=day&timeZone=12&lang=12" width={650} height={467} frameBorder="0" allowTransparency={true} marginWidth={0} marginHeight={0}>
                        </iframe>
                    </div>
                    <div style={{ margin:'10px' }}>
                        <iframe src="https://ssltsw.investing.com?lang=12&forex=2103,1617,1513,1,3,9,10&commodities=8833,8849,8830,8836,8832,8918,8911&indices=23660,166,172,27,179,170,174&stocks=358,474,446,345,346,347,348&tabs=1,3,4,2" width="317" height="467">
                        </iframe>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Main