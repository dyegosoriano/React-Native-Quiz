import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import {
  NumberQuestion,
  AnswerOptions,
  QuestionText,
  AnswerText,
  ButtonText,
  AnswerBox,
  Header,
  Footer,
  Button
} from './styles'

import { QuestionsContext } from '../../context/QuestionContext'
import ApplicationBody from '../../components/ApplicationBody'

const Question: React.FC = () => {
  const { questions, totalQuestions, handleSelectedAnswer } = useContext(QuestionsContext)
  const [currentQuestion, setCurrentQuestion] = useState(questions[0])
  const [counter, setCounter] = useState(0)

  const navigation = useNavigation()

  function handleNextQuestion() {
    if (counter === totalQuestions - 1) navigation.navigate('Punctuation')
    if (counter < totalQuestions - 1) setCounter(counter + 1)
  }

  function handleBackQuestion() {
    if (counter === 0) navigation.navigate('Home')
    if (counter > 0) setCounter(counter - 1)
  }

  function handleSelect(answerID: number, isCorrect: boolean) {
    currentQuestion.answerOptions.map(item => (item.id === answerID ? (item.active = true) : (item.active = false)))

    handleSelectedAnswer(currentQuestion.questionID, isCorrect)
  }

  useEffect(() => {
    setCurrentQuestion(questions[counter])
  }, [counter])

  return (
    <ApplicationBody>
      <Header>
        <NumberQuestion>{`Pergunta ${counter + 1}/${totalQuestions}`}</NumberQuestion>

        <QuestionText>{currentQuestion.questionText}</QuestionText>

        <AnswerOptions>
          {currentQuestion.answerOptions.map(item => {
            const { id, active, answerText, isCorrect } = item

            return (
              <AnswerBox onPress={() => handleSelect(id, isCorrect)} active={active} key={id}>
                <AnswerText active={active}>{answerText}</AnswerText>

                <Feather name={active ? 'check-circle' : 'circle'} color={active ? '#FFF' : '#5e67f0'} size={24} />
              </AnswerBox>
            )
          })}
        </AnswerOptions>
      </Header>

      <Footer>
        <Button onPress={handleBackQuestion}>
          <Feather name={counter === 0 ? 'x-octagon' : 'arrow-left'} color="#5e67f0" size={24} />
          <ButtonText>{counter === 0 ? 'Cancelar' : 'Voltar'}</ButtonText>
        </Button>

        <Button onPress={handleNextQuestion}>
          <ButtonText>{counter === totalQuestions - 1 ? 'Finalizar' : 'Proximo'}</ButtonText>
          <Feather name={counter === totalQuestions - 1 ? 'check' : 'arrow-right'} color="#5e67f0" size={24} />
        </Button>
      </Footer>
    </ApplicationBody>
  )
}

export default Question
