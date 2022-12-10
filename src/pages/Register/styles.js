import styled from "styled-components"


export const ContainerRegister = styled.div`
    border-radius:0 0 22px 22px;
    background-color: #134720;
    width: 100%;
    top: 0;
`

export const HeaderRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 22px;
`

export const FormRegister = styled.form`
    background-color: #79B158;
    padding: 42px 0;
`

export const GridRegister = styled.form`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`

export const SelectRegister = styled.select`
    border-radius: 999px;
    border: none;
    padding: 8px 22px;
    background-color: #fff;
`


export const FooterRegister = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2rem;

    button{
        margin-left: 0 auto;
        background-color: #134720;
        color: #fff;
        border: none;
        padding: 18px;
        border-radius: 22px;
    }

    .btn-cad{
        right: 0;
        margin-top: 42px;
    }

    .sub-file{
        display: flex;
        gap: 2rem;
    }

    .teste{
       input{
        display: none;
       }

        .image-input{
            width: 100px;
            height: 100px;
            display: flex;
            border-radius: 22px;
            padding: 32px;
            align-items: center;
            justify-content: center;
            background-color: #ffff;
            

            img{
                width: 72px;
            }
        }
    }
`