import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ListScreen from './screens/ListScreen'
import DetailScreen from './screens/DetailScreen'

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} options={{ title: "Todo List" }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={({route}) => ({ title: `Todo #${route.params.todo.id}` })} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App