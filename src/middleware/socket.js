import ParamToSocket from '../transport/param-to-socket';
import Message from '../data/message';

export default store => next => {
  let paramToSocket = new ParamToSocket();
  return action => {
    if (action.type === 'UPDATE_PARAM' || action.type === 'REQUEST_PARAM_RANGE') {
      let message = new Message(action.type, action);
      paramToSocket.sendChangeToSever(message);
    }
    return next(action)

  }
}