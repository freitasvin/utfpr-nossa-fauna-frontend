import React from "react"
import { SquaredButton } from "../../components/Buttons/SquaredButton"
import { TextMedium, TextLight } from "../../components/Texts"
import { FullPage, TextWrapper, ButtonWrapper, ImageWrapper } from "../../components/Wrappers"
import { Container, ImageContainer, IntroductionContainer } from "./styles"

import logoUtf from '../../Images/utfpr-dv.png';
import logoParque from '../../Images/parque.png'
import StyledLink from '../StyledLink'

export const Initial  = () => {
  return (
    <FullPage style={{backgroundColor: '#79B158'}}>
      <Container>

        <ImageContainer>
          <ImageWrapper style={{
            width: '675px', 
            height: '100%', 
            backgroundColor: '#EDF0F5', 
            borderTopRightRadius: '10%',
            borderBottomRightRadius: '10%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '1px 1px 5px black',
          }}>
            <img src={logoParque} alt="logo parque iguaçu" style={{ width: '30%' }}/>
          </ImageWrapper>
        </ImageContainer>

          <IntroductionContainer >
            <TextWrapper>
              <TextMedium size={50}>
                NOSSA FAUNA ! IGUAÇU
              </TextMedium>
            </TextWrapper>

            <TextWrapper style={{width: '40%'}}>
              <TextMedium size={30}>
                Bem vindo de volta !
              </TextMedium>
            </TextWrapper>

            <ButtonWrapper>
              <StyledLink to="/dashboard"> 
                <SquaredButton text={'prosseguir'}/>
              </StyledLink>
            </ButtonWrapper>

            <TextWrapper>
              <TextLight size={20}>
                Software desenvolvido para os cadastros e manutenções das fichas dos animais do Parque do Iguaçu
              </TextLight>
            </TextWrapper>

            <ImageWrapper style={{ width: '180px' }}>
              <img src={logoUtf} alt="logo utfpr" style={{ width: '100%' }}/>
            </ImageWrapper>
          </IntroductionContainer>

      </Container>
    </FullPage>
  )
}