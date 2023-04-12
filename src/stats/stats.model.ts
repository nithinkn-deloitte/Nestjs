export class Stats{
    constructor(
        public Batting : {
            matches :number,
            innings:number,
            runs:number,
            average : number
        },
        public Bowling : {
            matches :number,
            innings:number,
            wickets:number,
            average : number
        },
    ){}
}