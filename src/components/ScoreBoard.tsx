import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { type UserScore } from "@/types/scoreboard";

type Props = {
  users: UserScore[];
};

export function ScoreBoard({ users }: Props) {
  return (
    <Card className="m-2 h-fit">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Platz</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Punkte</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.challenge_score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
