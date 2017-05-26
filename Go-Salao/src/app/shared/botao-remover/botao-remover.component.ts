import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'botao-remover',
  templateUrl: './botao-remover.component.html',
  styleUrls: ['./botao-remover.component.css']
})
export class BotaoRemoverComponent {

  @Input() nome: string = '';;
  @Input() estilo: string = 'btn-default';
  @Input() tipo: string = 'button';
  @Input() desabilitado: boolean = false;
  @Input() icone: boolean = false;
  @Output() acao = new EventEmitter();

  executarAcao() {

    if (confirm('Deseja realmente excluir?')) {
      this.acao.emit(null);
    }
  }
}