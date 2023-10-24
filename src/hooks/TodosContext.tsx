import { Children, FC, createContext, useState } from "react";
import { TodosContextType } from "../types/TodosContextType";
import { TodosProviderProps } from "../types/TodosProviderProps";
import { Todo } from "../types/Todo";

export const TodosContext = createContext<TodosContextType | null>(null)

export const TodosProvider: FC<TodosProviderProps> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[] | null>(new Array<Todo>)

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    )
}