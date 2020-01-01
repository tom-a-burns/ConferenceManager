export class Team {
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
