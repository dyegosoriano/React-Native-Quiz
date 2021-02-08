import React from 'react'

import { Title, Score, Description } from './styles'

import ApplicationBody from '../../components/ApplicationBody'
import Button from '../../components/Button'

const Punctuation: React.FC = () => {
  return (
    <ApplicationBody
      button={<Button title="Voltar ao inicio" destiny="Home" />}
    >
      <Title>Você acertou</Title>

      <Score>15</Score>

      <Description>questões</Description>
    </ApplicationBody>
  )
}

export default Punctuation
