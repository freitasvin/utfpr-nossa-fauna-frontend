import React from "react";
import { CommonButton } from "../../components/Buttons";
import { CommonInput } from "../../components/TextFields";
import { FullPage } from "../../components/Wrappers";

export const Dashboard = () => {
  return(
    <FullPage>
      <CommonButton text="Cadastrar +" />
      <CommonInput />
    </FullPage>
  )
}