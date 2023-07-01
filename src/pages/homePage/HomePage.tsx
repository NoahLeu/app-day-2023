import { ActivityCard } from "@/components/ActivityCard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { ActivityDetail } from "@/components/ActivityDetail";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* <ActivityCard />
            <ScoreBoard /> */}
      <ActivityDetail />
    </div>
  );
};

export default HomePage;
