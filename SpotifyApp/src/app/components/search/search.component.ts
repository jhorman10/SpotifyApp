import { Component, OnInit } from '@angular/core';
import { SpotityService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {


  artistas:any[]=[];

  constructor(private spotify: SpotityService) { }

  ngOnInit() {
  }
  buscar(termino:string){
    
    this.spotify.getArtista( termino )
    .subscribe((data:any)=>{
    this.artistas=data;
    });
  }

}
