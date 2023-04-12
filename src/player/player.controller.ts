import { Body, Controller, Post,Get,Param, Patch, Delete } from "@nestjs/common";
import { PlayerService } from "./player.service";

@Controller('players')
export class PlayerController{
    constructor(private readonly playerService:PlayerService){}

    // Adding the players
    @Post()
    addPlayer(
        @Body ('name') playerName:string,
        @Body ('isNational') playerNationality:boolean,
        @Body('joiningDate') playerJdate:Date,
        @Body('role') playerRole:string[]
    ){
        const generatedID = this.playerService.addPlayer(playerName,playerNationality,playerJdate,playerRole);
        return {id:generatedID}
    }



    // selecting the Single player
    @Get(':id')
    getProduct(@Param('id') playId: number){

        return this.playerService.getSinglePlayer(playId);
    }

    // selecting all the players
    @Get()
    getAllPlayers(){
        return this.playerService.getAllPlayers();
    }


    // updating the player info
    @Patch(':id')
    updatePlayers(
        @Param('id') playId : number,
        @Body('name') playName : string,
        @Body('isNational') playNational:boolean,
        @Body('joiningDate') playJoinDate:Date,
        @Body('role') playRole:string[]
    ){
        this.playerService.updatePlayer(playId,playName,playNational,playJoinDate,playRole);
        return null;
    }

    // Deleting the player
    @Delete(":id")
    deleteProduct(@Param('id') playId:number)
    {
        this.playerService.removePlayer(playId);
        return null;
    }

}