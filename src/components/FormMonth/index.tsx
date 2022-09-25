import React, { useState, useEffect } from 'react'
import { Button, Input, Text } from '../../styleglobal'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../../service/api'
import 'react-toastify/dist/ReactToastify.css';

function FormMonth() {
    const [name, setName] = useState<string>()

    const history = useNavigate()
    const location = useLocation()


    useEffect(() => {
        try {
            api.get(`/user/${location.state.id}`).then((result) => {
                setName(result.data.name);

            });
        } catch (error) {
            console.log(error);
        }
    }, []);

    function SaveData() {

        try {
            api
                .post("/user", "", {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((result) => {
                    history("/admin");
                });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text>Nome</Text>
            <Input type="text" value={name} />
            <Text>Mês</Text>
            <Input type="date" />
            <Text>Valor</Text>
            <Input type="number" />
            <div>
                <Button onClick={() => history("/admin")}>Voltar</Button>
                <Button onClick={SaveData}>Salvar</Button>
            </div>
        </div>
    )
}

export default FormMonth