import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-b4tl',
  templateUrl: './b4tl.component.html',
  styleUrls: ['./b4tl.component.css']
})
export class B4tlComponent implements OnInit {
  constructor() { }
  s =[{hoten: 'Nguyen Phu Tan', quequan: 'Cam Giang', diemthi:9},
  {hoten: 'Dinh Van hai', quequan: 'Hai Duong', diemthi:9.5},
  { hoten: 'Nguyen Duc Tung', quequan: 'Hai Duong', diemthi:8.3}
  ];
  rs:any [] =[];
  ngOnInit(): void {
  }
  Loc(){
    this.rs = this.s.filter(x=>x.diemthi>8);
  }
}
