import { Container } from "@mui/system"
import {HeaderRegister,ContainerRegister, FormRegister, GridRegister, SelectRegister, FooterRegister} from "./styles"  
import { TextMedium } from "../../components/Texts"
import { InputBase } from "@mui/material"
import {Header} from '../../components/Header'
import { FullPage } from "../../components/Wrappers"

export const Register = () => {
    return (
        <FullPage style={{backgroundColor: '#79B158'}}>
            <Header/>
            <ContainerRegister>
                <Container>
                    <HeaderRegister>
                        <TextMedium>CADASTRO</TextMedium>
                    </HeaderRegister>
                </Container>
            </ContainerRegister>

            <FormRegister>
                <Container>

                    <GridRegister>
                        <div className="grid-container-1">
                        <InputBase
                            id="outlined-basic" 
                            label="Nome"
                            placeholder="Nome"
                            variant="outlined" 
                            sx={
                                {
                                    backgroundColor: '#fff',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: '8px 22px'
                                }
                            }
                        />

                        <InputBase
                            id="outlined-basic" 
                            label="Nome Cientifico"
                            placeholder="Nome Cientifico"
                            variant="outlined" 
                            sx={
                                {
                                    backgroundColor: '#fff',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: '8px 22px'
                                }
                            }
                        />

                       
                            <SelectRegister>
                                <option value="0">Tipo 1</option>
                                <option value="1">Tipo 2</option>
                                <option value="2">Tipo 3</option>
                                <option value="3">Tipo 4</option>
                            </SelectRegister>

                        <InputBase
                            id="outlined-basic" 
                            placeholder="Habitat"
                            variant="outlined" 
                            sx={
                                {
                                    backgroundColor: '#fff',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: '8px 22px'
                                }
                            }
                        />

                        <InputBase
                            id="outlined-basic" 
                            placeholder="Alimenta????o"
                            variant="outlined" 
                            sx={
                                {
                                    backgroundColor: '#fff',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: '8px 22px'
                                }
                            }
                        />  

                        <InputBase
                            id="outlined-basic" 
                            placeholder="Reprodu????o"
                            variant="outlined" 
                            sx={
                                {
                                    backgroundColor: '#fff',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: '8px 22px'
                                }
                            }
                        /> 

                        

                        </div>

                        <div className="grid-container-2">
                        <InputBase
                            id="outlined-basic" 
                            placeholder="Caracteristicas"
                            variant="outlined" 
                            sx={
                                {
                                    backgroundColor: '#fff',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: '8px 22px'
                                }
                            }
                        />  

                        <InputBase
                            id="outlined-basic" 
                            placeholder="Importancias ecologicas"
                            variant="outlined" 
                            sx={
                                {
                                    backgroundColor: '#fff',
                                    borderRadius: '999px',
                                    border: 'none',
                                    padding: '8px 22px'
                                }
                            }
                        /> 
                        </div>
                    </GridRegister>


                    <FooterRegister>
                        <div className="sub-file">
                            <div className="teste">
                                <h4>Fotos:</h4>
                                <div class="image-input">
                                    <input type="file" accept="image/*" id="imageInput"/>
                                    <label for="imageInput" class="image-button">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1829/1829415.png" class="image-preview"/>
                                    </label>
                                    
                                </div>
                            </div>

                            <div className="teste">
                                <h4>Pegadas:</h4>
                                <div class="image-input">
                                    <input type="file" accept="image/*" id="imageInput"/>
                                    <label for="imageInput" class="image-button">
                                        <img src="https://cdn-icons-png.flaticon.com/512/1829/1829415.png" class="image-preview"/>
                                    </label>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="btn-cad">
                            <button>CADASTRAR</button>
                        </div>

                    </FooterRegister>
                </Container>
            </FormRegister>
        </FullPage>
    )
}