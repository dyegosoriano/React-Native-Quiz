import React from 'react'

import { Description, Container, TitleWelcome, Header, Title } from './styles'

import Button from '../../components/Button'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleWelcome>Bem vindo ao</TitleWelcome>
        <Title>Conhecimento é poder</Title>

        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
          eveniet ex, quisquam itaque, dolorum explicabo vero porro fuga
          accusantium minima iste asperiores quidem eaque mollitia doloribus
          nisi optio nemo exercitationem?
        </Description>
      </Header>

      <Button title="Iniciar" />
    </Container>
  )
}

export default Home
