import Button from "elements/Button";
import React from "react";

import { Fade } from "react-reveal";

const MostPicked = ({ data, refMostPicked }) => {
    return (
        <section className="container" ref={refMostPicked}>
            <Fade>
                <h4 className="mb-4">Most Picked</h4>
                <div className="container-grid">
                    {data?.map((item, index) => {
                        return (
                            <Fade bottom delay={300 * index}>
                                <div
                                    key={`mostpicked-${index}`}
                                    className={`item column-4${
                                        index === 0 ? " row-2" : " row-1"
                                    }`}
                                >
                                    <div className="card card-featured">
                                        <div className="tag">
                                            ${item.price}{" "}
                                            <span className="font-weight-light">
                                                per {item.unit}
                                            </span>
                                        </div>
                                        <figure className="img-wrapper">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className="img-cover"
                                            />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button
                                                type="link"
                                                className="stretched-link d-block text-white"
                                                href={`/properties/${item._id}`}
                                            >
                                                <h5>{item.name}</h5>
                                            </Button>
                                            <span>
                                                {item.city},{item.country}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        );
                    })}
                </div>
            </Fade>
        </section>
    );
};

export default MostPicked;
