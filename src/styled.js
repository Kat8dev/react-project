import styled from 'styled-components';

export const Div = styled.div`
    width: 100;
    margin: 10px 25px;
    height: 50px;
    background-color: transparent;
    color: black;
    border: solid 1px black;
    border-radius: 25px;
    text-align: center;
    background: ${props => props.active ? 'salmon' : 'transparent'}
`;

export const Btn = styled.button`
    width: 50%;
    padding: 20px;
    font-size: 20px;
    margin-top: 10px;
`;

export const WelcomeDiv = styled.div`
    height: 100vh;
    background-size: cover;
    background-image: url(./images/scene.webp);
    display: flex;
    flex-direction: column;
`

export const WelcomeBtn = styled.button`
    margin-top: 20%;
    width: 300px;
    align-self: center;
    padding: 35px;
    border-radius: 50%;
    font-size: 20px;
    background-color: #ffcab0;
`

export const WelcomeP = styled.p`
    padding: 50px;
    text-align: center;
    align-self: center;
    background-color: #ffcab0;
    border-radius: 50%;
`

