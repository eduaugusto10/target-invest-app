import React, { useState, ChangeEvent } from 'react';
import { Input, Container, Button, Card, Text, Image, Span } from '../../styleglobal';
import { ReactComponent as Logo } from '../../assets/svg.svg'
import api from '../../service/api';
import { isAuthenticated, setID, setToken, setName } from '../../service/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function Home() {
  const history = useNavigate()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  if (isAuthenticated() === true) history("/main")

  async function handleAuthenticated() {
    try {

      api.post('/login', { email, password }, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then(result => {
        setToken(result.data.token)
        setID(result.data.user.id)
        setName(result.data.user.name)
        history("/main");
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ToastContainer />
      <Logo width={200} height={200} />
      <Card>
        <Text>E-mail</Text>
        <Input
          placeholder='E-mail'
          type={'email'}
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Text>Senha</Text>
        <Input
          placeholder='Senha'
          type={'password'}
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Span>Esqueci minha senha</Span>
        <Button onClick={handleAuthenticated}>Acessar</Button>
      </Card>
    </Container>
  );
}

export default Home;
