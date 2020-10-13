import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b1tl',
  templateUrl: './b1tl.component.html',
  styleUrls: ['./b1tl.component.css']
})
export class B1tlComponent implements OnInit {

  constructor() { }
  s=0;
  n: any;
  x: any;
  ngOnInit(): void {

  }
  tinh(){
    for(let i=1;i<=this.n;++i){
      this.s += Math.pow(this.x,i);
    }
  }
}
