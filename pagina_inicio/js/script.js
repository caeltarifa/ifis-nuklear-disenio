var container, stats;
var camera, controls, scene, renderer;
var info;
var cube;
var sphereTab = [];
var objects = [];
var parent2;
var sun;
var sun2;
var sun3;
var currentcolor;
var cubeNul;
var earthPivot;
var earthPivot3;
var earthPivot5;
var mesh;
var planetViewed = 0;
init();
animate();
$(window).on('load', function() {
    TweenMax.to($('#welcome'), 1, {
        css: {
            opacity: 1
        },
        ease: Quad.easeInOut,
    });
   TweenMax.to($('#social'), 0.5, {
        css: {
            bottom:'20px'
        },delay:0.5,
        ease: Quad.easeInOut,
    });
    TweenMax.to($('#border'), 0.5, {
        css: {
            height: '200px',
        },
        delay: 0.5,
        ease: Quad.easeInOut,
    });
   
});

function hideWelcome() {
    TweenMax.to($('#welcome'), 0.5, {
        css: {
            opacity: 0
        },
        ease: Quad.easeInOut
    });
    TweenMax.to($('#welcome'), 0.5, {
        css: {
            display: 'none'
        },
        delay: 1,
        ease: Quad.easeInOut
    });
}

function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 68;
    controls = new THREE.OrbitControls(camera);
    controls.maxDistance = 300;
    controls.minDistance = 30;
    scene = new THREE.Scene();
    var geoSphere = new THREE.SphereGeometry(Math.random() * 1, 20, 20);
    for (var i = 0; i < 500; i++) {
        // randRadius = Math.random()*30+10;
        lumiereS = new THREE.MeshPhongMaterial({
            emissive: '#fff'
        });
        sphereTab.push(new THREE.Mesh(new THREE.SphereGeometry(Math.random() * 1, 20, 20), lumiereS));
    }
    var posX = -3000;
    var posY = -3000;
    for (var i = 0; i < sphereTab.length; i++) {
        sphereTab[i].position.set(Math.random() * 600 - 300, Math.random() * 600 - 300, Math.random() * 600 - 300);
        scene.add(sphereTab[i]);
    }
    //////Sun////////
    var pinkMat = new THREE.MeshPhongMaterial({
        color: 0x0360ba,
        emissive: 0x0360ba,
        shininess: 30,
        shading: THREE.FlatShading,
        transparent: 1,
        opacity: 1
    });
    var pinkMat2 = new THREE.MeshPhongMaterial({
        color: 0x008f39,
        emissive: 0x008f39,
        shininess: 30,
        shading: THREE.FlatShading,
        transparent: 1,
        opacity: 1
    });


    var geometry = new THREE.BoxGeometry(9,9,0,1,1,1);
    var geometry2 = new THREE.BoxGeometry(9,9,0,1,1,1);
    var geometry4 = new THREE.BoxGeometry(9,9,0,1,1,1);
    var geometry5 = new THREE.BoxGeometry(9,9,0,1,1,1);
    var geometry6 = new THREE.BoxGeometry(9,9,0,1,1,1);
    var geometry7 = new THREE.BoxGeometry(9,9,0,1,1,1);

    sun = new THREE.Mesh(new THREE.IcosahedronGeometry(13, 5), pinkMat);
    scene.add(sun);
    objects.push(sun);
    sun2 = new THREE.Mesh(new THREE.IcosahedronGeometry(13, 5), pinkMat2);
    sun2.rotation.x = 1;
    scene.add(sun2);
    objects.push(sun2);
    sun3 = new THREE.Mesh(new THREE.IcosahedronGeometry(13, 5), pinkMat2);
    sun3.rotation.x = 1;
    scene.add(sun2);
    objects.push(sun3);
 
    earthPivot3 = new THREE.Object3D();
    sun.add(earthPivot3);

    var radius = 11;
    var tubeRadius = 0.03;
    var radialSegments = 8 * 10;
    var tubularSegments = 6 * 15;
    var arc = Math.PI * 3;
    var geometry3 = new THREE.TorusGeometry(radius, tubeRadius, radialSegments, tubularSegments, arc);
    var material3 = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        shading: THREE.FlatShading,
    });
    mesh = new THREE.Mesh(geometry3, material3);
    earthPivot3.add(mesh);
    
    ///// Avion Verde /////
    const texture = new THREE.TextureLoader().load('img/aviones/avion_1.png');
    const material = new THREE.MeshBasicMaterial({map:texture,color:0x74b9ff});

    earthPivot = new THREE.Object3D();
    sun.add(earthPivot);
    var earth = new THREE.Mesh(geometry, material);
    earth.position.x = 19;
    earthPivot.add(earth);
    objects.push(earth);

    ///// Avion Rosado /////
    const texture2 = new THREE.TextureLoader().load('img/aviones/avion_2.png');
    const material2 = new THREE.MeshBasicMaterial({map:texture2,color:0xDB68B1});
    
    earthPivot2 = new THREE.Object3D();
    sun.add(earthPivot2);
    var earth2 = new THREE.Mesh(geometry2, material2);
    earth2.position.x = 29;
    earthPivot2.add(earth2);
    objects.push(earth2);

    ///// Avion Celeste 4 turbinas /////
    const texture4 = new THREE.TextureLoader().load('img/aviones/avion_3.png');
    const material4 = new THREE.MeshBasicMaterial({map:texture4,color:0x55efc4});

    earthPivot4 = new THREE.Object3D();
    sun.add(earthPivot4);
    var earth3 = new THREE.Mesh(geometry4, material4);
    earth3.position.x = 39;
    earthPivot4.add(earth3);
    objects.push(earth3);

    ///// Avion Verde /////
    const texture6 = new THREE.TextureLoader().load('img/aviones/avion_4.png');
    const material6 = new THREE.MeshBasicMaterial({map:texture6,color:0xA3D750});
    
    earthPivot6 = new THREE.Object3D();
    sun.add(earthPivot6);
    var earth6 = new THREE.Mesh(geometry6, material6);
    earth6.position.x = -29;
    earthPivot6.add(earth6);
    objects.push(earth6);

    ///// Avion Celeste 2 turbinas /////
    const texture7 = new THREE.TextureLoader().load('img/aviones/avion_5.png');
    const material7 = new THREE.MeshBasicMaterial({map:texture7,color:0xa29bfe});
    
    earthPivot7 = new THREE.Object3D();
    sun.add(earthPivot7);
    var earth7 = new THREE.Mesh(geometry7, material7);
    earth7.position.x = -19;
    earthPivot7.add(earth7);
    objects.push(earth7);

    // lights
    light = new THREE.DirectionalLight(0x4f4f4f);
    light.position.set(4, 4, 4);
    scene.add(light);
    light = new THREE.DirectionalLight(0x4f4f4f);
    light.position.set(-4, -4, -4);
    scene.add(light);
    //render
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.sortObjects = false;
    renderer.setClearColor(0x131A3D, 1);
    renderer.setSize(window.innerWidth, window.innerHeight);
    stats = new Stats();
    container = document.getElementById('container');
    container.appendChild(renderer.domElement);
    window.addEventListener('resize', onWindowResize, false);
    info = document.getElementById('contentTitle');
    subtitle = document.getElementById('subtitle');
    description = document.getElementById('description')
    var univers = document.getElementById('univers');
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function setFromCamera(raycaster, coords, origin) {
    raycaster.ray.origin.copy(camera.position);
    raycaster.ray.direction.set(coords.x, coords.y, 0.5).unproject(camera).sub(camera.position).normalize();
}

