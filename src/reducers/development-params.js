//actions
export const devParams = (state = {}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case 'UPDATE_PARAM':
      newState[action.param] = action.value;
      return newState;
    case 'REQUEST_PARAM_RANGE':
      newState[action.param] = action.value;
    default:
      return state;
  }
}