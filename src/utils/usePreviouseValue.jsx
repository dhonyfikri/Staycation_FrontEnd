const { useEffect, useRef } = require("react");

const usePreviouseValue = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

export default usePreviouseValue;
