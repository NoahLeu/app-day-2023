import Head from "next/head";
import Challenges from "@/pages/challenges";

export default function Home() {
  return (
    <>
      <Head>
        <title>MVP1</title>
          {/* TODO: fill out meta*/}
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow flex items-center">
          <Challenges />
      </main>
    </>
  );
}
