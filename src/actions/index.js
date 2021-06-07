export const increment = (data)=>{
    return {
        type:"INCREMENT",
        payload:data
    }
}
export const decrement = (data)=>{
    return {
        type:"DECREMENT",
        payload :data
    }
}

export const addTodo = (data)=>{
    return {
        type:"ADD_TODO",
        payload:data
    }
}
export const deleteTodo = (data)=>{
    return {
        type:"DELETE_TODO",
        payload:data
    }
}