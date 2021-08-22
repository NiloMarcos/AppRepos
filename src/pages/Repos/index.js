import React from "react";
import BackIcon from "../../assets/seta_esquerda.svg";
import SearchIcon from "../../assets/pesquisa.svg";
import { Container, ContainerSearch, BackButton, Input, ContainerSaveRepos } from "./styles";

export default function Repos({ navigation }) {
  return (
    <Container>
      <ContainerSearch>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <BackIcon width={120} height={30} left={40} top={67} />
        </BackButton>
        <Input placeholder="Suas organizações salvas" maxLength={35} />
        <SearchIcon width={120} height={30} top={65} right={40} />
      </ContainerSearch>

      <ContainerSaveRepos></ContainerSaveRepos>
    </Container>
  );
}
