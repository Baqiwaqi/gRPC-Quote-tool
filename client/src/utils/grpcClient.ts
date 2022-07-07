import grpc from 'grpc-web'
import { QuoteToolClient } from '../pb/quote_grpc_web_pb';

// time in hours: minutes : seconds
var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds();

const SimpleUnaryInterceptor = function () { };

SimpleUnaryInterceptor.prototype.intercept = function (request: any, invoker: any) {
  console.log("hallo");

  console.log('start', time);
  // Update the request message before the RPC.
  const reqMsg = request.getRequestMessage();
  reqMsg.setMessage('[Intercept request]' + reqMsg.getMessage());
  // After the RPC returns successfully, update the response.
  return invoker(request).then((response: any) => {
    // You can also do something with response metadata here.
    console.log(response.getMetadata());
    console.log('end', time);
  });
}


// client binding interceptor
const host = 'http://localhost:9090';
const credentials = null;
const client = new QuoteToolClient(host, credentials, { interceptors: [ SimpleUnaryInterceptor()] });
export default client;

