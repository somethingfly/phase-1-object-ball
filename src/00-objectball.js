// To save my sanity, copied the table rendered in browser, e.g. https://github.com/learn-co-curriculum/phase-1-object-ball/blob/main/README.md
// pasted it in excel, copied it again, pasted transposed values
// saved as csv, opened in notepad, copied text, pasted in https://www.convertcsv.com/csv-to-json.htm

// The assignment says "The players key points to an object of players whose names (as strings) are the keys to a object containing their stats."
// Also the assignment gives this example:
/*
    players: {
      "Alan Anderson": {...},
      "Reggie Evans": {...}
    }
*/
// but the 02-advanced.debug.js wouldn't work with this origal bit code because it is expecting a "player" key:
/*
let data = teamObj.player
*/
// It would make for more sense that "Alan Anderson" should be a value of a key, and not a key name, and all players were in a simple array:
/*
    players: [
      {
         playerName: "Alan Anderson",
         number: 0,
          {...},
      },
      {
         playerName: "Reggie Evans",
         number: 30,
         {...},
      },
*/
// Similarly making "home" and "away" the keys may not be optimal, but that is the instruction. 


function gameObject() {
    const obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
    return obj;
};

function numPointsScored(playerNameToFind) {
    return playersStats(playerNameToFind)["points"];
}


function shoeSize(playerNameToFind) {
    return playersStats(playerNameToFind)["shoe"];
}

function teamColors(teamNameToFind) {
    const object = gameObject();
    if (object["home"]["teamName"] === teamNameToFind) {
        return object["home"]["colors"];
    };
    return object["away"]["colors"];
}

function teamNames() {
    const object = gameObject();
    return [object["home"]["teamName"], object["away"]["teamName"]];
}

function playerNumbers(teamNameToFind) {
    const object = gameObject();
    let playerObject = {};
    if (object["home"]["teamName"] === teamNameToFind) {
        playerObject = object["home"]["players"];
    } else {
        playerObject = object["away"]["players"];
    };
    const playerNumbersOjbect = Object.values(playerObject).map(function(element) {
        return element.number;
    });
    return playerNumbersOjbect;
}

function playersStats(playerNameToFind) {
    const object = gameObject();
    if (object["home"]["players"][playerNameToFind]){
        return object["home"]["players"][playerNameToFind];
    } 
    return object["away"]["players"][playerNameToFind];
}

function bigShoeRebounds() {
    const object = gameObject();
    const allPlayersData = [...Object.values(object["home"]["players"]),...Object.values(object["away"]["players"])];
    let biggestShoe = 0;
    let biggestShoeRebound;
    for (let element of allPlayersData) {
        if (element.shoe > biggestShoe){
            biggestShoe = element.shoe;
            biggestShoeRebound = element.rebounds;
        }};
    return biggestShoeRebound;
}

function mostPointsScored() {
    return mostData("points");
}

function mostData(dataNeeded) {
    // assumes no ties, otherwise will return the first that ties.
    const object = gameObject();
    const allPlayersData = [...Object.values(object["home"]["players"]),...Object.values(object["away"]["players"])];
    const allPlayersNames = [...Object.keys(object["home"]["players"]),...Object.keys(object["away"]["players"])];
    let mostData = 0;
    let mostDataPlayer;
    for (let key in allPlayersData) {
        if (allPlayersData[key][dataNeeded] > mostData) {
            mostData = allPlayersData[key][dataNeeded];
            mostDataPlayer = allPlayersNames[key];
        }};
    return mostDataPlayer;
}


function winningTeam() {
    // Assumes there can't be a tie.
    // Wasn't clear from the assignment, if stats are always retrieved at end of game, but assuming so.
    // And apparently NBA games can't end in a time, nor ever have:
    // https://www.quora.com/Can-NBA-games-tie
    // https://coachingkidz.com/can-basketball-games-end-in-a-tie-only-when/
    const object = gameObject();
    const homePlayersData = [...Object.values(object["home"]["players"])];
    const awayPlayersData = [...Object.values(object["away"]["players"])];
    const homePlayersPoints = homePlayersData.reduce(function(accumulator, element){return element.points + accumulator},0);
    const awayPlayersPoints = awayPlayersData.reduce(function(accumulator, element){return element.points + accumulator},0);
    if (homePlayersPoints > awayPlayersPoints) {
        return object["home"]["teamName"];
    }
    return object["away"]["teamName"];
}

function playerWithLongestName() {
    // assumes no ties, otherwise will return the first that ties.
    const object = gameObject();
    const allPlayersNames = [...Object.keys(object["home"]["players"]),...Object.keys(object["away"]["players"])];
    let longestNameCharacterNumber = 0;
    let longestName;
    for (let element of allPlayersNames) {
        if (element.length > longestNameCharacterNumber) {
            longestNameCharacterNumber = element.length
            longestName = element;
        }};
    return longestName;
}

function doesLongNameStealATon() {
    const mostStealsPlayer =  mostData("steals");
    const longestName = playerWithLongestName();
    return (mostStealsPlayer === longestName);
}