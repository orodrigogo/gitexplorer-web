import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'

import { FiChevronRight } from 'react-icons/fi';
import { Container, Title, Form, Repositories, Error } from './styles';

import logoImg from '../../assets/logo.svg';

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storagedRepositories){
      return JSON.parse(storagedRepositories)
    }else{
      return [];
    }
  });

  async function handleAddRepository(event: FormEvent<HTMLFormElement> ): Promise<void> {
    // evitar reload da página.
    event.preventDefault();

    if(!newRepo){
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<IRepository>(`repos/${newRepo}`);
      const repository = response.data;
  
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
      
    } catch (err) {
      setInputError('Erro na busca por esse repositório');      
    }
  }


  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  },[repositories]);


  
  return (
    <Container>
      <img src={logoImg} alt="Github Explorer"/>
      <Title>Explore repositório no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input 
          placeholder="Digite o nome do repositório" 
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {
        inputError && <Error>{inputError}</Error>
      }

      <Repositories>
        {
          repositories.map(repository => (
            <Link key={repository.full_name} to={`repositories/${repository.full_name}`}>
              <img 
                src={repository.owner.avatar_url} 
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              
              <FiChevronRight size={20}/>
            </Link>
          ))
        }
        
      </Repositories>

   
    </Container>
  )
}

export default Dashboard;