import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: any = [
    {
      name: 'Gutierritoz'
    },
    {
      name: 'Kharenzita'
    },
    {
      name: 'Gustavo Madera'
    },
    {
      name: 'Lalo Landa'
    },
    {
      name: 'Victor Iturbe'
    },
    {
      name: 'Pepitho'
    },
    {
      name: 'Beni Benito'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
