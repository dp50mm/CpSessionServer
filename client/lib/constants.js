// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Changing Perspective Session Server',
  DESCRIPTION: 'Session server implementation'
};

AppSettings = {
    TABLE: {
        RADIUS: 375,
        COLOR: 0x111111
    },
    CAMERA: {
        ORTOGRAPHIC: false,
        FOV: 75,
        DISTANCE_TO_SURFACE: 450,
        CLIPP_FAR: 1000,
        CLIPP_NEAR: 1
    },
    MARKERS: {
        RADIUS: 45,
        HEIGHT: 80,
        COLOR: 0xffffff,
        MARKER: [
            {ID: 0, COLOR: 0xffffff, TEXTURE_PATH: '/images/icons/bird.png'},
            {ID: 1, COLOR: 0xffffff, TEXTURE_PATH: '/images/icons/euro.png'},
            {ID: 2, COLOR: 0xffffff, TEXTURE_PATH: '/images/icons/gift.png'},
            {ID: 3, COLOR: 0xffffff, TEXTURE_PATH: '/images/icons/puzzle.png'},
            {ID: 4, COLOR: 0xffffff, TEXTURE_PATH: '/images/icons/skruv.png'},
            {ID: 5, COLOR: 0xffffff, TEXTURE_PATH: '/images/icons/time.png'}
        ]
    },
    RENDER_SETTINGS: {
        SHADOWS: false,
        FLAT_STYLE: false,
        POINTLIGHTS: true
    },
    TRAIL_SETTINGS: {
        MAX_VERTICES = 1000,
        TRIM_DISTANCE = 10,
        LINE_WIDTH = 1  
    }
} 
