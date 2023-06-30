import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const HomePage = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col justify-between">
            {/* enter components */}
            <Header/>
            <div className="flex content-center flex-grow min-w-max justify-center items-center">
                <div className="h-10">CARDS</div>
            </div>
            <Navigation/>

        </div>
    )
}

export default HomePage;