function onMouseDown(event) {
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
    mouse.y = -(event.clientY / renderer.domElement.height) * 2 + 1;
    setFromCamera(raycaster, mouse, camera);
    var intersects = raycaster.intersectObjects(objects);
    currentcolor = intersects[0].object.material.color.getHex();
    if (intersects.length > 0) {
        switch (intersects[0].object.geometry.type) {
            case 'IcosahedronGeometry':
                if (currentcolor == 0x0360ba || currentcolor == 0x008f39) {

                    if (planetViewed == 0) {
                        hideWelcome();
                        planetViewed = 1;
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            delay:0.5,
                            ease: Quad.easeInOut
                        });

                        TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 1,
                            ease: Quad.easeInOut,
                        });                      
                        
                        info.innerHTML = "Bienvenido a mi <span>MUNDO.</span>";
                 
                        description.innerHTML = "Estas listo para <span id='mundo1'>EMPEZAR</span> a navegar.<br/><br/><div>Haga clic en los otros <span id='mundo2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('mundo1').style.color="#27ae60";
                        document.getElementById('mundo2').style.color="#2980b9";
                    }
                    if (planetViewed == 2 || planetViewed==3 || planetViewed==4 || planetViewed==5 || planetViewed==6) {
                        planetViewed = 1;
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            ease: Quad.easeInOut
                        });
                        TweenMax.to($('#border'), 0.2, {
                            css: {
                                height: '200px'
                            },delay:1,
                            ease: Quad.easeInOut,
                        });
                        TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 0.5,
                            ease: Quad.easeInOut,
                        });

                        info.innerHTML = "Bienvenido a mi <span>MUNDO.</span>";
                 
                        description.innerHTML = "Estas listo para <span id='mundo1'>EMPEZAR</span> a navegar.<br/><br/><div>Haga clic en los otros <span id='mundo2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('mundo1').style.color="#27ae60";
                        document.getElementById('mundo2').style.color="#2980b9";
                    }
                }
            break;
            
            case 'BoxGeometry':
                if (currentcolor == 0x74b9ff) {
                    if (planetViewed == 0) {
                        hideWelcome();
                        planetViewed = 3;
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            delay:0.5,
                            ease: Quad.easeInOut
                        });

                        TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 1,
                            ease: Quad.easeInOut,
                        });                      
                        
                        info.innerHTML = "Avion <span id='couleur'>BOSON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='fucsia'>BOZON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='fucsia2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#74b9ff";
                        document.getElementById('fucsia').style.color="#74b9ff";
                        document.getElementById('fucsia2').style.color="#74b9ff";
                    }
                    if (planetViewed == 1 || planetViewed == 2 || planetViewed == 4 || planetViewed==5 || planetViewed==6) {

                        planetViewed = 3;
                        info.innerHTML = "Avion <span id='couleur'>BOSON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='fucsia'>BOSON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='fucsia2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#74b9ff";
                        document.getElementById('fucsia').style.color="#74b9ff";
                        document.getElementById('fucsia2').style.color="#74b9ff";

                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            ease: Quad.easeInOut
                        });

                        TweenMax.to($('#border'), 0.2, {
                            css: {
                                height: '200px'
                            },delay:1,
                            ease: Quad.easeInOut,
                        });
                         TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 0.5,
                            ease: Quad.easeInOut,
                        });
                    }
                } 
                if (currentcolor == 0xDB68B1) {
                    if (planetViewed == 0) {
                        hideWelcome();
                        planetViewed = 2;
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            delay:0.5,
                            ease: Quad.easeInOut
                        });

                        TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 1,
                            ease: Quad.easeInOut,
                        });                      
                        
                        info.innerHTML = "Avion <span id='couleur'>GRAVITON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='celeste'>GRAVITON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='celeste2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#DB68B1";
                        document.getElementById('celeste').style.color="#DB68B1";
                        document.getElementById('celeste2').style.color="#DB68B1";
                    }
                    if (planetViewed == 1 || planetViewed==3 || planetViewed==4 || planetViewed==5 || planetViewed==6) {
                        planetViewed = 2;
                        info.innerHTML = "Avion <span id='couleur'>GRAVITON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='celeste'>GRAVITON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='celeste2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#DB68B1";
                        document.getElementById('celeste').style.color="#DB68B1";
                        document.getElementById('celeste2').style.color="#DB68B1";
                     
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            ease: Quad.easeInOut
                        });
                        TweenMax.to($('#border'), 0.2, {
                            css: {
                                height: '200px'
                            },delay:1,
                            ease: Quad.easeInOut,
                        });
                       
                         TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 0.5,
                            ease: Quad.easeInOut,
                        });
                    }
                }
                if (currentcolor == 0x55efc4) {
                    if (planetViewed == 0) {
                        hideWelcome();
                        planetViewed = 4;
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            delay:0.5,
                            ease: Quad.easeInOut
                        });

                        TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 1,
                            ease: Quad.easeInOut,
                        });                      
                        
                        info.innerHTML = "Avion <span id='couleur'>LUCZON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='verde'>LUCZON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='verde2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#55efc4";
                        document.getElementById('verde').style.color="#55efc4";
                        document.getElementById('verde2').style.color="#55efc4";
                    }
                    if (planetViewed == 1 || planetViewed==2 || planetViewed==3 || planetViewed==5 || planetViewed==6) {
                        planetViewed = 4;
                        info.innerHTML = "Avion <span id='couleur'>LUCZON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='verde'>LUCZON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='verde2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#55efc4";
                        document.getElementById('verde').style.color="#55efc4";
                        document.getElementById('verde2').style.color="#55efc4";

                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            ease: Quad.easeInOut
                        });

                        TweenMax.to($('#border'), 0.1, {
                            css: {
                                height: '200px'
                            },delay:1,
                            ease: Quad.easeInOut,
                        });
                         TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 0.5,
                            ease: Quad.easeInOut,
                        });
                    }
                }
                if (currentcolor == 0xA3D750) {
                    if (planetViewed == 0) {
                        hideWelcome();
                        planetViewed = 5;
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            delay:0.5,
                            ease: Quad.easeInOut
                        });

                        TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 1,
                            ease: Quad.easeInOut,
                        });                      
                        
                        info.innerHTML = "Avion <span id='couleur'>NUKLEAR.</span>";
                 
                        description.innerHTML = "Vuela por <span id='verde'>NUKLEAR</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='verde2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#A3D750";
                        document.getElementById('verde').style.color="#A3D750";
                        document.getElementById('verde2').style.color="#A3D750";
                    }
                    if (planetViewed == 1 || planetViewed==2 || planetViewed==3 || planetViewed==4 || planetViewed==6) {
                        planetViewed = 5;
                        info.innerHTML = "Avion <span id='couleur'>NUKLEAR.</span>";
                 
                        description.innerHTML = "Vuela por <span id='verde'>NUKLEAR</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='verde2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#A3D750";
                        document.getElementById('verde').style.color="#A3D750";
                        document.getElementById('verde2').style.color="#A3D750";

                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            ease: Quad.easeInOut
                        });

                        TweenMax.to($('#border'), 0.1, {
                            css: {
                                height: '200px'
                            },delay:1,
                            ease: Quad.easeInOut,
                        });
                         TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 0.5,
                            ease: Quad.easeInOut,
                        });
                    }
                }  
                if (currentcolor == 0xa29bfe) {
                    if (planetViewed == 0) {
                        hideWelcome();
                        planetViewed = 6;
                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            delay:0.5,
                            ease: Quad.easeInOut
                        });

                        TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 1,
                            ease: Quad.easeInOut,
                        });                      
                        
                        info.innerHTML = "Avion <span id='couleur'>UPSILON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='verde'>UPSILON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='verde2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#a29bfe";
                        document.getElementById('verde').style.color="#a29bfe";
                        document.getElementById('verde2').style.color="#a29bfe";
                    }
                    if (planetViewed == 1 || planetViewed==2 || planetViewed==3 || planetViewed==4 || planetViewed==5) {
                        planetViewed = 6;
                        info.innerHTML = "Avion <span id='couleur'>UPSILON.</span>";
                 
                        description.innerHTML = "Vuela por <span id='verde'>UPSILON</span> por 20 años.<br/><br/><div>Haga clic en los otros <span id='verde2'>AVIONES</span> para obtener más información...<div>";
                        document.getElementById('couleur').style.color="#a29bfe";
                        document.getElementById('verde').style.color="#a29bfe";
                        document.getElementById('verde2').style.color="#a29bfe";

                        TweenMax.from($('#content'), 0.5, {
                            css: {
                                left: '-500px'
                            },
                            ease: Quad.easeInOut
                        });

                        TweenMax.to($('#border'), 0.1, {
                            css: {
                                height: '200px'
                            },delay:1,
                            ease: Quad.easeInOut,
                        });
                         TweenMax.from($('#border'), 0.5, {
                            css: {
                                height: '0px'
                            },
                            delay: 0.5,
                            ease: Quad.easeInOut,
                        });
                    }
                } 
            break;
        }
    }else{
        console.log('no ingresa');
    }
    
}
document.addEventListener('mousedown', onMouseDown, false);

function animate() {
    ;
    var timer = 0.00001 * Date.now();
    for (var i = 0, il = sphereTab.length; i < il; i++) {
        var sfere = sphereTab[i];
        sfere.position.x = 400 * Math.sin(timer + i);
        //sfere.position.y= 500 * Math.sin( timer + i * 1.1 );
        sfere.position.z = 400 * Math.sin(timer + i * 1.1);
    }
    //sun.rotation.x += 0.008;//0.008->x
    sun2.rotation.y += 0.009;//0.009->y
    sun3.rotation.z += 0.01;//0.01->z

    earthPivot.rotation.z += 0.005;//0.006
    earthPivot2.rotation.z -= 0.007;//0.01
    earthPivot3.rotation.y += 0.007;//0.007->y
    earthPivot4.rotation.z += 0.009;//0.008*/
    earthPivot6.rotation.z -= 0.007;
    earthPivot7.rotation.z += 0.005;
    requestAnimationFrame(animate);
    controls.update();
    render();
}

function render() {
    // }
    renderer.render(scene, camera)
}