import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

const Header = () => {
  return (
    <Card className="fixed left-0 right-0 top-0 z-50 flex content-center items-center justify-center rounded-b-lg rounded-t-none bg-white px-3 py-3">
      <Link href="/">
        <CardContent className="flex items-center p-0">
          {/* <Image src="/images/logo.png" alt="logo" width={50} height={50} /> */}
          <FaFire className="mr-2 h-6 w-6" />

          <h1 className="text-lg font-bold">Actify</h1>
        </CardContent>
      </Link>
    </Card>
  );
};

export default Header;
