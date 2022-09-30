import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg.svg'
import { ReactComponent as Logout } from '../../assets/log-out.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Text } from '../../styleglobal'
import { logoutToken, deleteID, getName } from '../../service/auth'
import { useNavigate } from 'react-router-dom'
function Header() {
    const history = useNavigate()
    function handleLogout() {
        logoutToken()
        deleteID()
        history('/')
    }
    return (
        <div style={{ width: '100%', textAlign: 'left', borderBottom: '1px solid #efb810', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Logo style={{ paddingLeft: '10px', paddingTop: '10px' }} width={70} height={70} />
            <div style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
                <ToastContainer />
                <Text>Olá, {getName()}</Text>
                <Logout onClick={handleLogout} width={20} height={20} style={{ paddingLeft: '10px', paddingTop: '10px', cursor: 'pointer' }} />
                <Text onClick={handleLogout} style={{ cursor: 'pointer' }}>Sair</Text>
            </div>
        </div>
    )
}

export default Header