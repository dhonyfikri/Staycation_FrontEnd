import Button from "elements/Button";
import Stepper from "elements/Stepper";
import Controller from "elements/Stepper/Controller";
import MainContent from "elements/Stepper/MainContent";
import Meta from "elements/Stepper/Meta";
import Numbering from "elements/Stepper/Numbering";
import ItemDetails from "json/itemDetails.json";
import BookingInformation from "parts/Checkout/BookingInformation";
import Completed from "parts/Checkout/Completed";
import Payment from "parts/Checkout/Payment";
import Header from "parts/Header";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

function Checkout(props) {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        proofPayment: "",
        bankName: "",
        bankHolder: "",
    });

    const onChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const onStepChange = () => {
        window.scrollTo(0, 0);
    };

    const checkout = {
        duration: 3,
    };

    const steps = {
        bookingInformation: {
            title: "Booking Information",
            description: "Please fill up the blank field below",
            content: (
                <BookingInformation
                    data={data}
                    checkout={checkout}
                    ItemDetails={ItemDetails}
                    onChange={onChange}
                />
            ),
        },
        payment: {
            title: "Payment",
            description: "Kindly follow the instructions below",
            content: (
                <Payment
                    data={data}
                    ItemDetails={ItemDetails}
                    checkout={checkout}
                    onChange={onChange}
                />
            ),
        },
        completed: {
            title: "Yay! Completed",
            description: null,
            content: <Completed />,
        },
    };

    useEffect(() => {
        document.title = "Booking Page";
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header isCentered />
            <Stepper steps={steps} onStepChange={onStepChange}>
                {(prevStep, nextStep, currentStep, steps) => {
                    return (
                        <>
                            <Numbering
                                data={steps}
                                current={currentStep}
                                style={{ marginBottom: 50 }}
                            />
                            <Meta data={steps} current={currentStep} />
                            <MainContent data={steps} current={currentStep} />
                            {currentStep === "bookingInformation" && (
                                <Controller>
                                    {data.firstName !== "" &&
                                        data.lsatName !== "" &&
                                        data.email !== "" &&
                                        data.phone !== "" && (
                                            <Fade>
                                                <Button
                                                    className="btn mb-3"
                                                    type="button"
                                                    isBlock
                                                    isPrimary
                                                    hasShadow
                                                    onClick={nextStep}
                                                >
                                                    Continue to Book
                                                </Button>
                                            </Fade>
                                        )}
                                    <Button
                                        className="btn"
                                        type="link"
                                        isBlock
                                        isLight
                                        href={`/properties/${ItemDetails._id}`}
                                    >
                                        Cancel
                                    </Button>
                                </Controller>
                            )}
                            {currentStep === "payment" && (
                                <Controller>
                                    {data.proofPayment !== "" &&
                                        data.bankName !== "" &&
                                        data.bankHolder !== "" && (
                                            <Fade>
                                                <Button
                                                    className="btn mb-3"
                                                    type="button"
                                                    isBlock
                                                    isPrimary
                                                    hasShadow
                                                    onClick={nextStep}
                                                >
                                                    Continue to Book
                                                </Button>
                                            </Fade>
                                        )}
                                    <Button
                                        className="btn"
                                        type="button"
                                        isBlock
                                        isLight
                                        onClick={prevStep}
                                    >
                                        Cancel
                                    </Button>
                                </Controller>
                            )}
                            {currentStep === "completed" && (
                                <Controller>
                                    <Button
                                        className="btn"
                                        type="link"
                                        isBlock
                                        isPrimary
                                        hasShadow
                                        href="/"
                                    >
                                        Back to Home
                                    </Button>
                                </Controller>
                            )}
                        </>
                    );
                }}
            </Stepper>
        </>
    );
}

export default Checkout;
