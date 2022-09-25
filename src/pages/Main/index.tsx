import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { LineChart } from "../../components/LineChart";
import api from "../../service/api";
import { getToken } from "../../service/auth";
import { Card, Container } from "../../styleglobal";


function Main() {



    return (
        <Container>
            <Header />
            <span style={{ color: 'white' }}>Olá, Eduardo</span>
            <span style={{ color: 'white' }}>Aqui é o resultado dos seus investimentos conosco</span>
            <Card>
                <LineChart/>
            </Card>
        </Container>
    )
}

export default Main