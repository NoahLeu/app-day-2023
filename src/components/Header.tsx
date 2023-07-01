import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

const Header = () => {
    return (
        <Card className="h-10 flex content-center m-2">
            <CardContent className="p-0 flex items-center">
                <Image src="/images/logo.png" alt="logo" width={50} height={50}/>
                
                <h1>Kreativer Name</h1>
                
            </CardContent>
        </Card>
    )
}

export default Header;