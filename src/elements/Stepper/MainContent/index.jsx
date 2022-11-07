import React from "react";
import { Fade } from "react-reveal";

function MainContent({ data, current }) {
    return <Fade>{data[current] && data[current].content}</Fade>;
}

export default MainContent;
