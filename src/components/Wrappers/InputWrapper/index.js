import React from "react"
import { Container } from "./styles"

export const InputWrapper = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}