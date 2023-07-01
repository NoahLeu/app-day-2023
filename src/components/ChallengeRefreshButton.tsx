import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { FaSyncAlt } from "react-icons/fa";

type Props = {
  riskLevel: number;
};

const ChallengeRefreshButton = ({ riskLevel }: Props) => {
  const session = useSession();
  const mutation = api.challenge.getNewChallenge.useMutation();

  const handleNewChallenge = () => {
    if (!session?.data?.user?.email) {
      return;
    }

    mutation
      .mutateAsync({
        userEmail: session.data.user.email,
        riskLevel: riskLevel,
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="mt-4 w-fit rounded-full p-4 shadow-md"
        onClick={handleNewChallenge}
      >
        <FaSyncAlt className="h-7 w-7" />
      </button>
      <p className="mt-2">Neue Challenge anfordern</p>
    </div>
  );
};

export default ChallengeRefreshButton;
