export interface wineDataTypes {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number;
  "Nonflavanoid phenols": number;
  Proanthocyanins: string | number;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": number;
  Unknown: number;
}

export interface GroupedData {
  [key: string]: {
    Alcohol: number;
    Ash: number | string; // Adjusted to allow both numbers and strings
    Magnesium: number;
    Flavanoids: string | number;
    Proanthocyanins: number | string;
    Hue: number;
    Unknown: number;
  }[];
}
