import Head from "next/head";
<<<<<<< HEAD
import Link from "next/link";
import { api } from "@/utils/api";
import { useForm } from "react-hook-form";
import { ISignUp } from "@/server/validation/auth";
=======
import Challenges from "@/pages/challenges";
>>>>>>> pages-structure

export default function Home() {
  return (
    <>
      <Head>
        <title>MVP1</title>
          {/* TODO: fill out meta*/}
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<<<<<<< HEAD
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <button onClick={() => void signIn()}>sign in</button>
=======
      <main className="flex-grow flex items-center">
          <Challenges />
>>>>>>> pages-structure
      </main>
    </>
  );
}
