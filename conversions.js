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

function to_Kg(value, unit){
    if(unit == "Kg"){
        return value;
    }
    else if(unit == "ton"){
        return value * 1000;
    }
    else if(unit == "g"){
        return value / 1000;
    }
    else{
        console.log("Invalid mass unit");
    }
}

function to_meters(value, unit){
    if(unit == "m"){
        return value;
    }
    else if(unit == "cm"){
        return value / 100;
    }
    else if(unit == "mm"){
        return value / 1000;
    }
    else{
        console.log("Invalid length unit");
    }
}