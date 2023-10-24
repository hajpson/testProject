import { Todo } from "./Todo"

export type TodosContextType = {
    todos: Todo[] | null,
    setTodos: React.Dispatch<React.SetStateAction<Todo[] | null>>
}