import Checkout from "pages/Checkout";
import DetailsPage from "pages/DetailsPage";
import PageNotFound from "pages/error/PageNotFound";
import LandingPage from "pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/bootstrap/bootstrap-4.6.2/scss/style.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/properties/:id" element={<DetailsPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
