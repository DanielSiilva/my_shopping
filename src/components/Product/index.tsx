import React from "react"

import {
  Container,
  Info,
  Options,
  Quantity,
  Title
} from './styles'
import { ButtonIcon } from "../ButtonIcon";

export type ProductPros = {
  id: string;
  description: string;
  quantity: number;
  done: boolean;
}

export type Props ={
  data: ProductPros
}

export function Product({data}: Props){

  return (
    <Container>
      <Info>
        <Title done={data.done}>
          {data.description}
        </Title>
        <Quantity>
          Quantidade: {data.quantity}
        </Quantity>

        <Options>
          <ButtonIcon
            icon={data.done ? "undo" : "check"}
          />

          <ButtonIcon
            icon="delete"
            color="alert"
          />
      </Options>
      </Info>
    </Container>
  )
}