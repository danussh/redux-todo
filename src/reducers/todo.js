const initialdata = {
  list: [],
};

const todo = (state = initialdata, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
          ...state,
        list: [
            ...state.list,
          {
            data: action.payload,
            id:Math.random()
          },
        ],
      };
      case "DELETE_TODO":
        return {
          ...state,
          list:[...state.list.filter((val)=>{
           return val.id!==action.payload
          })]
        };
    default:
      return state;
  }
};

export default todo;
