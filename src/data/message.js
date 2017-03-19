import _ from 'lodash';

class Message {
  static TYPE = {
    UPDATE_PARAM: 'PARAM_UPDATE',
    REQUEST_PARAM_RANGE: 'REQUEST_PARAM_RANGE' 
  };
  
  constructor(type, payload) {
    if(!_.includes(Message.TYPE, type)) {
      console.error(type + ' is not a valid message type!');
    }

    
  }
};
