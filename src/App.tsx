import React from "react";
import FlavnoidsTable from "./component/FlavnoidsTable";

import { wineData } from "./data/data";
import { GroupedData } from "./types";
import { MantineProvider } from "@mantine/core";
import GammaTable from "./component/GammaTable";

function App() {
  // Grouped data for calculation with unnecessary properties removed.
  const groupedData: GroupedData = wineData.reduce(
    (groups: GroupedData, wine) => {
      const classNumber = `Class${wine.Alcohol}`;

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

  return (
    <MantineProvider>
      <FlavnoidsTable data={groupedData} />
      <GammaTable data={groupedData} />
    </MantineProvider>
  );
}

export default App;
