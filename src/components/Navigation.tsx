import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Card, CardContent} from "@/components/ui/card";
import Link from "next/link";


const Navigation = () => {
    return (
        <Card className="m-2">
            <CardContent className="p-0">
                <NavigationMenu className="min-w-full flex-grow-0 h-10">
                    <NavigationMenuList className="min-w-full">
                        <NavigationMenuItem>
                            <Link href="/challenges" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}>active</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/score-board" legacyBehavior passHref>
                                <NavigationMenuLink href="/score-board"
                                                    className={navigationMenuTriggerStyle()}>scoreboard</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="#" legacyBehavior passHref>
                                <NavigationMenuLink href="#"
                                                    className={navigationMenuTriggerStyle()}>profile</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </CardContent>
        </Card>

    );
}

export default Navigation;