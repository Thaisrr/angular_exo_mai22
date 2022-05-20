import { Component, OnInit } from '@angular/core';
import {Game} from "../../utils/models/Game";
import {GameFilter} from "../../utils/enums/GameFilter";
import {GameService} from "../../utils/services/game.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  newGame!: Game;
  games: Game[] = [];

  viewForm = false;
  filter: GameFilter = GameFilter.ALL;

  constructor(
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.getGames();
  }

  getGames() {
    this.gameService.getAll().subscribe(g => this.games = g );
  }

  changeView(filter: 'ALL' | 'FINISHED' | 'NOT' | 'form' ) {
    this.viewForm = (filter === 'form');
    if(filter !== 'form') {
      this.filter = GameFilter[filter];
    }
  }



}
