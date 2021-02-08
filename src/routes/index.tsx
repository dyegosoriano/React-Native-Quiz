import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Punctuation from '../screens/Punctuation'
import Question from '../screens/Question'
import Home from '../screens/Home'

const { Navigator, Screen } = createStackNavigator()

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Question" component={Question} />
        <Screen name="Punctuation" component={Punctuation} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes
