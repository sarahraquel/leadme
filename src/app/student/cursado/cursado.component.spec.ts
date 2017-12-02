import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursadoComponent } from './cursado.component';

describe('CursadoComponent', () => {
  let component: CursadoComponent;
  let fixture: ComponentFixture<CursadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
