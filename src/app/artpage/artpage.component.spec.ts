import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtpageComponent } from './artpage.component';

describe('ArtpageComponent', () => {
  let component: ArtpageComponent;
  let fixture: ComponentFixture<ArtpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
