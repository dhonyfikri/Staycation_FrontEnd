const inputValueAssembly = (prefix, value, suffix) => {
    return `${prefix}${value}${suffix}${
        suffix && Number(value) > 1 ? "s" : ""
    }`;
};

export default inputValueAssembly;
