import { GroupedData, wineDataTypes } from "../types";

export const statCalculationForFlavanoids = () => {};

export const statCalculationForGamma = () => {};

export const calculateGamma = () => {};

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

export const groupData = (data: wineDataTypes[]) => {
  data.reduce((groups: GroupedData, wine) => {
    // Extract the class number from the "Alcohol" property
    const classNumber = `class${wine.Alcohol}`;

    // Check if the group for the class exists, if not create it
    if (!groups[classNumber]) {
      groups[classNumber] = [];
    }

    const {
      Alcohol,
      Ash,
      Magnesium,
      Flavanoids,
      Proanthocyanins,
      Hue,
      Unknown,
    } = wine;

    // Add the wine data to the corresponding group
    groups[classNumber].push({
      Alcohol,
      Ash,
      Magnesium,
      Flavanoids,
      Proanthocyanins,
      Hue,
      Unknown,
    });

    return groups;
  }, {});
};
