import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  //TODO make eventName and eventDescription user defined.
  eventName: string = 'Insomnia XXIII';
  eventDescription: string = 'Verkkopelitapahtuma Insomnia XXIII toteutetaan Porin Karhuhallissa opiskelijoiden syyslomaviikolla.';
}
