import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerSortComponent } from './burger-sort.component';

describe('BurgerSortComponent', () => {
  let component: BurgerSortComponent;
  let fixture: ComponentFixture<BurgerSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BurgerSortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BurgerSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
