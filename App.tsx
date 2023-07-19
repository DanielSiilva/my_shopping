import { StatusBar } from 'expo-status-bar';
import {Text } from 'react-native';

import {ThemeProvider} from 'styled-components/native'
import theme from './src/theme/index';
import {useFonts, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  })

  if(!fontsLoaded){
    return <Text> Carregando ...</Text>
  }

  return (
    <ThemeProvider theme={theme} >
      <>
        <StatusBar
          backgroundColor='transparent'
          translucent
        />
      </>
    </ThemeProvider>
  );
}
