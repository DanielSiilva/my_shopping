import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons'
import {TouchableOpacity} from 'react-native'


type Props = {
  color: 'success' | 'alert';
  size: 'small' | 'large';
}

export const Container = styled(TouchableOpacity)<Props>`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color:  ${({ color, theme }) => color === 'success' ? theme.COLORS.GREEN : theme.COLORS.RED};
  width: ${({ size }) => size === 'small' ? 40 : 60}px;
  height: ${({ size }) => size === 'small' ? 40 : 60}px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({theme, type}) => ({
  size:24,
  
}))``;