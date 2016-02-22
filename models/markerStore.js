markerStore = new Mongo.Collection('markerStore');

var markerSchema = new SimpleSchema({
    time: {
        type: Date,
        denyUpdate: true
    },
    tableId: {
        type: Number,
        denyUpdate: true
    },
    markerId: {
        type: Number,
        denyUpdate: true
    },
    translation: {
        type: [Number],
        minCount: 3,
        maxCount: 3,
        decimal: true
    },
    rotation: {
        type: [Number],
        minCount: 3,
        maxCount: 3,
        decimal: true
    },
    touched: {
        type: Boolean,
        optional: true
    }
});

var markerPositionSchema = new SimpleSchema({
    createdAt: {
        type: Date  
    },
    sessionId: {
        type: Number
    },
    markers: {
        type: [markerSchema],
        minCount: 1
    }
});

markerStore.attachSchema(markerPositionSchema);

// Collection2 already does schema checking
// Add custom permission rules if needed
if (Meteor.isServer) {
    markerStore.allow({
        insert: function() {
            return true;
        },
        update: function() {
            return true;
        },
        remove: function() {
            return true;
        }
    });
}