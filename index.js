//Variables
//Weapon crafting data received from parkerx's weapon recipes spreadsheet - Not the case as of update 1.7
var guns = [
    {
        name: "Makarov",
        class: "Pistol",
        amount: 0,
        level: 5,
        mag: 8,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "pistol",
        copper: 10,
        iron: 7,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 900
    },
    {
        name: "M1911",
        class: "Pistol",
        amount: 0,
        level: 12,
        mag: 7,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "pistol",
        copper: 11,
        iron: 8,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 1100
    },
    {
        name: "P99",
        class: "Pistol",
        amount: 0,
        level: 15,
        mag: 15,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "pistol",
        copper: 10,
        iron: 10,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 1750
    },
    {
        name: "FN Five-Seven",
        class: "Pistol",
        amount: 0,
        level: 18,
        mag: 20,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "pistol",
        copper: 9,
        iron: 11,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 2,
        coal: 0,
        price: 2250
    },
    {
        name: "Mac-11",
        class: "Rifle",
        amount: 0,
        level: 20,
        mag: 32,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "pistol",
        copper: 11,
        iron: 12,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 3750
    },
    {
        name: "MR96",
        class: "Pistol",
        amount: 0,
        level: 20,
        mag: 6,
        firemodes: "Double-Action",
        legal: true,
        ammo: "pistol",
        copper: 10,
        iron: 7,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 5,
        coal: 0,
        price: 3500
    },
    {
        name: "H&K MP5",
        class: "Rifle",
        amount: 0,
        level: 21,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        ammo: "pistol",
        copper: 12,
        iron: 14,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 2,
        coal: 0,
        price: 4500
    },
    {
        name: "Machete",
        class: "Knife",
        amount: 0,
        level: 25,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 10,
        iron: 7,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 2250
    },
    {
        name: "H&K UMP .45",
        class: "Rifle",
        amount: 0,
        level: 27,
        mag: 25,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "pistol",
        copper: 16,
        iron: 18,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 5000
    },
    {
        name: "AK-74",
        class: "Rifle",
        amount: 0,
        level: 28,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 16,
        iron: 16,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 1,
        coal: 0,
        price: 6250
    },
    {
        name: "Glock 18",
        class: "Pistol",
        amount: 0,
        level: 28,
        mag: 17,
        firemodes: "Automatic",
        legal: false,
        ammo: "pistol",
        copper: 10,
        iron: 14,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 6,
        coal: 0,
        price: 5000
    },
    {
        name: "AR-15",
        class: "Rifle",
        amount: 0,
        level: 30,
        mag: 30,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "rifle",
        copper: 16,
        iron: 16,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 3,
        coal: 0,
        price: 6000
    },
    {
        name: "Thompson",
        class: "Rifle",
        amount: 0,
        level: 31,
        mag: 20,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "pistol",
        copper: 17,
        iron: 19,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 2,
        coal: 0,
        price: 7500
    },
    {
        name: "Glock 17",
        class: "Pistol",
        amount: 0,
        level: 32,
        mag: 14,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "pistol",
        copper: 10,
        iron: 10,
        silver: 1,
        gold: 2,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 3,
        coal: 0,
        price: 2750
    },
    {
        name: "Kriss Vector",
        class: "Rifle",
        amount: 0,
        level: 34,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        ammo: "pistol",
        copper: 2,
        iron: 14,
        silver: 6,
        gold: 6,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 9,
        coal: 0,
        price: 8250
    },
    {
        name: "Desert Eagle",
        class: "Pistol",
        amount: 0,
        level: 35,
        mag: 7,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "pistol",
        copper: 10,
        iron: 12,
        silver: 0,
        gold: 2,
        titanium: 0,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 3,
        coal: 0,
        price: 5500
    },
    {
        name: "G36C",
        class: "Rifle",
        amount: 0,
        level: 37,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 16,
        iron: 16,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 5,
        coal: 0,
        price: 9500
    },
    {
        name: "LR-300",
        class: "Rifle",
        amount: 0,
        level: 40,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 16,
        iron: 16,
        silver: 4,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 7,
        coal: 0,
        price: 10500
    },
    {
        name: "DP-28",
        class: "Rifle",
        amount: 0,
        level: 40,
        mag: 47,
        firemodes: "Automatic",
        legal: false,
        ammo: "rifle",
        copper: 17,
        iron: 17,
        silver: 5,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 6,
        coal: 0,
        price: 11000
    },
    {
        name: "Serbu Shorty",
        class: "Shotgun",
        amount: 0,
        level: 40,
        mag: 2,
        firemodes: "Pump-Action",
        legal: false,
        ammo: "shotgun",
        copper: 7,
        iron: 9,
        silver: 3,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 12,
        willow: 0,
        steel: 11,
        coal: 0,
        price: 9000
    },
    {
        name: "G3A3",
        class: "Rifle",
        amount: 0,
        level: 42,
        mag: 20,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 5,
        iron: 17,
        silver: 9,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 14,
        coal: 0,
        price: 14500
    },
    {
        name: "Honey Badger",
        class: "Rifle",
        amount: 0,
        level: 50,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 14,
        iron: 15,
        silver: 0,
        gold: 11,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 13,
        coal: 0,
        price: 13000
    },
    {
        name: "SCAR-H",
        class: "Rifle",
        amount: 0,
        level: 52,
        mag: 20,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 16,
        iron: 16,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 10,
        coal: 0,
        price: 14000
    },
    {
        name: "M249",
        class: "Rifle",
        amount: 0,
        level: 60,
        mag: 100,
        firemodes: "Automatic",
        legal: false,
        ammo: "rifle",
        copper: 14,
        iron: 16,
        silver: 0,
        gold: 13,
        titanium: 1,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 10,
        coal: 0,
        price: 17000
    },
    {
        name: "BT MP9",
        class: "Rifle",
        amount: 0,
        level: 62,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "pistol",
        copper: 2,
        iron: 15,
        silver: 8,
        gold: 8,
        titanium: 2,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 5,
        coal: 0,
        price: 11500
    },
    {
        name: "Mosin Nagant",
        class: "Rifle",
        amount: 0,
        level: 64,
        mag: 5,
        firemodes: "Bolt-Action",
        legal: false,
        ammo: "sniper",
        copper: 8,
        iron: 14,
        silver: 22,
        gold: 2,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 12,
        steel: 20,
        coal: 0,
        price: 18000
    },
    {
        name: "M14",
        class: "Rifle",
        amount: 0,
        level: 65,
        mag: 20,
        firemodes: "Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 0,
        iron: 14,
        silver: 20,
        gold: 8,
        titanium: 5,
        wood: 0,
        maple: 0,
        willow: 12,
        steel: 17,
        coal: 0,
        price: 19000
    },
    {
        name: "M3 Super 90",
        class: "Shotgun",
        amount: 0,
        level: 66,
        mag: 5,
        firemodes: "Pump-Action",
        legal: false,
        ammo: "shotgun",
        copper: 0,
        iron: 16,
        silver: 10,
        gold: 8,
        titanium: 0,
        wood: 0,
        maple: 12,
        willow: 0,
        steel: 7,
        coal: 0,
        price: 14000
    },
    {
        name: "M4 Carbine",
        class: "Rifle",
        amount: 0,
        level: 68,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 15,
        iron: 16,
        silver: 8,
        gold: 11,
        titanium: 1,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 12,
        coal: 0,
        price: 16000
    },
    {
        name: "IMI Galil",
        class: "Rifle",
        amount: 0,
        level: 70,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 5,
        iron: 19,
        silver: 8,
        gold: 0,
        titanium: 1,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 11,
        coal: 0,
        price: 17000
    },
    {
        name: "HK MP7A1",
        class: "Rifle",
        amount: 0,
        level: 70,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "pistol",
        copper: 2,
        iron: 12,
        silver: 8,
        gold: 5,
        titanium: 3,
        wood: 8,
        maple: 0,
        willow: 0,
        steel: 7,
        coal: 0,
        price: 22000
    },
    {
        name: "ACR-E",
        class: "Rifle",
        amount: 0,
        level: 73,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 17,
        iron: 18,
        silver: 0,
        gold: 10,
        titanium: 2,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 12,
        coal: 0,
        price: 18500
    },
    {
        name: "FAMAS F1",
        class: "Rifle",
        amount: 0,
        level: 75,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 5,
        iron: 17,
        silver: 8,
        gold: 0,
        titanium: 2,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 12,
        coal: 0,
        price: 30000
    },
    {
        name: "KSG-12",
        class: "Shotgun",
        amount: 0,
        level: 80,
        mag: 14,
        firemodes: "Pump-Action",
        legal: false,
        ammo: "shotgun",
        copper: 0,
        iron: 18,
        silver: 10,
        gold: 8,
        titanium: 5,
        wood: 0,
        maple: 12,
        willow: 0,
        steel: 14,
        coal: 0,
        price: 19000
    },
    {
        name: "AUG A3",
        class: "Rifle",
        amount: 0,
        level: 88,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 17,
        iron: 16,
        silver: 8,
        gold: 13,
        titanium: 4,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 16,
        coal: 0,
        price: 19000
    },
    {
        name: "XM8",
        class: "Rifle",
        amount: 0,
        level: 92,
        mag: 30,
        firemodes: "Automatic, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: 11,
        iron: 11,
        silver: 20,
        gold: 13,
        titanium: 7,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 16,
        coal: 0,
        price: 20000
    },
    {
        name: "TAC-338",
        class: "Rifle",
        amount: 0,
        level: "Undiscovered",
        mag: 5,
        firemodes: "Bolt-Action",
        legal: false,
        ammo: "sniper",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 45000
    },
    {
        name: "L115",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 5,
        firemodes: "Bolt-Action",
        legal: false,
        ammo: "sniper",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 110000
    },
    {
        name: "Silver Baller",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 7,
        firemodes: "Semi-Automatic",
        legal: true,
        ammo: "pistol",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 75000
    },
    {
        name: "Magnum .357",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 6,
        firemodes: "Double-Action",
        legal: true,
        ammo: "pistol",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 300000
    },
    {
        name: "HK-416",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 180000
    },
    {
        name: "L85A2",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 30,
        firemodes: "Automatic, Burst, Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 150000
    },
    {
        name: "M1 Carbine",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 15,
        firemodes: "Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 150000
    },
    {
        name: "M1 Garand",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 8,
        firemodes: "Semi-Automatic",
        legal: false,
        ammo: "rifle",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 150000
    },
    {
        name: "MP-40",
        class: "Exotic",
        amount: 0,
        level: 0,
        mag: 32,
        firemodes: "Automatic",
        legal: false,
        ammo: "pistol",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: 90000
    },
    {
        name: "BMG-50",
        class: "Police",
        amount: 0,
        level: 0,
        mag: 3,
        firemodes: "Semi-Automatic",
        legal: false,
        ammo: "sniper",
        copper: null,
        iron: null,
        silver: null,
        gold: null,
        titanium: null,
        wood: null,
        maple: null,
        willow: null,
        steel: null,
        coal: null,
        price: null
    },
    {
        name: "Gas Mask",
        class: "Equipable",
        amount: 0,
        level: 52,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 4,
        iron: 4,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 4,
        coal: 0,
        price: 2500
    },
    {
        name: "Gas Filter",
        class: "Equipable",
        amount: 0,
        level: 52,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 4,
        iron: 4,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 2,
        coal: 0,
        price: 1500
    },
    {
        name: "Door Charge",
        class: "Door Charge",
        amount: 0,
        level: 54,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: false,
        ammo: "Doesn't accept ammo",
        copper: 6,
        iron: 8,
        silver: 0,
        gold: 4,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 3,
        coal: 0,
        price: 4000
    },
    {
        name: "Copper Ingot",
        class: "Item",
        amount: 0,
        level: 1,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 1,
        iron: 0,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 125
    },
    {
        name: "Iron Ingot",
        class: "Item",
        amount: 0,
        level: 14,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 0,
        iron: 1,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 200
    },
    {
        name: "Steel Ingot",
        class: "Item",
        amount: 0,
        level: 25,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 1,
        coal: 0,
        price: 650
    },
    {
        name: "Silver Ingot",
        class: "Item",
        amount: 0,
        level: 48,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 0,
        iron: 0,
        silver: 1,
        gold: 0,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 250
    },
    {
        name: "Gold Ingot",
        class: "Item",
        amount: 0,
        level: 62,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 0,
        iron: 0,
        silver: 0,
        gold: 1,
        titanium: 0,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 300
    },
    {
        name: "Titanium Ingot",
        class: "Item",
        amount: 0,
        level: 73,
        mag: "Doesn't accept ammo",
        firemodes: "Doesn't fire ammo",
        legal: true,
        ammo: "Doesn't accept ammo",
        copper: 0,
        iron: 0,
        silver: 0,
        gold: 0,
        titanium: 1,
        wood: 0,
        maple: 0,
        willow: 0,
        steel: 0,
        coal: 0,
        price: 375
    }//Attachments 2.0
];

