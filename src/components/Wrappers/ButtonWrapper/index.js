import React from "react"
import { Container } from "./styles"

export const ButtonWrapper = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}