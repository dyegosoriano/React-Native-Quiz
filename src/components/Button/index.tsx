import React from 'react'

import { Container, Text } from './styles'

interface ButtonProps {
  title: string
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  )
}

export default Button
