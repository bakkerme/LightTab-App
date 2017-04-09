//actions
export const devParams = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'UPDATE_PARAM':
      newState[action.param] = { ...newState[action.param], value: action.value };
      return newState;
      //@TODO create a sort of is loading state for the param ranges or something
    // case 'REQUEST_PARAM_RANGE':
    //   newState[action.param] = action.value;
    case 'UPDATE_PARAM_RANGE':
      newState[action.param] = { ...newState[action.param], range: action.value };
      return newState;
    default:
      return state;
  }
}