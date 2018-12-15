import styled from 'styled-components';

export const Wrapper = styled.div`
        width: 100vw;
        height: 100vh;
        margin: 0;
        padding: 0;
        text-align: center;
    `;

export const Title = styled.h1`
        font-size: 50px;
        text-align: center;
        color: palevioletred;
        font-variant: small-caps;
        margin: 0;
        padding: 30px 0 70px 0;
        @media (max-width: 700px){
            font-size: 40px;
            padding: 20px;
        }  
    `;

export const Input = styled.input`
        width: 50%;
        margin: 10px;
        padding: 10px;
        font-size: 30px;
        outline: none;
        color: palevioletred;
        border: 2px solid palevioletred;
        border-radius: 10px;
        @media (max-width: 1100px){
            width: 70%;
        }
        @media (max-width: 700px){
            width: 90%;
        }
    `;

export const GiphyListWrapper = styled.div`
        margin: 50px auto;
        @media (max-width: 770px){
            width: 90%;
        }
`;

export const GiphyWrapper = styled.div`
        margin: 30px auto;
        @media (max-width: 770px){
            width: 90%;
        }
`;

export const Giphy = styled.img`
        margin: 0 auto;
        border: 2px solid palevioletred;
        border-radius: 10px;  
        @media (max-width: 770px){
            width: 50%;
        }
        @media (max-width: 500px){
            width: 70%;
        } 
`;