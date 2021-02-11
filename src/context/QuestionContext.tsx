import React, { createContext, useState } from 'react'

import questionsData, { QuestionDataInterface } from '../data/questions'

interface QuestionsInterface {
  questions: QuestionDataInterface[]
  totalQuestions: number
  score: number
}

export const QuestionsContext = createContext<QuestionsInterface>({} as QuestionsInterface)

const QuestionsContextProvider: React.FC = ({ children }) => {
  const totalQuestions = questionsData.length
  const questions = questionsData

  const [score, setScore] = useState(0)

  return <QuestionsContext.Provider value={{ score, questions, totalQuestions }}>{children}</QuestionsContext.Provider>
}

export default QuestionsContextProvider
