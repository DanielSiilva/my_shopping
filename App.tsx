import {StatusBar } from 'react-native';

import {ThemeProvider} from 'styled-components/native'
import theme from './src/theme/index';

import {useFonts, Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto'

import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import {SignIn} from './src/screens/SignIn'

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
        {fontsLoaded ? <Routes/> : <Loading />}
      </>
    </ThemeProvider>
  );
}
