import * as React from "react";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { FaAngleUp, FaFire, FaWheelchair } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Challenge } from "@/types/challenge";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "@/utils/api";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  activity: Challenge;
};

// TOD=: lower right corner not rounded
export function ActivityDetail({ activity }: Props) {
  const session = useSession();
  const router = useRouter();
  const [confirmationDialogOpen, setConfirmationDialogOpen] =
    React.useState<boolean>(false);

  const confirmationMutation = api.challenge.completeChallenge.useMutation();

  const handleConfirmCompletion = () => {
    if (!activity.id || !session?.data?.user?.email) {
      return;
    }

    confirmationMutation
      .mutateAsync({
        email: session.data.user.email,
        challengeID: activity.id,
      })
      .then(() => {
        setConfirmationDialogOpen(false);
        void router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <ScrollArea className="w-50 h-fit rounded-md">
      <Card className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center">
          <CardHeader className="w-full">
            <div className="relative h-fit w-full">
              <Image
                src={
                  activity.image && activity.image != "null"
                    ? activity.image
                    : "/images/activity_dummy.png"
                }
                alt="activity_dummy"
                width={200}
                height={150}
                className="w-full object-cover"
              />
              <Badge className="absolute bottom-2 right-2 z-10 text-sm">
                {activity.category}
              </Badge>
            </div>
            <div className="flex w-full justify-between pt-3 text-lg font-bold">
              <div className="flex flex-row items-center justify-center">
                <FaFire className="mr-2" />
                <p>{activity.difficulty} / 10</p>
              </div>
              <div className="flex flex-row items-center justify-center">
                <p>+{activity.defaultScore}</p>
                <FaAngleUp className="ml-1 h-6 w-6" />
              </div>
            </div>
            <CardTitle>{activity.title}</CardTitle>
            <div className="py-0">
              <CardDescription className="text-xs">
                {" "}
                Musterunternehmen{" "}
              </CardDescription>
              <CardDescription className="text-xs">
                {" "}
                Musterstraße 1{" "}
              </CardDescription>
              <CardDescription className="text-xs">
                {" "}
                12345 Musterstadt{" "}
              </CardDescription>
            </div>
          </CardHeader>
        </div>

        <CardContent>
          {/* <div className="space-y-4 divide-y"> */}
          {/* <CardDescription className="text-l">
          Beschreibung einer sehr anspruchsvollen Aktivität
        </CardDescription> */}
          <CardDescription className="text-m">
            {activity.description || "Keine Beschreibung vorhanden."}
          </CardDescription>
          {/* </div> */}
          <form>
            <div className="grid w-full items-center gap-4"></div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Dialog
            open={confirmationDialogOpen}
            onOpenChange={(open: boolean) => setConfirmationDialogOpen(open)}
          >
            <Button onClick={() => setConfirmationDialogOpen(true)}>
              Abschließen
            </Button>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Hast du diese Challenge erfüllt?</DialogTitle>
                <DialogDescription>
                  Bitte bestätige, dass du diese Challenge erfüllt hast.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose>Abbrechen</DialogClose>
                <Button type="submit" onClick={handleConfirmCompletion}>
                  Bestätigen
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </ScrollArea>
  );
}
