import { ActivityCard } from "@/components/ActivityCard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { ActivityDetail } from "@/components/ActivityDetail";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* <ActivityCard />
            <ScoreBoard /> */}
      <ActivityDetail activity={{
        id: "",
        title: "",
        image: "",
        description: "",
        category: "",
        location: {
          id: 0,
          name: "",
          latitude: 0,
          longitude: 0,
          address: ""
        },
        difficulty: 0,
        defaultScore: 0
      }} />
    </div>
  );
};

export default HomePage;
