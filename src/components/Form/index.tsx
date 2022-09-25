import React, { ChangeEvent, useState } from 'react'
import { Button, Input, Text } from '../../styleglobal'
import { useNavigate } from 'react-router-dom'
import api from '../../service/api'
import { errorMessage, successMessageCreate } from '../ToastConfig';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [account, setAccount] = useState<string>('')
    const history = useNavigate()


    function SaveData() {
        const data = { name, email, account, password }
        try {
            api
                .post("/user", data, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((result) => {
                    successMessageCreate()
                    history("/admin");
                });
        } catch (error) {
            errorMessage()
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ToastContainer />
            <Text>Nome</Text>
            <Input type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} />
            <Text>E-mail</Text>
            <Input type="email" onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} value={email} />
            <Text>Número da Conta</Text>
            <Input type="number" onChange={(e: ChangeEvent<HTMLInputElement>) => setAccount(e.target.value)} value={account} />
            <Text>Criar Senha</Text>
            <Input type="password" onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} value={password} />
            <div>
                <Button onClick={() => history("/admin")}>Voltar</Button>
                <Button onClick={SaveData}>Salvar</Button>
            </div>
        </div>
    )
}

export default Form