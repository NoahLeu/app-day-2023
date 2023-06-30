import React from 'react';


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card } from './ui/card';



export function ScoreBoard() {
  //const [colums, setColums] = React.useState([])

  const colums = [
    {
      place: "1",
      user: "dummy",
      points: "25",
    },
    {
      place: "2",
      user: "dummy2",
      points: "15",
    },

  ]

  return (
    <Card className="w-[350px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Platz</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Punkte</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {colums.map((index) => (
            <TableRow key={index.place}>
              <TableCell className="font-medium">{index.place}</TableCell>
              <TableCell>{index.user}</TableCell>
              <TableCell>{index.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}


