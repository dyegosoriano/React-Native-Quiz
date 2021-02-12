export default interface QuestionDataInterface {
  answerOptions: Answer[]
  questionText: string
  questionID: number
}

export interface Answer {
  answerText: string
  isCorrect: boolean
  active: boolean
  id: number
}
