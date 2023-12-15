import {Component, Input} from '@angular/core';
import {CompetitionTypeConfig, ContestantCardConfig} from "../competition-type/competition-type-config";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contestant-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './contestant-card.component.html',
  styleUrl: './contestant-card.component.scss'
})
export class ContestantCardComponent {
  @Input() contestant: ContestantCardConfig | undefined;

}
