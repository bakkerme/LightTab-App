import _ from 'lodash';

export default class Message {
  static TYPE = {
    UPDATE_PARAM: 'PARAM_UPDATE',
    REQUEST_PARAM_RANGE: 'REQUEST_PARAM_RANGE' 
  };

  type = null;
  payload = null;
  
  constructor(type, payload) {
    if(!_.includes(Message.TYPE, type)) {
      console.error(type + ' is not a valid message type!');
    }

    this.type = type;
    this.payload = payload;
  }

  transformToTransportable() {
    return {
      type: this.type,
      payload: this.payload 
    };
  }

  getPayload() {
    return this.payload;
  }
};
