import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersListComponent } from './others-list.component';

describe('OthersListComponent', () => {
  let component: OthersListComponent;
  let fixture: ComponentFixture<OthersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OthersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OthersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
