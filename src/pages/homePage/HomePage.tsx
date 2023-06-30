import { ActivityCard } from "@/components/ActivityCard";
import { ScoreBoard } from "@/components/ScoreBoard";

const HomePage = () => {
    return (
        <div className="bg-black min-h-screen">
            <ActivityCard />
            <ScoreBoard />
        </div>
    )
}

export default HomePage;