import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {

  title: String = 'Calculadora';

  displayValue: String = '0';
  isReadOnly: Boolean = true;

  private firstOperand: number | null = null;
  private operator: string | null = null;
  private waitingForSecondOperand: boolean = false;

  pressDigit(digit: string): void {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }

  setOperator(op: String): void {
    if(this.firstOperand === null) {
      this.firstOperand = parseFloat(this.displayValue as string);
    } else if (this.operator) {
      const result = this.calculateResult();
      this.displayValue = String(result);
      this.firstOperand = result;
    }
    this.operator = op as string;
    this.waitingForSecondOperand = true;
  }

  calculate(): void {
    if (this.operator && this.firstOperand !== null) {
      const result = this.calculateResult();
      this.displayValue = String(result);
      this.firstOperand = result;
      this.operator = null;
      this.waitingForSecondOperand = false;
    }
  }

  private calculateResult(): number {
    const secondOperand = parseFloat(this.displayValue as string);
    if(this.operator === '+') {
      return (this.firstOperand ?? 0) + secondOperand;
    } else if(this.operator === '-') {
      return (this.firstOperand ?? 0) - secondOperand;
    }
    return secondOperand;
  }

  clear(): void {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondOperand = false;
  }
}
