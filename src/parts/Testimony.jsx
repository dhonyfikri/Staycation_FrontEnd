import Button from "elements/Button";
import Star from "elements/Star";
import React from "react";
import TestimonyAccent from "../assets/images/testimonial-landingpages-frame.png";

import Fade from "react-reveal/Fade";

const Testimony = ({ data }) => {
    return (
        <section className="container">
            <Fade bottom>
                <div className="row align-items-center">
                    <div className="col-auto" style={{ marginRight: 70 }}>
                        <div
                            className="testimonial-hero"
                            style={{ margin: `30px 0 0 30px` }}
                        >
                            <img
                                src={`http://my-staycation-admin.herokuapp.com/${data.imageUrl}`}
                                alt="Testimonial"
                                className="position-absolute"
                                style={{
                                    borderRadius: `15px 15px 100px 15px`,
                                    zIndex: 1,
                                }}
                            />
                            <img
                                src={TestimonyAccent}
                                alt="Testimonial frame"
                                className="position-absolute"
                                style={{ margin: `-30px 0 0 -30px` }}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
                        <Star
                            value={data.rating}
                            width={35}
                            height={35}
                            spacing={4}
                        />
                        <h5
                            className="h2 font-weight-light line-height-2 my-3"
                            // style untuk membuat number of line pada JSX
                            // style={{
                            //     WebkitLineClamp: 2,
                            //     WebkitBoxOrient: "vertical",
                            //     display: "-webkit-box",
                            //     textOverflow: "ellipsis",
                            //     overflow: "hidden",
                            // }}
                        >
                            {data.content}
                        </h5>
                        <span className="text-gray-500">
                            {data.familyName}, {data.familyOccupation}
                        </span>
                        <div>
                            <Button
                                className="btn px-5"
                                href={`/testimonial/${data._id}`}
                                type="link"
                                style={{ marginTop: 40 }}
                                hasShadow
                                isPrimary
                            >
                                Read Their Story
                            </Button>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default Testimony;
