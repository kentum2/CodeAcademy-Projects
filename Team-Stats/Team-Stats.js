const team = {
  _players: [ 
  {firstName: "Pablo", lastName:"Sanchez", age: 15},
  {firstName: "Sai", lastName:"Pats", age: 2},
  {firstName: "Macu", lastName:"Pähklimees", age: 21},
],
  _games: [
    {opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
    {opponent: "Kotkas", teamPoints: 426, opponentPoints: 265},
    {opponent: "Viljakad", teamPoints: 621, opponentPoints: 657},
  ],
 	get players () {
    	return this._players;
  },
  get games () {
  		return this._games;
},
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
      this.players.push(player);
  },
  addGame(firstName, lastName, teamPoints, opponentPoints) {
    const game = {
      firstName: firstName,
      lastName: lastName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    }
    this.games.push(game);
    },
};
team.addPlayer ('Steph', 'Curry', 28); 
team.addPlayer ('Lisa','Leslie', 44);
team.addPlayer ('Bugs','Bunny',76);
console.log (team.players);
team.addGame ('Koljatid', 150, 200);
team.addGame ('Muretud', 251, 200);
team.addGame ('Kuusik', 241, 121);
console.log (team.games);

