// our-domain.com/score-board

import { ActivityDetail } from "@/components/ActivityDetail";
import { ScoreBoard } from "@/components/ScoreBoard";
import { type UserScore } from "@/types/scoreboard";
import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { createRef, useEffect, useRef, useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

export const ScoreBoardPage = () => {
  const [users, setUsers] = useState<UserScore[]>([]);
  const scoresRes = api.challenge.getPlayerScores.useQuery({});
  const handleRefreshScoreboard = () => {
    if (scoresRes.isSuccess) {
      if (!scoresRes?.data?.users) return;

      setUsers(scoresRes.data.users as UserScore[]);
    }
  };

  useEffect(() => {
    handleRefreshScoreboard();
  }, [scoresRes.isSuccess]);

  return (
    <div className="relative flex flex-grow flex-col content-center items-center justify-start px-6 pt-4">
      <h1 className="text-xl">Scoreboard</h1>
      <button
        onClick={handleRefreshScoreboard}
        className="fixed bottom-12 mx-auto my-4 rounded-full bg-white p-3 shadow-sm"
      >
        <FaSyncAlt className="h-7 w-7" />
      </button>
      <ScoreBoard users={users} />
    </div>
  );
};

export default ScoreBoardPage;
