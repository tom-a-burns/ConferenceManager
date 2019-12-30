export class Conference {
	conference_abbr : string;
	conference_name : string;
	conference_type: string;

	conference_divisions:[
	  {
	    division_name:  string;
      division_type: string;
      division_teams: [
        {
	        team_name: string;
          team_nickname: string;
          team_logo: string;
          team_records: [
            {
              record_type: string;
              record_wins: number;
              record_losses: number;
              record_ties: number;
            }
          ];
        }
      ]
    }
	];
}
