import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b6tl',
  templateUrl: './b6tl.component.html',
  styleUrls: ['./b6tl.component.css']
})
export class B6tlComponent implements OnInit {

  constructor() { }
  public tongduong(n: number[]){
    let s = 0;
  for (let i = 0; i < n.length; i++){
  if (n[i] >= 0){
    s += n[i];
  } else continue;
  }return s;
  }
  tong = 0;
  // tslint:disable-next-line: semicolon
  dayso = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ngOnInit(): void {
        this.tong = this.tongduong(this.dayso);
    }
}
