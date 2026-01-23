import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autentica } from './autentica';

describe('Autentica', () => {
  let component: Autentica;
  let fixture: ComponentFixture<Autentica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Autentica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Autentica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
