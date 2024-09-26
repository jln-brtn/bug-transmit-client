import { Transmit } from '@adonisjs/transmit-client';

const transmit = new Transmit({
  baseUrl: 'https://bug-transmit-client.free.beeceptor.com',
  beforeSubscribe: (request) => {
    console.log('test')
    request.credentials = 'omit'; 
    request.headers.append('ping', 'pong')
  },
});
