import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styles: []
})
export class TargetasComponent implements OnInit {

  
  @Input() items: any[]=[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verArtista(item:any) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    }else {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistaId]);
  }
    
}
