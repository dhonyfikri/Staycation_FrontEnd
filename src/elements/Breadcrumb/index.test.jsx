import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from ".";

const setup = () => {
    const breadcrumbList = [
        { pageTitle: "Home", pageHref: "" },
        { pageTitle: "House Details", pageHref: "" },
    ];
    const { container } = render(
        <Router>
            <Breadcrumb data={breadcrumbList} />
        </Router>
    );
    const breadcrumb = container.querySelector(`.breadcrumb`);

    return {
        breadcrumb,
    };
};

test("Should have <ol> with className .breadcrumb and have text Home & House Details</ol>", () => {
    const { breadcrumb } = setup();

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home");
    expect(breadcrumb).toHaveTextContent("House Details");
});
