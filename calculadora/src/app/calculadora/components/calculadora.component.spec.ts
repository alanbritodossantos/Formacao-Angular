import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import{ By } from '@angular/platform-browser';
import { CalculadoraComponent } from './calculadora.component';
import { CalculadoraService } from '../services';
import { by } from 'protractor';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
     TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ],
      providers:[
        CalculadoraService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve garantir que 3 + 2 = 5',() => {
    let btn3 = fixture.debugElement.query(By.css('#btn3'));
    let btnSoma = fixture.debugElement.query(By.css('#btnSoma'));
    let btn2 = fixture.debugElement.query(By.css('#btn2'));
    let btnCalcular = fixture.debugElement.query(By.css('#btnCalcular'));
    let display = fixture.debugElement.query(By.css('#display'));

    //Clique no botão 3
    btn3.triggerEventHandler('click',null);
    fixture.detectChanges();//detecta ação

    //clique no botão soma
    btnSoma.triggerEventHandler('click',null);
    fixture.detectChanges();

    //clique no botão 2
    btn2.triggerEventHandler('click',null);
    fixture.detectChanges();

    //clique no botão '='
    btnCalcular.triggerEventHandler('click',null);
    fixture.detectChanges();

    expect(display.nativeElement.value).toEqual('5');
  });




});
