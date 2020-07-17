import { Injectable } from '@angular/core';
import { ISocialMediaIcon, SocialMediaIcon } from './social-media-icon/social-media-icon.model';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor() { } 

  getIcon(socialMedia: string, socialMediaUrl: string): ISocialMediaIcon {
    const icons = {
      'facebook': this.socialMediaIcon('facebook', socialMediaUrl),
      'instagram': this.socialMediaIcon('instagram', socialMediaUrl),
      'twitter': this.socialMediaIcon('twitter', socialMediaUrl),
      'github': this.socialMediaIcon('github', socialMediaUrl),
      'medium': this.socialMediaIcon('medium', socialMediaUrl),
      'skype': this.socialMediaIcon('skype', socialMediaUrl),
      'linkedin': this.socialMediaIcon('linkedin', socialMediaUrl),
      'youtube': this.socialMediaIcon('youtube', socialMediaUrl),
      'slack': this.socialMediaIcon('slack', socialMediaUrl)
    };
    
    return icons[socialMedia];
  }

  socialMediaIcon(name: string, navigateToUrl: string): ISocialMediaIcon {
    return new SocialMediaIcon(undefined, navigateToUrl, name, undefined, undefined);
  }

}
