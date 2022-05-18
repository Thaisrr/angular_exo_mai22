import {Component} from '@angular/core';
import {Game} from "./utils/models/Game";
import {GameFilter} from "./utils/enums/GameFilter";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games: Game[] = [
    {title : 'Child of Life', author: 'Ubisoft', status: true, image: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ChildOfLightUltimateEdition_image1600w.jpg'},
    {title : 'The Witcher', author: 'CD Project', status: false, image: 'https://sysrqmts.com/images/games/the-witcher-3-wild-hunt.jpg'},
    {title : 'Ori and the blind forest', author: 'Moon', status: true, image: 'https://www.gameaccessibilitynexus.com/wp-content/uploads/2020/02/Ori-BF-Header.jpg'},
    {title : 'Horizon Zero Dawn', author: 'Guerilla', status: false, image: 'https://static.lpnt.fr/images/2017/02/28/7226797lpw-7233747-article-jpg_4123748_1250x625.jpg'},
  ];

  viewForm = false;
  filter: GameFilter = GameFilter.ALL;

  addGame(game: Game) {
    this.games.unshift(game);
  }

  changeView(filter: 'ALL' | 'FINISHED' | 'NOT' | 'form' ) {
    this.viewForm = (filter === 'form');
    if(filter !== 'form') {
      this.filter = GameFilter[filter];
    }
  }


}
