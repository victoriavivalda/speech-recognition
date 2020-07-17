import { Component, OnInit, NgZone } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SpeechRecognitionService } from './speech-recognition.service';

enum ExternalUrls {
  Api = 'https://api.chucknorris.io/jokes/random',
  Linkedin = 'https://www.linkedin.com/in/victoriavivalda/',
  Github = 'https://github.com/vickui'
}

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.scss']
})
export class SpeechRecognitionComponent implements OnInit {
  phrases = [];
  jokes: Observable<{}>;
  icons: any;

  commands = {
    hello: () => {
      alert('Hey there, high five!');
    },
    'search API': () => this.callJokes(),
    'clear result': () => this.clearJokes(),
    linkedin: () => this.goToExternalSite(ExternalUrls.Linkedin),
    github: () => this.goToExternalSite(ExternalUrls.Github)
  };

  constructor(private ngZone: NgZone, private httpClient: HttpClient, private speechRecognitionService: SpeechRecognitionService) { }

  ngOnInit() {
    this.icons = [
      { name: "linkedin", url: "https://www.linkedin.com/in/victoriavivalda/" },
      { name: "github", url: "https://github.com/vickui" }
    ];

    this.speechRecognitionService.configure(
      phrases => {
        this.setUserSpeech(phrases);
      },
      this.commands
    );
  }

  private setUserSpeech(recognizedSpeech: string[]) {
    this.ngZone.run(() => {
      this.phrases = recognizedSpeech;
    });
  }

  private callJokes() {
    this.ngZone.run(async () => {
      this.jokes = this.httpClient.get(ExternalUrls.Api);
    });
  }

  private clearJokes() {
    this.ngZone.run(() => {
      this.jokes = null;
    });
  }

  private goToExternalSite(externalSiteUrl: string) {
    window.open(externalSiteUrl, '_blank');
  }
}
