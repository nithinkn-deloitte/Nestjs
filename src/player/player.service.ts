import { Injectable, NotFoundException } from "@nestjs/common";
import { Player } from "./player.model";


@Injectable()
export class PlayerService{
    private players:Player[] = [];


    addPlayer(name:string,isNational:boolean,
        joiningDate:Date,role:string[]){
            const playerId = Math.random();
        const newPlayer = new Player(playerId,name,isNational,joiningDate,role)
            this.players.push(newPlayer);
    
        return playerId;
            }

    getAllPlayers(){
        return [...this.players];
    }

    getSinglePlayer(playerId: number) {
        const player = this.findPlayer(playerId)[0];
        return { ...player };
        }


    updatePlayer(playerId:number,name:string,isNational:boolean,joiningDate:Date,role:string[]){
        const [player,index] = this.findPlayer(playerId);
        const updatePlayer = { ...player};
        if (name) {
            updatePlayer.name = name;
        }
        if (isNational) {
            updatePlayer.isNational = isNational;
        }
        if (joiningDate) {
            updatePlayer.joiningDate = joiningDate;
        }
        if (role){
            updatePlayer.role= role;
        }

        this.players[index]=updatePlayer

    }

    removePlayer(playerId:number){
        const index = this.findPlayer(playerId)[1];
        this.players.slice(index,1);
    }



    private findPlayer(id: number): [Player, number] {
        const playerIndex = this.players.findIndex(play => play.id == id);
        const player = this.players[playerIndex];
        if (!player) {
          throw new NotFoundException('Could not find player.');
        }
        return [player, playerIndex];
      }


}