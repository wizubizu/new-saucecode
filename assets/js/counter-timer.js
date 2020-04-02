let radius = 70;
let circumference = 2*radius*Math.PI;
let circles = document.querySelectorAll('circle');

circles.forEach( c => c.setAttribute('stroke-dasharray',circumference))

let progressCircles = document.querySelectorAll('.progress'); 

let countDown = new Date("april 31, 2020 00:00:00").getTime();
let pastDate  = new Date("feb 28, 2020 00:00:00").getTime();

const units = 
{
    second: 1000,
    minute: 1000 * 60,
    hour  : 1000 * 60* 60,
    day  : 1000 * 60* 60* 24
}

const strings = ["second","minute","hour","day"]

const divisors = 
{
    second : 60,
    minute : 60,
    hour   : 24,
    day    : Math.floor((countDown - pastDate)  / units.day)
}

/**
 * 
 * @param {SVGCircleElement} circle progress bar to be updated
 * @param {Number} timeIndex to get time unit in strings array 
 */
function updateCircle(circle,timeIndex)
{
     
    let now = new Date().getTime(),
    distance = countDown - now;  
    let offset = 0;
    let scale = 0;
   
    if(timeIndex === 3)
    {
        scale  =  (distance / units[strings[timeIndex]]); 
    }
    else
    {
        scale  = (distance % units[strings[timeIndex+1]]) / units[strings[timeIndex]];        
    }     

    offset = (scale / divisors[strings[timeIndex]]) * circumference;

    //update circle
    circle.setAttribute('stroke-dashoffset',offset);

    //update text
    document.querySelector(`#${strings[timeIndex]} .value`).innerText = Math.floor( scale );

}

for (let index = 0; index < progressCircles.length; index++) 
{
    setInterval( () => updateCircle(progressCircles[progressCircles.length - 1 - index],index), units.second );
    
}