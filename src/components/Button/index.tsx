import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, Text } from './styles'

interface ButtonProps {
  destiny: string
  title: string
}

const Button: React.FC<ButtonProps> = ({ title, destiny }) => {
  const navigation = useNavigation()

  return (
    <Container onPress={() => navigation.navigate(destiny)}>
      <Text>{title}</Text>
    </Container>
  )
}

export default Button
