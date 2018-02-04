import { Component } from '@angular/core';
import { WatsonService } from './services/watsonService.service';
import { Watson } from './models/watson';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  input = '';
  watson: Observable<Watson>;
  watsonObject: Watson;
  url = '';
  tone_id = '';
    anger = 'https://open.spotify.com/embed/user/enochtaangg/playlist/3MXfQQtHqCXx676Zmtvmqn'
    analytical = 'https://open.spotify.com/embed/user/enochtaangg/playlist/1qqCvNVL9kyNUOgM5phoR3'
    confident = 'https://open.spotify.com/embed/user/enochtaangg/playlist/5ZOH0oqGX72Eg7pl7KfRYG'
    sad = 'https://open.spotify.com/embed/user/enochtaangg/playlist/4mz1T5PXo77pTUeRcq5wgX'
    fear = 'https://open.spotify.com/embed/user/enochtaangg/playlist/1K8xqqgy4usxM61aFQHqX0'
    joy = 'https://open.spotify.com/embed/user/enochtaangg/playlist/4ENsvFFoXRKO5F4c3v1k7F'

  constructor( private watsonService: WatsonService, public sanitizer: DomSanitizer ) { }

  postWatson(body: string) {
    this.watson = this.watsonService.postWatson(body);
  this.watson.subscribe(res => this.watsonObject = Object.assign({}, res));


      setTimeout(() => console.log(this.watsonObject.document_tone.tones[0].tone_name), 1000)

      setTimeout(() => {if (this.watsonObject.document_tone.tones[0].tone_id == 'sadness') {
         this.url = this.sad;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'anger') {
         this.url = this.anger;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'analytical') {
         this.url = this.analytical;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'confident') {
         this.url = this.confident;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'fear') {
         this.url = this.fear;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'joy') {
         this.url = this.joy;
       } else if (this.watsonObject.document_tone.tones[0].tone_id == 'tentative') {
         this.url = this.analytical;
       } else {
         this.url = this.joy
       }}, 1000);



    }




  onClickSubmit() {
    this.postWatson(this.input);
  }

}
