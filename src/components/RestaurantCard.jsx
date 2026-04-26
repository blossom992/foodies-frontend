function RestaurantCard({ title, text, eyebrow, image, accent, index }) {
  return (
    <article
      className={`feature-card feature-card-${accent}`}
      id={index === 0 ? "restaurants" : undefined}
    >
      <div className="feature-card-media">
        <img src={image} alt="" />
      </div>
      <div className="feature-card-copy">
        <p>{eyebrow}</p>
        <h3>{title}</h3>
        <span className="feature-underline" />
        <p>{text}</p>
      </div>
      <div className="feature-sprout feature-sprout-one" />
      <div className="feature-sprout feature-sprout-two" />
    </article>
  );
}

export default RestaurantCard;
