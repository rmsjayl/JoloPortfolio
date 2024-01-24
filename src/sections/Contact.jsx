import { useState } from "react";
import CONTACTSTYLE from "@styles/components/contacts.module.css";

const Contact = () => {
  const [sendInfo, setSendInfo] = useState({
    name: "",
    message: "",
  });

  const handleChange = (event, name) => {
    setSendInfo({ ...sendInfo, [name]: event.target.value });
  };

  const handleSendMessage = (e) => {
    const { name, message } = sendInfo;
    const subject = encodeURIComponent("Jolo Ramos - Portfolio: Inquire");
    const body = encodeURIComponent(`Name: ${name}\n\nMessage: ${message}`);
    const mailtoLink = `mailto:rmsjayl.dev@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    e.preventDefault();
  };

  return (
    <section className={CONTACTSTYLE.contacts} id="Contact">
      <div className={CONTACTSTYLE.form}>
        <div className={CONTACTSTYLE.formWrapper}>
          <div className={CONTACTSTYLE.headerForm}>
            <p> Let's talk!</p>
          </div>

          <div className={CONTACTSTYLE.inputBox}>
            <form
              className={CONTACTSTYLE.formContainer}
              name="contact"
              method="post"
              action="/success"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className={CONTACTSTYLE.formGroup}>
                <input
                  className={CONTACTSTYLE.formControl}
                  type="text"
                  name="name"
                  value={sendInfo.name}
                  onChange={(event) => handleChange(event, "name")}
                  placeholder="State your name"
                  required
                />
              </div>

              <div className={CONTACTSTYLE.formGroup}>
                <textarea
                  className={CONTACTSTYLE.formControl}
                  cols="40"
                  rows={5}
                  placeholder="Compose a message"
                  required
                  name="message"
                  value={sendInfo.message}
                  onChange={(event) => handleChange(event, "message")}
                ></textarea>
              </div>

              <button
                className={CONTACTSTYLE.buttonSubmit}
                type="submit"
                value="Send Message"
                onClick={handleSendMessage}
              >
                Send me a message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={CONTACTSTYLE.paragraph}>
        <div className={CONTACTSTYLE.paragraphWrapper}>
          <div className={CONTACTSTYLE.joloDetails}>
            <ul className={CONTACTSTYLE.information}>
              <li>GMAIL — rmsjayl.dev@gmail.com</li>
              <li>LINKEDIN — in/jaylordramos</li>
              <li>GITHUB — jolouste</li>
            </ul>
          </div>

          <hr className={CONTACTSTYLE.lineBreak} />

          <div className={CONTACTSTYLE.farewellMessage}>
            <p>
              {" "}
              Let's connect and explore exciting possibilities to innovate in
              software projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
