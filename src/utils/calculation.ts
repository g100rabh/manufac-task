import { GroupedData, WineData } from "../types";

export const statCalculationForFlavanoids = (data: GroupedData) => {
  let result = [];
  for (let key in data) {
    const flavanoids = data[key].map((item) => {
      return typeof item.Flavanoids === "string"
        ? parseFloat(item.Flavanoids)
        : item.Flavanoids;
    });
    result.push({
      [key]: {
        mean: mean(flavanoids),
        mode: mode(flavanoids),
        median: median(flavanoids),
      },
    });
  }
  return result;
};

export const statCalculationForGamma = (data: GroupedData) => {
  let result = [];
  for (let key in data) {
    const gamma = data[key].map((item) => parseFloat(calculateGamma(item)));
    result.push({
      [key]: {
        mean: mean(gamma),
        mode: mode(gamma),
        median: median(gamma),
      },
    });
  }
  return result;
};

export const calculateGamma = (wine: WineData) => {
  const ash = typeof wine.Ash === "string" ? parseFloat(wine.Ash) : wine.Ash;
  return ((ash * wine.Hue) / wine.Magnesium).toFixed(3);
};

export const mean = (data: number[]) => {
  return data.reduce((acc, curr) => acc + curr, 0) / data.length;
};

export const mode = (data: number[]): number[] => {
  const modeMap: Map<number, number> = new Map();
  data.forEach((i: number) => {
    modeMap.set(i, (modeMap.get(i) || 0) + 1);
  });

  let maxCount = -1;
  const modes: number[] = [];
  modeMap.forEach((count: number, value: number) => {
    if (count > maxCount) {
      maxCount = count;
      modes.splice(0, modes.length, value);
    } else if (count === maxCount) {
      modes.push(value);
    }
  });

  return modes;
};

export const median = (data: number[]) => {
  const sortedArray = [...data].sort((a, b) => a - b);
  return sortedArray.length % 2 === 0
    ? (sortedArray[sortedArray.length / 2 - 1] +
        sortedArray[sortedArray.length / 2]) /
        2
    : sortedArray[Math.floor(sortedArray.length / 2)];
};
