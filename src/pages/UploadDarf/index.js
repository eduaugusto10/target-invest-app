import { useState } from 'react';
import S3 from 'react-aws-s3';
import Header from '../../components/Header';
import { Container, Input, Text, Button } from '../../styleglobal'
import { useNavigate, useLocation } from 'react-router-dom'
import api from '../../service/api';

window.Buffer = window.Buffer || require("buffer").Buffer;

export function UploadDarf() {
    const history = useNavigate()
    const location = useLocation()
    const [selectedFile, setSelectedFile] = useState()
    const [urlFile, setUrlFile] = useState()
    const [valueDarf, setValueDarf] = useState()
    const [dueDate, setDueDate] = useState()

    const uploadFile = async event => {
        const file = event.target.files[0];
        const config = {
            bucketName: process.env.REACT_APP_BUCKET,
            dirName: process.env.REACT_APP_DIRNAME,
            region: process.env.REACT_APP_REGION,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
            s3Url: process.env.REACT_APP_S3URL
        };
        const ReactS3Client = new S3(config);

        console.log(event.target.files[0])
        ReactS3Client.uploadFile(file, file.name)
            .then(data => {
                setSelectedFile(file.name)
                setUrlFile(data.location)
            })
            .catch(err => console.error(err));
    };

    const handleSaveDarf = () => {
        try {
            api.post('/darfupload', {
                customerDarf: location.state.id,
                filename: selectedFile,
                dueDate: dueDate,
                value: valueDarf,
                urlFile: urlFile
            }).then(result => {
                console.log('arquivo salvo')
                history("/admin")
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Header />
            <Text>Selecione a darf para fazer upload</Text>
            <Input type="file" onChange={uploadFile} style={{ widt: '350px', color: 'white', fontSize: '16px', border: 'none' }} />
            <Text>Qual o valor</Text>
            <Input type='number' onChange={e => setValueDarf(e.target.value)} />
            <Text>Vencimento</Text>
            <Input type={'date'} onChange={e => setDueDate(e.target.value)} />
            <div>
                <Button onClick={() => history("/admin")}>Voltar</Button>
                <Button onClick={() => handleSaveDarf()}>Salvar</Button>
            </div>
        </Container>
    )
}