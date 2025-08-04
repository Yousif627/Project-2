const express = require("express");
const router = express.Router();

const games = [
  { name: "League of Legends", image: "" },
  { name: "Valorant", image: "" },
  { name: "Fortnite", image: "" },
  { name: "Overwatch", image: "" },
  { name: "Apex Legends", image:" "},
  { name: "Call of Duty", image:""},
  { name: "Minecraft", image: "" },
  { name: "Rocket League", image: "" },
  { name: "Street Fighter VI", image: "" },
  { name: "Tekken 8", image: "" },
  { name: "Mortal Kombat 11", image:" "},
  { name: "Smash Bros Ultimate", image: "" },
  { name: "Red Dead Redemption 2", image:"" },
  { name: "The Last of Us", image:"" },
  { name: "God of War", image: "" },
  { name: "Elden Ring", image: "" },
  { name: "Hades", image: "" },
  { name: "Cyberpunk 2077", image: "" },
  { name: "Ghost of Tsushima", image:""},
  { name: "Resident Evil 4", image:"" },
  { name: "Assassin’s Creed Valhalla", image: "" },
  { name: "Horizon Forbidden West", image: "" },
  { name: "Far Cry 6", image: "" },
  { name: "Battlefield 2042", image: "" },
  { name: "PUBG", image:" "},
  { name: "Dota 2", image: " "},
  { name: "Team Fortress 2", image:""},
  { name: "Halo Infinite", image:" "},
  { name: "GTA V", image:" "},
  { name: "Among Us", image: "" },
  { name: "FIFA 24", image: "" },
  { name: "NBA 2K24", image: "" },
  { name: "MLB The Show 24", image:"" },
  { name: "Monster Hunter Rise", image: "" },
  { name: "Final Fantasy XVI", image:"" },
  { name: "Persona 5 Royal", image: "" },
  { name: "Sekiro", image: "" },
  { name: "Dark Souls III", image:""},
  { name: "Brawlhalla", image: "" },
  { name: "Dead by Daylight", image:"" },
  { name: "Palworld", image: "" },
  { name: "ARK: Survival Evolved", image:"" },
  { name: "Rainbow Six Siege", image:"" },
  { name: "World of Warcraft", image:"" },
  { name: "Diablo IV", image: "" },
  { name: "Genshin Impact", image: "" },
  { name: "Fall Guys", image: "" },
  { name: "Terraria", image: "" },
  { name: "Starfield", image: "" }
];


router.get("/", (req, res) => {
  res.render("home/home2.ejs", { currentUser: req.session.user || null,
  games, });
});

 router.post("/", (req, res) => {
  const selectedGame = req.body.gameName;
  if (!selectedGame) {
    return res.render("Service/serviceDetails.ejs", { error: "Please select a game." });
  }else{
    res.send("details cannot be shown")
  }
});
module.exports = router;
