import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Homepage () {
    // const router = useNavigate()

    return (
        <div>
            <Header />
            <div id="home-head">
                <div>left</div>
                <div>right</div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage