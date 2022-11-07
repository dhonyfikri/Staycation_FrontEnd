import ItemDetails from "json/itemDetails.json";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import Testimony from "parts/Testimony";
import React, { useEffect } from "react";
import { Fade } from "react-reveal";

const DetailsPage = (props) => {
    const breadcrumbData = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" },
    ];

    useEffect(() => {
        document.title = "Details Page";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header {...props} />
            <PageDetailTitle
                breadcrumbData={breadcrumbData}
                data={ItemDetails}
            />
            <FeaturedImage data={ItemDetails.imageUrls} />
            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <Fade bottom>
                            <PageDetailDescription data={ItemDetails} />
                        </Fade>
                    </div>
                    <div className="col-5">
                        <Fade bottom>
                            <BookingForm itemDetails={ItemDetails} />
                        </Fade>
                    </div>
                </div>
            </section>

            <Categories data={ItemDetails.categories} />
            <Testimony data={ItemDetails.testimonial} />
            <Footer />
        </>
    );
};

export default DetailsPage;
