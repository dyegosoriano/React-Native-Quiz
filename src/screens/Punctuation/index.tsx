import React, { useContext, useEffect } from 'react'

import { Header, Title, Score, Description } from './styles'

import { QuestionsContext } from '../../context/QuestionContext'
import ApplicationBody from '../../components/ApplicationBody'
import Button from '../../components/Button'

const Punctuation: React.FC = () => {
  const { score, handleScore } = useContext(QuestionsContext)

  useEffect(handleScore, [])

  return (
    <ApplicationBody>
      <Header>
        <Title>Você acertou</Title>

        <Score>{score}</Score>

        <Description>questões</Description>
      </Header>

      <Button title="Voltar ao inicio" destiny="Home" />
    </ApplicationBody>
  )
}

export default Punctuation
