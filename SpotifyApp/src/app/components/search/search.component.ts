import { Component, OnInit } from '@angular/core';
import { SpotityService } from './../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {


  artistas:any[]=[];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private spotify: SpotityService) { }

  ngOnInit() {
  }
  buscar(termino:string){
    
    this.loading=true;
    this.spotify.getArtistas( termino )
    .subscribe((data:any)=>{
    this.artistas=data;
    this.loading=false;
    },(erroServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = erroServicio.error.error.message;

    });
  }

}
