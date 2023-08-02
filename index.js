var paths = document.querySelectorAll("svg path");
i = 0;

// turn <polyline> into <path>
var polylines = document.querySelectorAll("svg polyline");
polylines.forEach(function(item, index){
    let polypath = "M";
    stroke = item.outerHTML.substring(item.outerHTML.indexOf("stroke="), item.outerHTML.indexOf("stroke-width")); // figure out how to keep the right color stroke
    // logs the color of the polyline   console.log(item.outerHTML.substring(item.outerHTML.indexOf("stroke="), item.outerHTML.indexOf("stroke-width")));
    points = item.points;
    // logs the # of points of the polyline     console.log(item.points.length);

    polypath += `${points[0].x} ${points[0].y}`; // setting first point

    for (let j = 1; j < points.length; j++)
    {
        polypath += ' L' + points[j].x + ' ' + points[j].y;
    }

    //polypath += ' Z';     if returning to first point

    // change <polyline> into <path> with d=polypath
    item.outerHTML=`<path ${stroke} stroke-width=\"1\" fill=\"none\" d=\"${polypath}\" stroke-dasharray=\"2081.138671875\" stroke-dashoffset=\"2081.138671875\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"15s\" to=\"0\" fill=\"freeze\"></animate></path>`;    
});


paths.forEach(function(item, index){
    i++;

    var pathLength = item.getTotalLength();

    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);

    item.innerHTML = "<animate attributeName='stroke-dashoffset' begin='0s' dur='10s' to='0' fill=freeze />"

    console.log(index, pathLength);
});