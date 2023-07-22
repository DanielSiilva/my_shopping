import React from "react"
import { FlatList} from 'react-native'

import { Header } from "../../components/Header"
import {File} from '../../components/File'

import {
  Container,
  PhotoInfo
} from './styles'

import { photosData } from '../../utils/photo.data';
import { Photo } from "../../components/Photo"

export function Receipts(){
  return (
    <Container>
      <Header title="Comprovantes" />

       <Photo uri=""/>

      <PhotoInfo>
        Informações da foto
      </PhotoInfo>

      <FlatList
        data={photosData}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <File 
            data={item}
            onShow={() => {}}
            onDelete={() => {}}
          />
        )}
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        style={{width: '100%', padding: 24}}
      
      />
    </Container>
  )
}