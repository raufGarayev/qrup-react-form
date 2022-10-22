import React from 'react'
import { InputProvider } from './context/InputContext'
import Input from './components/Input'
import Todos from './components/Todos'


const App = () => {
  return (
    <div className="container">
      <InputProvider>
        <Input />
        <Todos />
      </InputProvider>
    </div>

  )
}

export default App