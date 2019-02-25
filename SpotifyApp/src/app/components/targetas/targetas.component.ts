import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-targetas',
  templateUrl: './targetas.component.html',
  styles: []
})
export class TargetasComponent implements OnInit {

  
  @Input() items: any[]=[];

  constructor() { }

  ngOnInit() {
  }

}
