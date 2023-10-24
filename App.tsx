import React from 'react';

import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { TodosProvider } from './src/hooks/TodosContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainPage } from './src/pages/MainPage';
import { RootStackParamList } from './src/types/RootStackParamList';
import { DetailsPage } from './src/pages/DetailsPage';
import { colors } from './src/utils/colors';
import { NewTodoPage } from './src/pages/NewTodoPage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EditPage } from './src/pages/EditPage';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>()
  

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
    <TodosProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ 
          headerStyle: { backgroundColor: colors.nightPurple },
          headerTitleStyle: { color: colors.white, fontFamily: 'Josefin Sans Bold' },
          headerTintColor: colors.white,
          headerBackTitleStyle: { fontFamily: 'Josefin Sans Bold' }
          }}>
          <Stack.Screen name='Home' component={MainPage} />
          <Stack.Screen name='Details' component={DetailsPage} />
          <Stack.Screen name='New' component={NewTodoPage} />
          <Stack.Screen name='Edit' component={EditPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodosProvider>
    </GestureHandlerRootView>
  );
}

export default App;
