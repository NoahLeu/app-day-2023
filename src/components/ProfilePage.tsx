// userpage with name, email, and location

import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ProfilePage() {
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <Label htmlFor="name">Name</Label>
                        <Input type="text" id="name" name="name" />
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" />
                        <Label htmlFor="location">Location</Label>
                        <Input type="text" id="location" name="location" />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" />
                        <Label htmlFor="challengeScore">Challenge score:</Label>
                        <h3>3 Milliarden Punkte</h3>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Save</Button>
            </CardFooter>
        </Card>
    );
}