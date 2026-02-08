// Introduction to class and object
// 

class Player{
    constructor(name){
        console.log("Player is created", name);
    }
    goal(){
        console.log("Goal is scored");
    }
    getTeamName(){
        return "Team A";
    }
}

const player1 = new Player('BZ.SEBER');