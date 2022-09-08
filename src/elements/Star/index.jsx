import React from "react";
import propTypes from "prop-types";
import "./index.scss";

const Star = ({ className, value, width, height, spacing }) => {
    const decimals = Number(value) % 1;

    const star = [];

    let leftPos = 0;

    for (let i = 0; i < 5 && i < value - decimals; i++) {
        leftPos += width;
        star.push(
            <div
                className="star"
                key={`star-${i}`}
                style={{
                    left: i * width,
                    width: width,
                    height: height,
                    marginRight: spacing,
                }}
            />
        );
    }

    if (decimals > 0 && value <= 5) {
        star.push(
            <div
                className="star"
                key={"starWithDecimal"}
                style={{
                    left: leftPos,
                    width: width * decimals - spacing,
                    height: height,
                }}
            />
        );
    }

    const starPlaceholder = [];
    for (let i = 0; i < 5; i++) {
        starPlaceholder.push(
            <div
                className="star star-placeholder"
                key={`starPlaceholder-${i}`}
                style={{
                    left: i * width,
                    width: width,
                    height: height,
                    marginRight: spacing,
                }}
            />
        );
    }

    return (
        <>
            <div
                className={["stars", className].join(" ")}
                style={{ height: height }}
            >
                {starPlaceholder}
                {star}
            </div>
        </>
    );
};

Star.propTypes = {
    className: propTypes.string,
    value: propTypes.number,
    width: propTypes.number,
    height: propTypes.number,
    spacing: propTypes.number,
};

export default Star;
