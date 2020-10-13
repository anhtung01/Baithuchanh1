import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b5tl',
  templateUrl: './b5tl.component.html',
  styleUrls: ['./b5tl.component.css']
})
export class B5tlComponent implements OnInit {

  arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  arrResult = [];

  constructor() { }

  ngOnInit(): void {
    this.arrResult = this.arrNum.filter(x => {
      let sq = Math.sqrt(x);
      return ((sq - Math.floor(sq)) == 0);
    });
  }

}

