import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  personas = Array(5000).fill('En un lugar de la mancha de cuyo nombre no quiero acordarme...');

  constructor() { }

  ngOnInit(): void {

    console.log(this.personas);
  }

}
