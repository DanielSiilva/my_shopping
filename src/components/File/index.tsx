import React from 'react'

import {
  Container,
  Info,
  Name,
  Options,
  Path
} from './styles'

import { ButtonIcon } from '../ButtonIcon';


export type FileProps = {
  name: string;
  path: string;
}

type Props = {
  data: FileProps;
  onShow?: () => void;
  onDelete?: () =>void;
}


export function File({data, onDelete, onShow}: Props){

  return (
    <Container>
      <Info>
        <Name> {data.name}</Name>
        <Path>{data.path}</Path>
      </Info>

      <Options>
        <ButtonIcon
          icon='delete'
          color='alert'
          onPress={onDelete}
        />

        <ButtonIcon 
          icon='visibility'
          onPress={onShow}
        />
      </Options>

    </Container>
  )
}