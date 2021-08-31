import { Component, OnInit } from '@angular/core';
import { DesignTile } from '../picture-tile';

@Component({
  selector: 'app-designpage',
  templateUrl: './designpage.component.html',
  styleUrls: ['./designpage.component.css']
})
export class DesignpageComponent implements OnInit {
  tiles = DesignTile;
  constructor() { }

  ngOnInit(): void {
  }

}
