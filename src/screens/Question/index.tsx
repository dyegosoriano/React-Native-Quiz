import React from 'react'
import { Feather } from '@expo/vector-icons'

import {
  AnswerOptions,
  QuestionText,
  QuestionBox,
  AnswerText,
  AnswerBox
} from './styles'

import ApplicationBody from '../../components/ApplicationBody'
import Button from '../../components/Button'

const Question: React.FC = () => {
  return (
    <ApplicationBody button={<Button title="Avançar" destiny="Punctuation" />}>
      <QuestionBox>
        <QuestionText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
          ullam consequuntur cumque nostrum id maxime quisquam voluptatum
          laudantium alias dolore autem praesentium perspiciatis incidunt ut
          accusamus omnis magnam eligendi debitis.
        </QuestionText>

        <AnswerOptions>
          <AnswerBox>
            <AnswerText>Opção 01</AnswerText>
            <Feather size={24} color="#5e67f0" name="circle" />
          </AnswerBox>

          <AnswerBox>
            <AnswerText>Opção 02</AnswerText>
            <Feather size={24} color="#5e67f0" name="circle" />
          </AnswerBox>

          <AnswerBox>
            <AnswerText>Opção 03</AnswerText>
            <Feather size={24} color="#5e67f0" name="circle" />
          </AnswerBox>

          <AnswerBox>
            <AnswerText>Opção 04</AnswerText>
            <Feather size={24} color="#5e67f0" name="circle" />
          </AnswerBox>
        </AnswerOptions>
      </QuestionBox>
    </ApplicationBody>
  )
}

export default Question
