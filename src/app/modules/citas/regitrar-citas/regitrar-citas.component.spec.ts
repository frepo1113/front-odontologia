import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitrarCitasComponent } from './regitrar-citas.component';

describe('RegitrarCitasComponent', () => {
  let component: RegitrarCitasComponent;
  let fixture: ComponentFixture<RegitrarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitrarCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitrarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
