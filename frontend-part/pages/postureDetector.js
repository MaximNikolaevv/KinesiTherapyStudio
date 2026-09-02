import {
    PoseLandmarker, // Това е AI моделът, който намира човешкото тяло. - vrushta vsichki точки на тялото, които може да се видят на изображението (landmarks)
    FilesetResolver // WebAssembly module for vision tasks - зарежда AI моделите и ги прави достъпни за използване
} from "../../node_modules/@mediapipe/tasks-vision/vision_bundle.mjs";



let poseLandmarker = null;


export async function initPoseDetector() {

    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm" // "MediaPipe, зареди ми машинния двигател."
    );

    poseLandmarker = await PoseLandmarker.createFromOptions( // "MediaPipe, зареди ми AI модела за откриване на стойка."
        vision,
        {
            baseOptions: {
                modelAssetPath: "/CameraModels/pose_landmarker_lite.task", // Current model 
            },


            runningMode: "VIDEO",


            numPoses: 1,


            minPoseDetectionConfidence: 0.6,


            minPosePresenceConfidence: 0.7,


            minTrackingConfidence: 0.6
        }
    );


    return poseLandmarker;
}



export function detectPose(video) {

    const result = poseLandmarker.detectForVideo( // "MediaPipe, открий ми стойката на човека в това видео."
        video, // The video element to analyze
        performance.now() // The current timestamp in milliseconds
    );

    

    return result;
}