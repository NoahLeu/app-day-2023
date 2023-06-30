import { ActivityCard } from "@/components/ActivityCard";
import { ScoreBoard } from "@/components/ScoreBoard";
import { ActivityDetail } from "@/components/ActivityDetail";

const HomePage = () => {
    return (
        <div className="bg-black min-h-screen">
            {/* <ActivityCard />
            <ScoreBoard /> */}
            <ActivityDetail />
        </div>
    )
}

export default HomePage;