import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //TODO Make these both configurable by an admin
  title = 'Verkkopeliyhdistys Insomnia ry';
  subtitle =  'Make things right!';
}
