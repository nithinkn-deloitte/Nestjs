import { Player } from 'src/player/player.model';
import { Team } from './team.model'
import { NotFoundException } from '@nestjs/common';
export class TeamService {
    private teams: Team[] = [];

    addTeam(name: string, desc: string, players: Player[]) {
        const teamId = Math.random();
        const newTeam = new Team(teamId, name, desc, players)
        this.teams.push(newTeam);

        return teamId;
    }

    getAllTeams() {
        return [...this.teams];
    }

    getSingleTeam(teamId: number) {
        const team = this.findTeam(teamId)[0];
        return { ...team };
    }


    updateTeam(teamId: number, name: string, desc: string, players: Player[]) {
        const [team, index] = this.findTeam(teamId);
        const updateTeam = { ...team };
        if (name) {
            updateTeam.name = name;
        }
        if (desc) {
            updateTeam.description = desc;
        }
        if (players) {
            updateTeam.players = players;
        }

        this.teams[index] = updateTeam

    }

    removeTeam(teamId: number) {
        const index = this.findTeam(teamId)[1];
        this.teams.slice(index, 1);
    }



    private findTeam(id: number): [Team, number] {
        const teamIndex = this.teams.findIndex(tm => tm.id === id);
        const team = this.teams[teamIndex];
        if (!team) {
            throw new NotFoundException('Could not find the Team');
        }
        return [team, teamIndex];

    }
}
