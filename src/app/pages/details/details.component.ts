import { Component, OnInit } from '@angular/core';
import {GameService} from "../../utils/services/game.service";
import {ActivatedRoute} from "@angular/router";
import {Game} from "../../utils/models/Game";
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  game?: Game;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame() {
    this.route.params.pipe(
      map(params => params['id']),
      switchMap(id => this.gameService.getById(id))
    ).subscribe(game => this.game = game);

  }


}
