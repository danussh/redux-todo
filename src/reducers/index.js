import todoreducer from "./todoreducer"
import todo from "./todo"

import {combineReducers} from "redux"

const rootReducer = combineReducers({
   todoreducer,
   todo
})

export default rootReducer