import DetailsPage from "pages/DetailsPage";
import LandingPage from "pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./assets/scss/bootstrap/bootstrap-4.6.2/scss/style.scss";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/browse-by" element={<DetailsPage />} />
            </Routes>
        </div>
    );
}

export default App;
