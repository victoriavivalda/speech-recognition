import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  @Input() icons: any;

  constructor() { }

  ngOnInit() {
  }

}