for(i = 0; i < guns.length; i++) {
    guns[i].coal = ((guns[i].copper * 1) + (guns[i].iron * 1) + ((guns[i].steel * 3) * 1) + (guns[i].steel * 1) + (guns[i].silver * 1) + (guns[i].gold * 1) + (guns[i].titanium * 1));
    guns[i].copper = (guns[i].copper * 2);
    guns[i].iron = (guns[i].iron * 2);
    guns[i].iron += (guns[i].steel * 6);
    guns[i].silver = (guns[i].silver * 2);
    guns[i].gold = (guns[i].gold * 2);
    guns[i].titanium = (guns[i].titanium * 2);
}

var materials = [
    {
        name: "Copper Ore",
        image: "images/ores/copper.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Coal Ore",
        image: "images/ores/coal.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Iron Ore",
        image: "images/ores/iron.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Silver Ore",
        image: "images/ores/silver.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Gold Ore",
        image: "images/ores/gold.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Titanium Ore",
        image: "images/ores/titanium.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Wood Log",
        image: "images/ores/log.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Maple Log",
        image: "images/ores/log.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Willow Log",
        image: "images/ores/log.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Money",
        image: "images/ores/cash.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    }
];

var extendedMaterials = [
    {
        name: "Copper Bar",
        image: "images/ores/i_copper_new.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Iron Bar",
        image: "images/ores/i_iron_new.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Steel Bar",
        image: "images/ores/i_steel_new.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Silver Bar",
        image: "images/ores/i_silver_new.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Gold Bar",
        image: "images/ores/i_gold_new.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Titanium Bar",
        image: "images/ores/i_titanium_new.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Wood Plank",
        image: "images/ores/plank.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Maple Plank",
        image: "images/ores/plank.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    },
    {
        name: "Willow Plank",
        image: "images/ores/plank.png",
        amount: 0,
        stacks: 0,
        remainder: 0
    }
];

let version = "2.0";

function loadGuns() {
    for(i = 0; i < guns.length; i++) {
        var itemContainer = document.createElement("div");
        itemContainer.id = "item-container" + i;
        itemContainer.style.border = "1px solid gray";
        itemContainer.style.height = "5vw";
        //Fix FOR 1.7
        if(i == guns.length) {
            itemContainer.style.cursor = "pointer";
        }

        var itemImage = document.createElement("img");
        itemImage.id = "item-image" + i;
        itemImage.setAttribute("src", "images/weapons/" + guns[i].name + ".png");
        itemImage.style.width = "4.5vw";
        itemImage.setAttribute("title", guns[i].name);
        itemImage.style.display = "block";
        itemImage.style.position = "relative";
        itemImage.style.top = "0.075vw";
        itemImage.style.left = "0.2vw";
        //Halloween Event rounded icons
        itemImage.style.borderRadius = "0.35vw";
        //Version 1.9
        itemImage.style.cursor = "pointer";
        itemImage.setAttribute("onmouseover", "imageHover(" + i + ")");
        itemImage.setAttribute("onmouseout", "imageUNHover(" + i + ")");
        itemImage.setAttribute("onclick", "itemInfo(" + i + ")");
        if(guns[i].class == "Pistol") {
            itemImage.style.border = "0.175vw solid #006eff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 0.1), rgba(87, 142, 214, 1))";
        } else if(guns[i].class == "Rifle") {
            itemImage.style.border = "0.175vw solid #ff8c00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 0.1), rgba(252, 182, 95, 1))";
        } else if(guns[i].class == "Knife") {
            itemImage.style.border = "0.175vw solid #ff0000";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 0.1), rgba(249, 122, 122, 1))";
        } else if(guns[i].class == "Shotgun") {
            itemImage.style.border = "0.175vw solid #7f00ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(183, 112, 255, 0.1), rgba(183, 112, 255, 1))";
        } else if(guns[i].class == "Exotic") {
            itemImage.style.border = "0.175vw solid #eeff00";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 0.1), rgba(245, 255, 117, 1))";
        } else if(guns[i].class == "Police") {
            itemImage.style.border = "0.175vw solid #0015ff";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(124, 135, 255, 0.1), rgba(124, 135, 255, 1))";
        } else if(guns[i].class == "Equipable") {
            itemImage.style.border = "0.175vw solid #46d300";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(135, 209, 98, 0.1), rgba(135, 209, 98, 1))";
        } else if(guns[i].class == "Door Charge") {
            itemImage.style.border = "0.175vw solid #41006d";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(108, 0, 181, 0.1), rgba(108, 0, 181, 1))";
        } else if(guns[i].class == "Item") {
            itemImage.style.border = "0.175vw solid #333333";
            itemImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 0.1), rgba(109, 109, 109, 1))";
        }

        var itemName = document.createElement("div");
        itemName.id = "item-name" + i;
        itemName.innerHTML = guns[i].name;
        itemName.style.display = "block";
        itemName.style.position = "relative";
        itemName.style.top = "-4.75vw";
        itemName.style.left = "5.5vw";
        itemName.style.fontSize = "1.5vw";
        itemName.style.color = "white";
        itemName.style.fontWeight = "bold";

        var itemLevel = document.createElement("div");
        itemLevel.id = "item-level" + i;
        if(guns[i].level != 0) {
            if(guns[i].name == "Gas Mask" || guns[i].name == "Gas Filter" || guns[i].name == "Door Charge" || guns[i].name == "Copper Ingot" || guns[i].name == "Iron Ingot" || guns[i].name == "Steel Ingot" || guns[i].name == "Silver Ingot" || guns[i].name == "Gold Ingot" || guns[i].name == "Titanium Ingot") {
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
        itemLevel.style.top = "-4.75vw";
        itemLevel.style.left = "5.5vw";
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
        itemLegal.style.top = "-4.75vw";
        itemLegal.style.left = "5.5vw";
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
        itemMag.style.top = "-9.25vw";
        itemMag.style.left = "20vw";
        itemMag.style.fontSize = "1vw";
        itemMag.style.fontWeight = "600";

        var itemFiremodes = document.createElement("div");
        itemFiremodes.id = "item-firemodes" + i;
        itemFiremodes.innerHTML = "Fire Modes: " + guns[i].firemodes;
        itemFiremodes.style.display = "block";
        itemFiremodes.style.position = "relative";
        itemFiremodes.style.top = "-9.1vw";
        itemFiremodes.style.left = "20vw";
        itemFiremodes.style.fontSize = "1vw";
        itemFiremodes.style.fontWeight = "600";
        itemFiremodes.style.color = "white";

        var itemAmmo = document.createElement("div");
        itemAmmo.id = "item-ammo" + i;
        if(guns[i].ammo == "pistol") {
            itemAmmo.innerHTML = "Ammo Type: Pistol Ammo";
        } else if(guns[i].ammo == "rifle") {
            itemAmmo.innerHTML = "Ammo Type: Rifle Ammo";
        } else if(guns[i].ammo == "shotgun") {
            itemAmmo.innerHTML = "Ammo Type: Shotgun Ammo";
        } else if(guns[i].ammo == "sniper") {
            itemAmmo.innerHTML = "Ammo Type: Sniper Ammo";
        } else {
            itemAmmo.innerHTML = "Ammo Type: Doesn't accept ammo";
        }
        itemAmmo.style.display = "block";
        itemAmmo.style.position = "relative";
        itemAmmo.style.top = "-9vw";
        itemAmmo.style.left = "20vw";
        itemAmmo.style.fontSize = "1vw";
        itemAmmo.style.fontWeight = "600";
        itemAmmo.style.color = "white";

        itemInputBox = document.createElement("input");
        itemInputBox.id = "item-input-box" + i;
        itemInputBox.value = 0;
        itemInputBox.style.fontSize = "3vw";
        itemInputBox.style.fontWeight = "600";
        itemInputBox.style.opacity = "75%";
        itemInputBox.style.width = "5vw";
        itemInputBox.style.height = "5vw";
        itemInputBox.style.border = "1px white solid";
        itemInputBox.style.display = "block";
        itemInputBox.style.position = "relative";
        itemInputBox.style.top = "-13.65vw";
        itemInputBox.style.left = "44vw";
        itemInputBox.style.textAlign = "center";
        itemInputBox.style.lineHeight = "5vw";
        itemInputBox.style.verticalAlign = "middle";
        itemInputBox.setAttribute("type", "number");
        if(guns[i].class == "Police") {
            itemInputBox.style.backgroundColor = "red";
            itemInputBox.style.color = "white";
            itemInputBox.setAttribute("min", "0");
            itemInputBox.setAttribute("max", "0");
        } else if(guns[i].class == "Exotic" || guns[i].name == "TAC-338") {
            itemInputBox.style.backgroundColor = "salmon";
            itemInputBox.style.color = "red";
            itemInputBox.setAttribute("min", "0");
            itemInputBox.setAttribute("max", "99");
        } else {
            itemInputBox.style.backgroundColor = "#5a5a5a";
            itemInputBox.style.color = "white";
            itemInputBox.setAttribute("min", "0");
            itemInputBox.setAttribute("max", "99");
        }

        if(guns[i].name == "FAMAS F1" || guns[i].name == "HK MP7A1" || guns[i].name == "TAC-338") {
            itemContainer.style.backgroundImage = "url('images/blueprint.png')";
        }
        
        var mainContainer = document.getElementById("guns-container");
        mainContainer.appendChild(itemContainer);
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemLevel);
        itemContainer.appendChild(itemLegal);
        itemContainer.appendChild(itemMag);
        itemContainer.appendChild(itemFiremodes);
        itemContainer.appendChild(itemAmmo);
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

        var materialImage = document.createElement("img");
        materialImage.id = "material-image" + i;
        materialImage.setAttribute("src", materials[i].image);
        materialImage.style.width = "4.5vw";
        materialImage.setAttribute("title", materials[i].name);
        materialImage.style.display = "block";
        materialImage.style.position = "relative";
        materialImage.style.top = "0.1vw";
        materialImage.style.left = "0.1vw";
        materialImage.style.border = "0.175vw solid #333333";
        materialImage.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 0.1), rgba(109, 109, 109, 1))";
        materialImage.style.borderRadius = "0.35vw";

        var materialName = document.createElement("div");
        materialName.id = "material-name" + i;
        materialName.innerHTML = materials[i].name;
        materialName.style.display = "block";
        materialName.style.position = "relative";
        materialName.style.top = "-4.5vw";
        materialName.style.left = "5.5vw";
        materialName.style.fontSize = "1.5vw";
        materialName.style.color = "white";
        materialName.style.fontWeight = "bold";

        var materialAmount = document.createElement("div");
        materialAmount.id = "material-amount" + i;
        if(i == 9) {
            materialAmount.innerHTML = "Amount: $" + materials[i].amount;
        } else {
            materialAmount.innerHTML = "Amount: " + materials[i].amount;
        }
        materialAmount.style.display = "block";
        materialAmount.style.position = "relative";
        materialAmount.style.top = "-4.5vw";
        materialAmount.style.left = "5.5vw";
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

