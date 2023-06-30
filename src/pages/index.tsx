import Head from "next/head";
import Challenge from "@/pages/challenge";
import { api } from "@/utils/api";
import { signIn, useSession } from "next-auth/react";

// getServersideProps
export function getServerSideProps() {
  // get current user challenge
  // const userRes = api.auth.me.useQuery({});

  // if (!userRes.isSuccess || !userRes.data.user.activeChallengeId) {
  //   return {
  //     challenge: null,
  //   };
  // }

  // const challengeRes = api.challenge.getChallenge.useQuery({
  //   id: userRes.data.user.activeChallengeId,
  // });

  // if (!challengeRes.isSuccess) {
  //   return {
  //     challenge: null,
  //   };
  // }

  // return {
  //   props: {
  //     challenge: challengeRes.data.challenge,
  //   },
  // };

  return {
    props: {
      challenge: null,
    },
  };
}

type Props = {
  challenge: Challenge;
};
export default function Home({ challenge }: Props) {
  // use session nextauth
  // const session = useSession();

  // console.log(session);

  // if (session.status === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (session.status !== "authenticated") {
  //   // force sign in
  //   return <button onClick={() => void signIn()}>Sign in</button>;
  // }

  return (
    <>
      <Head>
        <title>MVP1</title>
        {/* TODO: fill out meta*/}
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-grow items-center">
        <Challenge challenge={challenge} />
      </main>
    </>
  );
}
