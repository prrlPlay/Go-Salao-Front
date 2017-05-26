import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent {

  @Input() mostrarErro: boolean = false;
  @Input() mgsErro: string = '';

  constructor() { }
}