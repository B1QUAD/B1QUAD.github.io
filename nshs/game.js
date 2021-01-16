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
        "name": "Online Dominoes | playdrift.com",
        "description": "Play dominoes online with your friends.",
        "link": "https://dominoes.playdrift.com/"
    },
    {
        "name": "Random Trivia | randomtriviagenerator.com",
        "description": "Have fun playing trivia with your friends.",
        "link": "https://www.randomtriviagenerator.com/#!/"
    },
    {
        "name": "Settlers of Catan Online | catanuniverse.com",
        "description": "Play Settlers of Catan with your friends",
        "link": "https://catanuniverse.com/es/game/"
    },
    {
        "name": "Card Games | cardgames.io",
        "description": "Plenty of online card games, to get started pick a game and create a room for you and your friends to play multiplayer.",
        "link": "https://cardgames.io"
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
