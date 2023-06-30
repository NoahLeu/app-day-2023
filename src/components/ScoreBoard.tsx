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
import {Card, CardContent} from "@/components/ui/card";

export function ScoreBoard() {

    const columns = [
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
        <Card className="m-2 flex-grow">
            <CardContent>
                <Table>
                    <TableCaption>Scoreboard</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Platz</TableHead>
                            <TableHead>User</TableHead>
                            <TableHead>Punkte</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {columns.map((index) => (
                            <TableRow key={index.place}>
                                <TableCell className="font-medium">{index.place}</TableCell>
                                <TableCell>{index.user}</TableCell>
                                <TableCell>{index.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
  

