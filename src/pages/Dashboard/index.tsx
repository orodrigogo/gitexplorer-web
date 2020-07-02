import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositório no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img 
            src="https://avatars0.githubusercontent.com/u/49030804?s=460&u=3dbd06708f28e1132e215182f8fbd3031f5045f1&v=4" 
            alt="Rodrigo" 
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS and React Native forms!</p>
          </div>
          
          <FiChevronRight size={20}/>
        </a>
        
      </Repositories>
    </Container>
  )
}

export default Dashboard;