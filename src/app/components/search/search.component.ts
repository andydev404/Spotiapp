import { Component, OnInit } from '@angular/core';

import {MusicaService} from "../../services/musica.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor(public _MusicaService:MusicaService) { }

  ngOnInit() {
  }

  artistName:string = "";
  getArtist(){
    this._MusicaService.getArtistas(this.artistName).subscribe();
  }

}
