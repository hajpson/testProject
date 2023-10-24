import { FC, useState } from "react";
import { EditPageProps } from "../types/EditPageProps";
import { MotiView } from "moti";
import { Alert, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData } from "react-native";
import { colors } from "../utils/colors";
import { styles } from "../utils/styles";
import { AnimatedPressable } from "../components/AnimatedPressable";
import { useTodos } from "../hooks/useTodos";
import { DetailsInputValues } from "../types/DetailsInputValues";

export const EditPage: FC<EditPageProps> = ({ route, navigation }) => {
    const selectedTodo = route.params?.selectedTodo

    const { todos, setTodos } = useTodos()
    const [inputValues, setInputValues] = useState<DetailsInputValues>({
        firstInputValue: selectedTodo.title, secondInputValue: selectedTodo.description
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

        const updatedItems = todos.map((todo) => {
            if (todo.id === selectedTodo.id) {
                return { 
                    ...todo,
                    title: inputValues.firstInputValue,
                    description: inputValues.secondInputValue
                }
            } else {
                return todo
            }
        })

        setTodos(updatedItems)

        navigation.navigate('Home')
        Alert.alert(
            'Todo updated',
            `Todo titled ${inputValues.firstInputValue} updated correctly`
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
                value={inputValues.firstInputValue}
                onChange={text => handleInputValueChange(text, true)} />
            <TextInput
                placeholderTextColor={colors.lightGray}
                style={styles.textInput}
                placeholder="Description"
                value={inputValues.secondInputValue}
                onChange={text => handleInputValueChange(text, false)} />
            <AnimatedPressable
                style={styles.mainPressable}
                onPress={handleOnPress}>
                <Text style={styles.fabTitle}>Update</Text>
            </AnimatedPressable>
        </MotiView>
    )
}