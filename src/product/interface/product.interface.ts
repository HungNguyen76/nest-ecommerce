export enum TypeProduct {
  Jordan = 'Jordan',
  Basketball = 'Basketball',
  Tennis = 'Tennis',
}

export interface ISize {
  size: string;
  quantity: number;
}

export interface IColors {
  id?: string;
  img: string[];
  sizes: ISize[];
  price: number;
}
