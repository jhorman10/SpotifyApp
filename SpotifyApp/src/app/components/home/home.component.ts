import { Component, OnInit } from '@angular/core';
import { SpotityService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  nuevasCanciones:any[]=[];
  loading: boolean;

  constructor(private spotify: SpotityService) { 

    this.loading = true;

    this.spotify.getNewReleases()
          .subscribe((data: any) => {
            this.nuevasCanciones=data;
            this.loading = false;
          });

   }
}
