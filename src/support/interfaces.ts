export interface ITools {
  [key: string]: string;
  kitYellow: string;
  colorGreen: string;
  colorRed: string;
  colorPurple: string;
  colorBlue: string;
  colorWhite: string;
  colorBlack: string;
  colorPink: string;
}

export interface IChecker {
  [key: string]: string|Array<string>;
  name: string;
  slug: string;
  values: Array<string>;
}

export interface IDrawPayload {
  [key: string]: string|number;
  slug: string;
  index: number;
}
