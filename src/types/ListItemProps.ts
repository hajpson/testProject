import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"
import { Todo } from "./Todo"
import { RootStackParamList } from "./RootStackParamList"

export type ListItemProps = {
    selectedTodo: Todo,
    navigationReference: NativeStackNavigationProp<RootStackParamList, "Home", 'Home'>
}