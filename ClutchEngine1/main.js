//Clutch Engine 1.0.0aT
//Created and distributed by 2022 Clutch Ventures LLC.
//Uses jQuery Dependancy

let intervalList = [];
let cVersion = "Clutch Engine 1.0.0aT";

//True/False to enable/disable initial launch logo
let launchOpt = false; //True by default
if(launchOpt) {
    launch = document.createElement("img");
    launch.id = "clutch-engine-launch-image";
    $(launch).attr("src", "ClutchEngine1/images/logo.jpg");

    //Change first parameter (body) to whatever element is the main container
    $("body").append(launch);

    wait("$(launch).css('opacity', '100%');", 0.15);
    wait("$(launch).css('opacity', '0%');", 2.5);
    wait("$(launch).css('visibility', 'hidden'); launch.remove();", 3.25);
} else if(!launchOpt) {
    console.log("Created using " + cVersion + ".");
}

//Timeout
//Note: LOCAL variables will not be evaluated, only GLOBAL variables will be recognized by this command due to outer function usage.
function wait(command, time) {
    setTimeout(function() {
        eval(command);
    }, (time * 1000));
}

//Interval (DISABLED until 1.0.1)
// function repeat(name, command, time) {
//     if(intervalList.includes(name)) {
//         console.log(cVersion + " | An error has occurred while generating an interval.");
//     } else {
//         let interval = setInterval(function() {
//             eval(command);
//         }, (time * 1000));

//         intervalList[name] = interval;
//     }
// }

//Clear Interval
function clearRepeat(name) {
    if(typeof intervalList[name] === "undefined") {
        console.log(cVersion + " | An error has occurred while attempting to find the '" + name + "' interval.");
    } else {
        clearInterval(intervalList[name]);
    }
}

//Developer Function for checking current active intervals
// function adminCheckIntervals() {
//     console.log(cVersion + " | The current intervals stored are the following: " + intervals);
// }

//Prompt
function cPrompt(message) {
    console.log("Not available in this version.");
}

//Math functions
function add() {
    let base = arguments[0];
    for(i = 1; i < arguments.length; i++) {
        base += arguments[i];
    }
    return base;
}

function subtract() {
    let base = arguments[0];
    for(i = 1; i < arguments.length; i++) {
        base -= arguments[i];
    }
    return base;
}

function multiply() {
    let base = arguments[0];
    for(i = 1; i < arguments.length; i++) {
        base *= arguments[i];
    }
    return base;
}

function divide() {
    let base = arguments[0];
    for(i = 1; i < arguments.length; i++) {
        base /= arguments[i];
    }
    return base;
}

function remainder() {
    let base = arguments[0];
    for(i = 1; i < arguments.length; i++) {
        base %= arguments[i];
    }
    return base;
}

function random(a, b, c) {
    if(c === "undefined") console.log("UNDEFINED");
}

// repeat("test", "console.log('interval test');", 5);
// adminCheckIntervals();

// random();