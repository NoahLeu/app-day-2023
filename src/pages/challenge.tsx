import Head from "next/head";
import { api } from "@/utils/api";
import { signIn, useSession } from "next-auth/react";
import LoadingLayout from "@/components/session/LoadingLayout";
import { type Challenge } from "@/types/challenge";
import ChallengeRefreshButton from "@/components/ChallengeRefreshButton";
import { type GetServerSidePropsContext } from "next";
import { ActivityDetail } from "@/components/ActivityDetail";

// get url parameter id
export function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  return {
    props: { id },
  };
}

type Props = {
  id: string;
};

export default function Challenge({ id }: Props) {
  const session = useSession();
  const challengeReq = api.challenge.getChallenge.useQuery({
    id: id,
  });

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
      <main className="flex items-center">
        <div className="flex flex-col content-center items-start justify-start px-6">
          {challengeReq.isLoading ? (
            <LoadingLayout />
          ) : (
            challengeReq.isSuccess && (
              <ActivityDetail activity={challengeReq.data.challenge} />
            )
          )}
        </div>
      </main>
    </>
  );
}
