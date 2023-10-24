import { FC } from "react"
import { Pressable, Text, View } from "react-native"
import { ListItemProps } from "../types/ListItemProps"
import { styles } from "../utils/styles"
import { CustomText } from "./CustomText"

export const TodoItem: FC<ListItemProps> = ({ selectedTodo, navigationReference }) => {
    return (
            <View style={styles.listItemContainer}>
                <Pressable 
                    onPress={() => { navigationReference.navigate('Details', { selectedTodo: selectedTodo }) }}
                    style={styles.row}>
                    <CustomText style={styles.listItem}>{selectedTodo.title}</CustomText>
                    {
                        selectedTodo.isAccomplished
                        ?
                        <Text>✅</Text>
                        :
                        null
                    }
                </Pressable>
            </View>
    )
}