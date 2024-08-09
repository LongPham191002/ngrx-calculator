import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addDigit,
  addOperation,
  calculate,
  clear, cosine, cotangent,
  exponentiate,
  logarithm,
  sine, tangent
} from '../ngrx/calculator/calculator.actions';
import { selectDisplay } from '../ngrx/calculator/calculator.state';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  display$: Observable<string>;

  constructor(private store: Store) {
    this.display$ = this.store.select(selectDisplay);
  }

  onDigit(digit: string) {
    this.store.dispatch(addDigit({ digit }));
  }

  onOperation(operation: string) {
    this.store.dispatch(addOperation({ operation }));
  }

  onCalculate() {
    this.store.dispatch(calculate());
  }

  onClear() {
    this.store.dispatch(clear());
  }

  onExponentiate() {
    this.store.dispatch(exponentiate());
  }

  onLogarithm() {
    this.store.dispatch(logarithm());
  }

  onSine() {
    this.store.dispatch(sine());
  }

  onCosine() {
    this.store.dispatch(cosine());
  }

  onTangent() {
    this.store.dispatch(tangent());
  }

  onCotangent() {
    this.store.dispatch(cotangent());
}
}
