import propTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./index.scss";

import iconCalendar from "assets/images/icons/ic_calendar.svg";
import formatDate from "utils/formatDate";

function InputDate(props) {
    const { value, placeholder, name } = props;
    const [isShowed, setIsShowed] = useState(false);

    const datePickerChange = (value) => {
        const target = {
            target: {
                value: value.selection,
                name: name,
            },
        };
        props.onChange(target);
    };

    const refDate = useRef(null);

    const handleClickOutside = (event) => {
        if (refDate && !refDate.current.contains(event.target)) {
            setIsShowed(false);
        }
    };

    const check = (focus) => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    };

    const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
        value.endDate ? " - " + formatDate(value.endDate) : ""
    }`;

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    return (
        <div
            ref={refDate}
            className={["input-date mb-3", props.outerClassName].join(" ")}
        >
            <div className="input-group">
                <div className="input-group-append bg-gray-900">
                    <span className="input-group-text">
                        <img src={iconCalendar} alt="icon calendar" />
                    </span>
                </div>
                <input
                    readOnly
                    type="text"
                    className="form-control"
                    value={displayDate}
                    placeholder={placeholder}
                    onClick={() => setIsShowed(!isShowed)}
                />
                {isShowed && (
                    <div className="date-range-wrapper">
                        <DateRange
                            editableDateInputs={true}
                            onChange={datePickerChange}
                            moveRangeOnFirstSelection={false}
                            onRangeFocusChange={check}
                            ranges={[value]}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputDate;

Date.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
};
