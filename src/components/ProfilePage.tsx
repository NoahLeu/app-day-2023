import {Button} from "./ui/button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "./ui/card";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

const formSchema = z.object({
    username: z.string().min(2).max(20),
    email: z.string().email(),
    location: z.string().min(2).max(20),
});

type UserProps = {
    username?: string;
    email?: string;
    location?: string;
    challenge_score?: number;
}

export function ProfilePage({username, email, location, challenge_score}: UserProps) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: username ? username : "",
            email: email,
            location: location ? location : "",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data)
    };


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Profile</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Username
                                </FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                            </FormItem>
                        )} name={"username"} control={form.control}/>
                        <FormField render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                            </FormItem>
                        )} name={"email"} control={form.control}/>
                        <FormField render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Location
                                </FormLabel>
                                <FormControl>
                                    <Input {...field}/>
                                </FormControl>
                            </FormItem>
                        )} name={"location"} control={form.control}/>
                        <Label className="pt-10">
                            Score: {challenge_score}
                        </Label>
                    </form>
                </Form>
                <form></form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Save</Button>
            </CardFooter>
        </Card>
    )
        ;
}