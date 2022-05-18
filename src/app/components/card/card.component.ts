import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../utils/models/Game";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() statusEmit = new EventEmitter();
  @Input() game!: Game;

  changeStatus() {
    // Fonctionne parce que c'est un objet : on a la référence de l'objet du tableau
    this.game.status = !this.game.status;

    // Si c'était un primitif : dans ce cas, il faut notifier le parent
   // this.statusEmit.emit();
  }


}
