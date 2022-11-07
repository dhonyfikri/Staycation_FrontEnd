import propTypes from "prop-types";
import React from "react";
import inputValueAssembly from "utils/inputValueAssembly";
import "./index.scss";

const InputNumber = (props) => {
    const { value, placeholder, name, min, max, prefix, suffix } = props;

    const onChange = (e) => {
        let elementValue = String(e.target.value);

        //ekspresi + sama dengan konversi ke tipe number yaitu short hand ketika membuat Number(value)
        if (+elementValue <= max && +elementValue >= min) {
            props.onChange({
                target: {
                    name: name,
                    value: +elementValue,
                },
            });
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
                    readOnly
                    min={min}
                    max={max}
                    name={name}
                    pattern="[0-9]*"
                    className="form-control"
                    placeholder={placeholder ? placeholder : "0"}
                    value={inputValueAssembly(prefix, value, suffix)}
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
