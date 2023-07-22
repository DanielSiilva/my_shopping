import React from 'react'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import {
  Account,
  Container,
  Title,
  Subtitle
} from './styles'



export function SignIn(){
  return (
    <Container>
      <Title>MyShopping</Title>
      <Subtitle>monte sua lista de compra te ajudar nas compras</Subtitle>

      <Input
        placeholder='e-mail'
        keyboardType='email-address'
      />

      <Input
        placeholder='senha'
        secureTextEntry
      />

      <Button
        title='Entrar'
        onPress={() => {}}
      />

      <Account>
        <ButtonText
          title='Recuperar senha'
          onPress={() => {}}
        />

        <ButtonText
          title='Criar minha conta'
          onPress={() => {}}
        />
      </Account>
     
    </Container>
  )
}