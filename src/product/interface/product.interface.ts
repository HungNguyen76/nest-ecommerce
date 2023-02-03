export enum TypeProduct {
  Jordan = 'Jordan',
  Basketball = 'Basketball',
  Tennis = 'Tennis',
}

export interface IImgProduct {
  url: string;
}

export interface ISize {
  size: string;
  quantity: number;
}

export interface IColors {
  id?: string;
  img: IImgProduct[];
  sizes: ISize[];
  price: number;
}
