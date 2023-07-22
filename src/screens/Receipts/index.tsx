import React from "react"
import { FlatList} from 'react-native'

import { Header } from "../../components/Header"

import {
  Container,
  PhotoInfo
} from './styles'

import { photosData } from '../../utils/photo.data';

export function Receipts(){
  return (
    <Container>
      <Header title="Comprovantes" />

      <PhotoInfo>
        Informações da foto
      </PhotoInfo>

      <FlatList
        data={photosData}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          
        )}
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        style={{width: '100%', padding: 24}}
      
      />
    </Container>
  )
}