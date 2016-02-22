// The "||" notation doesn't work yet
Fixtures = typeof Fixtures !== "undefined" ? Fixtures : {};

Fixtures.dummyFixture = [
  { 'foo' : 'bar', 'another' : 'value' },
  { 'foo' : 'bar2', 'another' : 'value2' }
];

Fixtures.markerTestSession = [
    {
        createdAt: new Date(0),
        sessionId: 1,
        markers: [{
            time: new Date(0),
            tableId: 0,
            markerId: 0,
            translation: [0, 0, 0.45],
            rotation: [0, 0, 0],
            touched: false
        }]
    },
    {
        createdAt: new Date(100),
        sessionId: 1,
        markers: [{
            time: new Date(100),
            tableId: 0,
            markerId: 0,
            translation: [0, 0.1, 0.45],
            rotation: [0, 0, 0],
            touched: false
        }]
    },
    {
        createdAt: new Date(200),
        sessionId: 1,
        markers: [{
            time: new Date(200),
            tableId: 0,
            markerId: 0,
            translation: [0, 0.2, 0.45],
            rotation: [0, 0, 0],
            touched: false
        }]
    },
    {
        createdAt: new Date(1000),
        sessionId: 1,
        markers: [{
            time: new Date(1000),
            tableId: 0,
            markerId: 0,
            translation: [0.2, 0.2, 0.45],
            rotation: [0, 0, 0],
            touched: false
        }]
    },
    {
        createdAt: new Date(2000),
        sessionId: 1,
        markers: [{
            time: new Date(2000),
            tableId: 0,
            markerId: 0,
            translation: [-0.2, 0.2, 0.45],
            rotation: [0, 0, 0],
            touched: false
        }]
    },
    {
        createdAt: new Date(3000),
        sessionId: 1,
        markers: [{
            time: new Date(3000),
            tableId: 0,
            markerId: 0,
            translation: [0.4, 0.4, 0.45],
            rotation: [0, 0, 0],
            touched: false
        }]
    }
]