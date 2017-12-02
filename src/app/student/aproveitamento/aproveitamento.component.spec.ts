import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveitamentoComponent } from './aproveitamento.component';

describe('AproveitamentoComponent', () => {
  let component: AproveitamentoComponent;
  let fixture: ComponentFixture<AproveitamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveitamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveitamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
