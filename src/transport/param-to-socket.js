import Socket from 'socket.io-client';

 export default class ParamToSocket {
  constructor() {
    this.socket = new Socket('http://localhost:48765');
    // this.socket = new Socket('http://10.0.0.116:48765');
  }
  
  sendChangeToSever(param, value) {
      this.socket.emit('message', {
        param: param,
        value: value
      })
    
    // this.socket.on('connect', function () {
      
    // });
    // socket.on('message', function (data) {
    //   console.log(data);
    // });
    // socket.on('event', function (data) {
    //   console.log(data);
    // });
    // socket.on('disconnect', function () {
    //   console.log('disconnect')
    // })
  }
}