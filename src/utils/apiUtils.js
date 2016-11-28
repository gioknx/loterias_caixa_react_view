var React = require('react');


var cachedContests = {};


var fetchContest = function(contestName) {
  if (cachedContests[contestName] === undefined) {
    var uri = "http://localhost:3000/api/loterias/" + contestName + ".json";
    return fetch(uri)
      .then(result => result.json()).then(contest => {
      cachedContests[contestName] = contest;

      console.log("NonCached:", cachedContests[contestName]);
      return cachedContests[contestName];
    }
    );
  }
  console.log("Cached:", cachedContests[contestName]);

  return cachedContests[contestName];
}

module.exports = fetchContest;