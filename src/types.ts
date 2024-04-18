export interface wineDataTypes {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number | string;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number | string;
  "Nonflavanoid phenols": number;
  Proanthocyanins: number;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": number;
  Unknown: number;
}

export interface GroupedData {
  [key: string]: {
    Alcohol: number;
    Ash: number | string;
    Magnesium: number;
    Flavanoids: number | string;
    Proanthocyanins: number | string;
    Hue: number;
    Unknown: number;
  }[];
}

export interface WineData {
  Alcohol: number;
  Ash: number | string;
  Magnesium: number;
  Flavanoids: number | string;
  Proanthocyanins: number | string;
  Hue: number;
  Unknown: number;
}
