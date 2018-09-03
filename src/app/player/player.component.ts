import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {PlayerService} from '../../../services/player.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerComponent implements OnInit {

  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      team: {
        title: 'Team'
      },
      position: {
        title: 'Position'
      },
      market_value: {
        title: 'Market Value'
      }
    },
    actions: { edit: false, delete: false, columnTitle: '', add: false },
    pager: { display: false }
  };

  players: any;
  constructor(private http: HttpClient, private router: Router, private _data: PlayerService) { }

  ngOnInit() {
    this._data.getPlayers().subscribe(data => {
      this.players= data;
        },
        error => {
          console.error(error);
        }
    );;

  }

}
