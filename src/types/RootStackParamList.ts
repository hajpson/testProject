import { Todo } from "./Todo";

export type RootStackParamList = {
    Home: undefined,
    Details: { selectedTodo: Todo },
    New: undefined,
    Edit: { selectedTodo: Todo }
}