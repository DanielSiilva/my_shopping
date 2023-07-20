import React from "react";

import { 
  Container 
} from "./styles";
import { Header } from "../../components/Header";
import { FormBox } from "../../components/FormBox/FormBox";
import { ShoppingList } from "../../components/ShoppingList";

export function Products(){
  return (
    <Container>
      <Header title="Lista de compras"/>
      <FormBox />
      <ShoppingList />
    </Container>
  )
}