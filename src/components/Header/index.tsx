import React from 'react'
import { ReactComponent as Logo } from '../../assets/svg.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
    return (
        <div style={{ width: '100%', textAlign: 'left', borderBottom: '1px solid #efb810' }}>
            <ToastContainer />
            <Logo style={{ paddingLeft: '10px', paddingTop: '10px' }} width={70} height={70} />
        </div>
    )
}

export default Header