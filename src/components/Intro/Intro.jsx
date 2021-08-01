import "./Intro.css";

export default function Intro(props) {
  const { showContact, setShowContact } = props;

  return (
    <section className="intro__container" id="intro">
      <h2 className="intro__header intro--first">Junior Software Developer</h2>
      <h2 className="intro__header intro--second">
        Trained at{" "}
        <a
          className="intro__link"
          href="https://northcoders.com/"
          target="_blank"
          rel="noreferrer"
        >
          Northcoders
        </a>
      </h2>
      <p className="intro__description">
        Specialising in JavaScript with a passion for <br />
        learning new technologies
      </p>
      <button className="btn btn-primary" onClick={() => setShowContact(curr=>!curr)}>
        Get in touch
      </button>
      {showContact && <Contact />}
    </section>
  );
}

function Contact(props) {
  return (
    <section className="contact__section">
      <h2>jhunethan23@gmail.com</h2>
      <h2>LinkedIn</h2>
    </section>
  );
}
