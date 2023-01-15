import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialApproveComponent } from './material-approve.component';

describe('MaterialApproveComponent', () => {
  let component: MaterialApproveComponent;
  let fixture: ComponentFixture<MaterialApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
