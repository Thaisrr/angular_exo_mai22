import {Pipe, PipeTransform} from '@angular/core';
import {Game} from "../models/Game";
import {GameFilter} from "../enums/GameFilter";

@Pipe({
  name: 'gamesFilter'
})
export class GamesFilterPipe implements PipeTransform {

  transform(value: Game[], filter: GameFilter): Game[]{
    if(filter === GameFilter.ALL) return value;
    if(filter === GameFilter.FINISHED) {
      return value.filter(g => g.status);
    } else {
      return value.filter(g => !g.status);
    }
    // Version rapide mais - lisible :
    //return value.filter(g => g.status === (filter === GameFilter.FINISHED));
  }

}
