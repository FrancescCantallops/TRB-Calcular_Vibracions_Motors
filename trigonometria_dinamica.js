import {degrees_to_radians} from "./conversions.js"

export function sin(angle) {
    angle = angle % 360;
    //Tenim en compte quan es 0 perque si no surt un nombre molt petit
    if(angle == 0 || angle == 180){
        return 0;
    }
    return Math.sin(degrees_to_radians(angle));
}

export function cos(angle) {
    angle = angle % 360;
    //Tenim en compte quan es 0 perque si no surt un nombre molt petit
    if(angle == 90 || angle == 270){
        return 0;
    }
    return Math.cos(degrees_to_radians(angle));
}



export function posicio_cigonyal_x(angle, radi){
    //sin(angle) * radi
    return sin(angle) * radi;
}

export function posicio_cigonyal_y(angle, radi){
    //cos(angle) * radi
    return cos(angle) * radi;
}

export function tamany_biela_y(angle, longitut, radi){
    //sqrt(longitut² - amplada²)
    return Math.sqrt((longitut**2) - (posicio_cigonyal_x(angle, radi)**2));
}

export function posicio_pisto_y(angle, longitut, radi){
    //altura_biela + altura_cigonyal
    return tamany_biela_y(angle, longitut, radi) + posicio_cigonyal_y(angle, radi);
}



export function velocitat_cigonyal_x(angle, radi){
    //r * cos(angle)
    return cos(angle) * radi;
}

export function velocitat_cigonyal_y(angle, radi){
    //r * -sin(angle)
    return -(sin(angle) * radi);
}

export function velocitat_tamany_biela_y(angle, longitut, radi){
    //- (Cx(angle) * Cx'(angle)) / sqrt(l² - Cx(angle)²)
    let numerador = posicio_cigonyal_x(angle, radi) + velocitat_cigonyal_x(angle, radi);
    let denominador = sqrt((l**2) - (posicio_cigonyal_x(angle, radi)**2));
    let fraccio = numerador / denominador;
    return -fraccio;
}

export function velocitat_pisto_y(angle, longitut, radi){
    //Cy' + By'
    return velocitat_cigonyal_y(angle, radi) + velocitat_tamany_biela_y(angle, longitut, radi);
}



export function acceleracio_cigonyal_x(angle, radi){
    //-sin(angle) * r
    return -(sin(angle) * radi);
}

export function acceleracio_cigonyal_y(angle, radi){
    //-cos(angle) * r
    return -(cos(angle) * radi);
}


export function acceleracio_tamany_biela_y(angle, longitut, radi){
    //
    return 
}

export function acceleracio_pisto_y(angle, longitut, radi){
    //
    return 
}



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



function prova_grafic(){
    let radi = 1;
    let longitut = 2;

    // Generate values
    const xValues = [];
    const yValues = [];
    for (let angle = 0; angle < 720; angle += 5) {
      xValues.push(angle);
      yValues.push(altura_pisto(angle, longitut, radi));
    }
    
    // Display using Plotly
    const data = [{x:xValues, y:yValues, mode:"lines"}];
    const layout = {title: "altura cigonyal"};
    Plotly.newPlot("tester", data, layout);   
}

