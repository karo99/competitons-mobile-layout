import {Component, Input} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ContestantCardComponent} from "../contestant-card/contestant-card.component";
import {CompetitionTypeConfig} from "./competition-type-config";

@Component({
  selector: 'app-competition-type',
  standalone: true,
  imports: [
    NgIf,
    ContestantCardComponent,
    NgForOf,
    NgStyle
  ],
  templateUrl: './competition-type.component.html',
  styleUrl: './competition-type.component.scss'
})
export class CompetitionTypeComponent {
  @Input() competition: CompetitionTypeConfig | undefined;




}
