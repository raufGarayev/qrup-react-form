import React, {useContext} from 'react'
import InputContext from '../context/InputContext'

const Todo = () => {
    const {todo} = useContext(InputContext)

    return (
        <div className="todo">
            {todo}
        </div>    
    )
}

export default Todo