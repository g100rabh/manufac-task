import React from "react";
import CommanTable from "../common/Table";
import { GroupedData } from "../types";
import { statCalculationForFlavanoids } from "../utils/calculation";

export default function FlavnoidsTable({ data }: { data: GroupedData }) {
  const result = statCalculationForFlavanoids(data);
  return <CommanTable data={result} wineContent="Flavnoids" />;
}
