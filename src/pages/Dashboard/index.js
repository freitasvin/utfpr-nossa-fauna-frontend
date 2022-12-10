import React from "react"
import { Header } from "../../components/Header" 
import { CommonButton } from "../../components/Buttons"
import { IconInput } from "../../components/TextFields"
import { FullPage } from "../../components/Wrappers"
import { AnimalCard } from "../../components/Cards/AnimalCard"

import SearchIcon from '@mui/icons-material/Search';


export const Dashboard = () => {
  return(
    <FullPage>
      <Header />
      <CommonButton text="Cadastrar +" />
      <IconInput icon={<SearchIcon fontSize='medium'/>}/>
      <AnimalCard />
    </FullPage>
  )
}