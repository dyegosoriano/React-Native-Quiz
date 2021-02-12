import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container, Text } from './styles'
import { QuestionsContext } from '../../context/QuestionContext'

interface ButtonProps {
  destiny: string
  reset?: boolean
  title: string
}

const Button: React.FC<ButtonProps> = ({ title, destiny, reset }) => {
  const { handleResetScore } = useContext(QuestionsContext)
  const navigation = useNavigation()

  function handleOnPress() {
    if (reset) handleResetScore()
    navigation.navigate(destiny)
  }

  return (
    <Container onPress={handleOnPress}>
      <Text>{title}</Text>
    </Container>
  )
}

export default Button
