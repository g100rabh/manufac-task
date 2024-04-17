import React from "react";

import { wineData } from "./data/data";

interface GroupedData {
  [key: string]: {
    Alcohol: number;
    Ash: number | string; // Adjusted to allow both numbers and strings
    Magnesium: number;
    Flavanoids: string | number;
    Proanthocyanins: string;
    Hue: number;
    Unknown: number;
  }[];
}

function App() {
  const groupedData: GroupedData = wineData.reduce(
    (groups: GroupedData, wine) => {
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
    },
    {}
  );

  console.log(groupedData);
  return <>App</>;
}

export default App;
