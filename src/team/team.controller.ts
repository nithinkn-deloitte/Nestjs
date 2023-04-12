import { Body, Controller, Post,Get,Param, Patch, Delete } from "@nestjs/common";
import { TeamService } from "./team.service";
import { Player } from "src/player/player.model";
@Controller('teams')
export class TeamController{
    constructor(private readonly teamService:TeamService){}


    // Adding the teams
    @Post()
    addTeam(
        @Body ('name') teamName:string,
        @Body ('description') teamDesc:string,
        @Body('players') teamPlayers:Player[],
    ){
        const generatedID = this.teamService.addTeam(teamName,teamDesc,teamPlayers);
        return {id:generatedID}
    }



    // selecting the Single team
    @Get(':id')
    getTeam(@Param('id') teamId: number){

        return this.teamService.getSingleTeam(teamId);
    }

    // selecting all the team
    @Get()
    getAllTeam(){
        return this.teamService.getAllTeams();
    }


    // Update for team
    @Patch(':id')
    updatePlayers(
        @Param('id') teamId : number,
        @Body('name') teamName : string,
        @Body('description') teamDesc:string,
        @Body('players') teamPlayers:Player[],
    ){
        this.teamService.updateTeam(teamId,teamName,teamDesc,teamPlayers);
        return null;
    }

    @Delete(":id")
    deleteProduct(@Param('id') teamId:number)
    {
        this.teamService.removeTeam(teamId);
        return null;
    }

}