import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FaClipboardCheck, FaTrophy, FaUserAlt } from "react-icons/fa";

const Navigation = () => {
  return (
    <Card className="rounded-b-none rounded-t-lg py-1">
      <CardContent className="p-0">
        <NavigationMenu className="h-10 min-w-full flex-grow-0">
          <NavigationMenuList className="h-fit min-w-full">
            <NavigationMenuItem>
              <Link href="/score-board" legacyBehavior passHref>
                <NavigationMenuLink
                  href="/score-board"
                  className={navigationMenuTriggerStyle()}
                >
                  <FaTrophy className="h-5 w-5" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <FaClipboardCheck className="h-7 w-7" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="profile-page" legacyBehavior passHref>
                <NavigationMenuLink
                  href="profile-page"
                  className={navigationMenuTriggerStyle()}
                >
                  <FaUserAlt className="h-5 w-5" />
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
