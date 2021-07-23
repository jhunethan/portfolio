import "./Intro.css";

export default function Intro() {
  return (
    <section className="intro__container">
      <h2 className="intro__header intro--first">Junior Software Developer</h2>
      <h2 className="intro__header intro--second">Trained at <a className="intro__link" href="https://northcoders.com/">Northcoders</a></h2>
      <p className="intro__description">
        Specialising in JavaScript with a passion for <br />
        learning new technologies
      </p>
      <button className="btn btn-primary" >Get in touch</button>
    </section>
  );
}
