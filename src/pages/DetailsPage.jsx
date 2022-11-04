import { Breadcrumb, InputDate, InputNumber } from "elements/Form";
import Header from "parts/Header";
import React, { useState } from "react";

const DetailsPage = (props) => {
    const [value, setValue] = useState({
        InputNumber: 1,
        InputDate: {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    });

    const breadcrumbData = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" },
    ];

    const handleChange = (e) => {
        const newValue = { ...value };
        newValue[e.target.name] = e.target.value;
        setValue(newValue);
    };

    return (
        <>
            <Header {...props} />
            <div className="container">
                <p>Details Page</p>
                <InputNumber
                    name="InputNumber"
                    min={1}
                    max={20}
                    suffix=" night"
                    value={value.InputNumber}
                    onChange={handleChange}
                />
                <p>Calendar</p>
                <InputDate
                    value={value.InputDate}
                    name="InputDate"
                    onChange={handleChange}
                />
                <p>Breadcrumb</p>
                <Breadcrumb data={breadcrumbData} />
            </div>
        </>
    );
};

export default DetailsPage;
