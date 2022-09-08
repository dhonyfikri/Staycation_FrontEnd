import Header from "parts/Header";
import Hero from "parts/Hero";
import React, { Component } from "react";

import LandingPageData from "json/landingPage.json";
import Categories from "parts/Categories";
import MostPicked from "parts/MostPicked";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero
                    refMostPicked={this.refMostPicked}
                    data={LandingPageData.hero}
                />
                <MostPicked
                    refMostPicked={this.refMostPicked}
                    data={LandingPageData.mostPicked}
                />
                <Categories data={LandingPageData.categories} />
                <Testimony data={LandingPageData.testimonial} />
                <Footer />
            </>
        );
    }
}

export default LandingPage;
