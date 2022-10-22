import React, {useContext} from 'react'
import InputContext from '../context/InputContext'
import Todo from './Todo'

const Todos = () => {
    const {todo} = useContext(InputContext);

    const elems = [todo].map(item => {
      if(item.length > 0)
        return (
          <Todo />
        )

    })
    return (
    <div className='todos'>
        {elems}
    </div>
  )
}

export default Todos