import React,{useState} from 'react';
import SearchIcon from '../../assets/pesquisa.svg';
import EmphasisIcon from '../../assets/destaque.svg';
import SaveIcon from '../../assets/salvo_azul.svg';
import ArrowRight from '../../assets/seta_direita_branco.svg';
import { Container, ContainerSearch, Input, ContainerInformations, Title, SubTitle, ContainerRepos, ButtonNextSceen, ButtonNextSceenText} from './styles';

export default function Home({navigation}) {
  const [newRepo, setNewRepo] = useState('');
  const [repoApi, setRepoApi] = useState([]);

  console.log(newRepo);

  return (
    <Container>
      <ContainerSearch>
        <Input placeholder="Procurar organizações..." maxLength={35} value={newRepo} onChangeText={(text) => setNewRepo(text)} />
        <SearchIcon  width={120} height={30} top={62} left={-70} />
      </ContainerSearch>

      <ContainerInformations>
        <EmphasisIcon width={120} height={30} />
        <Title>Organizações em destaque</Title>
        <SubTitle>Veja as Organizações em tendência no GitHub</SubTitle>
      </ContainerInformations>

      <ContainerRepos>
        
      </ContainerRepos>


      <ButtonNextSceen onPress={() => navigation.navigate('Repositorios')}>
        <ButtonNextSceenText>Ver salvos</ButtonNextSceenText>
        <ArrowRight width={25} height={30} />
      </ButtonNextSceen>
    </Container>
  );
}
