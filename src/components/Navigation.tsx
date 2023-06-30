import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const Navigation = () => {
    return (
        <NavigationMenu className="min-w-full flex-grow-0 h-10">
            <NavigationMenuList className="min-w-full">
                <NavigationMenuItem>
                    <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>active</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#"
                                        className={navigationMenuTriggerStyle()}>scoreboard</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>profile</NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    );
}

export default Navigation;