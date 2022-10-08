import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg.svg'
import { ReactComponent as Logout } from '../../assets/log-out.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Text } from '../../styleglobal'
import { logoutToken, deleteID, getName, getAdminKey } from '../../service/auth'
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
            <Logo onClick={()=> history('/main')} style={{ paddingLeft: '10px', paddingTop: '10px', cursor:'pointer' }} width={70} height={70} />
            <div style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
                <ToastContainer />
                {getAdminKey() === "Eu sou administrador" && <Button onClick={() => history('/admin')} style={{ padding: '0px', margin: '0px' }}>Administrador</Button>}
                <div onClick={handleLogout} style={{ borderRadius: '5px', border: '1px solid #c4c4c4', cursor: 'pointer', padding: '7px' }}>
                    <Logout width={20} height={20} style={{}}/>
                    <Text style={{ fontSize: '1em' }}>Sair</Text>
                </div>
            </div>
        </div>
    )
}

export default Header