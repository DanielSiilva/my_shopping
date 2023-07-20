import React from "react"
import {Text} from 'react-native'

import {
  Container,
  Title
} from './styles'

type Props = {
  title: string;
  showLogoutButton?: boolean
}

export function Header({title, showLogoutButton = false}: Props){


  return (
    <Container showLogoutButton={showLogoutButton}>
      <Title>
        {title}
      </Title>

      {
        showLogoutButton && <Text> Botton</Text>
      }
    </Container>
  )
}