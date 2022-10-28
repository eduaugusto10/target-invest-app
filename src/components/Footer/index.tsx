import 'react-toastify/dist/ReactToastify.css';
import { Text } from '../../styleglobal'

function Footer() {
    return (
        <div style={{ width: '100%', textAlign: 'left', backgroundColor: '#000', borderBottom: '1px solid #efb810', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                <Text style={{ fontSize: '1em' }}>Telefone: (xx)xxxxx-xxxx</Text>
                <Text style={{ fontSize: '1em' }}>E-mail: teste@teste.com.br</Text>

            </div>
        </div>
    )
}

export default Footer