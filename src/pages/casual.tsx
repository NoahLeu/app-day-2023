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
import Link from "next/link";

export default function Home() {
  const challengeReq = api.challenge.getChallenges.useQuery({});

  return (
    <div className="relative flex w-full flex-grow flex-col content-center items-center justify-start overflow-x-scroll">
      <h1 className="fixed left-1/2 top-16 -translate-x-1/2 pt-6 text-xl">
        Explorer Mode
      </h1>
      <div className="absolute left-0 top-20 grid w-fit min-w-min grid-flow-col grid-rows-1 gap-x-10 pl-10 pr-10">
        {challengeReq.isSuccess &&
          challengeReq.data.challenges.map((challenge) => {
            return (
              <ActivityCard
                key={challenge.id}
                activity={challenge}
                score={false}
              />
            );
          })}
      </div>
    </div>
  );
}
