import React from "react";
import { Table } from "@mantine/core";

export default function CommanTable({
  data,
  wineContent,
}: {
  data: any[];
  wineContent: string;
}) {
  return (
    <>
      <h2>{wineContent}</h2>
      <Table
        withColumnBorders
        withTableBorder
        highlightOnHover
        horizontalSpacing="lg"
        verticalSpacing="lg"
        striped
      >
        <Table.Thead>
          <Table.Tr key="header">
            <Table.Th>Measure</Table.Th>
            {data.map((item) => (
              <Table.Th>{Object.keys(item)[0]}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr key="mean">
            <Table.Td style={{ fontWeight: "bold" }}>
              {wineContent} Mean
            </Table.Td>
            {data?.map((classData) => (
              <Table.Td key={Object.keys(classData)[0]}>
                {classData[Object.keys(classData)[0]].mean.toFixed(3)}
              </Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr key="median">
            <Table.Td style={{ fontWeight: "bold" }}>
              {wineContent} Median
            </Table.Td>
            {data?.map((classData) => (
              <Table.Td key={Object.keys(classData)[0]}>
                {classData[Object.keys(classData)[0]].median.toFixed(3)}
              </Table.Td>
            ))}
          </Table.Tr>
          <Table.Tr key="mode">
            <Table.Td style={{ fontWeight: "bold" }}>
              {wineContent} Mode
            </Table.Td>
            {data?.map((classData) => (
              <Table.Td key={Object.keys(classData)[0]}>
                {classData[Object.keys(classData)[0]].mode.join(", ")}
              </Table.Td>
            ))}
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
}
