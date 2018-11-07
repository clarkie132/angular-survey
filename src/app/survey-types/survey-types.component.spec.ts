import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTypesComponent } from './survey-types.component';

describe('SurveyTypesComponent', () => {
  let component: SurveyTypesComponent;
  let fixture: ComponentFixture<SurveyTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
