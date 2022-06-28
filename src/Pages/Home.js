import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import HomeNavigation from "../Components/HomeNavigation";
import RecentPosts from "../Components/RecentPosts";

function Home() {
    return (
        <div>
            <HomeNavigation path="home" />
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Development and Dinosaurs</h1>
                    <div className="row center">
                        <h5 className="header col s12 light">Like other development blogs… but with dinosaurs.</h5>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section">
                    <div className="row">
                        <RecentPosts />
                        <Categories />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
