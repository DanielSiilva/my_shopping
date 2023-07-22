import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker'

import {
  Container,
  Content,
  Progress,
  Transferred
} from './styles'
import { Header } from '../../components/Header'
import { Photo } from '../../components/Photo'
import { Button } from '../../components/Button'

export function Upload(){
  const [image, setImage] = useState('')

  async function handlePickImage() {
    const {status} = await ImagePicker.requestCameraPermissionsAsync()

    if(status == 'granted'){
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4,4],
        quality:1, 
      });

      if(!result.canceled){
        setImage(result.assets[0].uri)
      }
    }
  }

  return (
    <Container>
      <Header title='Lista de compras' />

      <Content>
        <Photo 
          uri={image}
          onPress={handlePickImage}
        />

        <Button
          title='Fazer upload'
          onPress={() => {}}
        />

        <Progress>
          0%
        </Progress>

        <Transferred>
          0 de 100 bytes transferido
        </Transferred>
      </Content>
      
    </Container>
  )
}