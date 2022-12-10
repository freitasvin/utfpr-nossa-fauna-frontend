import React from "react"
import { IconButton } from "../Buttons"
import { TextMedium } from "../Texts"
import { ButtonWrapper, ImageWrapper, TextWrapper } from "../Wrappers"
import { Container, IntroductionContainer } from "./styles"

import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
    return (
        <Container>
            <IntroductionContainer>
                <ImageWrapper style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    marginRight: '10px'
                }}>
                </ImageWrapper>

                <TextWrapper>
                    <TextMedium size={22}>
                        NOSSA FAUNA ! IGUAÇU
                    </TextMedium>
                </TextWrapper>
            </IntroductionContainer>

            <ButtonWrapper>
                <IconButton>
                    <LogoutIcon fontSize='large'/>
                </IconButton>
            </ButtonWrapper>
        </Container>
    )
}