import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotityService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista:any = {};

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, 
              private spotify:SpotityService) {

    this.loadingArtist= true;

    this.router.params.subscribe( params => {
      
      this.getArtista (params['id']);

    });
   }

   getArtista( id:string ) {

     this.loadingArtist = true;

      this.spotify.getArtista( id )
            .subscribe ( artista => {
              console.log(artista);
              this.artista = artista;

              this.loadingArtist = false;
            } )
   }

  

}
