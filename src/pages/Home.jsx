import Accordion from "../components/home/Accordion"
import Banner from "../components/home/Banner"
import FeaturesProducts from "../components/home/FeaturesProducts"
import UserReview from "../components/home/UserReview"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
                    <FeaturesProducts></FeaturesProducts>
                </div>
                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center">User Reviews</h1>
                    <UserReview></UserReview>
                </div>
                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center">Frequently Ask Question</h1>
                    <Accordion></Accordion>
                </div>
            </div>
        </div>
    )
}

export default Home
