import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack"
import { Todo } from "./Todo"
import { RootStackParamList } from "./RootStackParamList"

export type ListProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home", 'Home'>
}