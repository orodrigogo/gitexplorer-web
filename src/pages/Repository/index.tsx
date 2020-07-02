import React, { useEffect, useState } from 'react';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface IRepositoryParams {
  repository: string;
}

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IIssue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}




const Repository: React.FC = () => {
  const [repository, setRepository] = useState<IRepository | null>(null);
  const [issues, setIssues] = useState<IIssue[]>([]);

  const { params } = useRouteMatch<IRepositoryParams>();



  useEffect(() => {
    api.get(`repos/${params.repository}`)
    .then((response) => {
      setRepository(response.data)
    });

    api.get(`repos/${params.repository}/issues`)
    .then((response) => {
      setIssues(response.data)      
    });

  },[params.repository]) 
  

return (
  <Container>
    <Header>
      <img src={logoImg} alt="Github Explorer"/>
      
      <Link to="/">
        <FiChevronsLeft size={16} />
        Voltar
      </Link>
    </Header>

    {
      repository && (
        <RepositoryInfo>
          <header>
            <img 
              src={repository.owner.avatar_url} 
              alt={repository.owner.login} 
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )
    }

    <Issues>
     {
      issues.map(issue => (
        <a key={issue.id} href={issue.html_url}>
        <div>
          <strong>{issue.user.login}</strong>
          <p>{issue.title}</p>
        </div>
            
        <FiChevronRight size={20}/>
      </a>
      ))
     }
    </Issues>

  </Container>
)
}

export default Repository;