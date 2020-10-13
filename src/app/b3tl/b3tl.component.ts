import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b3tl',
  templateUrl: './b3tl.component.html',
  styleUrls: ['./b3tl.component.css']
})
export class B3tlComponent implements OnInit {

  constructor() { }
  s = [{hoten:'Nguyen Duc tung',dthi:9.5},
  {hoten:'Vu Dinh Hoang',dthi:8.5},
  {hoten:'Pham Quang Hai',dthi:7.5}
  ];

  ngOnInit(): void {
  }

  Sort(){
    let catten = (s) => {
      let n =  s.lastIndexOf(' ');
      return s.substr(n+1) + ' ' + s.substr(0,n);
    }
    this.s.sort((a,b)=> {
    if(catten(a.hoten)>catten(b.hoten)) return 1;
    else if(catten(a.hoten)<catten(b.hoten)) return -1;
    return 0;
    })
  }
}
