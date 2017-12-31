import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHomeComponent } from './grid-home.component';

describe('GridHomeComponent', () => {
  let component: GridHomeComponent;
  let fixture: ComponentFixture<GridHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
