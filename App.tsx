import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text } from 'react-native'

import { Container } from './src/styles/global'

export default function App() {
  return (
    <Container>
      <StatusBar style="light" />
      <Text>Olá mundo!!!</Text>
    </Container>
  )
}