var background = "autumn";

function changeBG() {
    if(background == "autumn") {
        document.getElementById("background-img").style.backgroundImage = "linear-gradient(#181818, #070707)";
        document.getElementById("background-img").style.filter = "blur(0px)";
        document.getElementById("warning-text").style.color = "white";
        document.getElementById("warning").style.color = "white";
        document.getElementById("credits").style.color = "white";
        document.getElementById("bg-type").innerHTML = "Background: Simple";
        background = "simple";
        localStorage.setItem("theme", "Simple");
    } else if(background == "simple") {
        document.getElementById("background-img").style.backgroundImage = "url(images/background-winter.jpg)";
        document.getElementById("background-img").style.filter = "blur(0px)";
        document.getElementById("warning-text").style.color = "white";
        document.getElementById("warning").style.color = "white";
        document.getElementById("credits").style.color = "white";
        document.getElementById("bg-type").innerHTML = "Background: Winter Monoford";
        background = "autumn";
        localStorage.setItem("theme", "Autumn");
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Check if user is brand new, if so, flash the help icon to encourage new users to use the tutorial
/*
var infoType = "white";
if(localStorage.getItem("tutorial") == null) {
    localStorage.setItem("tutorial", false);
    tutorialInterval3 = setInterval(function() {
        if(infoType == "white") {
            document.getElementById("info-icon").style.color = "#ff4444";
            infoType = "red";
        } else if(infoType == "red") {
            document.getElementById("info-icon").style.color = "white";
            infoType = "white";
        }
    }, 1000);
} else if(localStorage.getItem("tutorial") == "false") {
    tutorialInterval3 = setInterval(function() {
        if(infoType == "white") {
            document.getElementById("info-icon").style.color = "#ff4444";
            infoType = "red";
        } else if(infoType == "red") {
            document.getElementById("info-icon").style.color = "white";
            infoType = "white";
        }
    }, 1000);
}
*/

//LOCAL STORAGE FOR THEME
if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "Autumn");
}

