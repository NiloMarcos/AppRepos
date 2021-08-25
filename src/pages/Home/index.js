import React, { useState } from "react";
import { Keyboard } from "react-native";
import SearchIcon from "../../assets/pesquisa.svg";
import EmphasisIcon from "../../assets/destaque.svg";
import SaveIcon from "../../assets/salvo_azul.svg";
import ArrowRight from "../../assets/seta_direita_branco.svg";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  ContainerSearch,
  Input,
  SearchOriganization,
  ContainerInformations,
  Title,
  SubTitle,
  ContainerRepos,
  ButtonNextSceen,
  ButtonNextSceenText,
  ContainerInfoRepos,
  TextApi,
  Image,
  ButtonSave,
  TextSave,
} from "./styles";

export default function Home({ navigation }) {
  const [newOrg, setNewOrg] = useState("");
  const [organizations, setOrganizations] = useState([]);

  async function handleSubmit() {
    try {
      if (newOrg === "") {
        alert("Digite uma organização valida! 😉");
      } else {
        const response = await api.get(`/repos/${newOrg}`);
        const data = {
          name: response.data.name,
          avatar_url: response.data.organization.avatar_url,
        };
        setOrganizations([...organizations, data]);
        setNewOrg("");
        Keyboard.dismiss();
        console.log(data);
      }
    } catch (err) {
      alert("Ops, nao foi possivel fazer essa busca! 😢");
    }
  }

  function handleSave() {
    AsyncStorage.setItem("orgs", JSON.stringify(organizations));
  }

  return (
    <Container>
      <ContainerSearch>
        <Input
          placeholder="Procurar organizações..."
          maxLength={35}
          value={newOrg}
          onChangeText={(text) => setNewOrg(text)}
        />
        <SearchOriganization onPress={() => handleSubmit()}>
          <SearchIcon width={120} height={30} top={63} left={-55} />
        </SearchOriganization>
      </ContainerSearch>

      <ContainerInformations>
        <EmphasisIcon width={120} height={30} />
        <Title>Organizações em destaque</Title>
        <SubTitle>Veja as Organizações em tendência no GitHub</SubTitle>
      </ContainerInformations>

      <ContainerRepos>
        {organizations.map((item) => {
          return (
            <ContainerInfoRepos key={item.name}>
              <TextApi>{item.name}</TextApi>
              <Image source={{ uri: item.avatar_url }} />
              <ButtonSave onPress={() => handleSave()}>
                <SaveIcon width={120} height={30} />
                <TextSave>Salvar</TextSave>
              </ButtonSave>
            </ContainerInfoRepos>
          );
        })}
      </ContainerRepos>

      <ButtonNextSceen onPress={() => navigation.navigate("Repositorios")}>
        <ButtonNextSceenText>Ver salvos</ButtonNextSceenText>
        <ArrowRight width={25} height={30} />
      </ButtonNextSceen>
    </Container>
  );
}
