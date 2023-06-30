import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Navigation = () => {
  return (
    <Card className="m-2">
      <CardContent className="p-0">
        <NavigationMenu className="h-10 min-w-full flex-grow-0">
          <NavigationMenuList className="min-w-full">
            <NavigationMenuItem>
              <Link href="/challenge" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  active
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/score-board" legacyBehavior passHref>
                <NavigationMenuLink
                  href="/score-board"
                  className={navigationMenuTriggerStyle()}
                >
                  scoreboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="profile-page" legacyBehavior passHref>
                <NavigationMenuLink
                  href="profile-page"
                  className={navigationMenuTriggerStyle()}
                >
                  profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </CardContent>
    </Card>
  );
};

export default Navigation;
