import {Component} from '@angular/core';
import {CompetitionTypeComponent} from "../competition-type/competition-type.component";
import {NgForOf} from "@angular/common";
import {BackgroundColor, CompetitionTypeConfig} from "../competition-type/competition-type-config";

@Component({
  selector: 'app-competition-page',
  standalone: true,
  imports: [
    CompetitionTypeComponent,
    NgForOf
  ],
  templateUrl: './competition-page.component.html',
  styleUrl: './competition-page.component.scss'
})
export class CompetitionPageComponent {
  competitions: CompetitionTypeConfig[] = [
    {
      competitionName: 'Weekly Challenges',
      contestantCards: [
        {
          alerts: '20',
          winRate: '85%',
          yield: '11%',
          contestantName: 'Roger Korsgaard',
          isVerified: true,
          cashBalance: "+ $7,500",
          percentage: '45%',
          pictureFileName: 'profile-image-polygon-1',
          backgroundColor: BackgroundColor.LIGHT_GREEN
        },
        {
          alerts: '20',
          winRate: '85%',
          yield: '11%',
          contestantName: 'Charlie Herwitz',
          isVerified: true,
          cashBalance: "+ $1,430",
          percentage: '25%',
          pictureFileName: 'profile-image-polygon-2',
          backgroundColor: BackgroundColor.PURPLE
        },
        {
          alerts: '20',
          winRate: '85%',
          yield: '11%',
          contestantName: 'Ahmad Mango',
          isVerified: false,
          cashBalance: "- $1,500",
          percentage: '10%',
          pictureFileName: 'profile-image-polygon-3',
          backgroundColor: BackgroundColor.BEIGE
        }
      ],
      xBitsPrize: '20,000',
      shortName: 'Roger K',
      login: '@rog13k',
      days: '3',
      isContestAvailable: false
    },
    {
      competitionName: 'Double Gain Week Contest',
      contestantCards: [
        {
          alerts: '20',
          winRate: '85%',
          yield: '11%',
          contestantName: 'Zain Mango',
          isVerified: true,
          cashBalance: "+ $3,500",
          percentage: '32%',
          pictureFileName: 'profile-image-polygon-4',
          backgroundColor: BackgroundColor.GREY
        },
        {
          alerts: '20',
          winRate: '85%',
          yield: '11%',
          contestantName: 'Leo Kenter',
          isVerified: false,
          cashBalance: "+ $2,550",
          percentage: '18%',
          pictureFileName: 'profile-image-polygon-5',
          backgroundColor: BackgroundColor.HOT_BEIGE
        },
        {
          alerts: '20',
          winRate: '85%',
          yield: '11%',
          contestantName: 'Marcus Dias',
          isVerified: false,
          cashBalance: "+ $1,000",
          percentage: '10%',
          pictureFileName: 'profile-image-polygon-6',
          backgroundColor: BackgroundColor.LIGHT_BEIGE
        }
      ],
      xBitsPrize: '15,000',
      shortName: 'Cristofer G.',
      login: '@mrcisrich',
      days: '7',
      isContestAvailable: true
    }
  ];

}
