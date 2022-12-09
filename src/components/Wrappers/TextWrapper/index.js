import React from "react"
import { Container } from "./styles"

export const TextWrapper = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}