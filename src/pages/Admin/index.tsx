import React, { useEffect, useState } from "react";
import { Button, List, Text, MiniDiv, ButtonAction } from "../../styleglobal";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom'
import { getToken, logoutToken } from '../../service/auth'
import api from "../../service/api";
import { errorMessageDelete, successMessageDelete, errorSession } from "../../components/ToastConfig";

interface IProfile {
    id: number
    name: string
    email: string
    account: number
    ativated: string
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

    function AddValueMonth(id: number) {
        history("/changevalue", { state: { id } })
    }

    function DeleteUser(e: number) {
        try {
            api.delete(`/user/${e}`).then(result => {
                setUpdateList(true)
                successMessageDelete()
            })
        } catch (error) {
            console.log('Erro ao deletar')
            errorMessageDelete()
        }
    }
    useEffect(() => {
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
            <Button onClick={CreateUser}>Criar usuário</Button>
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
                        <Text>Ativo</Text>
                        <Text>{dataValues.ativated==="S"?"Sim":"Não"}</Text>
                    </MiniDiv>
                    <ButtonAction onClick={() => {
                        ChangeUser(dataValues.id);
                    }}>Perfil</ButtonAction>
                    {/*<ButtonAction onClick={() => {
                        AddValueMonth(dataValues.id);
                    }}>Saldo</ButtonAction>*/}
                    <ButtonAction onClick={() => {
                        DeleteUser(dataValues.id);
                    }} style={{ backgroundColor: 'red' }} >Deletar</ButtonAction>
                </List>
            ))}
        </div>
    )
}

export default Admin