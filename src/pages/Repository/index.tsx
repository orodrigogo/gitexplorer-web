import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

interface IRepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<IRepositoryParams>();

return <h1>{params.repository}</h1>
}

export default Repository;