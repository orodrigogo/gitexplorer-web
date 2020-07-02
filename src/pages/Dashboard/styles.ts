import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;


export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;    

    background-color: #04D361;
    color: #FFF;
    transition: background-color 0.2s;

    border: 0;
    border-radius: 0 5px 5px 0;
    font-weight: bold;

    &:hover {
      background-color: ${shade(0.2, '#04D361')};
    }

  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background-color: #FFF;
    border-radius: 5px;
    width: 100%100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;

      strong {
        font-size: 16px;
        color: #343444;
      }

      p {
        font-size: 18px;
        color: #a8a8b3; 
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }

 
  }
`;