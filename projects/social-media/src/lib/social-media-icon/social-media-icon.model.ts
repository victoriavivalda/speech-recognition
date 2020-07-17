export interface ISocialMediaIcon {
    stylesClass: string;
    navigateToUrl: string;
    angularfontAwesomeIconName: string;
    angularfontAwesomeIconSize: string;
    noIconText: string;
}

export class SocialMediaIcon implements ISocialMediaIcon {
    constructor(
        public stylesClass: string = "text-center",
        public navigateToUrl: string, 
        public angularfontAwesomeIconName: string,
        public angularfontAwesomeIconSize: string = "lg",
        public noIconText: string = "Find us on " + angularfontAwesomeIconName   
    ) {}
}
 