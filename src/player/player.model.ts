export class Player{
    constructor(
        public id: number,
        public name:string,
        public isNational:boolean,
        public joiningDate:Date,
        public role:string[]
    ){}
}


// {
//     "name":"Virat Kohli",
//     "isNational":true,
//     "joiningDate":"2002-02-03",
//     "role":["batsman","bowler"]
//  }