import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClicksComponent } from './details-clicks.component';

describe('DetailsClicksComponent', () => {
  let component: DetailsClicksComponent;
  let fixture: ComponentFixture<DetailsClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsClicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
