import React from 'react';
import SearchLogo from '../../assets/pesquisa.svg';
import EmphasisLogo from '../../assets/destaque.svg';
import SaveIcon from '../../assets/salvo_azul.svg';
import ArrowRight from '../../assets/seta_direita_branco.svg';
import { Container, ContainerSearch, Input, ContainerInformations, Title, SubTitle, ContainerRepos} from './styles';
import { Text } from 'react-native';

export default function Home() {
  return (
    <Container>
      <ContainerSearch>
        <Input placeholder="Procurar organizações" maxLength={35}/>
        <SearchLogo  width={120} height={30} top={62} left={-70} />
      </ContainerSearch>

      <ContainerInformations>
        <EmphasisLogo width={120} height={30} />
        <Title>Organizações em destaque</Title>
        <SubTitle>Veja as Organizações em tendência no GitHub</SubTitle>
      </ContainerInformations>

      <ContainerRepos>
        
      </ContainerRepos>
    </Container>
  );
}
