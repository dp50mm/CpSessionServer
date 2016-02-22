function loadFixture(fixtures, collection) {
    collection.remove({});
    for (var i = 0; i < fixtures.length; i += 1) {
        collection.insert(fixtures[i], function(err, res) {
            if (err) {
                console.log(err.invalidKeys);
            }
        });
    }
}

Meteor.startup(function() {
    loadFixture(Fixtures['markerTestSession'], markerStore);
});