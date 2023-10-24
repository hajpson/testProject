import { Alert, Button, NativeSyntheticEvent, Pressable, TextInput, TextInputChangeEventData, View } from "react-native"
import { styles } from "../utils/styles"
import { colors } from "../utils/colors"
import { MotiView, Text } from "moti"
import { FC, useMemo, useState } from "react"
import { DetailsInputValues } from "../types/DetailsInputValues"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../types/Todo"
import uuid from 'react-native-uuid';
import { NewTodoPageProps } from "../types/NewTodoPageProps"
import { MotiPressable } from "moti/interactions"
import { AnimatedPressable } from "../components/AnimatedPressable"

export const NewTodoPage: FC<NewTodoPageProps> = ({ navigation }) => {
    const { todos, setTodos } = useTodos()
    const [inputValues, setInputValues] = useState<DetailsInputValues>({
        firstInputValue: '', secondInputValue: ''
    })

    const handleInputValueChange = (
        text: NativeSyntheticEvent<TextInputChangeEventData>,
        isTitle: boolean
    ): void => {
        const value = text.nativeEvent.text

        if (isTitle) {
            setInputValues((prevState) => ({ ...prevState, firstInputValue: value }))
            return
        }

        setInputValues((prevState) => ({ ...prevState, secondInputValue: value }))
    }

    const handleOnPress = () => {
        if (inputValues.firstInputValue === ''
            || inputValues.secondInputValue === '') {
            Alert.alert(
                'Some values are empty',
                'Hey! You haven\'t filled everything!'
            )

            return
        }

        if (todos === null) {
            Alert.alert('Error', 'Something\'s wrong with the data')
            return
        }

        setTodos([
            ...todos,
            {
                id: uuid.v4(),
                title: inputValues.firstInputValue,
                description: inputValues.secondInputValue,
                isAccomplished: false
            } as Todo
        ])

        navigation.navigate('Home')
        Alert.alert(
            'Todo added',
            `Todo titled ${inputValues.firstInputValue} added correctly`
        )
    }

    return (
        <MotiView
            from={{
                scale: 0.8,
                opacity: 0
            }}
            animate={{
                scale: 1,
                opacity: 1
            }}
            transition={{ type: "timing", duration: 500 }}
            delay={200}
            style={{ marginTop: 6 }}>
            <TextInput
                placeholderTextColor={colors.lightGray}
                style={styles.textInput}
                placeholder="Title"
                onChange={text => handleInputValueChange(text, true)} />
            <TextInput
                placeholderTextColor={colors.lightGray}
                style={styles.textInput}
                placeholder="Description"
                onChange={text => handleInputValueChange(text, false)} />
            <AnimatedPressable
                style={styles.mainPressable}
                onPress={handleOnPress}>
                <Text style={styles.fabTitle}>Add</Text>
            </AnimatedPressable>
        </MotiView>
    )
}