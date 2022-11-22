import React from "react";
import IlLoading from "assets/images/loading_move.gif";

function LoadingBlank(props) {
    return (
        <div className="vw-100 vh-100">
            <div className="h-100 d-flex flex-column justify-content-center">
                <img
                    src={IlLoading}
                    alt="Loading illustration"
                    className="mx-auto"
                    width="50px"
                />
            </div>
        </div>
    );
}

export default LoadingBlank;
