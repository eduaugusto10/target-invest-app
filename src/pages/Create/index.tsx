import React from 'react'
import { Container } from '../../styleglobal'
import Form from '../../components/Form'
import Header from '../../components/Header'
import { ToastContainer } from 'react-toastify';

function CreateUser() {
    return (
        <Container>
            <ToastContainer />
            <Header />
            <Form />
        </Container>
    )
}

export default CreateUser