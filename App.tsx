import {Text, StatusBar } from 'react-native';

import {ThemeProvider} from 'styled-components/native'
import theme from './src/theme/index';

import {useFonts, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  })



  return (
    <ThemeProvider theme={theme} >
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Text>Carregando ...</Text> : <Loading />}
      </>
    </ThemeProvider>
  );
}
