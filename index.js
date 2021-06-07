//Variables
//Weapon crafting data received from parkerx's weapon recipes spreadsheet
var guns = [
    {
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
        willow: 0,
        steel: 0
    },
    {
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
        willow: 0,
        steel: 0
    },
    {
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
        willow: 0,
        steel: 0
    },
    {
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
        willow: 0,
        steel: 2
    },
    {
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
        willow: 0,
        steel: 0
    },
    {
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
        willow: 0,
        steel: 5
    },
    {
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
        willow: 0,
        steel: 2
    },
    {
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
        willow: 0,
        steel: 0
    },
    {
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
        willow: 0,
        steel: 0
    },
    {
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
        willow: 0,
        steel: 1
    },
    {
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
        willow: 0,
        steel: 6
    },
    {
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
        willow: 0,
        steel: 3
    },
    {
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
        willow: 0,
        steel: 2
    },
    {
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
        willow: 0,
        steel: 3
    },
    {
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
        willow: 0,
        steel: 7
    },
    {
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
        willow: 0,
        steel: 3
    },
    {
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
        willow: 0,
        steel: 5
    },
    {
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
        willow: 0,
        steel: 5
    },
    {
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
        willow: 0,
        steel: 6
    },
    {
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
        willow: 0,
        steel: 10
    },
    {
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
        willow: 0,
        steel: 9
    },
    {
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
        willow: 0,
        steel: 12
    },
    {
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
        willow: 0,
        steel: 12
    },
    {
        name: "SCAR-H",
        class: "Rifle",
        amount: 0,
        level: 52,
        mag: 20,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        copper: 24,
        iron: 69,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 176,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: null
    },
    {
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
        willow: 0,
        steel: 12
    },
    {
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
        willow: 0,
        steel: 5
    },
    {
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
        willow: 12,
        steel: 16
    },
    {
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
        willow: 12,
        steel: 13
    },
    {
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
        willow: 0,
        steel: 6
    },
    {
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
        willow: 0,
        steel: 10
    },
    {
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
        willow: 0,
        steel: 10
    },
    {
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
        willow: 0,
        steel: 13
    },
    {
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
        willow: 0,
        steel: 14
    },
    {
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
        willow: 0,
        steel: 14
    },
    {
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
        willow: null,
        steel: null
    },
    {
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
        willow: null,
        steel: null
    },
    {
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
        willow: null,
        steel: null
    },
    {
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
        willow: null,
        steel: null
    },
    {
        name: "Gas Mask",
        class: "Equipable",
        amount: 0,
        level: 52,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        copper: 6,
        iron: 24,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 18,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: null
    },
    {
        name: "Gas Filter",
        class: "Equipable",
        amount: 0,
        level: 52,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        copper: 6,
        iron: 15,
        silver: 0,
        gold: 0,
        titanium: 0,
        coal: 12,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: null
    }
];

var materials = [
    {
        name: "Copper Chunk",
        image: "images/ores/copper.png",
        amount: 0
    },
    {
        name: "Coal Chunk",
        image: "images/ores/coal.png",
        amount: 0
    },
    {
        name: "Iron Chunk",
        image: "images/ores/iron.png",
        amount: 0
    },
    {
        name: "Silver Chunk",
        image: "images/ores/silver.png",
        amount: 0
    },
    {
        name: "Gold Chunk",
        image: "images/ores/gold.png",
        amount: 0
    },
    {
        name: "Titanium Chunk",
        image: "images/ores/titanium.png",
        amount: 0
    },
    {
        name: "Wood Log",
        image: "images/ores/log.png",
        amount: 0
    },
    {
        name: "Maple Log",
        image: "images/ores/log.png",
        amount: 0
    },
    {
        name: "Willow Log",
        image: "images/ores/log.png",
        amount: 0
    }
];

