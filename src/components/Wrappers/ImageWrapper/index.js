import React from "react";
import { Container } from "./styles";

export const ImageWrapper = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}