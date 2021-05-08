//Variables
//Weapon crafting data received from parkerx's weapon recipes spreadsheet
var guns = [
    gun0 = {
        name: "Makarov",
        class: "Pistol",
        amount: 0,
        level: 5,
        mag: 8,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 15,
        iron: 10.5,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 10.25,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun1 = {
        name: "M1911",
        class: "Pistol",
        amount: 0,
        level: 12,
        mag: 7,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 16.5,
        iron: 12,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 11.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun2 = {
        name: "P99",
        class: "Pistol",
        amount: 0,
        level: 15,
        mag: 15,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 15,
        iron: 11.5,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 12.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun3 = {
        name: "FN Five-Seven",
        class: "Pistol",
        amount: 0,
        level: 18,
        mag: 20,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 13,
        iron: 25.5,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 18.75,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun4 = {
        name: "Mac-11",
        class: "Rifle",
        amount: 0,
        level: 20,
        mag: 32,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 16.5,
        iron: 12,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 11.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun5 = {
        name: "MR96",
        class: "Pistol",
        amount: 0,
        level: 20,
        mag: 6,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 15,
        iron: 33,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 25.25,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun6 = {
        name: "H&K MP5",
        class: "Rifle",
        amount: 0,
        level: 21,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        copper: 18,
        iron: 30,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 22.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun7 = {
        name: "Machete",
        class: "Knife",
        amount: 0,
        level: 25,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        copper: 12,
        iron: 7.5,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 6.5,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun8 = {
        name: "H&K UMP .45",
        class: "Rifle",
        amount: 0,
        level: 27,
        mag: 25,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 24,
        iron: 27,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 21.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun9 = {
        name: "AK-74",
        class: "Rifle",
        amount: 0,
        level: 28,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 24,
        iron: 28.5,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 23,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun10 = {
        name: "Glock 18",
        class: "Pistol",
        amount: 0,
        level: 28,
        mag: 17,
        firemodes: "Automatic",
        legal: false,
        copper: 15,
        iron: 48,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 33.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun11 = {
        name: "AR-15",
        class: "Rifle",
        amount: 0,
        level: 30,
        mag: 30,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 24,
        iron: 37.5,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 29,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun12 = {
        name: "Thompson",
        class: "Rifle",
        amount: 0,
        level: 31,
        mag: 20,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 25.5,
        iron: 37.5,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 28.75,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun13 = {
        name: "Glock 17",
        class: "Pistol",
        amount: 0,
        level: 32,
        mag: 14,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 15,
        iron: 28.5,
        silver: 1.5,
        gold: 3,
        titanium: 0,
        coal: 24.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun14 = {
        name: "Kriss Vector",
        class: "Rifle",
        amount: 0,
        level: 34,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        copper: 3,
        iron: 52.5,
        silver: 7.5,
        gold: 9,
        titanium: 0,
        coal: 43.5,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun15 = {
        name: "Desert Eagle",
        class: "Pistol",
        amount: 0,
        level: 35,
        mag: 7,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: 15,
        iron: 31.5,
        silver: 3,
        gold: 0,
        titanium: 0,
        coal: 25,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun16 = {
        name: "G36C",
        class: "Rifle",
        amount: 0,
        level: 37,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 24,
        iron: 46.5,
        silver: 3,
        gold: 0,
        titanium: 0,
        coal: 35,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun17 = {
        name: "LR-300",
        class: "Rifle",
        amount: 0,
        level: 40,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 24,
        iron: 55.5,
        silver: 6,
        gold: 0,
        titanium: 0,
        coal: 63,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun18 = {
        name: "DP-28",
        class: "Rifle",
        amount: 0,
        level: 40,
        mag: 47,
        firemodes: "Automatic",
        legal: false,
        copper: 25.5,
        iron: 52.5,
        silver: 7.5,
        gold: 0,
        titanium: 0,
        coal: 50.25,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun19 = {
        name: "Serbu Shorty",
        class: "Shotgun",
        amount: 0,
        level: 40,
        mag: 2,
        firemodes: "Pump-Action",
        legal: false,
        copper: 10.5,
        iron: 63,
        silver: 4.5,
        gold: 0,
        titanium: 0,
        coal: 46.25,
        wood: 0,
        maple: 12,
        willow: 0
    },
    gun20 = {
        name: "IMI Galil",
        class: "Rifle",
        amount: 0,
        level: 41,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 7.5,
        iron: 78,
        silver: 12,
        gold: 0,
        titanium: 0,
        coal: 53,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun21 = {
        name: "G3A3",
        class: "Rifle",
        amount: 0,
        level: 42,
        mag: 20,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 21,
        iron: 57,
        silver: 13.5,
        gold: 0,
        titanium: 0,
        coal: 53.5,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun22 = {
        name: "Honey Badger",
        class: "Rifle",
        amount: 0,
        level: 50,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 22.5,
        iron: 87,
        silver: 0,
        gold: 16.5,
        titanium: 0,
        coal: 72.5,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun23 = {
        name: "M249",
        class: "Rifle",
        amount: 0,
        level: 60,
        mag: 100,
        firemodes: "Automatic",
        legal: false,
        copper: 21,
        iron: 87,
        silver: 0,
        gold: 19.5,
        titanium: 4.5,
        coal: 77,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun24 = {
        name: "BT MP9",
        class: "Rifle",
        amount: 0,
        level: 62,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 3,
        iron: 45,
        silver: 12,
        gold: 12,
        titanium: 3,
        coal: 45.25,
        wood: 8,
        maple: 0,
        willow: 0
    },
    gun25 = {
        name: "Mosin Nagant",
        class: "Rifle",
        amount: 0,
        level: 64,
        mag: 5,
        firemodes: "Bolt-Action",
        legal: false,
        copper: 12,
        iron: 111,
        silver: 33,
        gold: 3,
        titanium: 0,
        coal: 98.5,
        wood: 0,
        maple: 0,
        willow: 12
    },
    gun26 = {
        name: "M14",
        class: "Rifle",
        amount: 0,
        level: 65,
        mag: 20,
        firemodes: "Semi-Automatic",
        legal: false,
        copper: 97.5,
        iron: 43.5,
        silver: 0,
        gold: 12,
        titanium: 7.5,
        coal: 94.5,
        wood: 0,
        maple: 0,
        willow: 12
    },
    gun27 = {
        name: "M3 Super 90",
        class: "Shotgun",
        amount: 0,
        level: 66,
        mag: 5,
        firemodes: "Pump-Action",
        legal: false,
        copper: 0,
        iron: 55.5,
        silver: 15,
        gold: 12,
        titanium: 0,
        coal: 51,
        wood: 0,
        maple: 12,
        willow: 0
    },
    gun28 = {
        name: "M4 Carbine",
        class: "Rifle",
        amount: 0,
        level: 68,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        copper: 22.5,
        iron: 78,
        silver: 12,
        gold: 16.5,
        titanium: 1.5,
        coal: 75.5,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun29 = {
        name: "ACR-E",
        class: "Rifle",
        amount: 0,
        level: 73,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 25.5,
        iron: 81,
        silver: 0,
        gold: 15,
        titanium: 3,
        coal: 70,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun30 = {
        name: "KSG-12",
        class: "Shotgun",
        amount: 0,
        level: 80,
        mag: 14,
        firemodes: "Pump-Action",
        legal: false,
        copper: 0,
        iron: 90,
        silver: 15,
        gold: 12,
        titanium: 7.5,
        coal: 78.5,
        wood: 0,
        maple: 12,
        willow: 0
    },
    gun31 = {
        name: "AUG A3",
        class: "Rifle",
        amount: 0,
        level: 88,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 25.5,
        iron: 96,
        silver: 12,
        gold: 19.5,
        titanium: 6,
        coal: 93.5,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun32 = {
        name: "XM8",
        class: "Rifle",
        amount: 0,
        level: 92,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 16.5,
        iron: 88.5,
        silver: 30,
        gold: 19.5,
        titanium: 10.5,
        coal: 101.75,
        wood: 0,
        maple: 0,
        willow: 0
    },
    gun33 = {
        name: "L115",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 5,
        firemodes: "Bolt-Action",
        legal: false,
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        coal: null,
        wood: null,
        maple: null,
        willow: null
    },
    gun34 = {
        name: "Silver Baller",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 7,
        firemodes: "Semi-Automatic",
        legal: true,
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        coal: null,
        wood: null,
        maple: null,
        willow: null
    },
    gun35 = {
        name: "HK-416",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        coal: null,
        wood: null,
        maple: null,
        willow: null
    },
    gun36 = {
        name: "SCAR-H",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 20,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        coal: null,
        wood: null,
        maple: null,
        willow: null
    },
    gun37 = {
        name: "BMG-50",
        class: "Police",
        amount: 0,
        level: 0,
        mag: 3,
        firemodes: "Semi-Automatic",
        legal: false,
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        coal: null,
        wood: null,
        maple: null,
        willow: null
    }
];

function loadGuns() {
    for(i = 0; i < guns.length; i++) {
        var itemContainer = document.createElement("div");
        itemContainer.id = "item-container" + i;
        itemContainer.style.border = "1px solid gray";
        itemContainer.style.height = "5vw";

        var itemImage = document.createElement("img");
        itemImage.id = "item-image" + i;
        itemImage.setAttribute("src", "images/weapons/" + i + ".png");
        itemImage.style.width = "4.5vw";
        itemImage.setAttribute("title", guns[i].name);
        itemImage.style.display = "block";
        itemImage.style.position = "relative";
        itemImage.style.top = "0.2vw";
        itemImage.style.left = "0.2vw";
        if(guns[i].class == "Pistol") {
            itemImage.style.border = "1px solid #006eff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
        } else if(guns[i].class == "Rifle") {
            itemImage.style.border = "1px solid #ff8c00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
        } else if(guns[i].class == "Knife") {
            itemImage.style.border = "1px solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
        } else if(guns[i].class == "Shotgun") {
            itemImage.style.border = "1px solid #7f00ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(183, 112, 255, 1), rgba(127, 0, 255, 0.25))";
        } else if(guns[i].class == "Exotic") {
            itemImage.style.border = "1px solid #eeff00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
        } else if(guns[i].class == "Police") {
            itemImage.style.border = "1px solid #0015ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(124, 135, 255, 1), rgba(0, 21, 255, 0.25))";
        }

        var itemName = document.createElement("div");
        itemName.id = "item-name" + i;
        itemName.innerHTML = guns[i].name;
        itemName.style.display = "block";
        itemName.style.position = "relative";
        itemName.style.top = "-4.5vw";
        itemName.style.left = "5.25vw";
        itemName.style.fontSize = "1.5vw";
        itemName.style.color = "white";
        itemName.style.fontWeight = "bold";

        var itemLevel = document.createElement("div");
        itemLevel.id = "item-level" + i;
        if(guns[i].level != 0) {
            itemLevel.innerHTML = "Crafting Level: " + guns[i].level;
            itemLevel.style.color = "white";
        } else if(guns[i].level == 0) {
            itemLevel.innerHTML = "Uncraftable Item";
            itemLevel.style.color = "red";
        }
        itemLevel.style.display = "block";
        itemLevel.style.position = "relative";
        itemLevel.style.top = "-4.5vw";
        itemLevel.style.left = "5.25vw";
        itemLevel.style.fontSize = "1vw";
        itemLevel.style.fontWeight = "600";

        var itemLegal = document.createElement("div");
        itemLegal.id = "item-legal" + i;
        if(guns[i].legal == true) {
            itemLegal.innerHTML = "Legal";
            itemLegal.style.color = "darkgreen";
        } else if(guns[i].legal == false) {
            itemLegal.innerHTML = "Illegal";
            itemLegal.style.color = "red";
        }
        itemLegal.style.display = "block";
        itemLegal.style.position = "relative";
        itemLegal.style.top = "-4.5vw";
        itemLegal.style.left = "5.25vw";
        itemLegal.style.fontSize = "1vw";
        itemLegal.style.fontWeight = "600";

        var itemMag = document.createElement("div");
        itemMag.id = "item-mag" + i;
        if(guns[i].mag != "Doesn't accept ammo") {
            itemMag.innerHTML = "Magazine Size: " + guns[i].mag;
            itemMag.style.color = "white";
        } else if(guns[i].mag == "Doesn't accept ammo") {
            itemMag.innerHTML = "Doesn't accept ammo";
            itemMag.style.color = "red";
        }
        itemMag.style.display = "block";
        itemMag.style.position = "relative";
        itemMag.style.top = "-8.75vw";
        itemMag.style.left = "20vw";
        itemMag.style.fontSize = "1vw";
        itemMag.style.fontWeight = "600";

        var itemFiremodes = document.createElement("div");
        itemFiremodes.id = "item-firemodes" + i;
        itemFiremodes.innerHTML = "Fire Modes: " + guns[i].firemodes;
        itemFiremodes.style.display = "block";
        itemFiremodes.style.position = "relative";
        itemFiremodes.style.top = "-8vw";
        itemFiremodes.style.left = "20vw";
        itemFiremodes.style.fontSize = "1vw";
        itemFiremodes.style.fontWeight = "600";
        itemFiremodes.style.color = "white";

        var itemInputBox = document.createElement("input");
        itemInputBox.id = "item-input-box" + i;
        itemInputBox.value = 0;
        itemInputBox.style.fontSize = "3vw";
        itemInputBox.style.fontWeight = "600";
        itemInputBox.style.color = "black";
        itemInputBox.style.backgroundColor = "white";
        itemInputBox.style.opacity = "75%";
        itemInputBox.style.width = "5vw";
        itemInputBox.style.height = "5vw";
        itemInputBox.style.border = "1px black solid";
        itemInputBox.style.display = "block";
        itemInputBox.style.position = "relative";
        itemInputBox.style.top = "-12vw";
        itemInputBox.style.left = "44vw";
        itemInputBox.style.textAlign = "center";
        itemInputBox.style.lineHeight = "5vw";
        itemInputBox.style.verticalAlign = "middle";
        itemInputBox.setAttribute("type", "number");
        itemInputBox.setAttribute("min", "0");
        itemInputBox.setAttribute("max", "99");
        itemInputBox.setAttribute("onchange", "inputChange(" + this.id + ")");
        itemInputBox.setAttribute("onkeydown", "inputChange(" + this.id + ")");
        
        var mainContainer = document.getElementById("guns-container");
        mainContainer.appendChild(itemContainer);
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemLevel);
        itemContainer.appendChild(itemLegal);
        itemContainer.appendChild(itemMag);
        itemContainer.appendChild(itemFiremodes);
        itemContainer.appendChild(itemInputBox)
    }
}

loadGuns();

function inputChange(id) {
    //var value = document.getElementById(id).value;
    console.log(id);
    //if(value < 0) {
    //    document.getElementById(id).value = 0;
    //}
}

//If width of page is less than 1000, run function:
setInterval(function(){
    var pageWidth = document.body.clientWidth;
    var pageHeight = document.body.clientHeight;
    if(pageWidth < 1200 || pageHeight < 600) {
        checkDims();
    }
}, 10);

var dimsAlert = 0;
function checkDims() {
    if(dimsAlert == 0) {
        interval = setInterval(fadeIn, 10);
        dimsAlert = 1;
    }
}

var opacity = 0;
function fadeIn() {
    if(opacity <= 75) {
        document.getElementById("dim-warning-container").style.visibility = "visible";
        document.getElementById("dim-warning-container").style.opacity = opacity + "%";
        opacity++;
    } else {
        clearInterval(interval);
    }
}

function closeWarning() {
    document.getElementById("dim-warning-container").style.visibility = "hidden";
}