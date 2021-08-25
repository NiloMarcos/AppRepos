import React, { useState } from "react";
import BackIcon from "../../assets/seta_esquerda.svg";
import SearchIcon from "../../assets/pesquisa.svg";
import {
  Container,
  ContainerSearch,
  BackButton,
  Input,
  ButtonSearch,
} from "./styles";

export default function Repos({ navigation }) {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <ContainerSearch>
        <BackButton onPress={() => navigation.navigate("Home")}>
          <BackIcon width={120} height={30} left={40} top={67} />
        </BackButton>
        <Input
          placeholder="Suas organizações salvas"
          maxLength={35}
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        <ButtonSearch onPress={() => {}}>
          <SearchIcon width={120} height={30} top={65} right={40} />
        </ButtonSearch>
      </ContainerSearch>

    </Container>
  );
}
