import React from 'react'
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {steps} from './../helpers/steps'
import {images} from './../helpers/images'
import {theme} from './../helpers/Themes'


const Chat = () => {
  return (
    <ThemeProvider theme={theme}>
        <ChatBot
            headerTitle="Bienvenido al ChatBot WISE"
            botAvatar = {images.ICONO_WISE}
            steps={[
                {
                  id: '1',
                  message: 'Cual es tu nombre?',
                    trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  component: (<enviar/>),
                  trigger: enviar()
                },
                {
                  id: '3',
                  message: 'Hola, {previousValue}, mucho gusto en saludarte!',
                  end: true,
                },
              ]}
            />
     </ThemeProvider>
  )
}

function enviar(){
    return "3"
}

export default Chat