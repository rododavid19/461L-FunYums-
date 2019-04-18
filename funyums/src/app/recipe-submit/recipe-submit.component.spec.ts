import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSubmitComponent } from './recipe-submit.component';



describe('RecipeSubmitComponent', () => {
  let component: RecipeSubmitComponent;
  let fixture: ComponentFixture<RecipeSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

