import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDefaultDetailsComponent } from './recipe-default-details.component';

describe('RecipeDefaultDetailsComponent', () => {
  let component: RecipeDefaultDetailsComponent;
  let fixture: ComponentFixture<RecipeDefaultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDefaultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDefaultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
