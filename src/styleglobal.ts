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
    margin: 30px;
    text-align: left;
    width: 60%;    
    align-content: center;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        height: 100%;
    }  
`
export const Text = styled.span`
    font-size: 1rem;
    color: #FFF;
    padding: 7px;
    
`;

export const MiniDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.li`
  display: grid;
  grid-template-columns: 20% 20% 10% 10% 10% 10% 10% 10%;
  grid-gap: 10px;
  border-bottom: 1px solid #ffdc70;
  text-align: center;
`;

export const Input = styled.input`
    width: 300px;
    height: 30px;
    border-radius: 7px;
    padding-left: 10px;
    margin: 10px;
    border: 2px solid #efb810;
    color: black;
    font-size: 1.2rem;
    @media only screen and (max-width: 1000px) {
        width: 200px;
        font-size: 1rem;
        height: 20px;
    }
`;
export const Select = styled.select`
    width: 300px;
    height: 30px;
    border-radius: 7px;
    padding-left: 10px;
    margin: 10px;
    border: 2px solid #efb810;
    color: black;
    font-size: 1.2rem;
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
    width: 150px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 10px;
    background-color: #efb810;
    color: #FFF;
    border-radius: 7px;
`;

export const IFrame = styled.iframe`
width:650px;
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
    width: 100px;
    height: 40px;
    font-size: 1rem;
    cursor: pointer;
    margin: 20px;
    background-color: #efb810;
    color: #FFF;
    border-radius: 7px;
`;

export const Span = styled.span`
    font-size: 1rem;
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

