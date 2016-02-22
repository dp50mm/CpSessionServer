Template['admin'].helpers({
});

Template['admin'].events({
    'click .start-listening': function (event) {
        Meteor.call('startListening', function (err, res) {
            if(err) {
                // Probably already listening
                console.log(err.error);
            }
        });
    },
    'click .stop-listening': function (event) {
        Meteor.call('stopListening', function (err, res) {
            if(err) {
                // Probably not listening
                console.log(err.error);
            }
        });
    }
});
