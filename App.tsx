import { View, Text } from "react-native";


import { useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import { Product } from "./src/screens/Products";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  })

  if(!fontsLoaded){
    return <Text> Carregando ..</Text>
  }

  return (
    <View >
      {fontsLoaded ? <Product /> : <Text> Carregando ...</Text>}
    </View>
  );
}

