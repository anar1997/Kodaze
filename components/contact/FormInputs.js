import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export default function FormInputs() {
  return (
    <div className="form-inputs">
      <div className="form-divs">
        <form className="form">
          <div className="input-div">
            <label className="input-label" htmlFor="name">
              Full name
              <input className="input" placeholder="Full name" type="text" />
            </label>

            <label className="input-label" htmlFor="name">
              Email adress
              <input
                className="input"
                placeholder="Email address"
                type="text"
              />
            </label>
          </div>
          <div className="input-div">
            <label className="input-label" htmlFor="name">
              Phone number
              <input
                className="input"
                placeholder="Phone number"
                type="number"
              />
            </label>

            <label className="input-label" htmlFor="name">
              Subject
              <input
                className="input"
                placeholder="Write subject"
                type="text"
              />
            </label>
          </div>

          <label className="input-label" htmlFor="name">
            Message
            <textarea
              className="input-textarea"
              rows={10}
              placeholder="Write message"
            ></textarea>
          </label>
          <div className="send-div">
            <button className="send-button">
              <span>Send message</span>{" "}
              <span className="send-span">{">>"}</span>
            </button>
          </div>
        </form>
        <div className="cards">
          <div className="card">
            <div className="div-icon">
              <IoMdMail className="icon" />
            </div>
            <div className="card-text">
                <span>Email adress</span>
                <p>info.kodaze@gmail.com</p>
            </div>
          </div>
          <div className="card">
            <div className="div-icon">
            <BsFillTelephoneFill className="icon" />
            </div>
            <div className="card-text">
                <span>Phone number</span>
                <p>+994 55 230 52 30</p>
            </div>
          </div>
          <div className="card">
            <div className="div-icon">
            <IoLocationSharp className="icon"/>
            </div>
            <div className="card-text">
                <span>Location</span>
                <p>83A Matbuat ave., Baku, Az</p>
            </div>
          </div>
        </div>
        <iframe
          title="location of kodaze company"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.908007861395!2d-0.12577288449632315!3d51.51490367963626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22220c3f07824033!2sShop%2071%2C%20ALG%20ID%20Cards%20t%2Fa%20The%20Lanyard%2C%2075%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2s!4v1676500150509!5m2!1sen!2s"
          className="location"
        ></iframe>
      </div>
    </div>
  );
}
