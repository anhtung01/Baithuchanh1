import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b2tl',
  templateUrl: './b2tl.component.html',
  styleUrls: ['./b2tl.component.css']
})
export class B2tlComponent implements OnInit {
  constructor() { }

  public s=0;
  public n: any;
  public x: any;
  ngOnInit(): void {

  }
  tinh(){
    let tmp=1;
    for(let i=1;i<=this.n;++i){
        this.s= this.s+ (Math.pow(-1,i))*(Math.pow(this.x,i)/lythua(i));
    }
  }

}
function lythua(a: number) {
  let lythua=1;
  for (let i = 1; i <=a; i++) {
    lythua*=i;
  }
  return lythua;
}
