// 50% Change to start with "The..."
var the = ["The", ""]
// Selects first word. There always is one of these.
var first = ["Realm", "Kingdom", "Cave", "Sword", "Throne", "Field", "Core", "Empire", "Land", "Castle", "Dungeon", "City", "Town", "Hill", "Mountain", "Fort", "Territory", "Spire", "Canyon", "Ocean", "Lake", "Spring", "Grave", "War", "Misery"]
// Selects second word. There always is one of these. 75% change to get 'of the'
var second = ["of the", "of the", "of the", "at the"]
// Selects third word. The blank strings are added to have a change that there is no word added from this list.
var third = ["Emerald", "Stone", "Obsidian", "Brick", "Grass", "Dirt", "Wooden", "Redstone", "Bedrock", "Dragon", "Explosive", "Diamond", "Iron", "Gold", "Lapis", "Coal", "Brewing", "Desert", "Tundra", "Mountain", "Space", "Field", "Urban", "Hidden", "Covert", "Uncanny", "Scheming", "Decisive", "Dangerous", "Explosive", "Threatening", "Warring", "Amber", "Bone", "Coral", "Ivory", "Jet", "Nacre", "Pearl", "Obsidian", "Glass", "Agate", "Beryl", "Diamond", "Opal", "Ruby", "Onyx", "Sapphire", "Emerald", "Jade", "Destructed", "Stained", "Orange", "Red", "Blue", "Cyan", "Black", "Brown", "Purple", "Ruined", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambada", "Omicron", "Sigma", "Omega", "Rho", "Para", "amazing", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
// Selects fourth (last) word. There always is one of these.
var fourth = ["Cow", "Pig", "Horse", "Creeper", "Spider", "Enderman", "Dragon", "Chicken", "Skeleton", "Jungle", "Swamp", "Desert", "Mountain", "Forest", "Mesa", "Sky", "Stone", "Grass", "Egg", "Potion", "Snow", "Stairs", "Lamp", "Water", "Lava", "Sponge", "Quartz", "Fire", "Cake", "Cobweb", "Head", "Rail", "Ore", "Carpet", "Wool", "Leaves", "Portal", "Wall", "Piston", "Beacon", "Silverfish", "Wood", "Brick", "Sign", "Pane", "Mushroom", "Sword", "Bow", "Axe", "Pickaxe", "Shovel", "Hoe", "Herobrine"]

function createMapname() {
    var a = the[Math.floor(Math.random() * the.length)];
    var b = first[Math.floor(Math.random() * first.length)];
    var c = second[Math.floor(Math.random() * second.length)];
    var d = third[Math.floor(Math.random() * third.length)];
    var e = fourth[Math.floor(Math.random() * fourth.length)];
    mapname = a + " " + b + " " + c + " " + d + " " + e;
    $('#mapname').text(mapname);
}
createMapname();
$('#newMapName').click(createMapname);