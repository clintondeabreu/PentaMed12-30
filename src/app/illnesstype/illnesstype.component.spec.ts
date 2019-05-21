import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IllnesstypeComponent } from './illnesstype.component';

describe('IllnesstypeComponent', () => {
  let component: IllnesstypeComponent;
  let fixture: ComponentFixture<IllnesstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IllnesstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IllnesstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
