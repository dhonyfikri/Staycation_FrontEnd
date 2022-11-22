import Button from "elements/Button";
import React from "react";

import Fade from "react-reveal/Fade";

const Activities = ({ data }) => {
    if (!data) return null;
    return (
        <section className="container">
            <Fade>
                <h4 className="mb-3 font-weight-medium">Activities</h4>
                <div className="container-grid">
                    {data.map((items, index) => {
                        return (
                            <div
                                className="item column-3 row-1"
                                key={`activity-${index}`}
                            >
                                <Fade bottom delay={300 * index}>
                                    <div className="card no-border">
                                        {items.isPopular && (
                                            <div className="tag">
                                                Popular{" "}
                                                <span className="font-font-weight-light">
                                                    Choice
                                                </span>
                                            </div>
                                        )}
                                        <figure
                                            className="img-wrapper"
                                            style={{ height: 180 }}
                                        >
                                            <img
                                                src={`${process.env.REACT_APP_HOST}/${items.imageUrl}`}
                                                alt={items.name}
                                                className="img-cover"
                                            />
                                        </figure>
                                        <div className="meta-wrapper">
                                            <Button
                                                type="link"
                                                href={`/properties/${items._id}`}
                                                className="stretched-link d-block text-gray-800"
                                            >
                                                <h5 className="h4">
                                                    {items.name}
                                                </h5>
                                            </Button>
                                            <span className="text-gray-500">
                                                {items.type}
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

export default Activities;
