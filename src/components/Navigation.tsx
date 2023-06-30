import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {Card, CardContent} from "@/components/ui/card";


const Navigation = () => {
    return (
        <Card className="m-2">
            <CardContent className="p-0">
                <NavigationMenu className="min-w-full flex-grow-0 h-10">
                    <NavigationMenuList className="min-w-full">
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#"
                                                className={navigationMenuTriggerStyle()}>active</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#"
                                                className={navigationMenuTriggerStyle()}>scoreboard</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="#"
                                                className={navigationMenuTriggerStyle()}>profile</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </CardContent>
        </Card>

    );
}

export default Navigation;