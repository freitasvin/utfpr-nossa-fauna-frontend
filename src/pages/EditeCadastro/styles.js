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
.grid-container-1{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
}

.grid-container-2{
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

    
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
    margin-top: 3rem;

    .btn-cad{
        right: 0;
        margin-top: 42px;
        margin-left: auto;
    }

    button{
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        margin-left: 0 auto;
        background-color: #134720;
        color: #fff;
        border: none;
        padding: 18px 62px;
        border-radius: 10px;
        font-size: 20px;
        cursor: pointer;
        transition: 1s;

        &:hover{
            background-color: #081c15;
        }
    }


    .sub-file{
        display: flex;
        gap: 2rem;
    }

.teste{
   

    h4{
        color: #fff;
    }
       input{
        display: none;
       }

        .image-input{
            width: 150px;
            height: 150px;
            display: flex;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            
            background-color: #ffff;
            cursor: pointer;
            overflow: hidden;
            align-items: center;
            justify-content: center;
    

            img{
                width: 100%;
                cursor: pointer;
                padding: 22px;
            }
        }
    }
`