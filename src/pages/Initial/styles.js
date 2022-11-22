import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const ImageContainer = styled.div`
  flex-basis: 60%;
  overflow: hidden;
`

export const IntroductionContainer = styled.div`
  flex-basis: 40%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 100px 0px 100px;
`