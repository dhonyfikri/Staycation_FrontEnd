import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import Testimony from "parts/Testimony";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Fade } from "react-reveal";
import { useParams } from "react-router-dom";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";
import LoadingBlank from "./blank/LoadingBlank";

const DetailsPage = (props) => {
    const breadcrumbData = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" },
    ];

    const { page, fetchPage } = props;
    const params = useParams();

    useEffect(() => {
        document.title = "Details Page";
        window.scrollTo(0, 0);

        if (!page[params.id]) {
            fetchPage(
                `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${params.id}`,
                params.id
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!page[params.id]) return <LoadingBlank />;

    return (
        <>
            <Header {...props} />
            <PageDetailTitle
                breadcrumbData={breadcrumbData}
                data={page[params.id]}
            />
            <FeaturedImage data={page[params.id].imageId} />
            <section className="container">
                <div className="row">
                    <div className="col-7 pr-5">
                        <Fade bottom>
                            <PageDetailDescription data={page[params.id]} />
                        </Fade>
                    </div>
                    <div className="col-5">
                        <Fade bottom>
                            <BookingForm
                                itemDetails={page[params.id]}
                                startBooking={props.checkoutBooking}
                            />
                        </Fade>
                    </div>
                </div>
            </section>

            <Activities data={page[params.id].activityId} />
            <Testimony data={page[params.id].testimonial} />
            <Footer />
        </>
    );
};

const mapStateToProp = (state) => ({ page: state.page });

export default connect(mapStateToProp, { checkoutBooking, fetchPage })(
    DetailsPage
);
