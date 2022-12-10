import React from "react"
import { Container } from "./styles"

export const CardWrapper = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}