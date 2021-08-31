import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingpageComponent } from './programmingpage.component';

describe('ProgrammingpageComponent', () => {
  let component: ProgrammingpageComponent;
  let fixture: ComponentFixture<ProgrammingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
