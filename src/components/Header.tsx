import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Header = () => {
  return (
    <Card className="   flex h-14 content-center rounded-b-lg rounded-t-none py-1">
      <CardContent className="flex items-center p-0">
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />

        <h1>Kreativer Name</h1>
      </CardContent>
    </Card>
  );
};

export default Header;
