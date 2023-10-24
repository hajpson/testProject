import { useContext } from "react"
import { TodosContext } from "./TodosContext"

export const useTodos = () => {
    const context = useContext(TodosContext)

    if (!context) {
        throw new Error('Context is null')
    }

    return context
}