var stage;
var renderer;
var loader;
var table;

Template['live'].helpers({
});

Template['live'].events({
});


Template['live'].onCreated(function () {
  // set up local reactive variables
  //this.highlightedPicture = new ReactiveVar(null);

});

Template['live'].onRendered(function() {
    renderer = new PIXI.WebGLRenderer(500, 500, { backgroundColor: 0xD8ECEA, antialias: true });
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();
    loader = PIXI.loader
        .add('table', 'images/WebsiteMock.png')
        .add('bird', 'images/icons/bird.png')
        .add('euro', 'images/icons/euro.png')
        .add('gift', 'images/icons/gift.png')
        .add('puzle', 'images/icons/puzle.png')
        .add('skruv', 'images/icons/skruv.png')
        .add('time', 'images/icons/time.png')
        .once('complete', function(loader, resources) { init(); })
        .load();
});

Template['live'].onDestroyed(function () {
  // deregister from some central store
});

// Pixi setup

//var scale = pixiUtil.scaleToWindow(renderer.view);


// Rescale
//window.addEventListener("resize", function () {
//	scale = pixiUtil.scaleToWindow(renderer.view);
//});

// Pixi Resource loading

function init() {
	//var bunny = new PIXI.Sprite(PIXI.loader.resources.bunny.texture);
	//var marker = new PIXI.Sprite(PIXI.loader.resources.marker.texture);
	//var table = new PIXI.Sprite(PIXI.loader.resources.table.texture);
	
	// Table geometry
	table = new PIXI.Graphics();
	table.beginFill('green');
	table.lineStyle(10, 'blue', 1);
	table.drawCircle(500 / 2, 500 / 2, 500 / 2);
	table.endFill();
	stage.addChild(table);

    // Mock texture for now
	//var table = new PIXI.Sprite(PIXI.loader.resources.table.texture);
	//stage.addChild(table);
	
	

	// Start animation loop
	update();
}

function update() {
	
	// Update markers
	//var markers = globalStore.getLastKnownMarkers(); //array of last known markers position
	//for (var i = 0; i < markers.length; i++) {
	//	markerRenderer.update(markers[i]);    
	//};
	table.x += 1;
    if(table.x > 500)
        table.x = 0;
	//markerRenderer.renderToTexture();
	
	// Render
	renderer.render(stage);
	requestAnimationFrame(update);
}