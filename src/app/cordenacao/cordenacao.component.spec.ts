import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordenacaoComponent } from './cordenacao.component';

describe('CordenacaoComponent', () => {
  let component: CordenacaoComponent;
  let fixture: ComponentFixture<CordenacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordenacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordenacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
