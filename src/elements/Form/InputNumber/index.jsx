import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";
import inputValueAssembly from "utils/inputValueAssembly";

const InputNumber = (props) => {
    const { value, placeholder, name, min, max, prefix, suffix } = props;
    const [inputValue, setInputValue] = useState(
        inputValueAssembly(prefix, value, suffix)
    );

    const onChange = (e) => {
        let elementValue = String(e.target.value);
        if (prefix) elementValue = elementValue.replace(prefix, "");
        if (suffix) elementValue = elementValue.replace(suffix, "");
        elementValue = elementValue.replace("s", "");

        const patternNumeric = new RegExp("[0-9]*");
        const isNumeric = patternNumeric.test(elementValue);

        //ekspresi + sama dengan konversi ke tipe number yaitu short hand ketika membuat Number(value)
        if (isNumeric && +elementValue <= max && +elementValue >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +elementValue,
                },
            });
            setInputValue(inputValueAssembly(prefix, elementValue, suffix));
        }
    };

    const minus = () => {
        value > min &&
            onChange({
                target: {
                    name: name,
                    value: +value - 1,
                },
            });
    };

    const plus = () => {
        value < max &&
            onChange({
                target: {
                    name: name,
                    value: +value + 1,
                },
            });
    };

    return (
        <div className={["input-number mb-3", props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                <input
                    min={min}
                    max={max}
                    name={name}
                    pattern="[0-9]*"
                    className="form-control"
                    placeholder={placeholder ? placeholder : "0"}
                    value={String(inputValue)}
                    onChange={onChange}
                />
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>
        </div>
    );
};

InputNumber.defaultProps = {
    min: 1,
    max: 1,
    prefix: "",
    suffix: "",
};

InputNumber.propTypes = {
    value: propTypes.oneOfType([propTypes.string, propTypes.number]),
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
};

export default InputNumber;
