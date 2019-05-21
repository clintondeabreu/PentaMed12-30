import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskfactorComponent } from './riskfactor.component';

describe('RiskfactorComponent', () => {
  let component: RiskfactorComponent;
  let fixture: ComponentFixture<RiskfactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskfactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskfactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
