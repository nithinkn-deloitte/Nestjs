import { Player } from "src/player/player.model";

export class Team{
    constructor(
        public id :number,
        public name:string,
        public description:string,
        public players:Player[]
    ){}
}


/*
{
    "name":"rcb",
    "description":"Royal Challengers Bangalore",
    "players":[
                    {
                "name":"Virat Kohli",
                "isNational":true,
                "joiningDate":"2002-02-03",
                "role":["batsman","bowler"]
            },
            {
    "name":"Ab d",
    "isNational":false,
    "joiningDate":"2000-02-03",
    "role":["batsman","bowler"]
 }
    ]
}

*/