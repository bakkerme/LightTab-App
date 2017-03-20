import ParamToSocket from '../transport/param-to-socket';
import Message from '../data/message';

export default store => next => {
  let paramToSocket = new ParamToSocket();
  return action => {
    let message = new Message(Message.TYPE.UPDATE_PARAM, action);
    paramToSocket.sendChangeToSever(message);
    return next(action)
  }
}