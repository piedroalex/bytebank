import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 100;
  destino: number = 25;

  transferir() {
    console.log('Solicitada nova transferência');
    //console.log('Valor: ', this.valor);
    //console.log('Destino:', this.destino);
    this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