if(localStorage.getItem("theme") == "Autumn") {
    background = "autumn";
    document.getElementById("background-img").style.backgroundImage = "url(images/background-winter.jpg)";
    document.getElementById("bg-type").innerHTML = "Background: Winter Monoford";
} else if(localStorage.getItem("theme") == "Simple") {
    background = "simple";
    document.getElementById("background-img").style.backgroundImage = "linear-gradient(#181818, #070707)";
    document.getElementById("bg-type").innerHTML = "Background: Simple";
    document.getElementById("checkbox").setAttribute("checked", true);
}

//Version 1.9 (Item Info)
function imageHover(element) {
    if(guns[element].name == "HK MP7A1" || guns[element].name == "FAMAS F1" || guns[element].name == "TAC-338") {
        document.getElementById("item-container" + element).style.backgroundImage = "url('images/blueprint.png'), gray";
        document.getElementById("item-container" + element).style.background = "gray";
    } else {
        document.getElementById("item-container" + element).style.backgroundColor = "gray";
        document.getElementById("item-container" + element).style.transitionDuration = "1s";
    }
}

function imageUNHover(element) {
    if(guns[element].name == "HK MP7A1" || guns[element].name == "FAMAS F1" || guns[element].name == "TAC-338") {
        document.getElementById("item-container" + element).style.backgroundImage = "url('images/blueprint.png')";
    } else {
        document.getElementById("item-container" + element).style.backgroundColor = "";
        document.getElementById("item-container" + element).style.transitionDuration = "1s";
    }
}

