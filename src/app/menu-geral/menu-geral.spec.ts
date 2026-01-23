import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGeral } from './menu-geral';

describe('MenuGeral', () => {
  let component: MenuGeral;
  let fixture: ComponentFixture<MenuGeral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuGeral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuGeral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
