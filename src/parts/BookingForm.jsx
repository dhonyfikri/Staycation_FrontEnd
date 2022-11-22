import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";
import propTypes from "prop-types";
import React, { useEffect, useState } from "react";
import usePreviouseValue from "utils/usePreviouseValue";
import withRouter from "utils/withRouter";

function BookingForm(props) {
    const [value, setValue] = useState({
        data: {
            duration: 1,
            date: {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
            },
        },
    });

    const { itemDetails, startBooking } = props;
    const { data } = value;

    const previousData = usePreviouseValue(data);

    const updateData = (e) => {
        setValue((prevState) => {
            return {
                ...prevState,
                data: { ...prevState.data, [e.target.name]: e.target.value },
            };
        });
    };

    const startToBooking = () => {
        startBooking({
            _id: props.itemDetails._id,
            duration: data.duration,
            date: {
                startDate: data.date.startDate,
                endDate: data.date.endDate,
            },
        });
        props.router.navigate("/checkout");
    };

    useEffect(() => {
        if (previousData) {
            if (data.duration !== previousData.duration) {
                const startDate = new Date(data.date.startDate);
                const endDate = new Date(
                    startDate.setDate(startDate.getDate() + +data.duration - 1)
                );
                setValue({
                    ...value,
                    data: {
                        ...value.data,
                        date: { ...value.data.date, endDate: endDate },
                    },
                });
            }
            if (
                JSON.stringify(data.date) !== JSON.stringify(previousData.date)
            ) {
                const startDate = new Date(data.date.startDate);
                const endDate = new Date(data.date.endDate);
                const countDuration = new Date(endDate - startDate).getDate();
                setValue({
                    ...value,
                    data: { ...value.data, duration: countDuration },
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <div className="card bordered" style={{ padding: "60px 80px" }}>
            <h4 className="mb-3">Start Booking</h4>
            <h5 className="h2 text-teal mb-4">
                ${itemDetails.price}{" "}
                <span className="text-gray-500 font-weight-light">
                    per {itemDetails.unit}
                </span>
            </h5>

            <label htmlFor="duration">How long you will stay?</label>
            <InputNumber
                name="duration"
                max={30}
                suffix=" night"
                value={data.duration}
                onChange={updateData}
            />

            <label htmlFor="date">Pick a date</label>
            <InputDate name="date" value={data.date} onChange={updateData} />

            <h6
                className="text-gray-500 font-weight-light"
                style={{ marginBottom: 40 }}
            >
                You will pay{" "}
                <span className="text-gray-900 font-weight-normal">
                    ${itemDetails.price * data.duration} USD
                </span>{" "}
                per{" "}
                <span className="text-gray-900 font-weight-normal">
                    {data.duration} {itemDetails.unit}
                    {data.duration > 1 ? "s" : ""}
                </span>
            </h6>

            <Button
                className="btn"
                //
                // type="link"
                // href="/checkout"
                //
                hasShadow
                isPrimary
                isBlock
                type="button"
                onClick={startToBooking}
            >
                Continue to Book
            </Button>
        </div>
    );
}

export default withRouter(BookingForm);

BookingForm.propTypes = {
    itemDetails: propTypes.object,
    startBooking: propTypes.func,
};