function itemInfo(element) {
    itemInfoContainer = document.createElement("div");
    itemInfoContainer.id = "item-info-container";
    itemInfoContainer.style.width = "99.5vw";
    itemInfoContainer.style.height = "92.5vh";
    itemInfoContainer.style.position = "fixed";
    itemInfoContainer.style.top = "60px";
    itemInfoContainer.style.left = "0vw";
    itemInfoContainer.style.opacity = "0%";
    itemInfoContainer.style.lineHeight = "70vh";
    itemInfoContainer.style.userSelect = "none";
    if(guns[element].class == "Pistol") {
        itemInfoContainer.style.border = "0.25vw solid #006eff";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(87, 142, 214, 1), rgba(0, 110, 225, 0.25))";
    } else if(guns[element].class == "Rifle") {
        itemInfoContainer.style.border = "0.25vw solid #ff8c00";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(252, 182, 95, 1), rgba(255, 140, 0, 0.25))";
    } else if(guns[element].class == "Knife") {
        itemInfoContainer.style.border = "0.25vw solid #ff0000";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(249, 122, 122, 1), rgba(255, 0, 0, 0.25))";
    } else if(guns[element].class == "Shotgun") {
        itemInfoContainer.style.border = "0.25vw solid #7f00ff";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(183, 112, 255, 1), rgba(127, 0, 255, 0.25))";
    } else if(guns[element].class == "Exotic") {
        itemInfoContainer.style.border = "0.25vw solid #eeff00";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(245, 255, 117, 1), rgba(238, 255, 0, 0.25))";
    } else if(guns[element].class == "Police") {
        itemInfoContainer.style.border = "0.25vw solid #0015ff";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(124, 135, 255, 1), rgba(0, 21, 255, 0.25))";
    } else if(guns[element].class == "Equipable") {
        itemInfoContainer.style.border = "0.25vw solid #46d300";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(135, 209, 98, 1), rgba(70, 211, 0, 0.25))";
    } else if(guns[element].class == "Door Charge") {
        itemInfoContainer.style.border = "0.25vw solid #41006d";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(108, 0, 181, 1), rgba(65, 0, 109, 0.25))";
    } else if(guns[element].class == "Item") {
        itemInfoContainer.style.border = "0.25vw solid #333333";
        itemInfoContainer.style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 1), rgba(51, 51, 51, 0.25))";
    }
    
    if(guns[element].name == "HK MP7A1" || guns[element].name == "FAMAS F1" || guns[element].name == "TAC-338") {
        itemInfoContainer.style.backgroundImage = "url('images/blueprint.png')";
        itemInfoContainer.style.border = "0.25vw solid rgb(0, 0, 50)";
    }

    const itemInfoImage = document.createElement("img");
    itemInfoImage.id = "item-info-image";
    itemInfoImage.style.width = "30vw";
    itemInfoImage.style.margin = "auto";
    itemInfoImage.style.verticalAlign = "middle";
    itemInfoImage.setAttribute("src", "images/weapons/" + guns[element].name + ".png");

    const itemInfoTitle = document.createElement("div");
    itemInfoTitle.id = "item-info-title";
    itemInfoTitle.style.color = "white";
    itemInfoTitle.style.fontSize = "5vw";
    itemInfoTitle.style.fontWeight = "bold";
    itemInfoTitle.style.textShadow = "0.25vw 0.25vw 0.25vw black"
    itemInfoTitle.style.marginTop = "-90vh";
    itemInfoTitle.style.marginLeft = "32vw";
    itemInfoTitle.style.verticalAlign = "middle";
    itemInfoTitle.innerHTML = guns[element].name;

    const itemInfoLevel = document.createElement("div");
    itemInfoLevel.id = "item-info-level";
    itemInfoLevel.style.color = "white";
    itemInfoLevel.style.fontSize = "3.5vw";
    itemInfoLevel.style.fontWeight = "600";
    itemInfoLevel.style.marginTop = "-60vh";
    itemInfoLevel.style.marginLeft = "32vw";
    itemInfoLevel.style.verticalAlign = "middle";
    if(guns[element].level != 0) {
        if(guns[element].name == "Gas Mask" || guns[element].name == "Gas Filter" || guns[element].name == "Door Charge" || guns[element].name == "Copper Ingot" || guns[element].name == "Iron Ingot" || guns[element].name == "Steel Ingot" || guns[element].name == "Silver Ingot" || guns[element].name == "Gold Ingot" || guns[element].name == "Titanium Ingot") {
            itemInfoLevel.innerHTML = "Metalworking Level: " + guns[element].level;
            itemInfoLevel.style.color = "black";
        } else {
            itemInfoLevel.innerHTML = "Crafting Level: " + guns[element].level;
            itemInfoLevel.style.color = "white";
        }
    } else if(guns[element].level == 0) {
        itemInfoLevel.innerHTML = "Uncraftable Item";
        itemInfoLevel.style.color = "red";
    }

    const itemInfoLegal = document.createElement("div");
    itemInfoLegal.id = "item-info-legal";
    itemInfoLegal.style.color = "white";
    itemInfoLegal.style.fontSize = "3.5vw";
    itemInfoLegal.style.fontWeight = "600";
    itemInfoLegal.style.marginTop = "-60vh";
    itemInfoLegal.style.marginLeft = "32vw";
    itemInfoLegal.style.verticalAlign = "middle";
    if(guns[element].legal == true) {
        itemInfoLegal.innerHTML = "Legal";
        itemInfoLegal.style.color = "darkgreen";
    } else if(guns[element].legal == false) {
        itemInfoLegal.innerHTML = "Illegal";
        itemInfoLegal.style.color = "red";
    }

    const itemInfoMag = document.createElement("div");
    itemInfoMag.id = "item-info-mag";
    itemInfoMag.style.color = "white";
    itemInfoMag.style.fontSize = "2vw";
    itemInfoMag.style.fontWeight = "600";
    itemInfoMag.style.marginTop = "-60vh";
    itemInfoMag.style.marginLeft = "32vw";
    itemInfoMag.style.verticalAlign = "middle";
    if(guns[element].mag != "Doesn't accept ammo") {
        itemInfoMag.innerHTML = "Magazine Size: " + guns[element].mag;
        itemInfoMag.style.color = "white";
    } else if(guns[element].mag == "Doesn't accept ammo") {
        itemInfoMag.innerHTML = "Doesn't accept ammo";
        itemInfoMag.style.color = "red";
    }

    const itemInfoFiremodes = document.createElement("div");
    itemInfoFiremodes.id = "item-info-firemodes";
    itemInfoFiremodes.style.color = "white";
    itemInfoFiremodes.style.fontSize = "2vw";
    itemInfoFiremodes.style.fontWeight = "600";
    itemInfoFiremodes.style.marginTop = "-65vh";
    itemInfoFiremodes.style.marginLeft = "32vw";
    itemInfoFiremodes.style.verticalAlign = "middle";
    itemInfoFiremodes.innerHTML = "Fire Modes: " + guns[element].firemodes;

    const itemInfoAmmo = document.createElement("div");
    itemInfoAmmo.id = "item-info-ammo";
    itemInfoAmmo.style.color = "white";
    itemInfoAmmo.style.fontSize = "2vw";
    itemInfoAmmo.style.fontWeight = "600";
    itemInfoAmmo.style.marginTop = "-65vh";
    itemInfoAmmo.style.marginLeft = "32vw";
    itemInfoAmmo.style.verticalAlign = "middle";
    if(guns[element].ammo == "pistol") {
        itemInfoAmmo.innerHTML = "Ammo Type: Pistol Ammo";
    } else if(guns[element].ammo == "rifle") {
        itemInfoAmmo.innerHTML = "Ammo Type: Rifle Ammo";
    } else if(guns[element].ammo == "shotgun") {
        itemInfoAmmo.innerHTML = "Ammo Type: Shotgun Ammo";
    } else if(guns[element].ammo == "sniper") {
        itemInfoAmmo.innerHTML = "Ammo Type: Sniper Ammo";
    } else {
        itemInfoAmmo.innerHTML = "Ammo Type: Doesn't accept ammo";
    }

    // const itemInfoDamageTitle = document.createElement("div");
    // itemInfoDamageTitle.id = "item-info-damage-title";
    // itemInfoDamageTitle.style.color = "white";
    // itemInfoDamageTitle.style.fontSize = "1.25vw";
    // itemInfoDamageTitle.style.fontWeight = "bold";
    // itemInfoDamageTitle.style.marginTop = "-57vh";
    // itemInfoDamageTitle.style.marginLeft = "1vw";
    // itemInfoDamageTitle.style.verticalAlign = "left";
    // itemInfoDamageTitle.innerHTML = "Weapon Damage:"

    const itemInfoClose = document.createElement("img");
    itemInfoClose.id = "item-info-close";
    itemInfoClose.style.position = "absolute";
    itemInfoClose.style.top = "1vw";
    itemInfoClose.style.right = "1vw";
    itemInfoClose.style.filter ="invert(1)";
    itemInfoClose.style.width = "1.75vw";
    itemInfoClose.style.cursor = "pointer";
    itemInfoClose.setAttribute("src", "images/close.png");
    itemInfoClose.setAttribute("onclick", "itemInfoClose()");

    //Append all created elements
    document.body.appendChild(itemInfoContainer);
    itemInfoContainer.appendChild(itemInfoImage);
    itemInfoContainer.appendChild(itemInfoTitle);
    itemInfoContainer.appendChild(itemInfoLevel);
    itemInfoContainer.appendChild(itemInfoLegal);
    itemInfoContainer.appendChild(itemInfoMag);
    itemInfoContainer.appendChild(itemInfoFiremodes);
    itemInfoContainer.appendChild(itemInfoAmmo);
    // itemInfoContainer.appendChild(itemInfoDamageTitle);
    itemInfoContainer.appendChild(itemInfoClose);

    var itemInfoOpacity = 1;
    itemInfoInterval = setInterval(function() {
        itemInfoContainer.style.opacity = itemInfoOpacity + "%";
        if(itemInfoOpacity == 100) {
            clearInterval(itemInfoInterval);
        } else {
            itemInfoOpacity++;
        }
    }, 7.5);
}

