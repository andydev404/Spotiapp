import { Injectable } from '@angular/core';

import {Http} from "@angular/http";

import "rxjs/add/operator/map";

@Injectable()
export class MusicaService {

  constructor(private http:Http) { }

  artistas:any[] = [];

urlBusqueda:string = "https://api.spotify.com/v1/search";

 getArtistas(termino:string){
    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url).map(res=>{ 
       this.artistas = res.json().artists.items;
    })
  }

  getArtista(id:any){
    let url = `https://api.spotify.com/v1/artists/${id}`;
    return this.http.get(url).map(res=>{
     return res.json();
    })
  }
  
  
  getTop(id:any){
    let url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`;
    return this.http.get(url).map(res=>{
     return res.json().tracks;
    })
  }

}
