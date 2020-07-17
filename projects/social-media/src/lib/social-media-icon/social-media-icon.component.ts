import { Component, OnInit, Input } from '@angular/core';
import { ISocialMediaIcon } from './social-media-icon.model';
import { SocialMediaService } from '../social-media.service';

@Component({
  selector: 'lib-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styles: [' .text-center { text-align: center; } ']
})
export class SocialMediaIconComponent implements OnInit {
  icon: ISocialMediaIcon;
  @Input() name: string;
  @Input() url: string;

  constructor(private socialMediaService: SocialMediaService) { }

  ngOnInit() {
    this.icon = this.socialMediaService.getIcon(this.name, this.url);
  }

}
