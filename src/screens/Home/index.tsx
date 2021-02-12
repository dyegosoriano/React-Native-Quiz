import React from 'react'

import { Header, Description, TitleWelcome, Title, Strong } from './styles'

import ApplicationBody from '../../components/ApplicationBody'
import Button from '../../components/Button'

const Home: React.FC = () => {
  return (
    <ApplicationBody>
      <Header>
        <TitleWelcome>
          <Strong>Bem vindo ao</Strong>
        </TitleWelcome>

        <Title>Conhecimento é poder</Title>

        <Description>
          O quiz é o nosso jogo de perguntas e respostas sobre conhecimentos gerais envolvendo várias matérias. Aqui
          você pode testar os seus conhecimentos de forma interativa e divertida!
        </Description>

        <Description>
          <Strong>Como funciona:</Strong> São 15 perguntas e cada pergunta vale 1 ponto, clique na alternativa que você
          considere correta. No final do quiz você obterá seu resultado.
        </Description>

        <Description>Boa sorte!</Description>
      </Header>

      <Button title="Iniciar" destiny="Question" reset={true} />
    </ApplicationBody>
  )
}

export default Home
