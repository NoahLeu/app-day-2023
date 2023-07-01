import Head from "next/head";
import { api } from "@/utils/api";
import { signIn, useSession } from "next-auth/react";
import { ActivityCard } from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";
import LoadingLayout from "@/components/session/LoadingLayout";
import { type Session } from "next-auth";
import { useEffect, useState } from "react";
import { type Challenge } from "@/types/challenge";
import ChallengeRefreshButton from "@/components/ChallengeRefreshButton";
import RiskLevelSlider from "@/components/RiskLevelSlider";

export default function Home() {
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );
  const session = useSession();
  const mutation = api.challenge.getNewChallenge.useMutation();
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(true);

  const userReq = api.auth.me.useQuery(
    {
      email: session?.data?.user?.email || "",
    },
    {
      enabled: false,
    }
  );

  const [userChallengeID, setUserChallengeID] = useState<string>("");

  const challengeReq = api.challenge.getChallenge.useQuery(
    {
      email: session?.data?.user?.email || "",
      id: userChallengeID,
    },
    {
      enabled: false,
    }
  );

  const handleNewChallenge = () => {
    if (!session?.data?.user?.email) {
      return;
    }

    mutation
      .mutateAsync({
        userEmail: session.data.user.email,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getActiveChallenge = async () => {
    if (!session?.data?.user?.email) {
      return;
    }

    await userReq.refetch();

    if (!userReq.isSuccess || !userReq.data.user.activeChallengeId) {
      setDataIsLoading(false);
      return;
    }

    await challengeReq.refetch();

    if (!challengeReq.isSuccess || !challengeReq.data.challenge) {
      setDataIsLoading(false);
      return;
    }

    setActiveChallenge(challengeReq.data.challenge);
    setDataIsLoading(false);
  };

  useEffect(() => {
    if (userReq.isSuccess && userReq.data.user) {
      setUserChallengeID(userReq.data.user.activeChallengeId);
    }
  }, [userReq.isSuccess, userReq.data?.user?.activeChallengeId]);

  useEffect(() => {
    void getActiveChallenge();
  }, [session.status, userReq.isSuccess, challengeReq.isSuccess]);

  if (session.status === "loading" || session.status === "unauthenticated")
    return <LoadingLayout />;

  return (
    <>
          <RiskLevelSlider/>
        <div className="flex flex-grow flex-col content-center items-center justify-center px-6">
          {dataIsLoading ? (
            <LoadingLayout />
          ) : activeChallenge ? (
            <>

              <ActivityCard activity={activeChallenge} />
              <ChallengeRefreshButton />
            </>
          ) : (
            <>
              <h1 className="mb-4 text-center text-xl">
                Du hast aktuell keine Challenge ausgewählt.
              </h1>
              <Button onClick={handleNewChallenge}>Neue Challenge</Button>
            </>
          )}
        </div>
    </>
  );
}
