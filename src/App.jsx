import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RestaurantCard from "./components/RestaurantCard";
import restaurantImage from "./assets/restaurant.png";
import heroFrame from "./assets/hero.png";

const cuisineHighlights = ["Fast delivery", "Fresh bowls", "Weekend treats"];

const featureCards = [
  {
    title: "Restaurants",
    text: "Step into restaurants that go beyond food, offering rich flavors, inviting spaces, and moments you'll want to come back for again and again.",
    eyebrow: "Curated picks",
    image: restaurantImage,
    accent: "olive",
  },
  {
    title: "Chef Specials",
    text: "Taste handpicked signature meals, seasonal plates, and comforting favorites designed to brighten lunch breaks and dinner plans.",
    eyebrow: "Trending today",
    image: restaurantImage,
    accent: "cream",
  },
];

const quickFilters = ["Near me", "Healthy", "Budget-friendly", "Late night"];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(quickFilters[0]);
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHighlightIndex((current) => (current + 1) % cuisineHighlights.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <main className="app-frame">
        <Navbar
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((open) => !open)}
        />

        <Hero
          highlight={cuisineHighlights[highlightIndex]}
          filters={quickFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          heroFrame={heroFrame}
        />

        <section className="section-heading">
          <div>
            <p className="section-label">Why Foodies</p>
            <h2>Experience the joy of food discovery</h2>
          </div>
          <p>
            Foodies is more than just a delivery service — it&apos;s your gateway to the best meals and stories from your city. 
          </p>
        </section>

        <section className="cards-grid" aria-label="Food discovery sections">
          {featureCards.map((card, index) => (
            <RestaurantCard key={card.title} {...card} index={index} />
          ))}
        </section>

        <section className="metrics-panel" aria-label="Service highlights">
          <article>
            <strong>12 min</strong>
            <span>Average delivery to nearby zones</span>
          </article>
          <article>
            <strong>50+</strong>
            <span>Partner kitchens and neighborhood spots</span>
          </article>
          <article>
            <strong>4.9/5</strong>
            <span>Loved for speed, taste, and reliable service</span>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
