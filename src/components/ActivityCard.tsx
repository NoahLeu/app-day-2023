import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { FaWheelchair } from "react-icons/fa"


export function ActivityCard() {
    return (

        <Card className="w-[350px] ">
            <div className="flex flex-col items-center justify-center">
                <CardHeader >
                    <CardTitle >Challenge X</CardTitle>
                    <Image src="/images/activity_dummy.png" alt="activity_dummy" width={200} height={150} />
                </CardHeader>
            </div>

            <CardContent>
                <CardDescription>Beschreibung einer sehr anspruchsvollen Aktivität</CardDescription>
                <form>
                    <div className="grid w-full items-center gap-4">

                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Difficulty />
                <Button>Accept</Button>
            </CardFooter>
        </Card>
    )
}

export function Difficulty() {
    return (
        <div className="flex flex-col space-y-2.5 space-x-5" >
            <Label htmlFor="name">+20Punkte</Label>
            <div className="flex flex-row space-y-1.5">

                <FaWheelchair />
                <h3> 3/10</h3>
            </div>
        </div>
    )
}