//Close Item Info Menu
function itemInfoClose() {
    var itemInfoOpacity = 100;
    itemInfoCloseInterval = setInterval(function() {
        itemInfoContainer.style.opacity = itemInfoOpacity + "%";
        if(itemInfoOpacity == 0) {
            clearInterval(itemInfoCloseInterval);
            itemInfoContainer.remove();
        } else {
            itemInfoOpacity--;
        }
    }, 4);
}

//Monolith 2.0.12 Gun Mechanics:

let furnace = "electric";
document.getElementById("electric-furnace").style.border = "0.175vw solid #19ff00";
document.getElementById("electric-furnace").style.backgroundImage = "linear-gradient(135deg, rgba(22, 135, 0, 0.1), rgba(22, 135, 0, 1))";

function changeFurnace(type) {
    furnace = type;

    if(type == "coal") {
        document.getElementById("coal-furnace").style.border = "0.175vw solid #19ff00";
        document.getElementById("coal-furnace").style.backgroundImage = "linear-gradient(135deg, rgba(22, 135, 0, 0.1), rgba(22, 135, 0, 1))";

        document.getElementById("electric-furnace").style.border = "0.175vw solid #333333";
        document.getElementById("electric-furnace").style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 0.1), rgba(109, 109, 109, 1))";
        calculateMaterials();
    } else if(type == "electric") {
        document.getElementById("electric-furnace").style.border = "0.175vw solid #19ff00";
        document.getElementById("electric-furnace").style.backgroundImage = "linear-gradient(135deg, rgba(22, 135, 0, 0.1), rgba(22, 135, 0, 1))";

        document.getElementById("coal-furnace").style.border = "0.175vw solid #333333";
        document.getElementById("coal-furnace").style.backgroundImage = "linear-gradient(135deg, rgba(109, 109, 109, 0.1), rgba(109, 109, 109, 1))";
        calculateMaterials();
    }
}

for(i = 0; i < guns.length; i++) {
    document.getElementById("item-input-box" + i).oninput = function() {
        guns[parseInt(this.id.substring(14))].amount = parseInt(document.getElementById(this.id).value);
        calculateMaterials();
    }
}

