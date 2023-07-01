import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FaAngleUp, FaWheelchair } from "react-icons/fa";
import { Badge } from "./ui/badge";

export function ActivityCard() {
  return (
    <Card className="w-full max-w-md">
      <div className="flex flex-col items-center justify-center">
        <CardHeader className="w-full">
          <div className="relative h-fit w-full">
            <Image
              src="/images/activity_dummy.png"
              alt="activity_dummy"
              width={200}
              height={150}
              className="w-full object-cover"
            />
            <Badge className="absolute bottom-2 right-2 text-sm">Sport</Badge>
          </div>
          <div className="flex w-full justify-between pt-3 text-lg font-bold">
            <div className="flex flex-row items-center justify-center">
              <FaWheelchair className="mr-2" />
              <p>3/10</p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <p>+20</p>
              <FaAngleUp className="ml-1 h-6 w-6" />
            </div>
          </div>
          <CardTitle className="pt-2">Challenge X</CardTitle>
        </CardHeader>
      </div>

      <CardContent>
        <CardDescription>
          Beschreibung einer sehr anspruchsvollen Aktivität
        </CardDescription>
        <form>
          <div className="grid w-full items-center gap-4"></div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Abschließen</Button>
      </CardFooter>
    </Card>
  );
}
