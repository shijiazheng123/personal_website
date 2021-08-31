import { Component, OnInit } from '@angular/core';
import {ArtTile} from '../picture-tile';

@Component({
  selector: 'app-artpage',
  templateUrl: './artpage.component.html',
  styleUrls: ['./artpage.component.css']
})
export class ArtpageComponent implements OnInit {
  tiles = ArtTile;
  constructor() { }

  ngOnInit(): void {
  }

}
