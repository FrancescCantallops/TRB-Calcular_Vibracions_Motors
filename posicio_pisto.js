function altura_cigonyal(angle, radi){
    //cos(angle) * radi
    angle = angle % 360;
    if(angle == 90 || angle == 270){
        return 0;
    }
    return Math.cos(degrees_to_radians(angle)) * radi;
}

function amplada_cigonyal(angle, radi){
    //sin(angle) * radi
    angle = angle % 360;
    if(angle == 0 || angle == 180){
        return 0;
    }
    return Math.sin(degrees_to_radians(angle)) * radi;
}

function altura_biela(angle, longitut, radi){
    //sqrt(longitut² - amplada²)
    return Math.sqrt((longitut**2) - (amplada_cigonyal(angle, radi)**2));
}

function altura_pisto(angle, longitut, radi){
    //altura_biela + altura_cigonyal
    return altura_biela(angle, longitut, radi) + altura_cigonyal(angle, radi);
}

function degrees_to_radians(degrees){
    return degrees * Math.PI/180;
}

radi = 10;
for(let angle=0; angle <= 360; angle += 15){
    console.log(amplada_cigonyal(angle, radi));
}
