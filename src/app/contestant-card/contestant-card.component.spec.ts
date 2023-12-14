import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestantCardComponent } from './contestant-card.component';

describe('ContestantCardComponent', () => {
  let component: ContestantCardComponent;
  let fixture: ComponentFixture<ContestantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContestantCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContestantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
