// 3D Renderer Abstraction
//
//
T3D = {
    VERSION: '1.0.0'
}
T3D.Renderer = function table3dView() {
    var container = document.createElement('div');
    document.body.appendChild(container);

    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var mouseX = 0;
    var mouseY = 0;

    // the scene
    var scene = new THREE.Scene();

    // the camera
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.set(0, 0, 700);

    // the renderer
    var renderer = new THREE.WebGLRenderer({
        //preserveDrawingBuffer: false,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.sortObjects = true;
    renderer.autoClearColor = true;
    renderer.shadowMap.enabled = false;
    container.appendChild(renderer.domElement);

    // Table geometry
    var tableMaterial = new THREE.MeshPhongMaterial({
        color: 0xdddddd,
        specular: 0x009900,
        shininess: 30,
        shading: THREE.SmoothShading
    });
    dirLight = new THREE.DirectionalLight(0xffffff, 0.2);
    dirLight.color.setHSL(0.1, 1, 0.95);
    dirLight.position.set(0.1, 0.1, 1);
    //dirLight.position.multiplyScalar(50);
    scene.add(dirLight);
    // new THREE.MeshBasicMaterial({
    //    color: 0x111111
    //});

    var radius = 750 / 2;
    var segments = 64;

    var circleGeometry = new THREE.CircleGeometry(radius, segments);
    var tableGeometry = new THREE.Mesh(circleGeometry, tableMaterial);
    scene.add(tableGeometry);

    // debug help
    AddAxisHeleper();

    // events
    window.addEventListener('resize', function() {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, false);

    document.addEventListener('mousemove', function(event) {
        mouseX = (event.clientX - windowHalfX) * 10;
        mouseY = (event.clientY - windowHalfY) * 10;
    }, false);

    function render() {
        //camera.position.x += (mouseX - camera.position.x) * .05;
        //camera.position.y += (-mouseY - camera.position.y) * .05;

        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    };

    // Public interface
    this.animate = function animate() {
        requestAnimationFrame(animate);
        if (Session.get('data_loaded')) {
            Session.set('data_loaded', false);
            load();
        }
        render();
    };

    function load() {
        var lineGeometry = new THREE.Geometry();
        var points = getPoints();
        var scale = 1000;
        for (i = 0; i < points.length; i++) {
            lineGeometry.vertices.push(new THREE.Vector3(
                points[i][0] * scale,
                points[i][1] * scale, (points[i][2] - 0.45) * scale
            ));
        }
        var lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00ff00,
            opacity: 1,
            linewidth: 10,
        });
        var line = new THREE.Line(lineGeometry, lineMaterial);
        scene.add(line);
    }

    function renderMarker(translation) {


    }

    function AddAxisHeleper() {
        axis = new THREE.AxisHelper(500);
        axis.position.set(0, 0, 0.45);
        scene.add(axis);
    }

    function getPoints() {
        var line = [];
        var markers = markerStore.find({}).fetch();
        console.log(JSON.stringify(markers));
        for (var index = 0; index < markers.length; index++) {
            line.push(markers[index].markers[0].translation);
        }
        return line;
    }
};