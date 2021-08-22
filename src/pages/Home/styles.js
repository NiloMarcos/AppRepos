import styled from 'styled-components/native';

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
  font-family: 'Arimo_400Regular';
  color: #969696;
  padding-left: 17px;  
  /* background-color: #c4c4c4; */
`;

export const ContainerInformations = styled.View`
  margin-top: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: 'Arimo_700Bold';
  margin-top: 11px;
`;

export const SubTitle = styled.Text`
  font-family: 'Arimo_400Regular';
  color: #636363;
  font-size: 16px;
`;

export const ContainerRepos = styled.View`
  flex: 1;
`;