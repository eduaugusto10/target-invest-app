import styled from 'styled-components'

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    background-color: black;
    `;

export const Image = styled.img`
    width: 200px;
    height: 200px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #efb810;
    padding: 30px;
    text-align: left;
    width: 330px;    
    align-content: center;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        height: 100%;
        width: 220px;
    }  
`

export const CardBlack = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #000;
    border: 2px solid #efb810;
    padding: 5px;
    border-radius:20px;
    text-align: left;
    width: 20%;
    height: 100px;    
    align-content: center;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        height: 100%;
        width: 80%;
    }  
`
export const DivBalance = styled.div`
display: flex;
flex-direction: row;
width: 80%;
justify-content: space-around;
margin: 10px;
@media only screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    align-items:center;
} 
`;
export const Rentab = styled.div`
width: 55%;
border-radius: 20px;
padding: 20px;
background-color: #D4D4D4;
margin: 15px;
@media only screen and (max-width: 1000px) {
    width: 100%;
} 
`;
export const Donunts = styled.div`
width: 35%;
border-radius: 20px;
padding: 20px;
background-color: #D4D4D4;
margin: 15px;
@media only screen and (max-width: 1000px) {
    width: 100%;
} 
`;

export const DivBalance2 = styled.div`
width: 80%;
display: flex;
flex-direction: row;
@media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items:center;
} 
`;
export const Darf = styled.div`
width: 47%;
border-radius: 20px;
padding: 20px;
background-color: #D4D4D4; 
margin: 15px;
@media only screen and (max-width: 1000px) {
    width: 100%;
    margin: 5px;
} 
`;
export const Investing = styled.div`
display: flex;
flex-direction: column;
width: 53%;
border-radius: 20px;
padding: 20px;
background-color: #D4D4D4;
margin: 15px;
@media only screen and (max-width: 1000px) {
    width: 100%;
    border-radius: 20px;
    padding: 0px;
    background-color: #D4D4D4;
    margin: 0px;
    } 
`;

export const ButtonTime = styled.button`
border: none;
borderRadius: 20px;
width: 90px;
height: 25px;
backgroundColor: #DEDCDC;
cursor: pointer;
`;
export const CardChard = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #efb810;
    padding: 30px;
    margin: 30px;
    text-align: left;
    width: 60%;    
    align-content: center;
    align-items: center;

`
export const Text = styled.span`
    font-size: 1rem;
    color: #FFF;
    padding: 7px;
    
`;

export const MiniDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1000px) {
    flex-direction: row;
}
`;

export const List = styled.li`
  display: grid;
  grid-template-columns: 20% 20% 10% 10% 10% 25% ;
  grid-gap: 10px;
  border-bottom: 1px solid #ffdc70;
  text-align: center;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
}
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 4px;
    padding-left: 10px;
    margin: 10px;
    border: 2px solid #efb810;
    color: black;
    font-size: 1.2rem;
    @media only screen and (max-width: 1000px) {
        font-size: 1rem;
    }
`;

export const InputLogin = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 4px;
    padding-left: 10px;
    margin: 10px;
    border: 2px solid #efb810;
    color: black;
    font-size: 1.2rem;
    @media only screen and (max-width: 1000px) {
        font-size: 1rem;
        width: 200px;
    }
`;

export const Select = styled.select`
    width: 315px;
    height: 30px;
    border-radius: 4px;
    padding-left: 10px;
    margin: 10px;
    border: 2px solid #efb810;
    color: black;
    font-size: 1.2rem;
    @media only screen and (max-width: 1000px) {     
        font-size: 1rem;
    }
`;
export const Title = styled.span`
    color: #FFF;
    font-size: 1.6em;
    margin: 20px;
    border-bottom: 1px solid #efb810;
    padding: 14px;

    @media only screen and (max-width: 1000px) {
        font-size: 0.75em;
    }    
`;

export const Button = styled.button`
    width: 147px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 10px;
    background-color: #efb810;
    color: #FFF;
    border-radius: 4px;
`;

export const IFrame = styled.iframe`
width:550px;
height:467px;
frameBorder:0;
allow-transparency:true;
margin-width:0;
margin-height:0;

@media only screen and (max-width: 1000px) {
    width:99%;
}  
`;

export const ButtonAction = styled.button`
    width: 50%;
    height: 40px;
    font-size: 1rem;
    cursor: pointer;
    margin: 20px;
    background-color: #efb810;
    color: #FFF;
    border-radius: 7px;
`;

export const Span = styled.span`
font-size: 0.75rem;
    color: #FFF;
`;

export const InvestingCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    margin-bottom: 40px;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

