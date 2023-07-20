import React from "react";

import { 
  Container 
} from "./styles";
import { Header } from "../../components/Header";
import { FormBox } from "../../components/FormBox/FormBox";

export function Products(){
  return (
    <Container>
      <Header title="Lista de compras"/>
      <FormBox />
    </Container>
  )
}