import { Alert, FlatList, ListRenderItem, Pressable, StyleSheet, Text, View } from "react-native"
import { TodoItem } from "./TodoItem"
import { FC, useCallback, useEffect } from "react"
import { ListProps } from "../types/ListProps"
import { styles } from "../utils/styles"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../types/Todo"
import { CustomText } from "./CustomText"
import SwipeableItem, { useSwipeableItemParams } from 'react-native-swipeable-item'
import { UnderlayLeftProps } from "../types/UnderlayLeftProps"
import { AnimatedPressable } from "./AnimatedPressable"

export const TodosList: FC<ListProps> = ({ navigation }) => {
    const { todos, setTodos } = useTodos()

    const UnderlayLeft: FC<UnderlayLeftProps> = ({ item }) => {
      const { close } = useSwipeableItemParams<Todo>();

      const handleDeleteOnPress = () => {
        close()

        if (todos === null) {
          Alert.alert(
            'Something went wrong',
            'There was a problem with updating a todo. Try again.'
            )
          return
        }

        setTodos((prevState) => {
          if (prevState === undefined) {
            throw new Error('Previous state was undefined')
          }

          if (prevState === null) {
            Alert.alert('Something went wrong', 'Try again')
            return prevState
          }

          const newState = prevState.filter(todo => {
            return todo.id !== item.id
          })

          return newState
        })
      }

      const handleEditOnPress = () => {
        close()
        navigation.navigate('Edit', { selectedTodo: item })
      }

      return (
        <View style={styles.underlayLeft}>
          <AnimatedPressable style={styles.deleteSwipeablePressable} onPress={() => handleDeleteOnPress()}>
            <CustomText style={styles.deleteSwipeableText}>Delete</CustomText>
          </AnimatedPressable>

          <AnimatedPressable style={styles.editSwipeablePressable} onPress={handleEditOnPress}>
            <CustomText style={styles.deleteSwipeableText}>Edit</CustomText>
          </AnimatedPressable>
        </View>
      );
    };

    const UnderlayRight = () => {
      const { close, item } = useSwipeableItemParams<Todo>();

      const handleOnPress = () => {
        close()

        if (todos === null) {
          Alert.alert(
            'Something went wrong',
            'There was a problem with updating a todo. Try again.'
            )
          return
        }

        // const updatedItems = todos.map(todo => {
        //   const updatedTodo = { ...item, isAccomplished: !item.isAccomplished } as Todo

        //   if (item.id === todo.id) {
        //     return updatedTodo
        //   } else {
        //     return todo
        //   }
        // });

        setTodos((prevState) => {
          if (prevState === undefined) {
            throw new Error('Previous state was undefined')
          }

          if (prevState === null) {
            Alert.alert('Something went wrong', 'Try again')
            return prevState
          }

          const newState = prevState.map(todo => {
            if (todo.id === item.id) {
              return { ...todo, isAccomplished: !todo.isAccomplished}
            }

            return todo
          })

          return newState
        })
      }

      return (
        <View style={styles.underlayRight}>
          <AnimatedPressable style={styles.todoneSwipeablePressable} onPress={() => handleOnPress()}>
            <CustomText style={styles.todoneSwipeableText}>To-Done</CustomText>
          </AnimatedPressable>
        </View>
      );
    };

    const renderItem: ListRenderItem<Todo> = useCallback(({ item }) => {
      return (
        <SwipeableItem
          key={item.id}
          item={item}
          renderUnderlayLeft={() => <UnderlayLeft item={item} />}
          renderUnderlayRight={() => <UnderlayRight />}
          snapPointsLeft={[150]}
          snapPointsRight={[100]}>
          <TodoItem navigationReference={navigation} selectedTodo={item} />
        </SwipeableItem>
      );
    }, []);

    return (
        <>
            {
                todos?.length !== undefined && todos?.length <= 0
                    ?
                    <View style={styles.emptyListContainer}>
                        <CustomText style={styles.emptyListHeader}>Hmm ... It's empty 🤨</CustomText>
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                      <FlatList renderItem={renderItem}
                        data={todos}
                        style={styles.listContainer}
                        keyExtractor={item => item.id}
                        overScrollMode="never" />
                    </View>
            }

        </>
    )
}