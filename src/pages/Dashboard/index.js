import React from "react"
import { CommonButton } from "../../components/Buttons"
import { IconInput } from "../../components/TextFields"
import { FullPage } from "../../components/Wrappers"
import { AnimalCard } from "../../components/Cards/AnimalCard"
import SearchIcon from '@mui/icons-material/Search';


export const Dashboard = () => {
  return(
    <FullPage>
      <CommonButton text="Cadastrar +" />
      <IconInput icon={<SearchIcon fontSize='medium'/>}/>
      <AnimalCard />
    </FullPage>
  )
}