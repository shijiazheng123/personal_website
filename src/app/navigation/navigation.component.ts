import { Component, OnInit, HostListener } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  url;
  innerWidth;
  constructor(private router: Router) {
    router.events.subscribe(
      (link) =>
      {
        this.url = window.location.pathname;
      }
    );
  }

  ngOnInit(): void {
    this.url = window.location.pathname;
    this.innerWidth = window.innerWidth;
  }
  displayMenu(): void {
    if (this.innerWidth <= 800){
      const options = document.getElementById('NavBar-Options');
      options.style.display = options.style.display === 'none' ? 'flex' : 'none';
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth > 800){
      document.getElementById('NavBar-Options').style.display = 'flex';
    }else{
      document.getElementById('NavBar-Options').style.display = 'none';
    }
  }

}
