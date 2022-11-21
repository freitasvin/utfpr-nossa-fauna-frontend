import React from "react";
import { TextMedium } from "../../components/Texts/TextMedium";
import { FullPage, TextWrapper } from "../../components/Wrappers";
import { Container, ImageContainer, IntroductionContainer } from "./styles";

export const Initial  = () => {
  return (
    <FullPage style={{backgroundColor: '#79B158'}}>
      <Container>
        <ImageContainer>
          
        </ImageContainer>
          <IntroductionContainer>
            <TextWrapper style={{ display: 'flex', flexDirection: 'column' }}>
              <TextMedium size={50}>
                NOSSA FAUNA !
              </TextMedium>
              <TextMedium size={50}>
                IGUAÇU
              </TextMedium>
            </TextWrapper>

            <TextWrapper style={{ display: 'flex', flexDirection: 'column' }}>
              <TextMedium size={25}>
                Bem vindo de
              </TextMedium>
              <TextMedium size={25}>
                volta !
              </TextMedium>
            </TextWrapper>
          </IntroductionContainer>
      </Container>
    </FullPage>
  )
}