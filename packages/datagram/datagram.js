var dgram = Npm.require('dgram');

var defaultOpts = {
  port: 666,
  onListening: function() {
      console.log('UDP Socket listening on port: ' + this.port);
  },
  onMessage: function(message, remote) {
    console.log('datagram recived from: ' + remote.address + ':' + remote.port + ' packet length: ' + message.length);
  }
};

// exported function
Dgram = function(opts) {
  var server =  dgram.createSocket('udp4');
  _.extend(opts, defaultOpts);
  server.bind(opts.port);
  server.on('message', opts.onMessage);
  return server;
};