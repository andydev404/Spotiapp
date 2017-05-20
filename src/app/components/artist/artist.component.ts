import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import {MusicaService} from "../../services/musica.service";


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private _parametro:ActivatedRoute, private _servicio:MusicaService) { }

  artista:any;
  top:any;
  ngOnInit() {
    this._parametro.params.map(parametros => parametros['id']).subscribe(id => {
      this._servicio.getArtista(id).subscribe(data => {this.artista = data;});
    });
    
    this._parametro.params.map(parametros => parametros['id']).subscribe(id => {
      this._servicio.getTop(id).subscribe(data => {this.top = data; console.log(this.top )});
    });
    
  }

}
