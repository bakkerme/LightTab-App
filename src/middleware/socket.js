import ParamToSocket from '../transport/param-to-socket';

export default store => next => {
  let paramToSocket = new ParamToSocket();
  return action => {
    paramToSocket.sendChangeToSever(action.param, action.value);
    return next(action)
  }
}