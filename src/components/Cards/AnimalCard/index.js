import React from 'react'
import { Container } from './styles.js'
import { ButtonWrapper, ImageWrapper, TextWrapper } from '../../Wrappers/index.js'
import { TextMedium } from '../../Texts'
import { IconButton } from '../../Buttons/index.js';

import EditIcon from '@mui/icons-material/Edit';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import DeleteIcon from '@mui/icons-material/Delete';

export const AnimalCard = ({ image }) => {
    return(
        <Container>
            <ImageWrapper style={{
                height: '100%',
                width: '100px',
                borderRadius: '50%',
                backgroundColor: 'grey'
            }}>
                {image}
            </ImageWrapper>

            <TextWrapper>
                <TextMedium size={20}>
                    Nome-Do-Animal
                </TextMedium>
            </TextWrapper>

            <TextWrapper>
                <TextMedium size={20}>
                    Qtd. Fotos
                </TextMedium>
            </TextWrapper>

            <TextWrapper>
                <TextMedium size={20}>
                    Tipo
                </TextMedium>
            </TextWrapper>

            <TextWrapper>
                <TextMedium size={20}>
                    Pegada
                </TextMedium>
            </TextWrapper>

            <ButtonWrapper style={{ 
                width: '300px',
                display: 'flex',
                justifyContent: 'center'
            
            }}>
                <IconButton>
                    <EditIcon fontSize='large'/>
                </IconButton>

                <IconButton>
                    <QrCode2Icon fontSize='large'/>
                </IconButton>

                <IconButton>
                    <DeleteIcon fontSize='large'/>
                </IconButton>
            </ButtonWrapper>
        </Container>
    )
}