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
      'Authorization': 'Bearer BQBAsFmZuZk1YbDx-E7uGgd4jwsa_1fQ4R-IERPx4Ow6BDfRB2vSyn3kStRoB53CGLGkEmvMJj7ZX6JrCpc'
    });

    return this.http.get(URL, {headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data=>data['albums'].items));
                
  }

  getArtista(termino:string){
   
    return this.getQuery(`search?query=${ termino }&type=artist&market=CO&offset=0&limit=15`)
                .pipe( map( data => data['artists'].items));

  }
}
