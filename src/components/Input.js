import React, { useContext, useRef } from 'react'
import InputContext from '../context/InputContext'

const Input = () => {
    const {todo, setTodo} = useContext(InputContext);

    const someInput = useRef()

    const onSubmited = (e) => {
        
        e.preventDefault();
        if(someInput.current.value.length < 1) return ;
        setTodo(someInput.current.value);
        someInput.current.value = ""
    }
  return (
    
    <form onSubmit={onSubmited}>
        <input ref={someInput}  type="text" placeholder='plan'  />
        <button>ADD</button>
    </form>

  )
}

export default Input