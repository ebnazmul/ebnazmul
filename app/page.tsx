const interests = [
  {
    title: "Frontend",
    description:
      "Building responsive interfaces with careful structure, clear states, and maintainable code.",
  },
  {
    title: "Linux",
    description:
      "Learning the systems underneath the browser and keeping the development environment close to the metal.",
  },
  {
    title: "Security",
    description:
      "Studying how software fails so the things I build can fail less often and more safely.",
  },
];

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <nav aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Nazmul, back to top">
          n<span>:</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="mailto:bar@nazmul.foo">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="status">
            <span aria-hidden="true" />
            Available on the open web
          </p>
          <h1>
            I build for the
            <strong> useful side</strong> of the web.
          </h1>
          <p className="intro">
            Hi, I&apos;m Nazmul. A frontend developer, Linux enthusiast,
            and security learner who cares about the details people notice
            and the systems they do not.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="mailto:bar@nazmul.foo">
              Send an email
              <Arrow />
            </a>
            <a
              className="text-action"
              href="https://github.com/ebnazmul"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <Arrow />
            </a>
          </div>
        </div>

        <div className="signal" aria-hidden="true">
          <div className="signal-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core">n:</div>
          <p>frontend / linux / security</p>
        </div>
      </section>

      <section className="statement" id="about">
        <p>My approach</p>
        <h2>
          Understand the system.
          <br />
          Make the interface obvious.
        </h2>
        <p className="statement-copy">
          The best web experiences feel straightforward because someone did
          the complicated thinking first. I like working at that boundary,
          where implementation choices become everyday interactions.
        </p>
      </section>

      <section className="focus" id="focus">
        <div className="section-heading">
          <h2>What I&apos;m focused on</h2>
          <p>Three connected disciplines, one continuously improving craft.</p>
        </div>
        <div className="focus-list">
          {interests.map((interest, index) => (
            <article key={interest.title}>
              <span>0{index + 1}</span>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <p>Have something worth building?</p>
          <a href="mailto:bar@nazmul.foo">bar@nazmul.foo</a>
        </div>
        <p className="footer-note">
          Designed and built by Nazmul.
          <br />
          Source lives on GitHub.
        </p>
      </footer>
    </main>
  );
}
