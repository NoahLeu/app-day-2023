// userpage with name, email, and location

import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User } from "@prisma/client";

const User = {
    name: "Max Mustermann",
    email: "admin@admin.com",
    location: "Musterstadt",
    score: 200,
}

type UserProps = {
    name: string;
    email: string;
    location: string;
    score: number;
}

export function ProfilePage({name, email, location, score}: UserProps ) {



    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <Label htmlFor="name">Name</Label>
                        <h4>{name}</h4>
                        {/* <Input type="text" id="name" name="name" /> */}
                        <Label htmlFor="email">Email</Label>
                        <h4>{email}</h4>
                        {/* <Input type="email" id="email" name="email" /> */}
                        <Label htmlFor="location">Location</Label>
                        <h4>{location}</h4>
                        {/* <Input type="text" id="location" name="location" /> */}
                        {/* <Label htmlFor="password">Password</Label> */}
                        {/* <Input type="password" id="password" name="password" /> */}
                        <Label htmlFor="challengeScore">Challenge score:</Label>
                        <h4>{score}</h4>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Save</Button>
            </CardFooter>
        </Card>
    );
}