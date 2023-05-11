import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //TODO Make these both configurable by an admin
  title = 'Verkkopelitapahtuma Insomnia';
  subtitle =  'Porin Karhuhallissa 26.10. - 29.10.2023';
}
