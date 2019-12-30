import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceUpdateComponent } from './conference-update.component';

describe('ConferenceUpdateComponent', () => {
  let component: ConferenceUpdateComponent;
  let fixture: ComponentFixture<ConferenceUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
