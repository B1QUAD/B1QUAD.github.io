var gameList = [
    {
        "name": "Online Uno | Uno Freak",
        "description": "Online Uno game hosted by Uno Freak.",
        "link": "https://play.unofreak.com/"
    },
    {
        "name": "Lotería",
        "description": "The game of Lotería is commemorated in this Google doodle.",
        "link": "https://www.google.com/doodles/celebrating-loteria"
    },
    {
        "name": "Scattergories | Scattergoriesonline.net",
        "description": "An online scattegories game in Spanish.",
        "link" : "https://scattergoriesonline.net/new-game.xhtml#lang=es"
    },
    {
        "name": "Online BattleShip",
        "description": "An online game of BattleShip to play with friends.",
        "link": "https://papergames.io/en/battleship"
    },
    {
        "name": "Pictionary",
        "description": "Generate words to play pictionary over Zoom.",
        "link": "https://www.randomlists.com/spanish-words?dup=false&qty=1"
    },
    {
        "name": "Test, please ignore",
        "description": "",
        "link": ""
    }
]

function getGame() {

    return gameList[Math.floor(Math.random() * gameList.length)];
}

function set_text() {
    let log = document.getElementById("log");
    log.innerHTML = jsToHTML();
}

function jsToHTML() {

    game = getGame();
    var out;
    var i;
    out = '<p>' + game.name + '</p> <p>' + game.description + '</p>';
    out += '<p><a href=' + game.link + ' target="_blank" rel="noopener noreferrer">link</a></p>';
    // console.log(out);
    return out;
}
