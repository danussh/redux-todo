import React,{useState} from 'react'
import {increment,decrement} from "../actions/index"
import {useDispatch,useSelector} from "react-redux"
const Todo = () => {

    const [inputdata, setinputdata] = useState("")
    const value = useSelector(s => s.todoreducer)
    const dispatch = useDispatch() 
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>Add</button>
            <div>{value}</div>
            <button  onClick={()=>dispatch(decrement())}>Subtract</button>
        </div>
    )
}

export default Todo
