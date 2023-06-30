import * as React from "react"
import Image from "next/image"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Difficulty } from "./ActivityCard"
import { Button } from "./ui/button"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

// TOD=: lower right corner not rounded
export function ActivityDetail() {
  return (
    <ScrollArea className="h-80 w-50 rounded-md">
      <Card className="w-[350px] ">
            <div className="flex flex-col items-center justify-center">
                <CardHeader >
                    <CardTitle >Challenge X</CardTitle>
                    <Image src="/images/activity_dummy.png" alt="activity_dummy" width={300} height={200} />
                </CardHeader>
            </div>

            <CardContent>
                <CardDescription>Beschreibung einer sehr anspruchsvollen Aktivität</CardDescription>
                <form>
                    <div className="grid w-full items-center gap-4">
                <CardDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    voluptatum, quibusdam, quia, quae voluptate voluptatibus
                    consequatur quod voluptas quos doloribus quidem. Quisquam
                    voluptates, quibusdam voluptate, quia, quae voluptatibus
                    consequatur quod voluptas quos doloribus quidem. Quisquam
                    voluptates, quibusdam voluptate, quia, quae voluptatibus
                    consequatur quod voluptas quos doloribus quidem. Quisquam
                    voluptates, quibusdam voluptate, quia, quae voluptatibus
                    consequatur quod voluptas quos doloribus quidem. Quisquam
                    voluptates, quibusdam voluptate, quia, quae voluptatibus
                    consequatur quod voluptas quos doloribus quidem.
                </CardDescription>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Difficulty />
                <Button>Accept</Button>
            </CardFooter>
        </Card>
    </ScrollArea>
  )
}
