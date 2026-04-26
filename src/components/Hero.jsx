import SearchBar from "./searchBar";
import logo from "../assets/logo.png";

function Hero({ highlight, filters, activeFilter, onFilterChange, heroFrame }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <div className="hero-badge">
          <img src={logo} alt="" />
          <span>Now serving across your city</span>
        </div>

        <h1>
          Eat. Love. Repeat.
          <span>{highlight}</span>
        </h1>

        <p>
          Delicious meals, delivered to you in minutes. Explore your city&apos;s best restaurants. 
        </p>

        <SearchBar />

        <div className="filter-row" id="discover">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={filter === activeFilter ? "filter-pill active" : "filter-pill"}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-device">
          <div className="hero-device-notch" />
          <img src={heroFrame} alt="" className="hero-outline" />
          <div className="hero-preview-card">
            <p>Tonight&apos;s mood</p>
            <strong>{activeFilter}</strong>
            <span>Handpicked meals and restaurant stories, tailored live.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
