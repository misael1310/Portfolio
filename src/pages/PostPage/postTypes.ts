export type Media = {
  [k in breakPoints]: string;
};

export type breakPoints = 'initial' | 'sm' | 'md' | 'lg' | 'xl';

export interface BannerSection {
  bannerBackground: string;
  bannerPicture: string;
  bannerAlt: string;
  bannerSources: Media;
}

export interface PostPageData extends BannerSection {
  idpost: number;
  post_title: string;
  post_content: string;
}
