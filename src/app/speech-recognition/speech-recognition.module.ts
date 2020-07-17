import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechRecognitionComponent } from './speech-recognition.component';
import { SocialMediaModule } from '@victoriavivalda/social-media';

@NgModule({
  imports: [
    CommonModule,
    SocialMediaModule
  ],
  exports: [SpeechRecognitionComponent],
  declarations: [SpeechRecognitionComponent]
})
export class SpeechRecognitionModule { }
