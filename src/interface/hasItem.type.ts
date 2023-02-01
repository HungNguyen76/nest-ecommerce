export interface IHasItem<T> {
  title: string;
  items: T[];
  news: T[];
}

export interface IImagesPopular {
  originalname: string;
  mimetype: string;
  size: number;
}
