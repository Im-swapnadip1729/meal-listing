import './HeroStrip.css'

export default function HeroStrip({ total, featuredMeal, onSelect, isFavorite, onToggleFavorite }) {
  const title = featuredMeal?.strMeal || 'Golden comfort bowls'
  const detail = featuredMeal
    ? `${featuredMeal.strArea || 'Global'} • ${featuredMeal.strCategory || 'Recipe'}`
    : 'Warm spices, cozy textures, and full flavor.'

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (featuredMeal) onSelect?.(featuredMeal)
    }
  }

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <span className="hero__eyebrow">🌿 Fresh recipes, every day</span>
          <h1 className="hero__title">
            Find a dish that feels like <span className="hero__accent">home</span>.
          </h1>
          <p className="hero__sub">
            Browse {total > 0 ? total.toLocaleString() : '293'} inspiring meals from around the world,
            from cozy comfort food to vibrant street favorites.
          </p>

          <div className="hero__chips">
            <span className="hero__chip">🥘 {total > 0 ? total.toLocaleString() : '293'} recipes</span>
            <span className="hero__chip">✨ Easy to explore</span>
          </div>
        </div>

        <div className="hero__showcase">
          <div
            className={`hero__showcase-card${featuredMeal ? ' hero__showcase-card--interactive' : ''}`}
            onClick={() => featuredMeal && onSelect?.(featuredMeal)}
            role={featuredMeal ? 'button' : undefined}
            tabIndex={featuredMeal ? 0 : undefined}
            onKeyDown={handleKeyDown}
          >
            <div className="hero__showcase-media">
              {featuredMeal?.strMealThumb && (
                <img src={featuredMeal.strMealThumb} alt={title} className="hero__showcase-image" />
              )}
            </div>
            <div className="hero__showcase-content">
              <span className="hero__showcase-badge">Today’s pick</span>
              <h2>{title}</h2>
              <p>{detail}</p>
            </div>
            <button
              className={`hero__favorite-btn${isFavorite ? ' active' : ''}`}
              onClick={(event) => {
                event.stopPropagation()
                onToggleFavorite?.()
              }}
              aria-label={isFavorite ? 'Remove favorite' : 'Add favorite'}
              type="button"
            >
              {isFavorite ? '♥' : '♡'}
            </button>
          </div>
          <div className="hero__emojis" aria-hidden="true">
            {['🍜','🥘','🍕','🍣','🥗','🍛'].map((e, i) => (
              <span key={i} className="hero__emoji" style={{ '--i': i }}>{e}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
