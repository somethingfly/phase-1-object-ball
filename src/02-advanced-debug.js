


console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey];
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      /*
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
      */
      // ** commenting out above code, per comment in 00-objectball.js **
      // ** "player" isn't a key in their instruction / example object, nor is it a logical choice for object architecture. **
      // ** also added quite a few semicolons. **

      if (typeof teamObj[teamKey] === "object") {
        let dataObj = teamObj[teamKey];
        for (let dataKey in dataObj) {
          debugger
          if (typeof dataObj[dataKey] === "object") {
            let subDataObj = dataObj[dataKey];
            for (let subDataKey in subDataObj) {
              debugger
            };
          };
        };
      };
    }
  }
}

// then, call the function so it runs!
goodPractices()
