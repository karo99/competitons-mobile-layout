import { Component } from '@angular/core';
import {CompetitionTypeComponent} from "../competition-type/competition-type.component";

@Component({
  selector: 'app-competition-page',
  standalone: true,
  imports: [
    CompetitionTypeComponent
  ],
  templateUrl: './competition-page.component.html',
  styleUrl: './competition-page.component.scss'
})
export class CompetitionPageComponent {

}
