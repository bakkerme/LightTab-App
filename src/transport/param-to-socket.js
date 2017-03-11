import store from '../store';
import Socket from 'socket.io-client';
import {message} from ''

 export default class ParamToSocket {
  constructor() {
    this.socket = new Socket('http://localhost:48765');
    store.subscribe(() => this.onStoreChange());
  }
  
  onStoreChange() {
    console.log(store.getState());
  }
  
  sendChangeToSever(message) {
      socket.emit('message', {
        param: 'Tint',
        value: 90
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