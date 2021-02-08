import styled from 'styled-components/native'

export const QuestionBox = styled.View`
  background: #fff;
  border-radius: 16px;
  padding: 16px;
`

export const QuestionText = styled.Text`
  font-size: 16px;
  color: #5e67f0;
`

export const AnswerOptions = styled.View`
  margin-top: 8px;
`

export const AnswerBox = styled.TouchableOpacity`
  border: 1px solid #5e67f0;
  border-radius: 8px;
  margin-top: 8px;
  padding: 8px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const AnswerText = styled.Text`
  font-size: 16px;
  color: #5e67f0;
`
