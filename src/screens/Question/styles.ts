import styled from 'styled-components/native'

export const Header = styled.View`
  border-radius: 16px;
  background: #fff;
  margin-top: 64px;
  padding: 16px;
`

export const NumberQuestion = styled.Text`
  margin-bottom: 16px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #5e67f0;
`

export const QuestionText = styled.Text`
  text-align: justify;
  font-size: 16px;
  color: #5e67f0;
`

export const AnswerOptions = styled.View`
  margin-top: 8px;
`

export const AnswerBox = styled.TouchableOpacity`
  background: ${props => (props.active ? '#5e67f0' : '#FFF')};
  border: 1px solid #5e67f0;
  border-radius: 8px;
  margin-top: 8px;
  padding: 8px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

export const AnswerText = styled.Text`
  color: ${props => (props.active ? '#FFF' : '#5e67f0')};
  text-align: justify;
  margin-right: 8px;
  font-size: 16px;
  flex: 1;
`

export const Footer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`

export const Button = styled.TouchableOpacity`
  background: #bcf573;
  border-radius: 8px;
  height: 64px;

  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 160px;
`

export const ButtonText = styled.Text`
  margin: 0 16px 0 16px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #5e67f0;
`
