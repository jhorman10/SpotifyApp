import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotityService {

  constructor(private http:HttpClient) { 
    console.log('SpotifyService listo!');
  }

  getQuery( query: string){

    const URL =`https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCN-NKY6GJkUY3IgHAnnibC1CkDDDjuUvE5TGuK0ZWB3HhbTc-d5p_fuFP_SVC_R3w6dKpVyhI26PsI8LA"
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data=>data['albums'].items));
                
  }

  getArtistas(termino:string){
   
    return this.getQuery(`search?query=${ termino }&type=artist&market=CO&offset=0&limit=15`)
                .pipe( map( data => data['artists'].items));

  }

  getArtista(id: string) {

    return this.getQuery(`artists/${ id }`);

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map( data=> data['tracks']));
  }
}
