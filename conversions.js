let rpm = 9000;

function rpm_to_rps(rpm){
    return rpm / 60;
}

function rps_to_degreesXsecond(rps){
    return rps * 360;
}

function rpm_to_degreesXsecond(rpm){
    return rps_to_degreesXsecond(rpm_to_rps(rpm));
}

console.log("Revolutions per minute: " + rpm);
console.log("RPS: " + rpm_to_rps(rpm));
console.log("Degrees X second: " + rpm_to_degreesXsecond(rpm));