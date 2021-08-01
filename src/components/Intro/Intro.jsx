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
      <button
        className="btn btn-primary"
        onClick={() => setShowContact((curr) => !curr)}
      >
        Get in touch
      </button>
      {showContact && <Contact />}
    </section>
  );
}

function Contact(props) {
  const copyEmail = (event) => {
    event.preventDefault();
    const element = document.getElementById("email");
    element.select();
    document.execCommand("copy");
    const button = document.getElementById("copyEmail");
    button.classList.add("btn-outline-success");
    button.classList.remove("btn-secondary");
    button.innerText = "Copied to clipboard!";
  };

  return (
    <section className="contact__section">
      <div className="contact__link--container">
        <a
          className="contact__link fancy"
          href="https://www.linkedin.com/in/ethan-lay-035348213/"
        >
          LinkedIn
        </a>
      </div>
      <div className="contact__link--container">
        <a className="contact__link fancy" href="/" onClick={copyEmail}>
          jhunethan23@gmail.com
        </a>
        <button
          id="copyEmail"
          className="btn btn-secondary"
          onClick={copyEmail}
        >
          Copy to clipboard
        </button>
      </div>

      <input
        readOnly={true}
        type="text"
        value="jhunethan23@gmail.com"
        className="hidden"
        id="email"
      />
    </section>
  );
}
