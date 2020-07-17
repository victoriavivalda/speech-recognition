import { Injectable } from '@angular/core';

// Speech recognition library documentation: https://github.com/TalAter/annyang/blob/master/docs/FAQ.md
import * as annyang from 'annyang';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  configure(onCaptureFullTextSpoken, commands) {
    annyang.addCallback('result', onCaptureFullTextSpoken);
    annyang.addCommands(commands);
    annyang.start();
  }

  constructor() { }
}
