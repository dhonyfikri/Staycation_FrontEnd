import React from "react";

import ImageHero from "assets/images/img-hero.png";
import ImageFrame from "assets/images/img-frame.png";
import IcTravelers from "assets/images/icons/ic_traveler.svg";
import IcCities from "assets/images/icons/ic_cities.svg";
import IcTreasures from "assets/images/icons/ic_treasure.svg";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Hero = (props) => {
    const showMostPicked = () => {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth",
        });
    };

    return (
        <section className="container pt-4">
            <Fade bottom>
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1 mb-3">
                            Forget Busy Work, <br />
                            Start Next Vacation.
                        </h1>
                        <p className="mb-4 font-weight-light text-gray-500 w-75">
                            We provide what you need to enjoy your holiday with
                            family. Time to make another memorable moments.
                        </p>
                        <Button
                            className="btn px-5"
                            hasShadow
                            isPrimary
                            onClick={showMostPicked}
                        >
                            Show Me Now
                        </Button>

                        <div className="row" style={{ marginTop: 80 }}>
                            <div
                                className="col-auto"
                                style={{ marginRight: 35 }}
                            >
                                <img
                                    width="36"
                                    height="36"
                                    src={IcTravelers}
                                    alt={`${formatNumber(
                                        props.data.travelers
                                    )} Travelers`}
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.travelers)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Travelers
                                    </span>
                                </h6>
                            </div>
                            <div
                                className="col-auto"
                                style={{ marginRight: 35 }}
                            >
                                <img
                                    width="36"
                                    height="36"
                                    src={IcTreasures}
                                    alt={`${formatNumber(
                                        props.data.treasures
                                    )} Treasures`}
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.treasures)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Treasures
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto">
                                <img
                                    width="36"
                                    height="36"
                                    src={IcCities}
                                    alt={`${formatNumber(
                                        props.data.cities
                                    )} Cities`}
                                />
                                <h6 className="mt-3">
                                    {formatNumber(props.data.cities)}{" "}
                                    <span className="text-gray-500 font-weight-light">
                                        Cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 pl-5">
                        <Zoom delay={500}>
                            <div
                                className="hero-banner"
                                style={{ width: 520, height: 410 }}
                            >
                                <img
                                    src={ImageHero}
                                    alt="Room with couches"
                                    className="img-fluid position-absolute hero-picture"
                                    style={{
                                        margin: "-30px 0 0 -30px",
                                        zIndex: 1,
                                    }}
                                />
                                <img
                                    src={ImageFrame}
                                    alt="Room with couches frame"
                                    className="img-fluid position-absolute hero-frame"
                                    style={{
                                        margin: "0 -30px -30px 0",
                                        borderTopLeftRadius: "50%",
                                    }}
                                />
                            </div>
                        </Zoom>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Hero;
