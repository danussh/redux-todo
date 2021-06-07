const initial = 0;

const todoreducer = (state = initial, action) => {
  switch (action.type) {
    case "INCREMENT":
        return state + action.payload
    case "DECREMENT":{
        return state - 1
    }
    default:
      return state
  }
};

export default todoreducer;
