import React from 'react';
import './index.css'; // You can customize styles in this CSS file

const Services = () => {
    return (
        <div className="services-container">
            <h2 className="services-title">My Services</h2>
            <div className="services-cards">
                {/* Web Development Card */}
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Web Development</h3>
                        <p className="card-text">
                            As a web developer, I create dynamic and functional websites using a
                            combination of front-end and back-end technologies. I specialize in building responsive,
                            user-friendly interfaces that enhance the user experience. Whether it’s
                            an e-commerce site, a blog, or a custom web application, I bring ideas to life through code.
                        </p>
                    </div>
                </div>

                {/* UI Development Card */}
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">UI Development</h3>
                        <p className="card-text">
                            UI (User Interface) development focuses on creating the visual elements of a website or application.
                            I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript.
                            My goal is to ensure that users have a
                            seamless and enjoyable experience while interacting with your product.
                        </p>
                    </div>
                </div>

                {/* UI Design Card */}
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">UI Design</h3>
                        <p className="card-text">
                            UI design is all about aesthetics and usability. As a UI designer,
                            I craft visually appealing layouts, choose color schemes, and create intuitive navigation. I pay attention to details like typography,
                            spacing, and consistency. My designs aim to enhance the overall look and
                            feel of your digital product.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;