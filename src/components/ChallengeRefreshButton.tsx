import { api } from "@/utils/api";
import { useSession } from "next-auth/react";
import { FaSyncAlt } from "react-icons/fa";

const ChallengeRefreshButton = () => {
  const session = useSession();
  const mutation = api.challenge.getNewChallenge.useMutation();

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

  return (
    <button
      className="mt-4 rounded-full p-4 shadow-sm"
      onClick={handleNewChallenge}
    >
      <FaSyncAlt className="h-7 w-7" />
    </button>
  );
};

export default ChallengeRefreshButton;
