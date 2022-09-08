import Button from "elements/Button";
import React from "react";
import IconText from "./IconText";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-auto" style={{ width: 350 }}>
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instantly and
                            memorable.
                        </p>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="h5 mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">
                                    New Account
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">
                                    Start Booking a Room
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">
                                    Use Payments
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h6 className="h5 mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/career">
                                    Our Careers
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">
                                    Privacy
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/terms">
                                    Terms & Conditions
                                </Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h6 className="h5 mt-2">Connect Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button
                                    isExternal
                                    type="link"
                                    href="mailto:onedhonyreff@gmail.com"
                                >
                                    onedhonyreff@gmail.com
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button
                                    isExternal
                                    type="link"
                                    href="tel:+6285742004696"
                                >
                                    0857 - 4200 - 4696
                                </Button>
                            </li>
                            <li className="list-group-item">
                                <Button
                                    isExternal
                                    type="link"
                                    target="_blank"
                                    href="https://www.google.co.id/maps/place/Aishop+Toserba/@-7.3086411,112.7310312,1623m/data=!3m1!1e3!4m5!3m4!1s0x2dd7fb77d18b24c7:0x57ed66e8c886681!8m2!3d-7.3084304!4d112.7297216!5m1!1e4"
                                >
                                    Staycation, Wonokromo, Surabaya
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2019 • All rights reserved • Staycation
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
