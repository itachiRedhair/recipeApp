import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeNewFormComponent } from './recipe-new-form.component';

describe('RecipeNewFormComponent', () => {
  let component: RecipeNewFormComponent;
  let fixture: ComponentFixture<RecipeNewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeNewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeNewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
