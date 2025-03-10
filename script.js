window.onload = function() {
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1YjY2OWE1Yy0wYjc1LTQ1YTQtODMxZi1mZTQwOWQwOGEzZWYiLCJpZCI6MTUwODQ0LCJpYXQiOjE2ODgzNDY0MTh9.dEoQJsxp89FmreUbbxZiSjduEt9OKWZJC1jUJGCaI64';
    
    // Initialize viewer with improved settings
    const viewer = new Cesium.Viewer('cesiumContainer', {
        imageryProvider: new Cesium.createWorldImagery({
            style: Cesium.IonWorldImageryStyle.AERIAL
        }),
        baseLayerPicker: false,
        requestRenderMode: true,
        creditContainer: document.createElement('div'),
        animation: false,
        geocoder: false,
        timeline: false,
        sceneModePicker: false,
        navigationHelpButton: true,
        homeButton: false,
        infoBox: false,
        selectionIndicator: false,
        terrainProvider: Cesium.createWorldTerrain()
    });

    // Camera controls
    viewer.scene.screenSpaceCameraController.enableRotate = true;
    viewer.scene.screenSpaceCameraController.enableTranslate = true;
    viewer.scene.screenSpaceCameraController.enableZoom = true;
    viewer.scene.screenSpaceCameraController.enableTilt = true;
    viewer.scene.screenSpaceCameraController.enableLook = true;

    viewer.scene.screenSpaceCameraController.rotateEventTypes = [
        Cesium.CameraEventType.LEFT_DRAG,
        Cesium.CameraEventType.RIGHT_DRAG,
        Cesium.CameraEventType.MIDDLE_DRAG
    ];

    // Load Google 3D Tiles
    const tileset = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
        url: "https://tile.googleapis.com/v1/3dtiles/root.json?key= AIzaSyA8C9_h4ZqzKWDRJNNG3677SYaZgZ9XSWg",
        showCreditsOnScreen: true,
    }));

    viewer.scene.globe.enableLighting = true;
    viewer.scene.globe.show = false;

    // Initial camera position
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-94.998571, 29.742848, 5000),
        duration: 5,
        complete: function() {
            setTimeout(function() {
                viewer.camera.flyTo({
                    destination: Cesium.Cartesian3.fromDegrees(-94.9960463696682, 29.739476474124718, 106.30991509431206),
                    orientation: {
                        heading: 5.475943510971197,
                        pitch: -0.2776868961099246,
                        roll: 0.000005434500673473508
                    },
                    duration: 10
                });
            }, 500);
        }
    });

    // Worker paths - Larger loops with more waypoints for smooth movement
    const paths = [
        // Worker 1 - Red - Large loop crossing hazard zone
        [
            { longitude: -94.999029, latitude: 29.743500 },
            { longitude: -94.998800, latitude: 29.743300 },
            { longitude: -94.998600, latitude: 29.743000 },
            { longitude: -94.998400, latitude: 29.742700 },
            { longitude: -94.998200, latitude: 29.742400 },
            { longitude: -94.998000, latitude: 29.742100 },
            { longitude: -94.998200, latitude: 29.741800 },
            { longitude: -94.998600, latitude: 29.741500 },
            { longitude: -94.999000, latitude: 29.741200 },
            { longitude: -94.999400, latitude: 29.740900 },
            { longitude: -94.999600, latitude: 29.740600 }, // In hazard zone
            { longitude: -94.999800, latitude: 29.740300 }, // In hazard zone
            { longitude: -95.000000, latitude: 29.740600 }, // In hazard zone
            { longitude: -95.000200, latitude: 29.740900 },
            { longitude: -95.000400, latitude: 29.741200 },
            { longitude: -95.000600, latitude: 29.741500 },
            { longitude: -95.000400, latitude: 29.741800 },
            { longitude: -95.000200, latitude: 29.742100 },
            { longitude: -95.000000, latitude: 29.742400 },
            { longitude: -94.999800, latitude: 29.742700 },
            { longitude: -94.999600, latitude: 29.743000 },
            { longitude: -94.999400, latitude: 29.743300 },
            { longitude: -94.999200, latitude: 29.743400 },
        ],
        // Worker 2 - Green - Large loop crossing hazard zone
        [
            { longitude: -94.997800, latitude: 29.743000 },
            { longitude: -94.997600, latitude: 29.742800 },
            { longitude: -94.997400, latitude: 29.742600 },
            { longitude: -94.997200, latitude: 29.742400 },
            { longitude: -94.997000, latitude: 29.742200 },
            { longitude: -94.996800, latitude: 29.742000 },
            { longitude: -94.997000, latitude: 29.741800 },
            { longitude: -94.997200, latitude: 29.741600 },
            { longitude: -94.997400, latitude: 29.741400 },
            { longitude: -94.997600, latitude: 29.741200 },
            { longitude: -94.997800, latitude: 29.741000 },
            { longitude: -94.998000, latitude: 29.740800 },
            { longitude: -94.998200, latitude: 29.740600 },
            { longitude: -94.998400, latitude: 29.740400 }, // Approaching hazard
            { longitude: -94.998381, latitude: 29.740377 }, // In hazard zone
            { longitude: -94.998600, latitude: 29.740200 }, // In hazard zone
            { longitude: -94.998800, latitude: 29.740000 }, // In hazard zone
            { longitude: -94.999000, latitude: 29.740200 },
            { longitude: -94.999200, latitude: 29.740400 },
            { longitude: -94.999000, latitude: 29.740600 },
            { longitude: -94.998800, latitude: 29.740800 },
            { longitude: -94.998600, latitude: 29.741000 },
            { longitude: -94.998400, latitude: 29.741200 },
            { longitude: -94.998200, latitude: 29.741400 },
            { longitude: -94.998000, latitude: 29.741600 },
            { longitude: -94.997800, latitude: 29.741800 },
            { longitude: -94.997600, latitude: 29.742000 },
            { longitude: -94.997400, latitude: 29.742200 },
            { longitude: -94.997600, latitude: 29.742400 },
            { longitude: -94.997800, latitude: 29.742600 },
            { longitude: -94.998000, latitude: 29.742800 },
        ],
        // Worker 3 - Blue - Large loop crossing hazard zone
        [
            { longitude: -94.999400, latitude: 29.743800 },
            { longitude: -94.999200, latitude: 29.743600 },
            { longitude: -94.999000, latitude: 29.743400 },
            { longitude: -94.998800, latitude: 29.743200 },
            { longitude: -94.998600, latitude: 29.743000 },
            { longitude: -94.998400, latitude: 29.742800 },
            { longitude: -94.998200, latitude: 29.742600 },
            { longitude: -94.998000, latitude: 29.742400 },
            { longitude: -94.997800, latitude: 29.742200 },
            { longitude: -94.997600, latitude: 29.742000 },
            { longitude: -94.997400, latitude: 29.741800 },
            { longitude: -94.997600, latitude: 29.741600 },
            { longitude: -94.997800, latitude: 29.741400 },
            { longitude: -94.998000, latitude: 29.741200 },
            { longitude: -94.998200, latitude: 29.741000 },
            { longitude: -94.998400, latitude: 29.740800 },
            { longitude: -94.998600, latitude: 29.740600 },
            { longitude: -94.998800, latitude: 29.740400 },
            { longitude: -94.999000, latitude: 29.740200 },
            { longitude: -94.999200, latitude: 29.740000 },
            { longitude: -94.999400, latitude: 29.739800 }, // In hazard zone
            { longitude: -94.999600, latitude: 29.739891 }, // In hazard zone
            { longitude: -94.999800, latitude: 29.740000 }, // In hazard zone
            { longitude: -95.000000, latitude: 29.740200 }, // In hazard zone
            { longitude: -95.000200, latitude: 29.740400 }, // In hazard zone
            { longitude: -95.000400, latitude: 29.740600 },
            { longitude: -95.000600, latitude: 29.740800 },
            { longitude: -95.000800, latitude: 29.741000 },
            { longitude: -95.001000, latitude: 29.741200 },
            { longitude: -95.000800, latitude: 29.741400 },
            { longitude: -95.000600, latitude: 29.741600 },
            { longitude: -95.000400, latitude: 29.741800 },
            { longitude: -95.000200, latitude: 29.742000 },
            { longitude: -95.000000, latitude: 29.742200 },
            { longitude: -94.999800, latitude: 29.742400 },
            { longitude: -94.999600, latitude: 29.742600 },
            { longitude: -94.999800, latitude: 29.742800 },
            { longitude: -95.000000, latitude: 29.743000 },
            { longitude: -95.000200, latitude: 29.743200 },
            { longitude: -95.000000, latitude: 29.743400 },
            { longitude: -94.999800, latitude: 29.743600 },
            { longitude: -94.999600, latitude: 29.743800 },
        ],
        // Worker 4 - Yellow - Large loop crossing hazard zone
        [
            { longitude: -94.996800, latitude: 29.743800 },
            { longitude: -94.997000, latitude: 29.743600 },
            { longitude: -94.997200, latitude: 29.743400 },
            { longitude: -94.997400, latitude: 29.743200 },
            { longitude: -94.997600, latitude: 29.743000 },
            { longitude: -94.997800, latitude: 29.742800 },
            { longitude: -94.998000, latitude: 29.742600 },
            { longitude: -94.998200, latitude: 29.742400 },
            { longitude: -94.998400, latitude: 29.742200 },
            { longitude: -94.998600, latitude: 29.742000 },
            { longitude: -94.998800, latitude: 29.741800 },
            { longitude: -94.999000, latitude: 29.741600 },
            { longitude: -94.999200, latitude: 29.741400 },
            { longitude: -94.999400, latitude: 29.741200 },
            { longitude: -94.999600, latitude: 29.741000 },
            { longitude: -94.999800, latitude: 29.740800 },
            { longitude: -95.000000, latitude: 29.740600 }, // In hazard zone
            { longitude: -95.000200, latitude: 29.740400 }, // In hazard zone
            { longitude: -95.000400, latitude: 29.740200 }, // In hazard zone
            { longitude: -95.000600, latitude: 29.740000 },
            { longitude: -95.000800, latitude: 29.739800 },
            { longitude: -95.001000, latitude: 29.740000 },
            { longitude: -95.001200, latitude: 29.740200 },
            { longitude: -95.001400, latitude: 29.740400 },
            { longitude: -95.001600, latitude: 29.740600 },
            { longitude: -95.001800, latitude: 29.740800 },
            { longitude: -95.002000, latitude: 29.741000 },
            { longitude: -95.002200, latitude: 29.741200 },
            { longitude: -95.002000, latitude: 29.741400 },
            { longitude: -95.001800, latitude: 29.741600 },
            { longitude: -95.001600, latitude: 29.741800 },
            { longitude: -95.001400, latitude: 29.742000 },
            { longitude: -95.001200, latitude: 29.742200 },
            { longitude: -95.001000, latitude: 29.742400 },
            { longitude: -95.000800, latitude: 29.742600 },
            { longitude: -95.000600, latitude: 29.742800 },
            { longitude: -95.000400, latitude: 29.743000 },
            { longitude: -95.000200, latitude: 29.743200 },
            { longitude: -95.000000, latitude: 29.743400 },
            { longitude: -94.999800, latitude: 29.743600 },
            { longitude: -94.999600, latitude: 29.743800 },
            { longitude: -94.999400, latitude: 29.744000 },
            { longitude: -94.999200, latitude: 29.744200 },
            { longitude: -94.999000, latitude: 29.744000 },
            { longitude: -94.998800, latitude: 29.743800 },
            { longitude: -94.998600, latitude: 29.743600 },
            { longitude: -94.998400, latitude: 29.743400 },
            { longitude: -94.998200, latitude: 29.743200 },
            { longitude: -94.998000, latitude: 29.743000 },
            { longitude: -94.997800, latitude: 29.743200 },
            { longitude: -94.997600, latitude: 29.743400 },
            { longitude: -94.997400, latitude: 29.743600 },
            { longitude: -94.997200, latitude: 29.743800 },
            { longitude: -94.997000, latitude: 29.744000 },
        ],
    ];

    const colors = [
        Cesium.Color.RED,
        Cesium.Color.GREEN,
        Cesium.Color.BLUE,
        Cesium.Color.YELLOW,
    ];

    // Create hazard zone polygon with proper Cartesian3 vertices
    const hazardZoneVertices = [
        Cesium.Cartesian3.fromDegrees(-94.999028, 29.741748, 0),
        Cesium.Cartesian3.fromDegrees(-94.998381, 29.741377, 0),
        Cesium.Cartesian3.fromDegrees(-94.99947730766101, 29.739891707833397, 0),
        Cesium.Cartesian3.fromDegrees(-95.0006285442912, 29.740520027778356, 0),
        Cesium.Cartesian3.fromDegrees(-94.9999378023131, 29.7414910599502, 0),
        Cesium.Cartesian3.fromDegrees(-94.99904970548407, 29.74182425509735, 0)
    ];

    // Enhanced worker creation with trails
    const workers = paths.map((path, index) => {
        // Create an array to store trail positions
        const trailPositions = [];
        
        // Initialize with first position
        const firstPosition = Cesium.Cartesian3.fromDegrees(path[0].longitude, path[0].latitude, -21);
        trailPositions.push(firstPosition);
        
        // Create trail entity
        const trail = viewer.entities.add({
            polyline: {
                positions: new Cesium.CallbackProperty(() => {
                    return trailPositions.slice();  // Return a copy to avoid modification issues
                }, false),
                width: 2,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.2,
                    color: colors[index].withAlpha(0.5)
                })
            }
        });

        return {
            entity: viewer.entities.add({
                position: firstPosition,
                point: {
                    pixelSize: 10,
                    color: colors[index],
                },
                label: {
                    text: `Worker ${index+1}`,
                    fillColor: colors[index],
                    showBackground: true,
                    backgroundColor: Cesium.Color.WHITE.withAlpha(0.7),
                    font: '14px sans-serif',
                    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                    verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                    pixelOffset: new Cesium.Cartesian2(0, -20),
                }
            }),
            path: path,
            currentPathIndex: 0,
            trailPositions: trailPositions,
            trail: trail,
            lastUpdate: Date.now(),
            number: index + 1,  // Store worker number directly
            previousPosition: null,
            speed: null,
            vitals: null,
            status: null,
            distanceToHazard: null,
            warningIssued: false,
            inDanger: false
        };
    });

    // Add hazardous zone
    const hazardZone = viewer.entities.add({
        name: 'Hazardous Zone',
        polygon: {
            hierarchy: new Cesium.PolygonHierarchy(hazardZoneVertices),
            material: Cesium.Color.RED.withAlpha(0.5),
            outline: true,
            outlineColor: Cesium.Color.RED,
            height: -21
        }
    });

    // Reference UI elements
    const controlPanel = document.getElementById('controlPanel');
    const togglePanel = document.getElementById('togglePanel');
    const speedControl = document.getElementById('speedControl');
    const speedValue = document.getElementById('speedValue');
    const statusList = document.getElementById('statusList');
    const alertsContainer = document.getElementById('alertsList');
    const hazardAlert = document.getElementById('hazardAlert');
    const hazardMessage = document.getElementById('hazardMessage');
    const closeHazardAlert = document.getElementById('closeHazardAlert');
    const predictiveAlert = document.getElementById('predictiveAlert');
    const predictiveMessage = document.getElementById('predictiveMessage');
    const closePredictiveAlert = document.getElementById('closePredictiveAlert');
    const locateWorker = document.getElementById('locateWorker');
    const locatePredictiveWorker = document.getElementById('locatePredictiveWorker');
    const resetViewBtn = document.getElementById('resetViewBtn');
    const toggleWorkerPanel = document.getElementById('toggleWorkerPanel');
    const workerInfoPanel = document.getElementById('workerInfoPanel');
    const closeWorkerInfo = document.getElementById('closeWorkerInfo');
    const workerInfoTitle = document.getElementById('workerInfoTitle');
    const workerName = document.getElementById('workerName');
    const workerRole = document.getElementById('workerRole');
    const workerStatusBadge = document.getElementById('workerStatusBadge');
    const heartRate = document.getElementById('heartRate');
    const bloodPressure = document.getElementById('bloodPressure');
    const oxygenLevel = document.getElementById('oxygenLevel');
    const temperature = document.getElementById('temperature');
    const currentPosition = document.getElementById('currentPosition');
    const hazardDistance = document.getElementById('hazardDistance');
    const movementDirection = document.getElementById('movementDirection');
    const workerAlertHistory = document.getElementById('workerAlertHistory');

    // Worker roles array for display in worker details panel
    const workerRoles = [
        "Safety Inspector",
        "Construction Engineer",
        "Maintenance Technician",
        "Electrical Specialist",
        "Field Supervisor"
    ];
    
    // Store worker alert history
    const alertHistory = {};
    
    // Initialize workers in hazard zone array and user acknowledgment flags
    let workersInHazardZone = [];
    let workersApproachingHazard = [];
    let userAcknowledged = false;
    let predictiveAcknowledged = false;
    let selectedWorker = null;
    let currentlySelectedWorkerNumber = null;
    let updateInterval = 5000; // Default update interval (5 seconds)
    let updateIntervalId = null; // To store the interval ID

    // Panel toggle functionality
    togglePanel.addEventListener('click', () => {
        controlPanel.classList.toggle('minimized');
        if (controlPanel.classList.contains('minimized')) {
            togglePanel.textContent = '+';
            togglePanel.title = "Expand control panel";
        } else {
            togglePanel.textContent = '−';
            togglePanel.title = "Minimize control panel";
        }
    });

    // Reset view button
    resetViewBtn.addEventListener('click', function() {
        viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(-94.9960463696682, 29.739476474124718, 106.30991509431206),
            orientation: {
                heading: 5.475943510971197,
                pitch: -0.2776868961099246,
                roll: 0.000005434500673473508
            },
            duration: 5
        });
    });

    // Toggle worker info panel
    toggleWorkerPanel.addEventListener('click', function() {
        workerInfoPanel.classList.toggle('hidden');
    });

    // Close worker info panel
    closeWorkerInfo.addEventListener('click', function() {
        workerInfoPanel.classList.add('hidden');
    });

    // Close hazard alert button
    closeHazardAlert.addEventListener('click', () => {
        hazardAlert.classList.add('hidden');
        userAcknowledged = true;
    });

    // Locate worker from hazard alert
    locateWorker.addEventListener('click', function() {
        if (workersInHazardZone.length > 0) {
            const workerNumber = workersInHazardZone[0];
            flyToWorker(workerNumber);
            showWorkerDetails(workerNumber);
        }
    });

    // Close predictive alert
    closePredictiveAlert.addEventListener('click', function() {
        predictiveAlert.classList.add('hidden');
        predictiveAcknowledged = true;
    });

    // Locate worker from predictive alert
    locatePredictiveWorker.addEventListener('click', function() {
        if (workersApproachingHazard.length > 0) {
            const workerNumber = workersApproachingHazard[0];
            flyToWorker(workerNumber);
            showWorkerDetails(workerNumber);
        }
    });

    speedControl.addEventListener('input', (e) => {
        updateInterval = (11 - e.target.value) * 1000;
        speedValue.textContent = `${11 - e.target.value}s`;
        resetInterval();
    });

    // Function to reset update interval
    function resetInterval() {
        if (updateIntervalId) {
            clearInterval(updateIntervalId);
        }
        updateIntervalId = setInterval(updateWorkersPositions, updateInterval);
    }

    function updateHazardAlert() {
        if (workersInHazardZone.length > 0 && !userAcknowledged) {
            // Update message
            if (workersInHazardZone.length === 1) {
                hazardMessage.textContent = `Worker ${workersInHazardZone[0]} has entered the hazardous zone!`;
            } else {
                const workersList = workersInHazardZone.join(', ');
                hazardMessage.textContent = `Workers ${workersList} have entered the hazardous zone!`;
            }
            
            // Show alert if hidden
            if (hazardAlert.classList.contains('hidden')) {
                hazardAlert.classList.remove('hidden');
                // Play alert sound (uncomment if you have an audio file)
                // if ("Audio" in window) {
                //     const alertSound = new Audio('alert.mp3');
                //     alertSound.play();
                // }
            }
        } else {
            // Hide alert if all workers left hazard zone
            if (!hazardAlert.classList.contains('hidden') && workersInHazardZone.length === 0) {
                hazardAlert.classList.add('hidden');
                userAcknowledged = false;
            }
        }
    }

    // Predictive warning alerts
    function updatePredictiveWarning() {
        // Remove workers who are now in danger or moved away
        workersApproachingHazard = workersApproachingHazard.filter(workerNum => {
            const worker = workers.find(w => w.number === workerNum);
            return worker && worker.status === 'warning' && !workersInHazardZone.includes(workerNum);
        });
        
        if (workersApproachingHazard.length > 0 && !predictiveAcknowledged) {
            // Update message
            if (workersApproachingHazard.length === 1) {
                const worker = workers.find(w => w.number === workersApproachingHazard[0]);
                const secondsToImpact = Math.round((worker.distanceToHazard - 10) / (worker.speed || 1));
                predictiveMessage.textContent = `Worker ${workersApproachingHazard[0]} is approaching hazardous zone! Estimated impact: ${secondsToImpact} seconds.`;
            } else {
                const workersList = workersApproachingHazard.join(', ');
                predictiveMessage.textContent = `Workers ${workersList} are approaching the hazardous zone!`;
            }
            
            // Show alert if hidden
            if (predictiveAlert.classList.contains('hidden')) {
                predictiveAlert.classList.remove('hidden');
            }
        } else {
            // Hide alert if no workers approaching hazard zone
            if (!predictiveAlert.classList.contains('hidden') && workersApproachingHazard.length === 0) {
                predictiveAlert.classList.add('hidden');
                predictiveAcknowledged = false;
            }
        }
    }

    // Enhanced vitals simulation with more parameters
    function simulateVitals(status, distanceToHazard, workerNumber) {
        let heartRate, systolic, diastolic, oxygen;
        
        // Add some consistent variation based on worker number
        const workerVariation = (workerNumber % 3) - 1; // -1, 0, or 1
        
        if (status === 'danger') {
            heartRate = Math.floor(100 + Math.random() * 40 + workerVariation * 5);
            systolic = Math.floor(130 + Math.random() * 20 + workerVariation * 3);
            diastolic = Math.floor(85 + Math.random() * 10 + workerVariation * 2);
            oxygen = Math.floor(92 + Math.random() * 3 - workerVariation);
        } else if (status === 'warning') {
            // As worker gets closer to hazard, increase vitals proportionally
            const proximityFactor = Math.max(0, 1 - (distanceToHazard - 10) / 20);
            heartRate = Math.floor(80 + Math.random() * 20 + proximityFactor * 20 + workerVariation * 3);
            systolic = Math.floor(120 + Math.random() * 10 + proximityFactor * 10 + workerVariation * 2);
            diastolic = Math.floor(80 + Math.random() * 10 + proximityFactor * 5 + workerVariation);
            oxygen = Math.floor(95 + Math.random() * 3 - proximityFactor * 2);
        } else { // safe
            heartRate = Math.floor(60 + Math.random() * 20 + workerVariation * 2);
            systolic = Math.floor(110 + Math.random() * 10 + workerVariation * 2);
            diastolic = Math.floor(70 + Math.random() * 10 + workerVariation);
            oxygen = Math.floor(97 + Math.random() * 3);
        }
        
        return {
            heartRate: heartRate,
            bloodPressure: systolic + '/' + diastolic,
            oxygen: oxygen
        };
    }

    // Improved point-to-polygon distance calculation
    function calculateDistanceToHazard(position) {
        try {
            // Convert the current position to Cartesian3
            const cartesianPosition = Cesium.Cartesian3.fromDegrees(position.longitude, position.latitude, -21);
            
            // Check if the point is inside the polygon first
            if (isPointInPolygon(cartesianPosition, hazardZoneVertices)) {
                return 0; // Inside hazard zone
            }
            
            // Calculate minimum distance to any edge
            let minDistance = Number.MAX_VALUE;
            
            for (let i = 0; i < hazardZoneVertices.length; i++) {
                const start = hazardZoneVertices[i];
                const end = hazardZoneVertices[(i + 1) % hazardZoneVertices.length];
                
                const distance = distanceToLineSegment(cartesianPosition, start, end);
                // Convert distance from meters to a more reasonable scale
                minDistance = Math.min(minDistance, distance);
            }
            
            return minDistance;
        } catch (error) {
            console.error("Error calculating distance:", error);
            return 1000; // Return a large value to avoid errors breaking the app
        }
    }
    
    // Helper function to calculate distance to a line segment
    function distanceToLineSegment(point, lineStart, lineEnd) {
        // Convert to cartographic for better distance calculation
        const cartographic = Cesium.Cartographic.fromCartesian(point);
        const startCartographic = Cesium.Cartographic.fromCartesian(lineStart);
        const endCartographic = Cesium.Cartographic.fromCartesian(lineEnd);
        
        // Calculate distances using haversine formula
        const distanceToStart = calculateHaversineDistance(
            cartographic.longitude * 180 / Math.PI,
            cartographic.latitude * 180 / Math.PI,
            startCartographic.longitude * 180 / Math.PI,
            startCartographic.latitude * 180 / Math.PI
        );
        
        const distanceToEnd = calculateHaversineDistance(
            cartographic.longitude * 180 / Math.PI,
            cartographic.latitude * 180 / Math.PI,
            endCartographic.longitude * 180 / Math.PI,
            endCartographic.latitude * 180 / Math.PI
        );
        
        return Math.min(distanceToStart, distanceToEnd);
    }
    
    // Add haversine distance calculation
    function calculateHaversineDistance(lon1, lat1, lon2, lat2) {
        const R = 6371000; // Earth's radius in meters
        const φ1 = lat1 * Math.PI / 180;
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;
        
        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        
        return R * c;
    }
    
    // Simple point-in-polygon test for 3D
    function isPointInPolygon(point, polygon) {
        try {
            // Convert Cartesian3 coordinates to cartographic (lat/lon)
            const cartographic = Cesium.Cartographic.fromCartesian(point);
            const lon = cartographic.longitude * 180 / Math.PI;
            const lat = cartographic.latitude * 180 / Math.PI;
            
            // Convert polygon vertices to lat/lon
            const polygonCoords = polygon.map(vertex => {
                const cart = Cesium.Cartographic.fromCartesian(vertex);
                return {
                    lon: cart.longitude * 180 / Math.PI,
                    lat: cart.latitude * 180 / Math.PI
                };
            });
            
            let inside = false;
            for (let i = 0, j = polygonCoords.length - 1; i < polygonCoords.length; j = i++) {
                const xi = polygonCoords[i].lon, yi = polygonCoords[i].lat;
                const xj = polygonCoords[j].lon, yj = polygonCoords[j].lat;
                
                const intersect = ((yi > lat) !== (yj > lat)) &&
                    (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
            }
            
            return inside;
        } catch (error) {
            console.error("Error in point-in-polygon test:", error);
            return false; // Fail safely
        }
    }

    // Enhanced worker status updates with predictive warnings
    function updateWorkerStatus(worker, distance) {
        const workerNumber = worker.number; // Use stored worker number
        const status = distance < 10 ? 'danger' : distance < 30 ? 'warning' : 'safe';
        
        // Calculate worker speed (distance moved since last update)
        let speed = 0;
        if (worker.previousPosition && worker.position) {
            const dx = worker.position.longitude - worker.previousPosition.longitude;
            const dy = worker.position.latitude - worker.previousPosition.latitude;
            speed = Math.sqrt(dx * dx + dy * dy) * 111000; // Approximate meters
            worker.speed = speed;
        }
        
        // Simulate vitals based on status, distance, and worker number
        const vitals = simulateVitals(status, distance, workerNumber);
        worker.vitals = vitals;
        worker.status = status;
        worker.distanceToHazard = distance;
        
        // Generate status text
        const statusText = `Worker ${workerNumber}`;
        
        // Update hazard zone tracking
        const isInHazardZone = status === 'danger';
        const workerIndex = workersInHazardZone.indexOf(workerNumber);
        
        if (isInHazardZone && workerIndex === -1) {
            // Worker entered hazard zone
            workersInHazardZone.push(workerNumber);
            updateHazardAlert();
            
            // Add to worker history
            addAlertToHistory(workerNumber, "Entered hazardous zone!", "danger");
            
            // Create alert notification
            const alert = document.createElement('div');
            alert.className = 'alert';
            alert.innerHTML = `${getStatusIconHTML('danger')} Worker ${workerNumber} has entered hazard zone! Vital signs - HR: ${vitals.heartRate} bpm, BP: ${vitals.bloodPressure} mmHg, O2: ${vitals.oxygen}%`;
            alertsContainer.prepend(alert);
            setTimeout(() => alert.remove(), 10000);
            
            worker.inDanger = true;
        } else if (!isInHazardZone && workerIndex !== -1) {
            // Worker left hazard zone
            workersInHazardZone.splice(workerIndex, 1);
            updateHazardAlert();
            
            // Add to worker history
            addAlertToHistory(workerNumber, "Left hazardous zone", "warning");
            
            worker.inDanger = false;
        }
        
        // Handle predictive warnings
        if (status === 'warning') {
            // Add to the workers approaching hazard if not already there
            if (!workersApproachingHazard.includes(workerNumber) && !worker.warningIssued) {
                // Calculate if worker is moving toward hazard
                const isApproaching = isMovingTowardHazard(worker);
                
                if (isApproaching) {
                    workersApproachingHazard.push(workerNumber);
                    updatePredictiveWarning();
                    worker.warningIssued = true;
                    
                    // Add to worker history
                    addAlertToHistory(workerNumber, "Approaching hazardous zone", "warning");
                    
                    // Create predictive alert
                    const alert = document.createElement('div');
                    alert.className = 'alert warning';
                    alert.innerHTML = `${getStatusIconHTML('warning')} Worker ${workerNumber} is approaching hazard zone! Distance: ${distance.toFixed(1)}m`;
                    alertsContainer.prepend(alert);
                    setTimeout(() => alert.remove(), 8000);
                }
            }
        } else if (worker.warningIssued) {
            worker.warningIssued = false;
        }
        
        // Update the worker details panel if this worker is currently selected
        if (currentlySelectedWorkerNumber === workerNumber) {
            showWorkerDetails(workerNumber);
        }
        
        return { status, statusText };
    }
    
    // Check if worker is moving toward hazard zone
    function isMovingTowardHazard(worker) {
        if (!worker.previousPosition || !worker.position) return false;
        
        const prevDistance = calculateDistanceToHazard(worker.previousPosition);
        const currentDistance = worker.distanceToHazard;
        
        // If distance is decreasing significantly, worker is approaching
        return (prevDistance - currentDistance) > 0.5;
    }

    function updateWorkersPositions() {
        for (const worker of workers) {
            // Get indices and path
            const i = worker.number - 1;
            const path = worker.path;
            let pathIndex = worker.currentPathIndex || 0;
            
            // Store previous position for movement tracking
            if (worker.position) {
                worker.previousPosition = {
                    longitude: worker.position.longitude,
                    latitude: worker.position.latitude
                };
            }
            
            // Update position
            const currentPathPoint = path[pathIndex];
            const position = {
                longitude: currentPathPoint.longitude,
                latitude: currentPathPoint.latitude
            };
            worker.position = position;
            
            // Calculate distance
            const distance = calculateDistanceToHazard(position);
            
            // Update worker status based on distance
            const { status, statusText } = updateWorkerStatus(worker, distance);
            
            // Update visualization
            const workerEntity = worker.entity;
            
            // Update entity position
            workerEntity.position = Cesium.Cartesian3.fromDegrees(position.longitude, position.latitude, -21);
            
            // Update entity appearance based on status
            if (status === 'danger') {
                workerEntity.point.color = Cesium.Color.RED;
                workerEntity.label.fillColor = Cesium.Color.RED;
                
                // Pulse effect for worker in danger
                workerEntity.point.pixelSize = 12 + 4 * Math.sin(Date.now() / 200);
            } else if (status === 'warning') {
                workerEntity.point.color = Cesium.Color.YELLOW;
                workerEntity.label.fillColor = Cesium.Color.YELLOW;
                workerEntity.point.pixelSize = 12 + 2 * Math.sin(Date.now() / 400);
            } else {
                workerEntity.point.color = Cesium.Color.GREEN;
                workerEntity.label.fillColor = Cesium.Color.GREEN;
                workerEntity.point.pixelSize = 10;
            }
            
            // Update path visualization
            const pathEntity = worker.trail;
            
            // Add new position to trail
            const cartesianPosition = Cesium.Cartesian3.fromDegrees(position.longitude, position.latitude, -21);
            worker.trailPositions.push(cartesianPosition);
            
            // Limit trail length for performance
            if (worker.trailPositions.length > 50) {
                worker.trailPositions.shift();
            }
            
            // Update path color based on status
            pathEntity.polyline.material = new Cesium.PolylineGlowMaterialProperty({
                glowPower: 0.2,
                color: status === 'danger' ? Cesium.Color.RED.withAlpha(0.5) :
                       status === 'warning' ? Cesium.Color.YELLOW.withAlpha(0.5) :
                       Cesium.Color.GREEN.withAlpha(0.5)
            });
            
            // Increment path index
            pathIndex = (pathIndex + 1) % path.length;
            worker.currentPathIndex = pathIndex;
            worker.lastUpdate = Date.now();
        }
        
        // Update worker status list with enhanced display
        updateWorkerStatusList();
        
        // Request render to update the scene
        viewer.scene.requestRender();
    }

    // Enhanced worker status list with clickable items and more information
    function updateWorkerStatusList() {
        statusList.innerHTML = '';
        
        for (const worker of workers) {
            const statusItem = document.createElement('div');
            statusItem.className = `worker-status-item ${worker.status}`;
            statusItem.dataset.workerNumber = worker.number;
            
            // Worker icon based on status
            const iconDiv = document.createElement('div');
            iconDiv.className = `worker-icon ${worker.status}`;
            iconDiv.innerHTML = getStatusIconHTML(worker.status);
            
            // Worker information
            const infoDiv = document.createElement('div');
            infoDiv.className = 'worker-info';
            
            const nameDiv = document.createElement('div');
            nameDiv.className = 'worker-name';
            nameDiv.textContent = `Worker ${worker.number}`;
            
            const distanceDiv = document.createElement('div');
            distanceDiv.className = 'worker-metric';
            distanceDiv.innerHTML = `<i class="fas fa-ruler"></i> ${worker.distanceToHazard.toFixed(1)}m from hazard`;
            
            const vitalsDiv = document.createElement('div');
            vitalsDiv.className = 'worker-metric';
            vitalsDiv.innerHTML = `<i class="fas fa-heart-pulse"></i> HR: ${worker.vitals.heartRate} BP: ${worker.vitals.bloodPressure}`;
            
            infoDiv.appendChild(nameDiv);
            infoDiv.appendChild(distanceDiv);
            infoDiv.appendChild(vitalsDiv);
            
            statusItem.appendChild(iconDiv);
            statusItem.appendChild(infoDiv);
            
            // Add click event to show worker details
            statusItem.addEventListener('click', function() {
                const workerNumber = parseInt(this.dataset.workerNumber);
                flyToWorker(workerNumber);
                showWorkerDetails(workerNumber);
            });
            
            statusList.appendChild(statusItem);
        }
    }

    // Function to display detailed worker information
    function showWorkerDetails(workerNumber) {
        const worker = workers.find(w => w.number === workerNumber);
        if (!worker) return;
        
        currentlySelectedWorkerNumber = workerNumber;
        selectedWorker = worker;
        
        // Update panel header
        workerInfoTitle.textContent = `Worker ${workerNumber} Details`;
        workerName.textContent = `Worker ${workerNumber}`;
        workerRole.textContent = workerRoles[(workerNumber - 1) % workerRoles.length];
        
        // Update status badge
        workerStatusBadge.className = `status-badge ${worker.status}`;
        workerStatusBadge.innerHTML = getStatusIconHTML(worker.status) + getStatusText(worker.status);
        
        // Update vital signs
        heartRate.textContent = worker.vitals.heartRate;
        bloodPressure.textContent = worker.vitals.bloodPressure;
        oxygenLevel.textContent = worker.vitals.oxygen;
        temperature.textContent = (97 + Math.random() * 2).toFixed(1);
        
        // Update location data
        const position = worker.position;
        currentPosition.textContent = `${position.longitude.toFixed(6)}, ${position.latitude.toFixed(6)}`;
        hazardDistance.textContent = `${worker.distanceToHazard.toFixed(1)}m`;
        
        // Calculate movement direction
        if (worker.previousPosition) {
            const direction = calculateDirection(worker.previousPosition, position);
            movementDirection.textContent = direction;
        } else {
            movementDirection.textContent = "N/A";
        }
        
        // Update alert history
        refreshAlertHistory(workerNumber);
        
        // Show the panel
        workerInfoPanel.classList.remove('hidden');
    }
    
    // Calculate cardinal direction based on position change
    function calculateDirection(prevPos, currentPos) {
        const dLat = currentPos.latitude - prevPos.latitude;
        const dLon = currentPos.longitude - prevPos.longitude;
        
        let direction = "";
        
        if (Math.abs(dLat) > Math.abs(dLon)) {
            // More north-south movement
            direction = dLat > 0 ? "North" : "South";
            if (Math.abs(dLon) > 0.00001) {
                direction += dLon > 0 ? "east" : "west";
            }
        } else {
            // More east-west movement
            direction = dLon > 0 ? "East" : "West";
            if (Math.abs(dLat) > 0.00001) {
                direction = (dLat > 0 ? "North" : "South") + direction.toLowerCase();
            }
        }
        
        return direction;
    }
    
    // Get appropriate icon for worker status
    function getStatusIconHTML(status) {
        switch (status) {
            case 'safe':
                return '<i class="fas fa-check-circle"></i> ';
            case 'warning':
                return '<i class="fas fa-exclamation-triangle"></i> ';
            case 'danger':
                return '<i class="fas fa-radiation"></i> ';
            default:
                return '<i class="fas fa-question-circle"></i> ';
        }
    }
    
    // Get text for worker status
    function getStatusText(status) {
        switch (status) {
            case 'safe':
                return 'Safe';
            case 'warning':
                return 'Warning';
            case 'danger':
                return 'Danger';
            default:
                return 'Unknown';
        }
    }
    
    // Refresh worker alert history in the details panel
    function refreshAlertHistory(workerNumber) {
        workerAlertHistory.innerHTML = '';
        
        if (!alertHistory[workerNumber]) {
            const emptyMessage = document.createElement('div');
            emptyMessage.className = 'history-item';
            emptyMessage.textContent = 'No alerts recorded';
            workerAlertHistory.appendChild(emptyMessage);
            return;
        }
        
        // Sort alerts by time (newest first)
        const workerAlerts = [...alertHistory[workerNumber]].reverse();
        
        workerAlerts.forEach(alert => {
            const historyItem = document.createElement('div');
            historyItem.className = `history-item ${alert.type}`;
            
            const timeElement = document.createElement('div');
            timeElement.className = 'history-time';
            timeElement.textContent = alert.time;
            
            const contentElement = document.createElement('div');
            contentElement.className = 'history-content';
            contentElement.textContent = alert.message;
            
            historyItem.appendChild(timeElement);
            historyItem.appendChild(contentElement);
            workerAlertHistory.appendChild(historyItem);
        });
    }
    
    // Add alert to worker history
    function addAlertToHistory(workerNumber, message, type) {
        if (!alertHistory[workerNumber]) {
            alertHistory[workerNumber] = [];
        }
        
        const now = new Date();
        const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0');
        
        alertHistory[workerNumber].push({
            time: timeString,
            message: message,
            type: type
        });
        
        // Limit history to 20 items
        if (alertHistory[workerNumber].length > 20) {
            alertHistory[workerNumber].shift();
        }
        
        // Update the panel if it's currently showing this worker
        if (currentlySelectedWorkerNumber === workerNumber) {
            refreshAlertHistory(workerNumber);
        }
    }
    
    function flyToWorker(workerNumber) {
        const worker = workers.find(w => w.number === workerNumber);
        if (!worker) return;
        
        // Get the worker's position as a Cartesian3
        const workerPosition = Cesium.Cartesian3.fromDegrees(
            worker.position.longitude,
            worker.position.latitude,
            worker.position.height || 0
        );
        
        // Set up a bounding sphere centered on the worker
        const boundingSphere = new Cesium.BoundingSphere(workerPosition, 50); // 50-meter radius
        
        // Fly the camera to view the bounding sphere
        viewer.camera.flyToBoundingSphere(boundingSphere, {
            offset: new Cesium.HeadingPitchRange(
                0,                             // heading (0 = north)
                Cesium.Math.toRadians(-45),    // pitch (negative to look down)
                150                            // range (distance in meters)
            ),
            duration: 1.5,
            easingFunction: Cesium.EasingFunction.QUADRATIC_IN_OUT
        });
    }
    
    // Initialize the worker update interval and start movement
    updateWorkersPositions(); // Run once immediately
    resetInterval(); // Then start the interval
}