function calculateMaterials() {
    for(i = 0; i < materials.length; i++) {
        materials[i].amount = 0;
        materials[i].stacks = 0;
        materials[i].remainder = 0;
    }
    for(i = 0; i < extendedMaterials.length; i++) {
        extendedMaterials[i].amount = 0;
        extendedMaterials[i].stacks = 0;
        extendedMaterials[i].remainder = 0;
    }

    if(furnace == "coal") {
        for(i = 0; i < guns.length; i++) {
            materials[1].amount += (guns[i].coal * guns[i].amount);
        }
    }

    //Copper
    for(i = 0; i < guns.length; i++) {
        materials[0].amount += (guns[i].copper * guns[i].amount);
    }
    //Iron
    for(i = 0; i < guns.length; i++) {
        materials[2].amount += (guns[i].iron * guns[i].amount);
    }
    //Silver
    for(i = 0; i < guns.length; i++) {
        materials[3].amount += (guns[i].silver * guns[i].amount);
    }
    //Gold
    for(i = 0; i < guns.length; i++) {
        materials[4].amount += (guns[i].gold * guns[i].amount);
    }
    //Titanium
    for(i = 0; i < guns.length; i++) {
        materials[5].amount += (guns[i].titanium * guns[i].amount);
    }
    //Wood Log
    for(i = 0; i < guns.length; i++) {
        materials[6].amount += (guns[i].wood * guns[i].amount);
    }
    //Maple Log
    for(i = 0; i < guns.length; i++) {
        materials[7].amount += (guns[i].maple * guns[i].amount);
    }
    //Willow Log
    for(i = 0; i < guns.length; i++) {
        materials[8].amount += (guns[i].willow * guns[i].amount);
    }
    //Cash
    for(i = 0; i < guns.length; i++) {
        materials[9].amount += (guns[i].price * guns[i].amount);
    }

    //Extended Material Calculations
    extendedMaterials[0].amount = materials[0].amount / 2;
    extendedMaterials[1].amount = materials[2].amount / 2;
    //Steel
    for(i = 0; i < guns.length; i++) {
        extendedMaterials[2].amount += guns[i].steel * guns[i].amount;
    }
    extendedMaterials[3].amount = materials[3].amount / 2;
    extendedMaterials[4].amount = materials[4].amount / 2;
    extendedMaterials[5].amount = materials[5].amount / 2;
    extendedMaterials[6].amount = materials[6].amount / 4;
    extendedMaterials[7].amount = materials[7].amount / 4;
    extendedMaterials[8].amount = materials[8].amount / 4;

    //Stacks
    for(i = 0; i < materials.length; i++) {
        if(i < 5) {
            //Ores
            materials[i].remainder = (materials[i].amount % 64);
            materials[i].stacks = ((materials[i].amount - materials[i].remainder) / 64);
        } else if(i < materials.length - 1) {
            //Logs
            materials[i].remainder = (materials[i].amount % 128);
            materials[i].stacks = ((materials[i].amount - materials[i].remainder) / 128);
        }
    }
    for(i = 0; i < extendedMaterials.length; i++) {
        if(i < 5) {
            //Ingots
            extendedMaterials[i].remainder = (extendedMaterials[i].amount % 32);
            extendedMaterials[i].stacks = ((extendedMaterials[i].amount - extendedMaterials[i].remainder) / 32);
        } else {
            //Planks
            extendedMaterials[i].remainder = (extendedMaterials[i].amount % 128);
            extendedMaterials[i].stacks = ((extendedMaterials[i].amount - extendedMaterials[i].remainder) / 128);
        }
    }

    for(i = 0; i < materials.length; i++) {
        if(i != materials.length - 1) {
            if(stacksEnabled == true) {
                document.getElementById("material-amount" + i).innerHTML = "Stacks: " + materials[i].stacks + " <span style='color: black;'>|</span> Remainder: " + materials[i].remainder;
            } else {
                document.getElementById("material-amount" + i).innerHTML = "Amount: " + numberWithCommas(materials[i].amount);
            }
        } else {
            document.getElementById("material-amount" + i).innerHTML = "Amount: $" + numberWithCommas(materials[i].amount);
        }
    }

    for(i = 0; i < materials.length - 1; i++) {
        if(toggled[i] == true) {
            if(stacksEnabled == true) {
                document.getElementById("extended-material-amount" + i).innerHTML = "Stacks: " + extendedMaterials[i].stacks + " <span style='color: black;'>|</span> Remainder: " + extendedMaterials[i].remainder;
            } else {
                document.getElementById("extended-material-amount" + i).innerHTML = "Amount: " + numberWithCommas(extendedMaterials[i].amount);
            }
        }
    }
    if(toggled[2] == true) {
        if(stacksEnabled == true) {
            document.getElementById("extended-material-amount1").innerHTML = "Stacks: " + extendedMaterials[1].stacks + " <span style='color: black;'>|</span> Remainder: " + extendedMaterials[1].remainder;
            document.getElementById("extended-material-amount2").innerHTML = "Stacks: " + extendedMaterials[2].stacks + " <span style='color: black;'>|</span> Remainder: " + extendedMaterials[2].remainder;
        } else {
            document.getElementById("extended-material-amount1").innerHTML = "Amount: " + numberWithCommas(extendedMaterials[1].amount);
            document.getElementById("extended-material-amount2").innerHTML = "Amount: " + numberWithCommas(extendedMaterials[2].amount);
        }
    }

    timeEstimation();
}

let toggled = [false, false, false, false, false, false, false, false, false];

for(i = 0; i < materials.length; i++) {
    if(i != materials.length - 1) {
        document.getElementById("material-item-container" + i).onclick = function() {
            let selectedId = parseInt(this.id.substring(23));
            if(toggled[selectedId] == false) {
                toggled[selectedId] = true;
                generateExtendedMaterial(selectedId, true);
            } else {
                toggled[selectedId] = false;
                generateExtendedMaterial(selectedId, false);
            }
        }
    }
}

