import React, { createContext, useState } from 'react'

import QuestionDataInterface from '../types/questions'
import quizData from '../data/quiz.json'

interface ContextInterface {
  questions: QuestionDataInterface[]
  handleSelectedAnswer: any
  totalQuestions: number
  handleResetScore: any
  handleScore: any
  score: number
}

interface AnsweredQuestionsInterface {
  questionID: number
  isCorrect: boolean
}

export const QuestionsContext = createContext<ContextInterface>({} as ContextInterface)

const QuestionsContextProvider: React.FC = ({ children }) => {
  const totalQuestions = quizData.data.length
  let questions = quizData.data

  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestionsInterface[]>([])
  const [score, setScore] = useState(0)

  function handleSelectedAnswer(questionID: number, isCorrect: boolean) {
    const answerExist = answeredQuestions.find(item => item.questionID === questionID)

    if (!answerExist || !isCorrect) {
      const updateAnswerQuestions = answeredQuestions.filter(item => item.questionID !== questionID)
      setAnsweredQuestions(updateAnswerQuestions)
    }

    if (!answerExist && isCorrect) {
      setAnsweredQuestions([...answeredQuestions, { questionID, isCorrect }])
    }
  }

  function handleResetScore() {
    questions.map(question => {
      question.answerOptions.map(item => (item.active = false))
    })

    setAnsweredQuestions([])
    setScore(0)
  }

  function handleScore() {
    setScore(answeredQuestions.length)
  }

  return (
    <QuestionsContext.Provider
      value={{ score, questions, totalQuestions, handleScore, handleResetScore, handleSelectedAnswer }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContextProvider
