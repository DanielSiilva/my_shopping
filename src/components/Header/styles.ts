import styled from "styled-components/native";

type ContainerProps = {
  showLogoutButton: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.COLORS.PURPLE};

  flex-direction: ${({showLogoutButton}) => showLogoutButton ? 'row' : 'column'};
  align-items: center;
  justify-content: ${({showLogoutButton}) => showLogoutButton ? 'space-around' : 'center'};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  margin-top: 40px;
`