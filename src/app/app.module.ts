import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SpeechRecognitionModule } from './speech-recognition/speech-recognition.module';
import { SharedModule } from './shared/shared.module';
import { PhonemicComponent } from './phonemic/phonemic.component';
import { SocialMediaModule } from '@victoriavivalda/social-media';

@NgModule({
  declarations: [AppComponent, PhonemicComponent],
  imports: [BrowserModule, HttpClientModule, AngularFontAwesomeModule, SharedModule, SpeechRecognitionModule, SocialMediaModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