function generateExtendedMaterial(selectedId, open) {
    if(open == true) {
        //Generate the extended material for that selectedId

        //Iron + Steel
        if(selectedId == 1) {
            //Placeholder
        } else if(selectedId == 2) {
            const container = document.createElement("div");
            container.id = "extended-material-container1";
            container.style.position = "relative";
            container.style.width = "37.5vw";
            container.style.height = "3vw";
            container.style.top = "-3.5vw";
            container.style.left = "0%";
            container.style.borderTop = "1px solid gray";

            const image = document.createElement("img");
            image.id = "extended-material-image1";
            image.setAttribute("src", extendedMaterials[1].image);
            image.setAttribute("title", extendedMaterials[1].name);
            image.style.position = "absolute";
            image.style.top = "0.2vw";
            image.style.left = "0.2vw";
            image.style.width = "2.25vw";
            image.style.border = "0.175vw solid rgb(50, 50, 50)"
            image.style.borderRadius = "0.25vw";

            const name = document.createElement("div");
            name.id = "extended-material-name1";
            name.innerHTML = extendedMaterials[1].name;
            name.style.color = "white";
            name.style.fontSize = "1vw";
            name.style.fontWeight = "bold";
            name.style.position = "absolute";
            name.style.top = "0.2vw";
            name.style.left = "3.25vw";

            const amount = document.createElement("div");
            amount.id = "extended-material-amount1";
            if(stacksEnabled == true) {
                amount.innerHTML = "Stacks: " + extendedMaterials[1].stacks + " <span style='color: black;'>|</span> Remainder: " + extendedMaterials[1].remainder;
            } else {
                amount.innerHTML = "Amount: " + extendedMaterials[1].amount;
            }
            amount.style.color = "white";
            amount.style.fontSize = "1vw";
            amount.style.fontWeight = "500";
            amount.style.position = "absolute";
            amount.style.top = "1.25vw";
            amount.style.left = "3.25vw";

            const container2 = document.createElement("div");
            container2.id = "extended-material-container2";
            container2.style.position = "relative";
            container2.style.width = "37.5vw";
            container2.style.height = "3vw";
            container2.style.top = "-3.5vw";
            container2.style.left = "0%";
            container2.style.borderTop = "1px solid gray";

            const image2 = document.createElement("img");
            image2.id = "extended-material-image2";
            image2.setAttribute("src", extendedMaterials[2].image);
            image2.setAttribute("title", extendedMaterials[2].name);
            image2.style.position = "absolute";
            image2.style.top = "0.2vw";
            image2.style.left = "0.2vw";
            image2.style.width = "2.25vw";
            image2.style.border = "0.175vw solid rgb(50, 50, 50)"
            image2.style.borderRadius = "0.25vw";

            const name2 = document.createElement("div");
            name2.id = "extended-material-name2";
            name2.innerHTML = extendedMaterials[2].name;
            name2.style.color = "white";
            name2.style.fontSize = "1vw";
            name2.style.fontWeight = "bold";
            name2.style.position = "absolute";
            name2.style.top = "0.2vw";
            name2.style.left = "3.25vw";

            const amount2 = document.createElement("div");
            amount2.id = "extended-material-amount2";
            if(stacksEnabled == true) {
                amount2.innerHTML = "Stacks: " + extendedMaterials[2].stacks + " <span style='color: black;'>|</span> Remainder: " + extendedMaterials[2].remainder;
            } else {
                amount2.innerHTML = "Amount: " + extendedMaterials[2].amount;
            }
            amount2.style.color = "white";
            amount2.style.fontSize = "1vw";
            amount2.style.fontWeight = "500";
            amount2.style.position = "absolute";
            amount2.style.top = "1.25vw";
            amount2.style.left = "3.25vw";
        
            document.getElementById("material-item-container2").appendChild(container);
            document.getElementById("material-item-container2").appendChild(container2);
            container.appendChild(image);
            container.appendChild(name);
            container.appendChild(amount);

            container2.appendChild(image2);
            container2.appendChild(name2);
            container2.appendChild(amount2);
        
            document.getElementById("material-item-container" + selectedId).style.paddingBottom = "6vw";
        } else {
            const container = document.createElement("div");
            container.id = "extended-material-container" + selectedId;
            container.style.position = "relative";
            container.style.width = "37.5vw";
            container.style.height = "3vw";
            container.style.top = "-3.5vw";
            container.style.left = "0%";
            container.style.borderTop = "1px solid gray";

            const image = document.createElement("img");
            image.id = "extended-material-image" + selectedId;
            image.setAttribute("src", extendedMaterials[selectedId].image);
            image.setAttribute("title", extendedMaterials[selectedId].name);
            image.style.position = "absolute";
            image.style.top = "0.2vw";
            image.style.left = "0.2vw";
            image.style.width = "2.25vw";
            image.style.border = "0.175vw solid rgb(50, 50, 50)"
            image.style.borderRadius = "0.25vw";

            const name = document.createElement("div");
            name.id = "extended-material-name" + selectedId;
            name.innerHTML = extendedMaterials[selectedId].name;
            name.style.color = "white";
            name.style.fontSize = "1vw";
            name.style.fontWeight = "bold";
            name.style.position = "absolute";
            name.style.top = "0.2vw";
            name.style.left = "3.25vw";

            const amount = document.createElement("div");
            amount.id = "extended-material-amount" + selectedId;
            if(stacksEnabled == true) {
                amount.innerHTML = "Stacks: " + extendedMaterials[selectedId].stacks + " <span style='color: black;'>|</span> Remainder: " + extendedMaterials[selectedId].remainder;
            } else {
                amount.innerHTML = "Amount: " + extendedMaterials[selectedId].amount;
            }
            amount.style.color = "white";
            amount.style.fontSize = "1vw";
            amount.style.fontWeight = "500";
            amount.style.position = "absolute";
            amount.style.top = "1.25vw";
            amount.style.left = "3.25vw";
        
            document.getElementById("material-item-container" + selectedId).appendChild(container);
            container.appendChild(image);
            container.appendChild(name);
            container.appendChild(amount);
        
            document.getElementById("material-item-container" + selectedId).style.paddingBottom = "3vw";
        }
    } else if(open == false) {
        //Delete the extended material for that selectedId
        if(selectedId == 1) {
            //Placeholder
        } else if(selectedId == 2) {
            document.getElementById("extended-material-container1").remove();
            document.getElementById("extended-material-container2").remove();
            document.getElementById("material-item-container" + selectedId).style.paddingBottom = "0vw";
        } else {
            document.getElementById("extended-material-container" + selectedId).remove();
            document.getElementById("material-item-container" + selectedId).style.paddingBottom = "0vw";
        }
    }
}

let stacksEnabled = false;

function changeStackType() {
    if(stacksEnabled == false) {
        //Turn stack viewer on
        stacksEnabled = true;
        calculateMaterials();
        document.getElementById("stack-type").innerHTML = "Stacks: On";
    } else if(stacksEnabled == true) {
        //Turn stack viewer off
        stacksEnabled = false;
        calculateMaterials();
        document.getElementById("stack-type").innerHTML = "Stacks: Off";
    }
}

//Time estimation
let seconds = 0;
let minutes = 0;
let hours = 0;
let presentableSeconds = "";
let presentableMinutes = "";
let presentableHours = "";
let gunsHaveBeenAdded = false;

//*Electric furnace - extra 2 minutes (120s)
//*Coal furnace - extra 30 seconds
//*Per ore, add 7 seconds each
//*Per ingot, add 8 seconds each
//*Per Weapon, add 15 seconds

function timeEstimation() {
    //Reinitialize all time components
    seconds = 0;
    minutes = 0;
    hours = 0;
    presentableSeconds = "";
    presentableMinutes = "";
    presentableHours = "";
    gunsHaveBeenAdded = false;

    if(furnace == "coal") {
        seconds += 30;
    } else if(furnace == "electric") {
        seconds += 120;
    }

    for(i = 0; i < materials.length - 1; i++) {
        seconds += (7 * materials[i].amount);
    }
    for(i = 0; i < extendedMaterials.length; i++) {
        seconds += (8 * extendedMaterials[i].amount);
    }
    for(i = 0; i < guns.length; i++) {
        if(i < 37 || i > 44) {
            seconds += (15 * guns[i].amount);
            if(guns[i].amount > 0) {
                gunsHaveBeenAdded = true;
            }
        }
    }

    while(seconds > 59) {
        minutes++;
        seconds -= 60;
    }
    while(minutes > 59) {
        hours++;
        minutes -= 60;
    }

    if(seconds < 10) {
        presentableSeconds = "0" + seconds;
    } else {
        presentableSeconds = seconds;
    }

    if(minutes < 10) {
        presentableMinutes = "0" + minutes;
    } else {
        presentableMinutes = minutes;
    }

    if(hours < 10) {
        presentableHours = "0" + hours;
    } else {
        presentableHours = hours;
    }

    if(gunsHaveBeenAdded == false) {
        document.getElementById("time").innerHTML = "00:00:00";
    } else if(gunsHaveBeenAdded == true) {
        document.getElementById("time").innerHTML = presentableHours + ":" + presentableMinutes + ":" + presentableSeconds;
    }
}

function coloredLog(msg, color) {
    console.warn("%c" + msg, "color:" + color + ";font-weight:600; font-family: Purista;");
}

coloredLog("Monolith Crafting Calculator [ Version " + version + " ] | Created by: ClutchMasterFTW", "white");