import { StatusBar } from 'expo-status-bar'
import React from 'react'

import QuestionsContextProvider from './src/context/QuestionContext'
import Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <QuestionsContextProvider>
        <Routes />
      </QuestionsContextProvider>
    </>
  )
}
