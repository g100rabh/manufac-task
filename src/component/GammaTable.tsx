import React from "react";
import CommanTable from "../common/Table";
import { GroupedData } from "../types";
import { statCalculationForGamma } from "../utils/calculation";

export default function GammaTable({ data }: { data: GroupedData }) {
  const result = statCalculationForGamma(data);
  return <CommanTable data={result} wineContent="Gamma" />;
}
