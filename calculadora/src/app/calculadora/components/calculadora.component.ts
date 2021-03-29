import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) {

  }
// metodo chamado primeiro nessa classe
  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa todos operadores para os valores padrão.
   *
   * @return void
   */

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  /**
   * Adicionar o número selecionando para cálculo posteriormente.
   *
   * @param string numero
   * @return void
   */

  adicionarNumero(numero:string): void {
    if(this.operacao === null) {// se a operação estiver vazia entre
      this.numero1 = this.concatenarNumero(this.numero1, numero);

    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna o valor do concatenado. Trata o separador decimal.
   *
   * @param string numAtual
   * @param string numConcat
   * @return string
   */

  concatenarNumero(numAtual:string, numConcat:string): string{
    //caso contenha apenas '0' ou 'null', reinicia o valor
    if(numAtual ==='0'|| numAtual=== null){
      numAtual = '';
    }
    //primeiro digito é '.', concatena '0' antes do ponto
    if(numConcat ==='.' && numAtual ===''){
      return '0.';
    }

    //caso '.' digitado e já contenha um '.', apenas retorna
    if(numConcat==='.' && numAtual.indexOf('.') > -1){
      return numAtual;
    }

    return numAtual+numConcat;
  }

  /**
   * Executa lógica quando um operador for selecionado.
   * Caso já possua uma operação selecionada, executa a
   * operação anteior, e define a nova operação.
   *
   * @param string operacao
   * @return void
   */

  definirOperacao(operacao:string):void {
    //apenas definir a operação caso não exista uma
    if(this.operacao ===null){
      this.operacao = operacao;
      return;
    }
    /* Caso operação definida e número 2 selecionado,
        efetua o cálculo da operação */
     if(this.numero2 !==null){
      this.resultado = this.calculadoraService.calcular(
          parseFloat(this.numero1),
          parseFloat(this.numero2),
          this.operacao);

          this.operacao = operacao;
          this.numero1 = this.resultado.toString();
          this.numero2 = null;
          this.resultado = null;
     }
  }

  /**
   * Efetua o cálculo de uma operação.
   *
   * @return void
   */

   calcular(): void{
     if(this.numero2 ===null){
       return;
     }

     this.resultado = this.calculadoraService.calcular(
       parseFloat(this.numero1),
       parseFloat(this.numero2),
       this.operacao);
   }

   /**
    * Retorna o valor a ser exibido na tela da calculadora.
    *
    * @return string
    */

   get display(): string{// get display é uma convensão do typescript, vai gera um atributo de classe chamado display e ele cria um acessor GET para esse display
     if(this.resultado !== null){
       return this.resultado.toString();
     }
     if(this.numero2 !==null){
       return this.numero2;
     }
     return this.numero1;
   }


}
