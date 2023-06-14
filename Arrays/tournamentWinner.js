function tournamentWinner(competitions, results) {
    // Write your code here.
    let resultsMap = {};
    let winner = "";
    let maxCount = 0;
    for(let i = 0; i < competitions.length ; i++){
      // results 
      // if result - 0 , competitions array -> 1st index
      // if result - 1 , competitions array -> 0th index
      const homeOrAwayTeamIndex = results[i] == 0 ? 1 : 0;
      const teamName = competitions[i][homeOrAwayTeamIndex];
      const totalPoints = (resultsMap?.[teamName] || 0)+3;
      resultsMap = {
        ...resultsMap,
        [teamName]:totalPoints
      }
     if(resultsMap[teamName] > maxCount){
        maxCount = totalPoints;
        winner = teamName;
     }
    }
    return winner;
  }

  const result = tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ], [0, 0, 1])