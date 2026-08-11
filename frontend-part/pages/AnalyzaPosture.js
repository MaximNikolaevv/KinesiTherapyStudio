let smoothedAngle = null;

export function analyzePosture(landmarks) {

    const leftShoulder = landmarks?.[11];
    const rightShoulder = landmarks?.[12];

    const leftHip = landmarks?.[23];
    const rightHip = landmarks?.[24];

    if (!leftShoulder || !rightShoulder ||
        !leftHip || !rightHip) {
        return null;
    }

    const shoulderCenter = {
        x: (leftShoulder.x + rightShoulder.x) / 2,
        y: (leftShoulder.y + rightShoulder.y) / 2
    };

    const hipCenter = {
        x: (leftHip.x + rightHip.x) / 2,
        y: (leftHip.y + rightHip.y) / 2
    };

    const dx = shoulderCenter.x - hipCenter.x;
    const dy = shoulderCenter.y - hipCenter.y;

    // Ъгъл спрямо вертикалата
    const angle =
        Math.atan2(Math.abs(dx), Math.abs(dy))
        * 180 / Math.PI;

    // Smoothing
    const alpha = 0.1;

    if (smoothedAngle === null) {
        smoothedAngle = angle;
    } else {
        smoothedAngle =
            alpha * angle +
            (1 - alpha) * smoothedAngle;
    }

    return Number(smoothedAngle.toFixed(2));
}