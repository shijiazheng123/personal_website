import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignpageComponent } from './designpage.component';

describe('DesignpageComponent', () => {
  let component: DesignpageComponent;
  let fixture: ComponentFixture<DesignpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
