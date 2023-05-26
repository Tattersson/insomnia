import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent {

  val: string = "Insomniafi";
  sourceType: string = "profile";

  data!:any;

  public getValues(){
    this.data = {sourceType: this.sourceType, url: this.val};
    console.log("Getting Twitter Feed Values");
  }

}
