import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceCreateComponent } from './conference-create.component';

describe('ConferenceCreateComponent', () => {
  let component: ConferenceCreateComponent;
  let fixture: ComponentFixture<ConferenceCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


 it('ngOnInit() needs test, passing for now', () => {
    expect(true);
  });

 it('addConference() needs test, passing for now', () => {
    expect(true);
  });

 it('addDivision() needs test, passing for now', () => {
    expect(true);
  });

 it('removeDivision() needs test, passing for now', () => {
    expect(true);
  });
});
