import {TouchableOpacityProps} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import { 
  Container, 
  Icon,
} from "./styles";
import theme from '../../theme';

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  color?: 'success' | 'alert';
  size?: 'small' | 'large';
}

export function ButtonIcon({color = 'success', size ='small', icon, ...rest}: Props){

  return(
    <Container 
      color={color}
      size={size}
      {...rest}
    >
      <Icon 
        name={icon} 
        size={size === 'small' ? 18 : 24}
        color={theme.COLORS.WHITE}
       />
    </Container>
  )
}