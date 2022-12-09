import React from "react"
import { Container } from "./styles"

export const FullPage = ({ children, style }) => {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}