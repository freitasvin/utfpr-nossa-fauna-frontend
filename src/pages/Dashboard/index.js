import React from "react"
import { Header } from "../../components/Header" 
import { CardContainer, ContentContainer, OptionsContainer } from "./styles"
import { CommonButton } from "../../components/Buttons"
import { IconInput } from "../../components/TextFields"
import { FullPage, InputWrapper, ButtonWrapper, CardWrapper } from "../../components/Wrappers"
import { AnimalCard } from "../../components/Cards/AnimalCard"

import SearchIcon from '@mui/icons-material/Search';


export const Dashboard = () => {
  return(
    <FullPage>
      <Header />
      <OptionsContainer>
        <ButtonWrapper style={{
          marginRight: '20px'
        }}>
          <CommonButton text="Cadastrar +" />
        </ButtonWrapper>
        <InputWrapper>
          <IconInput icon={<SearchIcon fontSize='medium'/>}/>
        </InputWrapper>
      </OptionsContainer>

      <ContentContainer>
        <CardContainer>
          <CardWrapper>
            <AnimalCard /> 
          </CardWrapper>

          <CardWrapper>
            <AnimalCard /> 
          </CardWrapper>
          <CardWrapper>

            <AnimalCard /> 
          </CardWrapper>

          <CardWrapper>
            <AnimalCard /> 
          </CardWrapper>
        </CardContainer>
      </ContentContainer>
    </FullPage>
  )
}