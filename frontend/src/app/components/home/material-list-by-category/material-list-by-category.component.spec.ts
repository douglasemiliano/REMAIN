import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListByCategoryComponent } from './material-list-by-category.component';

describe('MaterialListByCategoryComponent', () => {
  let component: MaterialListByCategoryComponent;
  let fixture: ComponentFixture<MaterialListByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialListByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialListByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
