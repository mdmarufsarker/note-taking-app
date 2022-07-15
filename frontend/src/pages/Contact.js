import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.send(serviceID, templateID, templateParams, publicKey);
    emailjs
      .send("service_hlpp5v7", "template_vw5thuq", values, "xGlQWSinaq5g6MroQ")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            name: "",
            email: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);
  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
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
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                  label="Full Name"
                  required
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  label="Email"
                  required
                />
              </div>
              <div className="input-box message-box">
                <textarea
                  placeholder="Enter your message"
                  col="30"
                  row="5"
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                  label="Message"
                  required
                />
              </div>
              <div className="button" style={{display: "flex"}}>
                <input
                  type="submit"
                  value="Send Now"
                  style={{ marginRight: "10px" }}
                />
                {status && renderAlert()}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const renderAlert = () => (
  <div className="redAlert">
    <p>your message submitted successfully</p>
  </div>
);

export default Contact;
