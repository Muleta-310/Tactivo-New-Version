import './index.css'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <div className="brand-mark" aria-hidden="true">T</div>
            <span className="brand-text">
              Tactivo <strong>Technologies</strong>
            </span>
          </div>

          <nav className="main-nav" aria-label="Primary">
            <a className="active" href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">Clients</a>
            <a href="#">Projects</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </nav>

          <a className="btn btn-header" href="#">Contact Us ↗</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay">
            <div className="container hero-content">
              <p className="eyebrow">TECHNOLOGY / RESILIENT OPERATIONS</p>
              <h1>Technology that moves with your ambition.</h1>
              <p className="hero-sub">
                Practical digital capability for organizations shaping what comes next.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#">Start a conversation ↗</a>
                <a className="text-link" href="#">Discover Tactivo ↗</a>
              </div>
            </div>
          </div>
        </section>

        <section className="clarity section">
          <div className="container two-col">
            <div>
              <p className="eyebrow teal">A BETTER WAY TO MOVE</p>
              <h2>Clarity for the work that matters.</h2>
            </div>
            <div className="right-copy">
              <p className="lead">
                Tactivo Technologies helps organizations across Africa build better ways of
                working through technology, operational insight, and shared ownership.
              </p>
              <p>
                We bring the strategic view and the practical detail into the same room, so
                progress can become visible, measurable, and built to last.
              </p>
              <a className="text-link teal-link" href="#">Meet Tactivo ↗</a>
            </div>
          </div>
        </section>

        <section className="capability section">
          <div className="container two-col">
            <div>
              <p className="eyebrow teal">WHAT WE MAKE POSSIBLE</p>
              <h2>Capability with context.</h2>
            </div>
            <div className="right-copy">
              <p>
                Connected disciplines that help teams simplify complexity and build momentum
                they can keep.
              </p>
            </div>
          </div>

          <div className="container cards-row" aria-hidden="true">
            <div className="card-placeholder" />
            <div className="card-placeholder" />
            <div className="card-placeholder" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
