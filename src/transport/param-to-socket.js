import Socket from 'socket.io-client';

export default class ParamToSocket {
  constructor() {
    this.socket = new Socket('http://localhost:48765');
    // this.socket = new Socket('http://10.0.0.86:48765');
    this.startListener();
    this.onMessageCallback = null;
  }

  registerOnMessageCallback (cb) {
    if(typeof cb === 'function') {
      this.onMessageCallback = cb; 
    } else {
      console.error('ParamToSocket message callback is required to be a function');
    }
  }

  startListener() {
    this.socket.on('message', function (data) {
      console.log('message recieved', data);
      if(this.onMessageCallback) {
        this.onMessageCallback(data);
      }
    });
  }

  sendChangeToSever(message) {
    this.socket.emit('message', message.transformToTransportable());

    // this.socket.on('connect', function () {

    // });
    // socket.on('event', function (data) {
    //   console.log(data);
    // });
    // socket.on('disconnect', function () {
    //   console.log('disconnect')
    // })
  }
}