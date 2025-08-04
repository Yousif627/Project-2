const express = require("express");
const router = express.Router();

const games = [
  { name: "League of Legends", image: "https://images.ctfassets.net/vfkpgemp7ek3/1lqVpXAGDXmXIZT0jLgUls/f158d27e3452fa2e2b575b31533122e1/league-of-legends-wild-rift-500-million.jpeg" },
  { name: "Valorant", image: "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6" },
  { name: "Fortnite", image: "https://cdn.mobygames.com/covers/8572823-fortnite-playstation-4-front-cover.jpg" },
  { name: "Overwatch", image: "https://preview.redd.it/3b38e6cpmj971.png?width=640&crop=smart&auto=webp&s=13fbd3bd57f36fc20a64f15c91460a3d9aa6fbe0" },
  { name: "Apex Legends", image:"https://cdn.mobygames.com/covers/18989239-apex-legends-xbox-one-front-cover.jpg "},
  { name: "Call of Duty", image:"https://preview.redd.it/cod-which-cod-game-has-the-best-cover-art-ill-go-first-v0-lhwczd71sel91.jpg?auto=webp&s=68ee52f75c50f7ba4539b8094b39b6654ef7b295"},
  { name: "Minecraft", image: "https://preview.redd.it/how-do-we-feel-about-new-minecraft-cover-art-v0-31mphd031ibd1.png?width=640&crop=smart&auto=webp&s=ab51d420f5039d4157cf06f7639d55de220be020" },
  { name: "Rocket League", image: "https://us-west-2-epicgames.graphassets.com/A0Gpf4ZpfQzaTePr3NRc1z/resize=fit:clip,height:1080,width:1920/output=format:webp/cmbut8c2r20mn07og3wgonzdz" },
  { name: "Street Fighter VI", image: "https://m.media-amazon.com/images/M/MV5BZjY0M2NhYjktZDg1Ni00OWE1LWJlNjktMjdiZTQyZjk3NTJlXkEyXkFqcGc@._V1_.jpg" },
  { name: "Tekken 8", image: "https://fightersgeneration.com/news2024/game/tekken8-promotional-poster-jin-vs-kazuya.jpg" },
  { name: "Mortal Kombat 11", image:"https://d.newsweek.com/en/full/1287337/mortal-kombat-11-cover.jpg?w=1600&h=1200&q=88&f=6e5047cf7e7cbab3f99619806e4cf9dc"},
  { name: "Smash Bros Ultimate", image: "https://external-preview.redd.it/WWlywV3UCoEbldP1k7eR6sH5-Yk13rUm3KiXLI_cBSo.jpg?width=640&crop=smart&auto=webp&s=4134ddd6cc2c26023cefa3444d378994f5c4c589" },
  { name: "Red Dead Redemption 2", image:"https://static1.srcdn.com/wordpress/wp-content/uploads/2021/10/Red-Dead-Redemption-2-Van-der-Linde-gang-cover-art.jpg" },
  { name: "The Last of Us", image:"https://upload.wikimedia.org/wikipedia/en/8/86/The_Last_of_Us_Part_I_cover.jpg" },
  { name: "God of War", image: "https://assets-prd.ignimgs.com/2022/01/07/god-of-war-2-button-1641590949211.jpg" },
  { name: "Elden Ring", image: "https://p325k7wa.twic.pics/high/elden-ring/elden-ring-tarnished-edition/00-product-page/ER-Tarnished-Edition-Game-Thumbnail.jpg?twic=v1/resize=760/step=10/quality=80" },
  { name: "Hades", image: "https://m.media-amazon.com/images/M/MV5BM2Q2YjRiZmMtODlkMy00Zjc3LWIyYTktOWM3ZDc4YzI2YTYwXkEyXkFqcGc@._V1_.jpg" },
  { name: "Cyberpunk 2077", image: "https://howlongtobeat.com/games/141056_Cyberpunk_2077_Ultimate_Edition.jpg" },
  { name: "Ghost of Tsushima", image:"https://cdnb.artstation.com/p/assets/covers/images/029/304/717/large/mitch-mohrhauser-mitch-mohrhauser-ghost-boxart-1-thumb.jpg?1597116717"},
  { name: "Resident Evil 4", image:"https://i.ebayimg.com/00/s/MTM4MFgxMDAw/z/EcMAAOSwhQJkAlal/$_57.JPG?set_id=880000500F" },
  { name: "Assassin’s Creed Valhalla", image: "https://cdn2.penguin.com.au/covers/original/9781506735238.jpg" },
  { name: "Horizon Forbidden West", image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/02/horizon-forbidden-west-cover.jpg" },
  { name: "Far Cry 6", image: "https://upload.wikimedia.org/wikipedia/en/3/35/Far_cry_6_cover.jpg" },
  { name: "Battlefield 2042", image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Battlefield_2042_cover_art.jpg/250px-Battlefield_2042_cover_art.jpg" },
  { name: "PUBG", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAGxtMG1xj47Nh6OOh4XZIALkCk5adM15AFCSzCxEm_3e8xwyGSqMuGVJYioYgjMZ7lz8&usqp=CAU"},
  { name: "Dota 2", image: "https://gamespace.com/wp-content/uploads/2023/11/Dota-2-Items-Best-Sellers-in-2023.jpg "},
  { name: "Team Fortress 2", image:"https://i.redd.it/axowh50h1x071.png"},
  { name: "Halo Infinite", image:"https://wolfsgamingblog.com/wp-content/uploads/2021/12/halo_infinite_keyart_primary_vertical.jpg"},
  { name: "GTA V", image:"https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1352389719.jpg "},
  { name: "Among Us", image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781524871543/among-us-9781524871543_lg.jpg" },
  { name: "FIFA 25", image: "https://images.immediate.co.uk/production/volatile/sites/3/2024/07/FC25-Cover-1954e56.jpg?quality=90&resize=980,654" },
  { name: "NBA 2K25", image: "https://preview.redd.it/official-nba-2k25-cover-art-v0-twam2y1v9obd1.png?width=640&crop=smart&auto=webp&s=63dedf5ba0324015e6d4c47f62b7ad0a59874a00" },
  { name: "MLB The Show 24", image:"https://www.usatoday.com/gcdn/authoring/authoring-images/2025/01/28/USAT/77984132007-mlb-the-show-25-cover-art.png?crop=1229,1637,x409,y0" },
  { name: "Monster Hunter Rise", image: "https://upload.wikimedia.org/wikipedia/en/4/41/Monster_hunter_rise_cover.jpg" },
  { name: "Final Fantasy XVI", image:"https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24739728/ledeimage.png?quality=90&strip=all&crop=0,3.4613147178592,100,93.077370564282" },
  { name: "Persona 5 Royal", image: "https://assets1.ignimgs.com/2020/02/14/persona-5-royal---button-fin-1581716582492.jpg" },
  { name: "Sekiro", image: "https://sm.ign.com/t/ign_ap/cover/s/sekiro-sha/sekiro-shadows-die-twice_2km4.600.jpg" },
  { name: "Dark Souls III", image:"https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg"},
  { name: "Brawlhalla", image: "https://cms.brawlhalla.com/c/uploads/2024/12/BHD24_YT1920.jpg" },
  { name: "Dead by Daylight", image:"https://assets-prd.ignimgs.com/2024/05/14/dead-by-daylight-button-replacement-1715713276872.jpg" },
  { name: "Palworld", image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Palworld_Steam_artwork.jpg" },
  { name: "ARK: Survival Evolved", image:"https://assets-prd.ignimgs.com/2021/12/15/ark-survival-evolved-button-fin-1639607697385.jpg" },
  { name: "Rainbow Six Siege", image:"https://m.media-amazon.com/images/I/61BlQmnK8XS.jpg" },
  { name: "World of Warcraft", image:"https://i.etsystatic.com/19063773/r/il/d2fd02/5826789215/il_570xN.5826789215_2jdb.jpg" },
  { name: "Diablo IV", image: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt16c69bb042e8b63b/6656900818cf78439e855323/DIA_DIV_X1_BNET_PRE_PURCHASE_static_asset_shop_product_asset_gallery_base_1920x1080.png?imwidth=1920&imdensity=2.625" },
  { name: "Genshin Impact", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBbMAgDq2uXghXN7MR2bJuNk8fDDLAiLzZA&s" },
  { name: "Fall Guys", image: "https://m.media-amazon.com/images/M/MV5BZGIxNmMwZTQtNDUyNy00YTk0LThjY2QtZDA3N2E5Y2U4ODVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
  { name: "Terraria", image: "https://upload.wikimedia.org/wikipedia/en/1/1a/Terraria_Steam_artwork.jpg" },
  { name: "Starfield", image: "https://sm.ign.com/ign_nordic/cover/s/starfield/starfield_dzsh.jpg" }
];


router.get("/", (req, res) => {
  res.render("home/home.ejs", {  currentUser: req.session.user || null,
  games, });
});

router.post("/", (req, res) => {
  const selectedGame = req.body.gameName;
  if (!selectedGame) {
    return res.redirect("/");
  }
  res.redirect(`/service/new?gameName=${encodeURIComponent(selectedGame)}`);
});

module.exports = router;
