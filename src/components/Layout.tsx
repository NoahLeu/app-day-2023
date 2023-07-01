import React, { useEffect } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const session = useSession();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      void signIn();
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>MVP1</title>
        {/* TODO: fill out meta*/}
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex max-h-screen min-h-screen max-w-full flex-col justify-between overflow-x-hidden">
        <Header />
        <div className="relative flex flex-grow flex-col content-center items-center justify-start p-2 pb-20 pt-16">
          {children}
        </div>
        <Navigation />
      </main>
    </>
  );
};

export default Layout;
