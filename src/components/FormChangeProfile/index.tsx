import React, { ChangeEvent, useState, useEffect } from 'react'
import { Button, Input, Text } from '../../styleglobal'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../../service/api'
import { errorMessage, successMessageChange } from '../ToastConfig';

function Form() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [account, setAccount] = useState<string>('')
    const history = useNavigate()
    const location = useLocation()


    useEffect(() => {
        try {
            api.get(`/user/${location.state.id}`).then((result) => {
                setName(result.data.name);
                setEmail(result.data.email);
                setAccount(result.data.account)
            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    function SaveData() {
        const data = { name, email, account }
        try {
            api
                .put(`/user/${location.state.id}`, data, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((result) => {
                    successMessageChange()
                    history("/admin");
                });
        } catch (error) {
            errorMessage()
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>Nome</Text>
            <Input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} />
            <Text>E-mail</Text>
            <Input type="email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} />
            <Text>Número da Conta</Text>
            <Input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setAccount(e.target.value)} value={account} />
            <div>
                <Button onClick={() => history("/admin")}>Voltar</Button>
                <Button onClick={SaveData}>Salvar</Button>
            </div>
        </div>
    )
}

export default Form