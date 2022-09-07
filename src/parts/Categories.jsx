import Button from "elements/Button";
import React from "react";

const Categories = ({ data }) => {
    return data?.map((category, index) => {
        return (
            <section className="container" key={`category-${index}`}>
                <h4 className="mb-3 font-weight-medium">{category.name}</h4>
                <div className="container-grid">
                    {category.items.length === 0 ? (
                        <div className="item column-12 row-1">
                            {/* hanya percobaan pada bungkus ini */}
                            <div className="row">
                                <div className="col-auto align-items-center">
                                    There is no property at this category
                                </div>
                            </div>
                        </div>
                    ) : (
                        category.items?.map((items, index2) => {
                            return (
                                <div
                                    className="item column-3 row-1"
                                    key={`category-${index}-item-${index2}`}
                                >
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
                                                src={items.imageUrl}
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
                                                {items.city}, {items.country}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </section>
        );
    });
};

export default Categories;
