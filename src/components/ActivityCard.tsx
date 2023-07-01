import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { FaAngleUp, FaFire, FaWheelchair } from "react-icons/fa";
import { Badge } from "./ui/badge";
import { type Challenge } from "@/types/challenge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  activity: Challenge;
  score?: boolean;
};

export function ActivityCard({ activity, score }: Props) {
  const session = useSession();
  const router = useRouter();
  const [confirmationDialogOpen, setConfirmationDialogOpen] =
    useState<boolean>(false);

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
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Card className={`${score !== false ? "w-full" : "w-80 md:w-96"} max-w-md`}>
      <div className="flex flex-col items-center justify-center">
        <Link
          href={
            "/challenge?id=" +
            activity.id +
            (score === false ? "&mode=explorer" : "")
          }
        >
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
              <Badge className="absolute bottom-2 right-2 text-sm">
                {activity.category}
              </Badge>
            </div>
            <div className="flex w-full justify-between pt-3 text-lg font-bold">
              <div className="flex flex-row items-center justify-center">
                <FaFire className="mr-2" />
                <p>{activity.difficulty} / 10</p>
              </div>
              {score !== false && (
                <div className="flex flex-row items-center justify-center">
                  <p>+{activity.defaultScore}</p>
                  <FaAngleUp className="ml-1 h-6 w-6" />
                </div>
              )}
            </div>

            <CardTitle>{activity.title}</CardTitle>
          </CardHeader>
        </Link>
      </div>

      <CardContent>
        <CardDescription className="line-clamp-3">
          {activity.description || "Keine Beschreibung vorhanden."}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Dialog
          open={confirmationDialogOpen}
          onOpenChange={(open) => setConfirmationDialogOpen(open)}
        >
          {score !== false && (
            <Button onClick={() => setConfirmationDialogOpen(true)}>
              Abschließen
            </Button>
          )}
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
  );
}
