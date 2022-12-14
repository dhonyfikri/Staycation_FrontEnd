import React, { useState } from "react";
import propTypes from "prop-types";

const Stepper = (props) => {
    const { steps, initialStep, onStepChange } = props;
    const stepKeys = Object.keys(steps);

    const [currentStep, setCurrentStep] = useState(
        stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
    );

    const totalStep = stepKeys.length;
    const indexStep = stepKeys.indexOf(currentStep);

    const prevStep = () => {
        if (+indexStep > 0) {
            setCurrentStep(stepKeys[indexStep - 1]);
            onStepChange();
        }
    };

    const nextStep = () => {
        if (+indexStep < totalStep) {
            setCurrentStep(stepKeys[indexStep + 1]);
            onStepChange();
        }
    };

    return <>{props.children(prevStep, nextStep, currentStep, steps)}</>;
};

export default Stepper;

Stepper.propTypes = {
    steps: propTypes.object.isRequired,
    initialStep: propTypes.string,
    onStepChange: propTypes.func,
};
