import React from "react";
import {
  Table,
  TableBody,
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
    <Card className="mt-4 h-fit w-full">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Platz</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Punkte</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell
                  className={
                    index === 0
                      ? "text-lg font-extrabold"
                      : index === 1
                      ? "text-md font-bold"
                      : index === 2
                      ? "font-semibold"
                      : "font-medium"
                  }
                >
                  {index + 1}
                </TableCell>
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
