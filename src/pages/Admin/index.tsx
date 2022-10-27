import React, { useEffect, useState } from "react";
import { Button, List, Text, MiniDiv, ButtonAction } from "../../styleglobal";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom'
import { getAdminKey, getToken, logoutToken } from '../../service/auth'
import api from "../../service/api";
import { errorMessageDelete, successMessageDelete, errorSession } from "../../components/ToastConfig";

interface IProfile {
    id: number
    name: string
    email: string
    account: number
    ativated: string
    balance: number
    balanceToday: number
}

function Admin() {
    const history = useNavigate()
    const [dataValue, setDataValue] = useState<IProfile[]>([])
    const [updateList, setUpdateList] = useState<boolean>(false)
    
    function CreateUser() {
        history("/create");
    }

    function ChangeUser(id: number) {
        history("/change", { state: { id } });
    }
    function DarfUser(id: number) {
        history("/darf", { state: { id } });
    }


    function handleBalanceToday() {
        let sumBalance = 0;
        for (let i = 0; i < dataValue.length; i++) {
            sumBalance += dataValue[i].balanceToday === undefined ? 0 : dataValue[i].balanceToday
        }
        return sumBalance
    }

    function DeleteUser(e: number) {
        try {
            api.delete(`/user/${e}`,{
                headers: {
                    'Authorization': `Bearer ${getToken()}`
                }
            }).then(result => {
                setUpdateList(true)
                successMessageDelete()
            })
        } catch (error) {
            console.log('Erro ao deletar')
            errorMessageDelete()
        }
    }
    useEffect(() => {
        if (getAdminKey() !== "Eu sou administrador") {
            history("/");
        }
        api.get('/user', {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }).then(result => {
            setDataValue(result.data)
            setUpdateList(false)
        }).catch(error => {
            errorSession()
            logoutToken()
            history("/");
        })
    }, [updateList])

    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button onClick={CreateUser}>Criar usuário</Button>
                <Text>Seu lucro de hoje até o momento é de R${handleBalanceToday()}</Text>
            </div>
            {dataValue && dataValue.map((dataValues, index) => (
                <List key={index}>
                    <MiniDiv>
                        <Text>Nome</Text>
                        <Text>{dataValues.name}</Text>
                    </MiniDiv>
                    <MiniDiv>
                        <Text>E-mail</Text>
                        <Text>{dataValues.email}</Text>
                    </MiniDiv>
                    <MiniDiv>
                        <Text>Nº da Conta</Text>
                        <Text>{dataValues.account}</Text>
                    </MiniDiv>
                    <MiniDiv>
                        <Text>Ganho Mensal</Text>
                        <Text>{`R$${dataValues.balanceToday === undefined ? 0 : dataValues.balance}`}</Text>
                    </MiniDiv>
                    <MiniDiv>
                        <Text>Ganho de Hoje</Text>
                        <Text>{`R$${dataValues.balanceToday === undefined ? 0 : dataValues.balanceToday}`}</Text>
                    </MiniDiv>
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row' }}>
                        <ButtonAction onClick={() => {
                            ChangeUser(dataValues.id);
                        }}>Perfil</ButtonAction>
                        {/*<ButtonAction onClick={() => {
                        AddValueMonth(dataValues.id);
                    }}>Saldo</ButtonAction>*/}
                        <ButtonAction onClick={() => {
                            DarfUser(dataValues.id);
                        }} style={{ backgroundColor: 'blue' }} >Ajustes</ButtonAction>
                        <ButtonAction onClick={() => {
                            DeleteUser(dataValues.id);
                        }} style={{ backgroundColor: 'red' }} >Deletar</ButtonAction>
                    </div>
                </List>
            ))}
        </div>
    )
}

export default Admin