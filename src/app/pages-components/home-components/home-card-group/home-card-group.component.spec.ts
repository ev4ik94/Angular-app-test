import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardGroupComponent } from './home-card-group.component';

describe('HomeCardGroupComponent', () => {
  let component: HomeCardGroupComponent;
  let fixture: ComponentFixture<HomeCardGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCardGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
