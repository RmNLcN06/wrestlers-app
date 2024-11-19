import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsWrestlerComponent } from './details-wrestler.component';

describe('DetailsWrestlerComponent', () => {
  let component: DetailsWrestlerComponent;
  let fixture: ComponentFixture<DetailsWrestlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsWrestlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsWrestlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
