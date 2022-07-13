import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="left-part">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.945260934202!2d90.42195354999998!3d23.774597800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c783c3404f0d%3A0x76ae0d2edabc81df!2sHatir%20Jheel!5e0!3m2!1sen!2sbd!4v1657729739237!5m2!1sen!2sbd"
            width="800"
            height="450"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <iframe
            width="900"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            className="absolute inset-0"
            title="maruf"
            style={{ border: "none" }}
            src="https://api.mapbox.com/styles/v1/ovimanimon/ckwooc5px0h0e14n3x7vst1nh.html?title=false&access_token=pk.eyJ1Ijoib3ZpbWFuaW1vbiIsImEiOiJja3dvaXZ5eG0wM2FiMnBtbmN3bmFhY2VvIn0.JdfY7_PtutOGnK1kenCCnA&zoomwheel=false#6.21/24.809/90.595"
          ></iframe>
        </div>
        <div className="right-part">
          <form>
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name"
            />
            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
            />
            <textarea
              name="text"
              class="feedback-input"
              placeholder="Comment"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
