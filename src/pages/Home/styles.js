import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerSearch = styled.View`
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
  margin-left: 100px;
  border-radius: 14px;
  font-size: 16px;
  font-family: "Arimo_400Regular";
  color: #969696;
  padding-left: 17px;
`;

export const SearchOriganization = styled.TouchableOpacity`
  align-items: center;
`;

export const ContainerInformations = styled.View`
  margin-top: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: "Arimo_700Bold";
  margin-top: 11px;
`;

export const SubTitle = styled.Text`
  font-family: "Arimo_400Regular";
  color: #636363;
  font-size: 16px;
`;

export const ContainerRepos = styled.ScrollView`
  flex: 1;
  width: 90%;
  margin-left: 5%;
  margin-top: 7px;
  margin-bottom: 7px;
`;

export const ContainerInfoRepos = styled.View`
  flex: 1;
  justify-content: center;
  width: 353px;
  height: 130px;
  margin-top: 5px;
  border-radius: 14px;
`;

export const ButtonNextSceen = styled.TouchableOpacity`
  width: 190px;
  height: 49px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 39px;
  background-color: #2196f3;
  margin-bottom: 10px;
  margin-left: 180px;
`;

export const ButtonNextSceenText = styled.Text`
  font-size: 16px;
  font-family: "Arimo_400Regular";
  color: #ffffff;
  margin-right: 8px;
`;

export const TextApi = styled.Text`
  font-size: 16px;
  font-family: "Arimo_400Regular";
  color: #2196f3;
  margin-left: 60px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  margin-top: -30px;
`;

export const ButtonSave = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 170px;
  margin-top: 15px;
`;

export const TextSave = styled.Text`
  font-size: 16px;
  font-family: "Arimo_400Regular";
  color: #2196f3;
  margin-left: -40px;
`;
