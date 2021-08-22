import React from 'react';
import { Container, ContainerSearch, Input } from './styles';

export default function Home() {
  return (
    <Container>
      <ContainerSearch>
        <Input placeholder="Procurar repositorio" />
      </ContainerSearch>
    </Container>
  );
}
