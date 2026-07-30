import './HeroStrip.css'

export default function HeroStrip({ total }) {
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

        <div className="hero__showcase" aria-hidden="true">
          <div className="hero__showcase-card">
            <span className="hero__showcase-badge">Today’s pick</span>
            <h2>Golden comfort bowls</h2>
            <p>Warm spices, cozy textures, and full flavor.</p>
          </div>
          <div className="hero__emojis">
            {['🍜','🥘','🍕','🍣','🥗','🍛'].map((e, i) => (
              <span key={i} className="hero__emoji" style={{ '--i': i }}>{e}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
