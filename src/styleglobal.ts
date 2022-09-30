import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    background-color: black;
    width: 100vw;
    `;
    
export const Image = styled.img `
    width: 200px;
    height: 200px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid #efb810;
    padding: 30px;
    text-align: left;
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
  grid-template-columns: 30% 30% 10% 10% 10%;
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