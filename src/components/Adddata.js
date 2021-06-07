import React,{useState} from 'react'
import { addTodo, deleteTodo,decrement } from '../actions/index'
import {useDispatch,useSelector} from "react-redux"
const Adddata = () => {
    const [Input, setInput] = useState("")
    const dispatch = useDispatch()
    const list = useSelector(state => state.todo.list)
    const deletetodo = (id)=>{
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setInput(e.target.value)} value={Input} />
            <button onClick={()=>dispatch(addTodo(Input),setInput(""))}>Click ME</button>
            {
            list.map((val,index)=>{
              return <div>
                  <li key={val.id}>{val.data}</li>  
                  <button onClick={()=>deletetodo(val.id)}>Delete</button>
              </div>
            })
        }
        </div>
    )
}

export default Adddata;
