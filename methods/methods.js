if(Meteor.isServer) {
    var dgram = Npm.require('dgram');
}

var defaultOpts = {
  port: 666,
  onListening: function() {
      console.log('UDP Socket listening on port: ' + this.port);
  },
  onMessage: function(message, remote) {
    console.log('datagram recived from: ' + remote.address + ':' + remote.port + ' packet length: ' + message.length);
  }
};

Datagram = function(opts) {
  var server =  dgram.createSocket('udp4');
  _.extend(opts, defaultOpts);
  server.bind(opts.port);
  server.on('listening', Meteor.bindEnvironment(opts.onListening));
  server.on('message', Meteor.bindEnvironment(opts.onMessage));
  return server;
};

var udpService = null;

Meteor.methods({
    'startListening': function() {
        if (!Meteor.userId()) {
            console.log('not logged in');
            throw new Meteor.Error('Unauthorized access!', 'Not logged in');
        }
        // TODO: start udp stuff
        if (udpService === null) {
            udpService = new Datagram({});
            console.log('started listening for marker updates');
        }
        return true;
    },
    'stopListening': function() {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Unauthorized access!', 'Not logged in');
        }
        // TODO: stop udp and cleanup stuff
        if (udpService) {
            udpService.close();
            udpService = null;
            console.log('stopped listening for marker updates');
        }
        return true;
    },
    'startSession': function(sessionName) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Unauthorized access!', 'Not logged in');
        }
        // TODO: start adding data to session dbase
        return true;
    },
    'endSession': function(sessionName) {
        if (!Meteor.userId()) {
            throw new Meteor.Error('Unauthorized access!', 'Not logged in');
        }
        // TODO: end session
        return true;
    }
});