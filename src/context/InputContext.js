import { createContext, useState } from "react";

const InputContext = createContext()

export const InputProvider = ({children}) => {
    const [todo, setTodo] = useState("")

    const values = {
        todo,
        setTodo
    }

    return <InputContext.Provider value={values}>{children}</InputContext.Provider>
}

export default InputContext