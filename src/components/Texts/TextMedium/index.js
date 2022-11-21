import React from 'react'
import { StyledText } from './styles'

export const TextMedium = ({ size = 16, children, style })=> {
  return <StyledText style={{ ...style, fontSize: size }}>{children}</StyledText>
}