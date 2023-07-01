import Head from "next/head";
import { api } from "@/utils/api";
import { signIn, useSession } from "next-auth/react";
import { ActivityCard } from "@/components/ActivityCard";
import { Button } from "@/components/ui/button";
import LoadingLayout from "@/components/session/LoadingLayout";
import { type Session } from "next-auth";
import { useEffect, useState } from "react";
import { type Challenge } from "@/types/challenge";

export default function Home() {
  const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(
    null
  );
  const session = useSession();
  const mutation = api.challenge.getNewChallenge.useMutation();

  const userReq = api.auth.me.useQuery({});
  const [userChallengeID, setUserChallengeID] = useState<string>("");

  const challengeReq = api.challenge.getChallenge.useQuery({
    id: userChallengeID,
  });

  const handleNewChallenge = () => {
    if (!session?.data?.user?.email) {
      return;
    }

    mutation.mutate({
      userEmail: session.data.user.email,
    });

    // window.location.reload();
  };

  const getActiveChallenge = () => {
    if (!session?.data?.user) {
      return;
    }

    if (!userReq.isSuccess || !userReq.data.user.activeChallengeId) {
      return;
    }

    // const challengeReq = api.challenge.getChallenge.useQuery({
    //   id: userReq.data.user.activeChallengeId,
    // });

    if (!challengeReq.isSuccess || !challengeReq.data.challenge) {
      return;
    }
    console.log("can set");

    setActiveChallenge(challengeReq.data.challenge);
  };

  useEffect(() => {
    if (userReq.isSuccess && userReq.data.user) {
      setUserChallengeID(userReq.data.user.activeChallengeId);
    }
  }, [userReq.isSuccess]);

  useEffect(() => {
    getActiveChallenge();
  }, [session.status, userReq.isSuccess, challengeReq.isSuccess]);

  if (session.status === "loading" || session.status === "unauthenticated")
    return <LoadingLayout />;

  return (
    <>
      <Head>
        <title>MVP1</title>
        {/* TODO: fill out meta*/}
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-grow items-center">
        <div className="flex flex-grow flex-col content-center items-center justify-center px-6">
          {activeChallenge !== null ? (
            <>
             
            </>
          ) : (
            <>
              <h1 className="mb-4 text-center text-xl">
                Du hast aktuell keine Challenge ausgewählt.
              </h1>
              <ActivityCard />
              <Button onClick={handleNewChallenge}>Neue Challenge</Button>
              {/* <ChallengeRefreshButton /> */}
            </>
          )}
        </div>
      </main>
    </>
  );
}
