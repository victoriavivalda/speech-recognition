import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SocialMediaComponent } from './social-media.component';
import { SocialMediaIconComponent } from './social-media-icon/social-media-icon.component';

@NgModule({
  imports: [
    CommonModule,
    AngularFontAwesomeModule
  ],
  exports: [SocialMediaComponent, SocialMediaIconComponent],
  declarations: [SocialMediaComponent, SocialMediaIconComponent]
})
export class SocialMediaModule { }
