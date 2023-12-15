import {Component, Input} from '@angular/core';
import {BackgroundColor, ContestantCardConfig} from "../competition-type/competition-type-config";
import {NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-contestant-card',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    NgStyle
  ],
  templateUrl: './contestant-card.component.html',
  styleUrl: './contestant-card.component.scss'
})
export class ContestantCardComponent {
  @Input() contestant: ContestantCardConfig | undefined;
  @Input() index: number = 0;
  public backgroundColor: typeof BackgroundColor = BackgroundColor

  get isBalanceNegative(): boolean {
    return this.contestant?.cashBalance.includes('-') ?? false;
  }

  public getSuffix(index: number): string {
    switch (index) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
}