var extendedMaterials = [
    {
        name: "Crushed Copper",
        image: "images/ores/c_copper.png",
        amount: 0
    },
    {
        name: "Copper Bar",
        image: "images/ores/i_copper.png",
        amount: 0
    },
    {
        name: "Crushed Coal",
        image: "images/ores/c_coal.png",
        amount: 0
    },
    {
        name: "Crushed Iron",
        image: "images/ores/c_iron.png",
        amount: 0
    },
    {
        name: "Iron Bar",
        image: "images/ores/i_iron.png",
        amount: 0
    },
    {
        name: "Steel Bar",
        image: "images/ores/i_steel.png",
        amount: 0
    },
    {
        name: "Crushed Silver",
        image: "images/ores/c_silver.png",
        amount: 0
    },
    {
        name: "Silver Bar",
        image: "images/ores/i_silver.png",
        amount: 0
    },
    {
        name: "Crushed Gold",
        image: "images/ores/c_gold.png",
        amount: 0
    },
    {
        name: "Gold Bar",
        image: "images/ores/i_gold.png",
        amount: 0
    },
    {
        name: "Crushed Titanium",
        image: "images/ores/c_titanium.png",
        amount: 0
    },
    {
        name: "Titanium Bar",
        image: "images/ores/i_titanium.png",
        amount: 0
    },
    {
        name: "Wood Plank",
        image: "images/ores/plank.png",
        amount: 0
    },
    {
        name: "Maple Plank",
        image: "images/ores/plank.png",
        amount: 0
    },
    {
        name: "Willow Plank",
        image: "images/ores/plank.png",
        amount: 0
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
        } else if(guns[i].class == "Equipable") {
            itemImage.style.border = "1px solid #46d300";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(135, 209, 98, 1), rgba(70, 211, 0, 0.25))";
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
            if(guns[i].name == "Gas Mask" || guns[i].name == "Gas Filter") {
                itemLevel.innerHTML = "Metalworking Level: " + guns[i].level;
            } else {
                itemLevel.innerHTML = "Crafting Level: " + guns[i].level;
                itemLevel.style.color = "white";
            }
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

        itemInputBox = document.createElement("input");
        itemInputBox.id = "item-input-box" + i;
        itemInputBox.value = 0;
        itemInputBox.style.fontSize = "3vw";
        itemInputBox.style.fontWeight = "600";
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
        if(guns[i].class == "Police" || guns[i].class == "Exotic") {
            itemInputBox.style.backgroundColor = "salmon";
            itemInputBox.style.color = "red";
            itemInputBox.setAttribute("min", "0");
            itemInputBox.setAttribute("max", "0");
        } else {
            itemInputBox.style.backgroundColor = "white";
            itemInputBox.style.color = "black";
            itemInputBox.setAttribute("min", "0");
            itemInputBox.setAttribute("max", "99");
            itemInputBox.setAttribute("onchange", "inputChange()");
            itemInputBox.setAttribute("onInput", "inputChange()");
        }
        
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

function loadMaterials() {
    for(i = 0; i < materials.length; i++) {
        var materialItemContainer = document.createElement("div");
        materialItemContainer.id = "material-item-container" + i;
        materialItemContainer.style.border = "1px solid gray";
        materialItemContainer.style.height = "5vw";
        materialItemContainer.style.cursor = "pointer";
        materialItemContainer.style.userSelect = "none";
        materialItemContainer.setAttribute("onclick", "materialClick(" + i + ")");

        var materialImage = document.createElement("img");
        materialImage.id = "material-image" + i;
        materialImage.setAttribute("src", materials[i].image);
        materialImage.style.width = "4.5vw";
        materialImage.setAttribute("title", materials[i].name);
        materialImage.style.display = "block";
        materialImage.style.position = "relative";
        materialImage.style.top = "0.2vw";
        materialImage.style.left = "0.2vw";
        materialImage.style.border = "1px solid #333333";
        materialImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";

        var materialName = document.createElement("div");
        materialName.id = "material-name" + i;
        materialName.innerHTML = materials[i].name;
        materialName.style.display = "block";
        materialName.style.position = "relative";
        materialName.style.top = "-4.5vw";
        materialName.style.left = "5.25vw";
        materialName.style.fontSize = "1.5vw";
        materialName.style.color = "white";
        materialName.style.fontWeight = "bold";

        var materialAmount = document.createElement("div");
        materialAmount.id = "material-amount" + i;
        materialAmount.innerHTML = "Amount: " + materials[i].amount;
        materialAmount.style.display = "block";
        materialAmount.style.position = "relative";
        materialAmount.style.top = "-4.5vw";
        materialAmount.style.left = "5.25vw";
        materialAmount.style.fontSize = "1.25vw";
        materialAmount.style.color = "white";
        materialAmount.style.fontWeight = "600";

        var mainContainer = document.getElementById("material-container");
        mainContainer.appendChild(materialItemContainer);
        materialItemContainer.appendChild(materialImage);
        materialItemContainer.appendChild(materialName);
        materialItemContainer.appendChild(materialAmount);
    }
}

loadMaterials();

var list = [];
var steel = 0;

function inputChange() {
    list = [];
    for(j = 0; j < materials.length; j++) {
        materials[j].amount = 0;
        steel = 0;
    }
    for(k = 0; k < extendedMaterials.length; k++) {
        extendedMaterials[k].amount = 0;
    }

    for(i = 0; i < guns.length; i++) {
        var currentAmount = document.getElementById("item-input-box" + i).value;

        if(currentAmount == "") {
            guns[i].amount = "0";
        } else {
            guns[i].amount = currentAmount;
        }
        list.push(guns[i].amount);
    }
    //console.log(list);
    for(x = 0; x < guns.length; x++) {
        //Copper
        materials[0].amount += (guns[x].copper * list[x]);
        document.getElementById("material-amount0").innerHTML = "Amount: " + materials[0].amount;

        //Coal
        materials[1].amount += (guns[x].coal * list[x]);
        document.getElementById("material-amount1").innerHTML = "Amount: " + materials[1].amount;

        //Iron
        materials[2].amount += (guns[x].iron * list[x]);
        document.getElementById("material-amount2").innerHTML = "Amount: " + materials[2].amount;

        //Silver
        materials[3].amount += (guns[x].silver * list[x]);
        document.getElementById("material-amount3").innerHTML = "Amount: " + materials[3].amount;

        //Gold
        materials[4].amount += (guns[x].gold * list[x]);
        document.getElementById("material-amount4").innerHTML = "Amount: " + materials[4].amount;

        //Titanium
        materials[5].amount += (guns[x].titanium * list[x]);
        document.getElementById("material-amount5").innerHTML = "Amount: " + materials[5].amount;

        //Wood
        materials[6].amount += (guns[x].wood * list[x]);
        document.getElementById("material-amount6").innerHTML = "Amount: " + materials[6].amount;

        //Maple
        materials[7].amount += (guns[x].maple * list[x]);
        document.getElementById("material-amount7").innerHTML = "Amount: " + materials[7].amount;

        //Willow
        materials[8].amount += (guns[x].willow * list[x]);
        document.getElementById("material-amount8").innerHTML = "Amount: " + materials[8].amount;

        //Steel
        steel += guns[x].steel * list[x];
    }
    extendedAmount();
}

var copperClicked = false;
var coalClicked = false;
var ironClicked = false;
var silverClicked = false;
var goldClicked = false;
var titaniumClicked = false;
var woodClicked = false;
var mapleClicked = false;
var willowClicked = false;

var heights = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function materialClick(id) {
    if(id == 0) {
        //Copper
        if(copperClicked == false) {
            extendedMaterialContainerCrushedCopper = document.createElement("div");
            extendedMaterialContainerCrushedCopper.id = "extended-material-container-crushed-copper";
            extendedMaterialContainerCrushedCopper.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedCopper.style.height = "3vw";
            extendedMaterialContainerCrushedCopper.style.position = "relative";
            extendedMaterialContainerCrushedCopper.style.top = "-3.25vw";

            extendedMaterialCrushedCopperImage = document.createElement("img");
            extendedMaterialCrushedCopperImage.id = "extended-material-crushed-copper-image";
            extendedMaterialCrushedCopperImage.style.height = "2.5vw";
            extendedMaterialCrushedCopperImage.style.position = "relative";
            extendedMaterialCrushedCopperImage.style.top = "0.25vw";
            extendedMaterialCrushedCopperImage.style.left = "0.25vw";
            extendedMaterialCrushedCopperImage.style.border = "1px solid #333333";
            extendedMaterialCrushedCopperImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedCopperImage.setAttribute("src", extendedMaterials[0].image);
            extendedMaterialCrushedCopperImage.setAttribute("title", extendedMaterials[0].name);
            
            extendedMaterialCrushedCopperName = document.createElement("div");
            extendedMaterialCrushedCopperName.id = "extended-material-crushed-copper-name";
            extendedMaterialCrushedCopperName.style.color = "white";
            extendedMaterialCrushedCopperName.style.fontSize = "1vw";
            extendedMaterialCrushedCopperName.style.fontWeight = "bold";
            extendedMaterialCrushedCopperName.style.position = "relative";
            extendedMaterialCrushedCopperName.style.top = "-2.7vw";
            extendedMaterialCrushedCopperName.style.left = "3.1vw";
            extendedMaterialCrushedCopperName.innerHTML = extendedMaterials[0].name;

            extendedMaterialCrushedCopperAmount = document.createElement("div");
            extendedMaterialCrushedCopperAmount.id = "extended-material-crushed-copper-amount";
            extendedMaterialCrushedCopperAmount.style.color = "white";
            extendedMaterialCrushedCopperAmount.style.fontSize = "1vw";
            extendedMaterialCrushedCopperAmount.style.fontWeight = "500";
            extendedMaterialCrushedCopperAmount.style.position = "relative";
            extendedMaterialCrushedCopperAmount.style.top = "-2.9vw";
            extendedMaterialCrushedCopperAmount.style.left = "3.1vw";
            extendedMaterialCrushedCopperAmount.innerHTML = "Amount: " + extendedMaterials[0].amount;

            document.getElementById("material-item-container0").appendChild(extendedMaterialContainerCrushedCopper);
            extendedMaterialContainerCrushedCopper.appendChild(extendedMaterialCrushedCopperImage);
            extendedMaterialContainerCrushedCopper.appendChild(extendedMaterialCrushedCopperName);
            extendedMaterialContainerCrushedCopper.appendChild(extendedMaterialCrushedCopperAmount);

            extendedMaterialContainerCopperIngot = document.createElement("div");
            extendedMaterialContainerCopperIngot.id = "extended-material-container-copper-ingot";
            extendedMaterialContainerCopperIngot.style.height = "3vw";
            extendedMaterialContainerCopperIngot.style.position = "relative";
            extendedMaterialContainerCopperIngot.style.top = "-3.25vw";

            extendedMaterialCopperIngotImage = document.createElement("img");
            extendedMaterialCopperIngotImage.id = "extended-material-copper-ingot-image";
            extendedMaterialCopperIngotImage.style.height = "2.5vw";
            extendedMaterialCopperIngotImage.style.position = "relative";
            extendedMaterialCopperIngotImage.style.top = "0.25vw";
            extendedMaterialCopperIngotImage.style.left = "0.25vw";
            extendedMaterialCopperIngotImage.style.border = "1px solid #333333";
            extendedMaterialCopperIngotImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCopperIngotImage.setAttribute("src", extendedMaterials[1].image);
            extendedMaterialCopperIngotImage.setAttribute("title", extendedMaterials[1].name);
            
            extendedMaterialCopperIngotName = document.createElement("div");
            extendedMaterialCopperIngotName.id = "extended-material-copper-ingot-name";
            extendedMaterialCopperIngotName.style.color = "white";
            extendedMaterialCopperIngotName.style.fontSize = "1vw";
            extendedMaterialCopperIngotName.style.fontWeight = "bold";
            extendedMaterialCopperIngotName.style.position = "relative";
            extendedMaterialCopperIngotName.style.top = "-2.7vw";
            extendedMaterialCopperIngotName.style.left = "3.1vw";
            extendedMaterialCopperIngotName.innerHTML = extendedMaterials[1].name;

            extendedMaterialCopperIngotAmount = document.createElement("div");
            extendedMaterialCopperIngotAmount.id = "extended-material-copper-ingot-amount";
            extendedMaterialCopperIngotAmount.style.color = "white";
            extendedMaterialCopperIngotAmount.style.fontSize = "1vw";
            extendedMaterialCopperIngotAmount.style.fontWeight = "500";
            extendedMaterialCopperIngotAmount.style.position = "relative";
            extendedMaterialCopperIngotAmount.style.top = "-2.9vw";
            extendedMaterialCopperIngotAmount.style.left = "3.1vw";
            extendedMaterialCopperIngotAmount.innerHTML = "Amount: " + extendedMaterials[1].amount;

            document.getElementById("material-item-container0").appendChild(extendedMaterialContainerCopperIngot);
            extendedMaterialContainerCopperIngot.appendChild(extendedMaterialCopperIngotImage);
            extendedMaterialContainerCopperIngot.appendChild(extendedMaterialCopperIngotName);
            extendedMaterialContainerCopperIngot.appendChild(extendedMaterialCopperIngotAmount);
            
            /*for(i = 1; i < materials.length; i++) {
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = "6vw";
            }*/

            for(i = 1; i < heights.length; i++) {
                heights[i] += 6;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            copperClicked = true;
        } else if(copperClicked == true) {
            extendedMaterialContainerCrushedCopper.remove();
            extendedMaterialContainerCopperIngot.remove();

            /*for(i = 1; i < materials.length; i++) {
                document.getElementById("material-item-container" + i).style.top = "0vw";
            }*/

            for(i = 1; i < heights.length; i++) {
                heights[i] -= 6;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            copperClicked = false;
        }
    } else if(id == 1) {
        //Coal
        if(coalClicked == false) {
            extendedMaterialContainerCrushedCoal = document.createElement("div");
            extendedMaterialContainerCrushedCoal.id = "extended-material-container-crushed-coal";
            extendedMaterialContainerCrushedCoal.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedCoal.style.height = "3vw";
            extendedMaterialContainerCrushedCoal.style.position = "relative";
            extendedMaterialContainerCrushedCoal.style.top = "-3.25vw";

            extendedMaterialCrushedCoalImage = document.createElement("img");
            extendedMaterialCrushedCoalImage.id = "extended-material-crushed-coal-image";
            extendedMaterialCrushedCoalImage.style.height = "2.5vw";
            extendedMaterialCrushedCoalImage.style.position = "relative";
            extendedMaterialCrushedCoalImage.style.top = "0.25vw";
            extendedMaterialCrushedCoalImage.style.left = "0.25vw";
            extendedMaterialCrushedCoalImage.style.border = "1px solid #333333";
            extendedMaterialCrushedCoalImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedCoalImage.setAttribute("src", extendedMaterials[2].image);
            extendedMaterialCrushedCoalImage.setAttribute("title", extendedMaterials[2].name);
            
            extendedMaterialCrushedCoalName = document.createElement("div");
            extendedMaterialCrushedCoalName.id = "extended-material-crushed-coal-name";
            extendedMaterialCrushedCoalName.style.color = "white";
            extendedMaterialCrushedCoalName.style.fontSize = "1vw";
            extendedMaterialCrushedCoalName.style.fontWeight = "bold";
            extendedMaterialCrushedCoalName.style.position = "relative";
            extendedMaterialCrushedCoalName.style.top = "-2.7vw";
            extendedMaterialCrushedCoalName.style.left = "3.1vw";
            extendedMaterialCrushedCoalName.innerHTML = extendedMaterials[2].name;

            extendedMaterialCrushedCoalAmount = document.createElement("div");
            extendedMaterialCrushedCoalAmount.id = "extended-material-crushed-coal-amount";
            extendedMaterialCrushedCoalAmount.style.color = "white";
            extendedMaterialCrushedCoalAmount.style.fontSize = "1vw";
            extendedMaterialCrushedCoalAmount.style.fontWeight = "500";
            extendedMaterialCrushedCoalAmount.style.position = "relative";
            extendedMaterialCrushedCoalAmount.style.top = "-2.9vw";
            extendedMaterialCrushedCoalAmount.style.left = "3.1vw";
            extendedMaterialCrushedCoalAmount.innerHTML = "Amount: " + extendedMaterials[2].amount;

            document.getElementById("material-item-container1").appendChild(extendedMaterialContainerCrushedCoal);
            extendedMaterialContainerCrushedCoal.appendChild(extendedMaterialCrushedCoalImage);
            extendedMaterialContainerCrushedCoal.appendChild(extendedMaterialCrushedCoalName);
            extendedMaterialContainerCrushedCoal.appendChild(extendedMaterialCrushedCoalAmount);

            for(i = 2; i < heights.length; i++) {
                heights[i] += 3;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            coalClicked = true;
        } else if(coalClicked == true) {
            extendedMaterialContainerCrushedCoal.remove();

            for(i = 2; i < heights.length; i++) {
                heights[i] -= 3;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            coalClicked = false;
        }
    } else if(id == 2) {
        //Iron
        if(ironClicked == false) {
            extendedMaterialContainerCrushedIron = document.createElement("div");
            extendedMaterialContainerCrushedIron.id = "extended-material-container-crushed-iron";
            extendedMaterialContainerCrushedIron.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedIron.style.height = "3vw";
            extendedMaterialContainerCrushedIron.style.position = "relative";
            extendedMaterialContainerCrushedIron.style.top = "-3.25vw";

            extendedMaterialCrushedIronImage = document.createElement("img");
            extendedMaterialCrushedIronImage.id = "extended-material-crushed-iron-image";
            extendedMaterialCrushedIronImage.style.height = "2.5vw";
            extendedMaterialCrushedIronImage.style.position = "relative";
            extendedMaterialCrushedIronImage.style.top = "0.25vw";
            extendedMaterialCrushedIronImage.style.left = "0.25vw";
            extendedMaterialCrushedIronImage.style.border = "1px solid #333333";
            extendedMaterialCrushedIronImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedIronImage.setAttribute("src", extendedMaterials[3].image);
            extendedMaterialCrushedIronImage.setAttribute("title", extendedMaterials[3].name);
            
            extendedMaterialCrushedIronName = document.createElement("div");
            extendedMaterialCrushedIronName.id = "extended-material-crushed-iron-name";
            extendedMaterialCrushedIronName.style.color = "white";
            extendedMaterialCrushedIronName.style.fontSize = "1vw";
            extendedMaterialCrushedIronName.style.fontWeight = "bold";
            extendedMaterialCrushedIronName.style.position = "relative";
            extendedMaterialCrushedIronName.style.top = "-2.7vw";
            extendedMaterialCrushedIronName.style.left = "3.1vw";
            extendedMaterialCrushedIronName.innerHTML = extendedMaterials[3].name;

            extendedMaterialCrushedIronAmount = document.createElement("div");
            extendedMaterialCrushedIronAmount.id = "extended-material-crushed-iron-amount";
            extendedMaterialCrushedIronAmount.style.color = "white";
            extendedMaterialCrushedIronAmount.style.fontSize = "1vw";
            extendedMaterialCrushedIronAmount.style.fontWeight = "500";
            extendedMaterialCrushedIronAmount.style.position = "relative";
            extendedMaterialCrushedIronAmount.style.top = "-2.9vw";
            extendedMaterialCrushedIronAmount.style.left = "3.1vw";
            extendedMaterialCrushedIronAmount.innerHTML = "Amount: " + extendedMaterials[3].amount;

            document.getElementById("material-item-container2").appendChild(extendedMaterialContainerCrushedIron);
            extendedMaterialContainerCrushedIron.appendChild(extendedMaterialCrushedIronImage);
            extendedMaterialContainerCrushedIron.appendChild(extendedMaterialCrushedIronName);
            extendedMaterialContainerCrushedIron.appendChild(extendedMaterialCrushedIronAmount);

            extendedMaterialContainerIronIngot = document.createElement("div");
            extendedMaterialContainerIronIngot.id = "extended-material-container-iron-ingot";
            extendedMaterialContainerIronIngot.style.borderBottom = "1px solid gray";
            extendedMaterialContainerIronIngot.style.height = "3vw";
            extendedMaterialContainerIronIngot.style.position = "relative";
            extendedMaterialContainerIronIngot.style.top = "-3.25vw";

            extendedMaterialIronIngotImage = document.createElement("img");
            extendedMaterialIronIngotImage.id = "extended-material-iron-ingot-image";
            extendedMaterialIronIngotImage.style.height = "2.5vw";
            extendedMaterialIronIngotImage.style.position = "relative";
            extendedMaterialIronIngotImage.style.top = "0.25vw";
            extendedMaterialIronIngotImage.style.left = "0.25vw";
            extendedMaterialIronIngotImage.style.border = "1px solid #333333";
            extendedMaterialIronIngotImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialIronIngotImage.setAttribute("src", extendedMaterials[4].image);
            extendedMaterialIronIngotImage.setAttribute("title", extendedMaterials[4].name);
            
            extendedMaterialIronIngotName = document.createElement("div");
            extendedMaterialIronIngotName.id = "extended-material-iron-ingot-name";
            extendedMaterialIronIngotName.style.color = "white";
            extendedMaterialIronIngotName.style.fontSize = "1vw";
            extendedMaterialIronIngotName.style.fontWeight = "bold";
            extendedMaterialIronIngotName.style.position = "relative";
            extendedMaterialIronIngotName.style.top = "-2.7vw";
            extendedMaterialIronIngotName.style.left = "3.1vw";
            extendedMaterialIronIngotName.innerHTML = extendedMaterials[4].name;

            extendedMaterialIronIngotAmount = document.createElement("div");
            extendedMaterialIronIngotAmount.id = "extended-material-iron-ingot-amount";
            extendedMaterialIronIngotAmount.style.color = "white";
            extendedMaterialIronIngotAmount.style.fontSize = "1vw";
            extendedMaterialIronIngotAmount.style.fontWeight = "500";
            extendedMaterialIronIngotAmount.style.position = "relative";
            extendedMaterialIronIngotAmount.style.top = "-2.9vw";
            extendedMaterialIronIngotAmount.style.left = "3.1vw";
            extendedMaterialIronIngotAmount.innerHTML = "Amount: " + fixedIron;

            document.getElementById("material-item-container2").appendChild(extendedMaterialContainerIronIngot);
            extendedMaterialContainerIronIngot.appendChild(extendedMaterialIronIngotImage);
            extendedMaterialContainerIronIngot.appendChild(extendedMaterialIronIngotName);
            extendedMaterialContainerIronIngot.appendChild(extendedMaterialIronIngotAmount);

            extendedMaterialContainerSteelIngot = document.createElement("div");
            extendedMaterialContainerSteelIngot.id = "extended-material-container-steel-ingot";
            extendedMaterialContainerSteelIngot.style.height = "3vw";
            extendedMaterialContainerSteelIngot.style.position = "relative";
            extendedMaterialContainerSteelIngot.style.top = "-3.25vw";

            extendedMaterialSteelIngotImage = document.createElement("img");
            extendedMaterialSteelIngotImage.id = "extended-material-steel-ingot-image";
            extendedMaterialSteelIngotImage.style.height = "2.5vw";
            extendedMaterialSteelIngotImage.style.position = "relative";
            extendedMaterialSteelIngotImage.style.top = "0.25vw";
            extendedMaterialSteelIngotImage.style.left = "0.25vw";
            extendedMaterialSteelIngotImage.style.border = "1px solid #333333";
            extendedMaterialSteelIngotImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialSteelIngotImage.setAttribute("src", extendedMaterials[5].image);
            extendedMaterialSteelIngotImage.setAttribute("title", extendedMaterials[5].name);
            
            extendedMaterialSteelIngotName = document.createElement("div");
            extendedMaterialSteelIngotName.id = "extended-material-steel-ingot-name";
            extendedMaterialSteelIngotName.style.color = "white";
            extendedMaterialSteelIngotName.style.fontSize = "1vw";
            extendedMaterialSteelIngotName.style.fontWeight = "bold";
            extendedMaterialSteelIngotName.style.position = "relative";
            extendedMaterialSteelIngotName.style.top = "-2.7vw";
            extendedMaterialSteelIngotName.style.left = "3.1vw";
            extendedMaterialSteelIngotName.innerHTML = extendedMaterials[5].name;

            extendedMaterialSteelIngotAmount = document.createElement("div");
            extendedMaterialSteelIngotAmount.id = "extended-material-steel-ingot-amount";
            extendedMaterialSteelIngotAmount.style.color = "white";
            extendedMaterialSteelIngotAmount.style.fontSize = "1vw";
            extendedMaterialSteelIngotAmount.style.fontWeight = "500";
            extendedMaterialSteelIngotAmount.style.position = "relative";
            extendedMaterialSteelIngotAmount.style.top = "-2.9vw";
            extendedMaterialSteelIngotAmount.style.left = "3.1vw";
            extendedMaterialSteelIngotAmount.innerHTML = "Amount: " + extendedMaterials[5].amount;

            document.getElementById("material-item-container2").appendChild(extendedMaterialContainerSteelIngot);
            extendedMaterialContainerSteelIngot.appendChild(extendedMaterialSteelIngotImage);
            extendedMaterialContainerSteelIngot.appendChild(extendedMaterialSteelIngotName);
            extendedMaterialContainerSteelIngot.appendChild(extendedMaterialSteelIngotAmount);

            for(i = 3; i < heights.length; i++) {
                heights[i] += 9;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            ironClicked = true;
        } else if(ironClicked == true) {
            extendedMaterialContainerCrushedIron.remove();
            extendedMaterialContainerIronIngot.remove();
            extendedMaterialContainerSteelIngot.remove();

            for(i = 3; i < heights.length; i++) {
                heights[i] -= 9;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            ironClicked = false;
        }
    } else if(id == 3) {
        //Silver
        if(silverClicked == false) {
            extendedMaterialContainerCrushedSilver = document.createElement("div");
            extendedMaterialContainerCrushedSilver.id = "extended-material-container-crushed-silver";
            extendedMaterialContainerCrushedSilver.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedSilver.style.height = "3vw";
            extendedMaterialContainerCrushedSilver.style.position = "relative";
            extendedMaterialContainerCrushedSilver.style.top = "-3.25vw";

            extendedMaterialCrushedSilverImage = document.createElement("img");
            extendedMaterialCrushedSilverImage.id = "extended-material-crushed-silver-image";
            extendedMaterialCrushedSilverImage.style.height = "2.5vw";
            extendedMaterialCrushedSilverImage.style.position = "relative";
            extendedMaterialCrushedSilverImage.style.top = "0.25vw";
            extendedMaterialCrushedSilverImage.style.left = "0.25vw";
            extendedMaterialCrushedSilverImage.style.border = "1px solid #333333";
            extendedMaterialCrushedSilverImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedSilverImage.setAttribute("src", extendedMaterials[6].image);
            extendedMaterialCrushedSilverImage.setAttribute("title", extendedMaterials[6].name);
            
            extendedMaterialCrushedSilverName = document.createElement("div");
            extendedMaterialCrushedSilverName.id = "extended-material-crushed-silver-name";
            extendedMaterialCrushedSilverName.style.color = "white";
            extendedMaterialCrushedSilverName.style.fontSize = "1vw";
            extendedMaterialCrushedSilverName.style.fontWeight = "bold";
            extendedMaterialCrushedSilverName.style.position = "relative";
            extendedMaterialCrushedSilverName.style.top = "-2.7vw";
            extendedMaterialCrushedSilverName.style.left = "3.1vw";
            extendedMaterialCrushedSilverName.innerHTML = extendedMaterials[6].name;

            extendedMaterialCrushedSilverAmount = document.createElement("div");
            extendedMaterialCrushedSilverAmount.id = "extended-material-crushed-silver-amount";
            extendedMaterialCrushedSilverAmount.style.color = "white";
            extendedMaterialCrushedSilverAmount.style.fontSize = "1vw";
            extendedMaterialCrushedSilverAmount.style.fontWeight = "500";
            extendedMaterialCrushedSilverAmount.style.position = "relative";
            extendedMaterialCrushedSilverAmount.style.top = "-2.9vw";
            extendedMaterialCrushedSilverAmount.style.left = "3.1vw";
            extendedMaterialCrushedSilverAmount.innerHTML = "Amount: " + extendedMaterials[6].amount;

            document.getElementById("material-item-container3").appendChild(extendedMaterialContainerCrushedSilver);
            extendedMaterialContainerCrushedSilver.appendChild(extendedMaterialCrushedSilverImage);
            extendedMaterialContainerCrushedSilver.appendChild(extendedMaterialCrushedSilverName);
            extendedMaterialContainerCrushedSilver.appendChild(extendedMaterialCrushedSilverAmount);

            extendedMaterialContainerSilverIngot = document.createElement("div");
            extendedMaterialContainerSilverIngot.id = "extended-material-container-silver-ingot";
            extendedMaterialContainerSilverIngot.style.height = "3vw";
            extendedMaterialContainerSilverIngot.style.position = "relative";
            extendedMaterialContainerSilverIngot.style.top = "-3.25vw";

            extendedMaterialSilverIngotImage = document.createElement("img");
            extendedMaterialSilverIngotImage.id = "extended-material-silver-ingot-image";
            extendedMaterialSilverIngotImage.style.height = "2.5vw";
            extendedMaterialSilverIngotImage.style.position = "relative";
            extendedMaterialSilverIngotImage.style.top = "0.25vw";
            extendedMaterialSilverIngotImage.style.left = "0.25vw";
            extendedMaterialSilverIngotImage.style.border = "1px solid #333333";
            extendedMaterialSilverIngotImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialSilverIngotImage.setAttribute("src", extendedMaterials[7].image);
            extendedMaterialSilverIngotImage.setAttribute("title", extendedMaterials[7].name);
            
            extendedMaterialSilverIngotName = document.createElement("div");
            extendedMaterialSilverIngotName.id = "extended-material-silver-ingot-name";
            extendedMaterialSilverIngotName.style.color = "white";
            extendedMaterialSilverIngotName.style.fontSize = "1vw";
            extendedMaterialSilverIngotName.style.fontWeight = "bold";
            extendedMaterialSilverIngotName.style.position = "relative";
            extendedMaterialSilverIngotName.style.top = "-2.7vw";
            extendedMaterialSilverIngotName.style.left = "3.1vw";
            extendedMaterialSilverIngotName.innerHTML = extendedMaterials[7].name;

            extendedMaterialSilverIngotAmount = document.createElement("div");
            extendedMaterialSilverIngotAmount.id = "extended-material-silver-ingot-amount";
            extendedMaterialSilverIngotAmount.style.color = "white";
            extendedMaterialSilverIngotAmount.style.fontSize = "1vw";
            extendedMaterialSilverIngotAmount.style.fontWeight = "500";
            extendedMaterialSilverIngotAmount.style.position = "relative";
            extendedMaterialSilverIngotAmount.style.top = "-2.9vw";
            extendedMaterialSilverIngotAmount.style.left = "3.1vw";
            extendedMaterialSilverIngotAmount.innerHTML = "Amount: " + extendedMaterials[7].amount;

            document.getElementById("material-item-container3").appendChild(extendedMaterialContainerSilverIngot);
            extendedMaterialContainerSilverIngot.appendChild(extendedMaterialSilverIngotImage);
            extendedMaterialContainerSilverIngot.appendChild(extendedMaterialSilverIngotName);
            extendedMaterialContainerSilverIngot.appendChild(extendedMaterialSilverIngotAmount);

            for(i = 4; i < heights.length; i++) {
                heights[i] += 6;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            silverClicked = true;
        } else if(silverClicked == true) {
            extendedMaterialContainerCrushedSilver.remove();
            extendedMaterialContainerSilverIngot.remove();

            for(i = 4; i < heights.length; i++) {
                heights[i] -= 6;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            silverClicked = false;
        }
    } else if(id == 4) {
        //Gold
        if(goldClicked == false) {
            extendedMaterialContainerCrushedGold = document.createElement("div");
            extendedMaterialContainerCrushedGold.id = "extended-material-container-crushed-gold";
            extendedMaterialContainerCrushedGold.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedGold.style.height = "3vw";
            extendedMaterialContainerCrushedGold.style.position = "relative";
            extendedMaterialContainerCrushedGold.style.top = "-3.25vw";

            extendedMaterialCrushedGoldImage = document.createElement("img");
            extendedMaterialCrushedGoldImage.id = "extended-material-crushed-gold-image";
            extendedMaterialCrushedGoldImage.style.height = "2.5vw";
            extendedMaterialCrushedGoldImage.style.position = "relative";
            extendedMaterialCrushedGoldImage.style.top = "0.25vw";
            extendedMaterialCrushedGoldImage.style.left = "0.25vw";
            extendedMaterialCrushedGoldImage.style.border = "1px solid #333333";
            extendedMaterialCrushedGoldImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedGoldImage.setAttribute("src", extendedMaterials[8].image);
            extendedMaterialCrushedGoldImage.setAttribute("title", extendedMaterials[8].name);
            
            extendedMaterialCrushedGoldName = document.createElement("div");
            extendedMaterialCrushedGoldName.id = "extended-material-crushed-gold-name";
            extendedMaterialCrushedGoldName.style.color = "white";
            extendedMaterialCrushedGoldName.style.fontSize = "1vw";
            extendedMaterialCrushedGoldName.style.fontWeight = "bold";
            extendedMaterialCrushedGoldName.style.position = "relative";
            extendedMaterialCrushedGoldName.style.top = "-2.7vw";
            extendedMaterialCrushedGoldName.style.left = "3.1vw";
            extendedMaterialCrushedGoldName.innerHTML = extendedMaterials[8].name;

            extendedMaterialCrushedGoldAmount = document.createElement("div");
            extendedMaterialCrushedGoldAmount.id = "extended-material-crushed-gold-amount";
            extendedMaterialCrushedGoldAmount.style.color = "white";
            extendedMaterialCrushedGoldAmount.style.fontSize = "1vw";
            extendedMaterialCrushedGoldAmount.style.fontWeight = "500";
            extendedMaterialCrushedGoldAmount.style.position = "relative";
            extendedMaterialCrushedGoldAmount.style.top = "-2.9vw";
            extendedMaterialCrushedGoldAmount.style.left = "3.1vw";
            extendedMaterialCrushedGoldAmount.innerHTML = "Amount: " + extendedMaterials[8].amount;

            document.getElementById("material-item-container4").appendChild(extendedMaterialContainerCrushedGold);
            extendedMaterialContainerCrushedGold.appendChild(extendedMaterialCrushedGoldImage);
            extendedMaterialContainerCrushedGold.appendChild(extendedMaterialCrushedGoldName);
            extendedMaterialContainerCrushedGold.appendChild(extendedMaterialCrushedGoldAmount);

            extendedMaterialContainerGoldIngot = document.createElement("div");
            extendedMaterialContainerGoldIngot.id = "extended-material-container-gold-ingot";
            extendedMaterialContainerGoldIngot.style.height = "3vw";
            extendedMaterialContainerGoldIngot.style.position = "relative";
            extendedMaterialContainerGoldIngot.style.top = "-3.25vw";

            extendedMaterialGoldIngotImage = document.createElement("img");
            extendedMaterialGoldIngotImage.id = "extended-material-gold-ingot-image";
            extendedMaterialGoldIngotImage.style.height = "2.5vw";
            extendedMaterialGoldIngotImage.style.position = "relative";
            extendedMaterialGoldIngotImage.style.top = "0.25vw";
            extendedMaterialGoldIngotImage.style.left = "0.25vw";
            extendedMaterialGoldIngotImage.style.border = "1px solid #333333";
            extendedMaterialGoldIngotImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialGoldIngotImage.setAttribute("src", extendedMaterials[9].image);
            extendedMaterialGoldIngotImage.setAttribute("title", extendedMaterials[9].name);
            
            extendedMaterialGoldIngotName = document.createElement("div");
            extendedMaterialGoldIngotName.id = "extended-material-gold-ingot-name";
            extendedMaterialGoldIngotName.style.color = "white";
            extendedMaterialGoldIngotName.style.fontSize = "1vw";
            extendedMaterialGoldIngotName.style.fontWeight = "bold";
            extendedMaterialGoldIngotName.style.position = "relative";
            extendedMaterialGoldIngotName.style.top = "-2.7vw";
            extendedMaterialGoldIngotName.style.left = "3.1vw";
            extendedMaterialGoldIngotName.innerHTML = extendedMaterials[9].name;

            extendedMaterialGoldIngotAmount = document.createElement("div");
            extendedMaterialGoldIngotAmount.id = "extended-material-gold-ingot-amount";
            extendedMaterialGoldIngotAmount.style.color = "white";
            extendedMaterialGoldIngotAmount.style.fontSize = "1vw";
            extendedMaterialGoldIngotAmount.style.fontWeight = "500";
            extendedMaterialGoldIngotAmount.style.position = "relative";
            extendedMaterialGoldIngotAmount.style.top = "-2.9vw";
            extendedMaterialGoldIngotAmount.style.left = "3.1vw";
            extendedMaterialGoldIngotAmount.innerHTML = "Amount: " + extendedMaterials[9].amount;

            document.getElementById("material-item-container4").appendChild(extendedMaterialContainerGoldIngot);
            extendedMaterialContainerGoldIngot.appendChild(extendedMaterialGoldIngotImage);
            extendedMaterialContainerGoldIngot.appendChild(extendedMaterialGoldIngotName);
            extendedMaterialContainerGoldIngot.appendChild(extendedMaterialGoldIngotAmount);

            for(i = 5; i < heights.length; i++) {
                heights[i] += 6;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            goldClicked = true;
        } else if(goldClicked == true) {
            extendedMaterialContainerCrushedGold.remove();
            extendedMaterialContainerGoldIngot.remove();

            for(i = 5; i < heights.length; i++) {
                heights[i] -= 6;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            goldClicked = false;
        }
    } else if(id == 5) {
        //Titanium
        if(titaniumClicked == false) {
            extendedMaterialContainerCrushedTitanium = document.createElement("div");
            extendedMaterialContainerCrushedTitanium.id = "extended-material-container-crushed-titanium";
            extendedMaterialContainerCrushedTitanium.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedTitanium.style.height = "3vw";
            extendedMaterialContainerCrushedTitanium.style.position = "relative";
            extendedMaterialContainerCrushedTitanium.style.top = "-3.25vw";

            extendedMaterialCrushedTitaniumImage = document.createElement("img");
            extendedMaterialCrushedTitaniumImage.id = "extended-material-crushed-titanium-image";
            extendedMaterialCrushedTitaniumImage.style.height = "2.5vw";
            extendedMaterialCrushedTitaniumImage.style.position = "relative";
            extendedMaterialCrushedTitaniumImage.style.top = "0.25vw";
            extendedMaterialCrushedTitaniumImage.style.left = "0.25vw";
            extendedMaterialCrushedTitaniumImage.style.border = "1px solid #333333";
            extendedMaterialCrushedTitaniumImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedTitaniumImage.setAttribute("src", extendedMaterials[10].image);
            extendedMaterialCrushedTitaniumImage.setAttribute("title", extendedMaterials[10].name);
            
            extendedMaterialCrushedTitaniumName = document.createElement("div");
            extendedMaterialCrushedTitaniumName.id = "extended-material-crushed-titanium-name";
            extendedMaterialCrushedTitaniumName.style.color = "white";
            extendedMaterialCrushedTitaniumName.style.fontSize = "1vw";
            extendedMaterialCrushedTitaniumName.style.fontWeight = "bold";
            extendedMaterialCrushedTitaniumName.style.position = "relative";
            extendedMaterialCrushedTitaniumName.style.top = "-2.7vw";
            extendedMaterialCrushedTitaniumName.style.left = "3.1vw";
            extendedMaterialCrushedTitaniumName.innerHTML = extendedMaterials[10].name;

            extendedMaterialCrushedTitaniumAmount = document.createElement("div");
            extendedMaterialCrushedTitaniumAmount.id = "extended-material-crushed-titanium-amount";
            extendedMaterialCrushedTitaniumAmount.style.color = "white";
            extendedMaterialCrushedTitaniumAmount.style.fontSize = "1vw";
            extendedMaterialCrushedTitaniumAmount.style.fontWeight = "500";
            extendedMaterialCrushedTitaniumAmount.style.position = "relative";
            extendedMaterialCrushedTitaniumAmount.style.top = "-2.9vw";
            extendedMaterialCrushedTitaniumAmount.style.left = "3.1vw";
            extendedMaterialCrushedTitaniumAmount.innerHTML = "Amount: " + extendedMaterials[10].amount;

            document.getElementById("material-item-container5").appendChild(extendedMaterialContainerCrushedTitanium);
            extendedMaterialContainerCrushedTitanium.appendChild(extendedMaterialCrushedTitaniumImage);
            extendedMaterialContainerCrushedTitanium.appendChild(extendedMaterialCrushedTitaniumName);
            extendedMaterialContainerCrushedTitanium.appendChild(extendedMaterialCrushedTitaniumAmount);

            extendedMaterialContainerTitaniumIngot = document.createElement("div");
            extendedMaterialContainerTitaniumIngot.id = "extended-material-container-titanium-ingot";
            extendedMaterialContainerTitaniumIngot.style.height = "3vw";
            extendedMaterialContainerTitaniumIngot.style.position = "relative";
            extendedMaterialContainerTitaniumIngot.style.top = "-3.25vw";

            extendedMaterialTitaniumIngotImage = document.createElement("img");
            extendedMaterialTitaniumIngotImage.id = "extended-material-titanium-ingot-image";
            extendedMaterialTitaniumIngotImage.style.height = "2.5vw";
            extendedMaterialTitaniumIngotImage.style.position = "relative";
            extendedMaterialTitaniumIngotImage.style.top = "0.25vw";
            extendedMaterialTitaniumIngotImage.style.left = "0.25vw";
            extendedMaterialTitaniumIngotImage.style.border = "1px solid #333333";
            extendedMaterialTitaniumIngotImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialTitaniumIngotImage.setAttribute("src", extendedMaterials[11].image);
            extendedMaterialTitaniumIngotImage.setAttribute("title", extendedMaterials[11].name);
            
            extendedMaterialTitaniumIngotName = document.createElement("div");
            extendedMaterialTitaniumIngotName.id = "extended-material-titanium-ingot-name";
            extendedMaterialTitaniumIngotName.style.color = "white";
            extendedMaterialTitaniumIngotName.style.fontSize = "1vw";
            extendedMaterialTitaniumIngotName.style.fontWeight = "bold";
            extendedMaterialTitaniumIngotName.style.position = "relative";
            extendedMaterialTitaniumIngotName.style.top = "-2.7vw";
            extendedMaterialTitaniumIngotName.style.left = "3.1vw";
            extendedMaterialTitaniumIngotName.innerHTML = extendedMaterials[11].name;

            extendedMaterialTitaniumIngotAmount = document.createElement("div");
            extendedMaterialTitaniumIngotAmount.id = "extended-material-titanium-ingot-amount";
            extendedMaterialTitaniumIngotAmount.style.color = "white";
            extendedMaterialTitaniumIngotAmount.style.fontSize = "1vw";
            extendedMaterialTitaniumIngotAmount.style.fontWeight = "500";
            extendedMaterialTitaniumIngotAmount.style.position = "relative";
            extendedMaterialTitaniumIngotAmount.style.top = "-2.9vw";
            extendedMaterialTitaniumIngotAmount.style.left = "3.1vw";
            extendedMaterialTitaniumIngotAmount.innerHTML = "Amount: " + extendedMaterials[11].amount;

            document.getElementById("material-item-container5").appendChild(extendedMaterialContainerTitaniumIngot);
            extendedMaterialContainerTitaniumIngot.appendChild(extendedMaterialTitaniumIngotImage);
            extendedMaterialContainerTitaniumIngot.appendChild(extendedMaterialTitaniumIngotName);
            extendedMaterialContainerTitaniumIngot.appendChild(extendedMaterialTitaniumIngotAmount);

            for(i = 6; i < heights.length; i++) {
                heights[i] += 6;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            titaniumClicked = true;
        } else if(titaniumClicked == true) {
            extendedMaterialContainerCrushedTitanium.remove();
            extendedMaterialContainerTitaniumIngot.remove();

            for(i = 6; i < heights.length; i++) {
                heights[i] -= 6;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            titaniumClicked = false;
        }
    } else if(id == 6) {
        //Wood
        if(woodClicked == false) {
            extendedMaterialContainerCrushedWood = document.createElement("div");
            extendedMaterialContainerCrushedWood.id = "extended-material-container-crushed-wood";
            extendedMaterialContainerCrushedWood.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedWood.style.height = "3vw";
            extendedMaterialContainerCrushedWood.style.position = "relative";
            extendedMaterialContainerCrushedWood.style.top = "-3.25vw";

            extendedMaterialCrushedWoodImage = document.createElement("img");
            extendedMaterialCrushedWoodImage.id = "extended-material-crushed-wood-image";
            extendedMaterialCrushedWoodImage.style.height = "2.5vw";
            extendedMaterialCrushedWoodImage.style.position = "relative";
            extendedMaterialCrushedWoodImage.style.top = "0.25vw";
            extendedMaterialCrushedWoodImage.style.left = "0.25vw";
            extendedMaterialCrushedWoodImage.style.border = "1px solid #333333";
            extendedMaterialCrushedWoodImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedWoodImage.setAttribute("src", extendedMaterials[12].image);
            extendedMaterialCrushedWoodImage.setAttribute("title", extendedMaterials[12].name);
            
            extendedMaterialCrushedWoodName = document.createElement("div");
            extendedMaterialCrushedWoodName.id = "extended-material-crushed-wood-name";
            extendedMaterialCrushedWoodName.style.color = "white";
            extendedMaterialCrushedWoodName.style.fontSize = "1vw";
            extendedMaterialCrushedWoodName.style.fontWeight = "bold";
            extendedMaterialCrushedWoodName.style.position = "relative";
            extendedMaterialCrushedWoodName.style.top = "-2.7vw";
            extendedMaterialCrushedWoodName.style.left = "3.1vw";
            extendedMaterialCrushedWoodName.innerHTML = extendedMaterials[12].name;

            extendedMaterialCrushedWoodAmount = document.createElement("div");
            extendedMaterialCrushedWoodAmount.id = "extended-material-crushed-wood-amount";
            extendedMaterialCrushedWoodAmount.style.color = "white";
            extendedMaterialCrushedWoodAmount.style.fontSize = "1vw";
            extendedMaterialCrushedWoodAmount.style.fontWeight = "500";
            extendedMaterialCrushedWoodAmount.style.position = "relative";
            extendedMaterialCrushedWoodAmount.style.top = "-2.9vw";
            extendedMaterialCrushedWoodAmount.style.left = "3.1vw";
            extendedMaterialCrushedWoodAmount.innerHTML = "Amount: " + extendedMaterials[12].amount;

            document.getElementById("material-item-container6").appendChild(extendedMaterialContainerCrushedWood);
            extendedMaterialContainerCrushedWood.appendChild(extendedMaterialCrushedWoodImage);
            extendedMaterialContainerCrushedWood.appendChild(extendedMaterialCrushedWoodName);
            extendedMaterialContainerCrushedWood.appendChild(extendedMaterialCrushedWoodAmount);

            for(i = 7; i < heights.length; i++) {
                heights[i] += 3;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            woodClicked = true;
        } else if(woodClicked == true) {
            extendedMaterialContainerCrushedWood.remove();

            for(i = 7; i < heights.length; i++) {
                heights[i] -= 3;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            woodClicked = false;
        }
    } else if(id == 7) {
        //Maple
        if(mapleClicked == false) {
            extendedMaterialContainerCrushedMaple = document.createElement("div");
            extendedMaterialContainerCrushedMaple.id = "extended-material-container-crushed-maple";
            extendedMaterialContainerCrushedMaple.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedMaple.style.height = "3vw";
            extendedMaterialContainerCrushedMaple.style.position = "relative";
            extendedMaterialContainerCrushedMaple.style.top = "-3.25vw";

            extendedMaterialCrushedMapleImage = document.createElement("img");
            extendedMaterialCrushedMapleImage.id = "extended-material-crushed-maple-image";
            extendedMaterialCrushedMapleImage.style.height = "2.5vw";
            extendedMaterialCrushedMapleImage.style.position = "relative";
            extendedMaterialCrushedMapleImage.style.top = "0.25vw";
            extendedMaterialCrushedMapleImage.style.left = "0.25vw";
            extendedMaterialCrushedMapleImage.style.border = "1px solid #333333";
            extendedMaterialCrushedMapleImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedMapleImage.setAttribute("src", extendedMaterials[13].image);
            extendedMaterialCrushedMapleImage.setAttribute("title", extendedMaterials[13].name);
            
            extendedMaterialCrushedMapleName = document.createElement("div");
            extendedMaterialCrushedMapleName.id = "extended-material-crushed-maple-name";
            extendedMaterialCrushedMapleName.style.color = "white";
            extendedMaterialCrushedMapleName.style.fontSize = "1vw";
            extendedMaterialCrushedMapleName.style.fontWeight = "bold";
            extendedMaterialCrushedMapleName.style.position = "relative";
            extendedMaterialCrushedMapleName.style.top = "-2.7vw";
            extendedMaterialCrushedMapleName.style.left = "3.1vw";
            extendedMaterialCrushedMapleName.innerHTML = extendedMaterials[13].name;

            extendedMaterialCrushedMapleAmount = document.createElement("div");
            extendedMaterialCrushedMapleAmount.id = "extended-material-crushed-maple-amount";
            extendedMaterialCrushedMapleAmount.style.color = "white";
            extendedMaterialCrushedMapleAmount.style.fontSize = "1vw";
            extendedMaterialCrushedMapleAmount.style.fontWeight = "500";
            extendedMaterialCrushedMapleAmount.style.position = "relative";
            extendedMaterialCrushedMapleAmount.style.top = "-2.9vw";
            extendedMaterialCrushedMapleAmount.style.left = "3.1vw";
            extendedMaterialCrushedMapleAmount.innerHTML = "Amount: " + extendedMaterials[13].amount;

            document.getElementById("material-item-container7").appendChild(extendedMaterialContainerCrushedMaple);
            extendedMaterialContainerCrushedMaple.appendChild(extendedMaterialCrushedMapleImage);
            extendedMaterialContainerCrushedMaple.appendChild(extendedMaterialCrushedMapleName);
            extendedMaterialContainerCrushedMaple.appendChild(extendedMaterialCrushedMapleAmount);

            for(i = 8; i < heights.length; i++) {
                heights[i] += 3;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            mapleClicked = true;
        } else if(mapleClicked == true) {
            extendedMaterialContainerCrushedMaple.remove();

            for(i = 8; i < heights.length; i++) {
                heights[i] -= 3;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            mapleClicked = false;
        }
    } else if(id == 8) {
        //Willow
        if(willowClicked == false) {
            extendedMaterialContainerCrushedWillow = document.createElement("div");
            extendedMaterialContainerCrushedWillow.id = "extended-material-container-crushed-willow";
            extendedMaterialContainerCrushedWillow.style.borderBottom = "1px solid gray";
            extendedMaterialContainerCrushedWillow.style.height = "3vw";
            extendedMaterialContainerCrushedWillow.style.position = "relative";
            extendedMaterialContainerCrushedWillow.style.top = "-3.25vw";

            extendedMaterialCrushedWillowImage = document.createElement("img");
            extendedMaterialCrushedWillowImage.id = "extended-material-crushed-willow-image";
            extendedMaterialCrushedWillowImage.style.height = "2.5vw";
            extendedMaterialCrushedWillowImage.style.position = "relative";
            extendedMaterialCrushedWillowImage.style.top = "0.25vw";
            extendedMaterialCrushedWillowImage.style.left = "0.25vw";
            extendedMaterialCrushedWillowImage.style.border = "1px solid #333333";
            extendedMaterialCrushedWillowImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
            extendedMaterialCrushedWillowImage.setAttribute("src", extendedMaterials[14].image);
            extendedMaterialCrushedWillowImage.setAttribute("title", extendedMaterials[14].name);
            
            extendedMaterialCrushedWillowName = document.createElement("div");
            extendedMaterialCrushedWillowName.id = "extended-material-crushed-willow-name";
            extendedMaterialCrushedWillowName.style.color = "white";
            extendedMaterialCrushedWillowName.style.fontSize = "1vw";
            extendedMaterialCrushedWillowName.style.fontWeight = "bold";
            extendedMaterialCrushedWillowName.style.position = "relative";
            extendedMaterialCrushedWillowName.style.top = "-2.7vw";
            extendedMaterialCrushedWillowName.style.left = "3.1vw";
            extendedMaterialCrushedWillowName.innerHTML = extendedMaterials[14].name;

            extendedMaterialCrushedWillowAmount = document.createElement("div");
            extendedMaterialCrushedWillowAmount.id = "extended-material-crushed-willow-amount";
            extendedMaterialCrushedWillowAmount.style.color = "white";
            extendedMaterialCrushedWillowAmount.style.fontSize = "1vw";
            extendedMaterialCrushedWillowAmount.style.fontWeight = "500";
            extendedMaterialCrushedWillowAmount.style.position = "relative";
            extendedMaterialCrushedWillowAmount.style.top = "-2.9vw";
            extendedMaterialCrushedWillowAmount.style.left = "3.1vw";
            extendedMaterialCrushedWillowAmount.innerHTML = "Amount: " + extendedMaterials[14].amount;

            document.getElementById("material-item-container8").appendChild(extendedMaterialContainerCrushedWillow);
            extendedMaterialContainerCrushedWillow.appendChild(extendedMaterialCrushedWillowImage);
            extendedMaterialContainerCrushedWillow.appendChild(extendedMaterialCrushedWillowName);
            extendedMaterialContainerCrushedWillow.appendChild(extendedMaterialCrushedWillowAmount);

            for(i = 9; i < heights.length; i++) {
                heights[i] += 3;
                document.getElementById("material-item-container" + i).style.position = "relative";
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            willowClicked = true;
        } else if(willowClicked == true) {
            extendedMaterialContainerCrushedWillow.remove();

            for(i = 9; i < heights.length; i++) {
                heights[i] -= 3;
                document.getElementById("material-item-container" + i).style.top = heights[i] + "vw";
            }

            willowClicked = false;
        }
    }
}

var fixedIron = 0;
var fixedSteel = 0;

function extendedAmount() {
    for(i = 0; i < extendedMaterials.length; i++) {
        extendedMaterials[i].amount = 0;
        fixedIron = 0;
        fixedSteel = 0;
    }
    extendedMaterials[0].amount = materials[0].amount * 4;
    extendedMaterials[1].amount = ((materials[0].amount * 4) / 6);
    extendedMaterials[1].amount = extendedMaterials[1].amount.toFixed(0);
    extendedMaterials[2].amount = (materials[1].amount * 4);
    extendedMaterials[3].amount = (materials[2].amount * 4);
    extendedMaterials[4].amount = ((materials[2].amount * 4) / 6);
    extendedMaterials[4].amount = extendedMaterials[4].amount.toFixed(0);
    extendedMaterials[5].amount = steel;
    fixedSteel = (extendedMaterials[5].amount * 3);
    fixedIron = (extendedMaterials[4].amount - fixedSteel);
    //Troubleshooting: console.log("Old Iron: " + extendedMaterials[4].amount, "New Iron: " + fixedIron, "Steel: " + fixedSteel);
    extendedMaterials[6].amount = (materials[3].amount * 4);
    extendedMaterials[7].amount = ((materials[3].amount * 4) / 6);
    extendedMaterials[7].amount = extendedMaterials[7].amount.toFixed(0);
    extendedMaterials[8].amount = (materials[4].amount * 4);
    extendedMaterials[9].amount = ((materials[4].amount * 4) / 6);
    extendedMaterials[9].amount = extendedMaterials[9].amount.toFixed(0);
    extendedMaterials[10].amount = (materials[5].amount * 4);
    extendedMaterials[11].amount = ((materials[5].amount * 4) / 6);
    extendedMaterials[11].amount = extendedMaterials[11].amount.toFixed(0);
    extendedMaterials[12].amount = (materials[6].amount / 4);
    extendedMaterials[13].amount = (materials[7].amount / 4);
    extendedMaterials[14].amount = (materials[8].amount / 4);
    if(copperClicked == true) {
        document.getElementById("extended-material-crushed-copper-amount").innerHTML = "Amount: " + extendedMaterials[0].amount;
        document.getElementById("extended-material-copper-ingot-amount").innerHTML = "Amount: " + extendedMaterials[1].amount;
    }
    if(coalClicked == true) {
        document.getElementById("extended-material-crushed-coal-amount").innerHTML = "Amount: " + extendedMaterials[2].amount;
    }
    if(ironClicked == true) {
        document.getElementById("extended-material-crushed-iron-amount").innerHTML = "Amount: " + extendedMaterials[3].amount;
        document.getElementById("extended-material-iron-ingot-amount").innerHTML = "Amount: " + fixedIron;
        document.getElementById("extended-material-steel-ingot-amount").innerHTML = "Amount: " + extendedMaterials[5].amount;
    }
    if(silverClicked == true) {
        document.getElementById("extended-material-crushed-silver-amount").innerHTML = "Amount: " + extendedMaterials[6].amount;
        document.getElementById("extended-material-silver-ingot-amount").innerHTML = "Amount: " + extendedMaterials[7].amount;
    }
    if(goldClicked == true) {
        document.getElementById("extended-material-crushed-gold-amount").innerHTML = "Amount: " + extendedMaterials[8].amount;
        document.getElementById("extended-material-gold-ingot-amount").innerHTML = "Amount: " + extendedMaterials[9].amount;
    }
    if(titaniumClicked == true) {
        document.getElementById("extended-material-crushed-titanium-amount").innerHTML = "Amount: " + extendedMaterials[10].amount;
        document.getElementById("extended-material-titanium-ingot-amount").innerHTML = "Amount: " + extendedMaterials[11].amount;
    }
    if(woodClicked == true) {
        document.getElementById("extended-material-crushed-wood-amount").innerHTML = "Amount: " + extendedMaterials[12].amount;
    }
    if(mapleClicked == true) {
        document.getElementById("extended-material-crushed-maple-amount").innerHTML = "Amount: " + extendedMaterials[13].amount;
    }
    if(willowClicked == true) {
        document.getElementById("extended-material-crushed-willow-amount").innerHTML = "Amount: " + extendedMaterials[14].amount;
    }
}