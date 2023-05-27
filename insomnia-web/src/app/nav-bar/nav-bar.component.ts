import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  //TODO Make title user configurable
  
  title:string = ''

  getTitle() {}
  setTitle(title:string) { 
    return this.title = title;
  }
}
