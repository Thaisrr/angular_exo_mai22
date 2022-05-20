import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from "../../utils/models/Game";
import {GameService} from "../../utils/services/game.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() changeEmit = new EventEmitter();
  @Input() game!: Game;

  constructor(private gameService: GameService) {}

  changeStatus(e: Event) {
    e.stopPropagation()
    this.game.status = !this.game.status;
    this.gameService.update(this.game).subscribe(res => {
      if(!res) this.game.status = !this.game;
      else this.changeEmit.emit();
    })
  }

  deleteGame(e: Event) {
    e.stopPropagation()
    if(this.game.id) {
      this.gameService.delete(this.game.id).subscribe(res => {
        if(res) this.changeEmit.emit();
      })
    }
  }


}
