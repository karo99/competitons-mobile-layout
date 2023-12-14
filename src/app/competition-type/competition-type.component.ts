import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {ContestantCardComponent} from "../contestant-card/contestant-card.component";

@Component({
  selector: 'app-competition-type',
  standalone: true,
  imports: [
    NgIf,
    ContestantCardComponent
  ],
  templateUrl: './competition-type.component.html',
  styleUrl: './competition-type.component.scss'
})
export class CompetitionTypeComponent {

}
