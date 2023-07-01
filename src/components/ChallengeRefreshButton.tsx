import { api } from "@/utils/api";
import { FaSyncAlt } from "react-icons/fa";

const ChallengeRefreshButton = () => {
  const handleNewChallenge = () => {
    api.challenge.getNewChallenge.useMutation({});
    // refresh page
    window.location.reload();
  };

  return (
    <button className="rounded-full p-4 shadow-sm" onClick={handleNewChallenge}>
      <FaSyncAlt className="h-7 w-7" />
    </button>
  );
};

export default ChallengeRefreshButton;
