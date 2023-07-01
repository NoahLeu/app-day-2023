import * as React from "react"
import Image from "next/image"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { FaAngleUp, FaWheelchair } from "react-icons/fa"
import { Badge } from "lucide-react"



// TOD=: lower right corner not rounded
export function ActivityDetail() {
    return (
        <ScrollArea className="h-80 w-50 rounded-md">
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
                        <div className="py-0">
                        <CardDescription className="text-xs"> Musterunternehmen </CardDescription>
                        <CardDescription className="text-xs"> Musterstraße 1 </CardDescription>
                        <CardDescription className="text-xs"> 12345 Musterstadt </CardDescription>
                        </div>
                    </CardHeader>
                </div>

                <CardContent>
                    {/* <div className="space-y-4 divide-y"> */}
                    {/* <CardDescription className="text-l">
          Beschreibung einer sehr anspruchsvollen Aktivität
        </CardDescription> */}
                    <CardDescription className="text-m">
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
                    {/* </div> */}
                    <form>
                        <div className="grid w-full items-center gap-4"></div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button>Abschließen</Button>
                </CardFooter>
            </Card>
        </ScrollArea>
    )
}


