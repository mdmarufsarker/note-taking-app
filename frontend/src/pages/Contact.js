import React from "react";
// import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Address</div>
              <div className="text-one">Rampura, Hatirjheel</div>
              <div className="text-two">Dhaka 1212</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+88 019-####-####</div>
              {/* <div className="text-two"></div> */}
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">mdmarufsarker.mms@gmail.com</div>
              {/* <div className="text-two"></div> */}
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form action="mailto:mdmarufsarker.mms@gmail.com" method="post" enctype="multipart/form" target>
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Enter your message" col="30" row="5"/>
              </div>
              <div className="button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
