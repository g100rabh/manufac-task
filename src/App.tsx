import React from "react";

import { wineData } from "./data/data";
import { GroupedData } from "./types";

function App() {
  const groupedData: GroupedData = wineData.reduce(
    (groups: GroupedData, wine) => {
      const classNumber = `class${wine.Alcohol}`;

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
