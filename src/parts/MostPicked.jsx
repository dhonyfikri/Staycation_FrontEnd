import Button from "elements/Button";
import React from "react";

import Fade from "react-reveal/Fade";

const MostPicked = ({ data, refMostPicked }) => {
    return (
        <section className="container" ref={refMostPicked}>
            <Fade>
                <h4 className="mb-4">Most Picked</h4>
                <div className="container-grid">
                    {data?.map((item, index) => {
                        return (
                            <div
                                className={`item column-4${
                                    index === 0 ? " row-2" : " row-1"
                                }`}
                                key={`mostpicked-${index}`}
                            >
                                <Fade bottom delay={300 * index}>
                                    <div className="card card-featured">
                                        <div className="tag">
                                            ${item.price}{" "}
                                            <span className="font-weight-light">
                                                per {item.unit}
                                            </span>
                                        </div>
                                        <figure className="img-wrapper">
                                            <img
                                                src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
                                                alt={item.title}
                                                className="img-cover"
                                            />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button
                                                type="link"
                                                className="stretched-link d-block text-white"
                                                href={`/properties/${item._id}`}
                                            >
                                                <h5>{item.title}</h5>
                                            </Button>
                                            <span>
                                                {item.city},{item.country}
                                            </span>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        );
                    })}
                </div>
            </Fade>
        </section>
    );
};

export default MostPicked;
