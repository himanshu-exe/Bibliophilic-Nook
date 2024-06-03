import React from "react";
import Layout from "../components/layout/Layout";

const Policies = () => {
    return (
        <Layout title={"Policies"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h5>PRIVACY NOTICE</h5>
<p>
                        Last updated : September 23, 2023

                        This privacy notice from Book Store describes how and why we might collect, store, use, and/or share your information when you use our services such as when you:
                        Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at flexx@yahoo.com .
                        </p>

            </div>
        </div>
        </Layout >
    );
};

export default Policies;