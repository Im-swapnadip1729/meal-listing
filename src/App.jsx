import { useState, useMemo, useEffect } from 'react'
import { useMeals } from './hooks/useMeals'
import Navbar from './components/Navbar'
import HeroStrip from './components/HeroStrip'
import Controls from './components/Controls'
import MealGrid from './components/MealGrid'
import MealModal from './components/MealModal'
import Pagination from './components/Pagination'
import './App.css'

export default function App() {
  const [page, setPage]         = useState(1)
  const [search, setSearch]     = useState('')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('meal-favorites') || '[]')
      return Array.isArray(saved) ? saved : []
    } catch {
      return []
    }
  })

  const { meals, loading, error, totalPages, totalItems, retry } = useMeals(page, 12)

  // collect unique categories from current page
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(meals.map(m => m.strCategory).filter(Boolean))]
    return cats
  }, [meals])

  const filtered = useMemo(() => {
    return meals.filter(m => {
      const matchSearch = search === '' ||
        m.strMeal.toLowerCase().includes(search.toLowerCase()) ||
        (m.strArea || '').toLowerCase().includes(search.toLowerCase()) ||
        (m.strCategory || '').toLowerCase().includes(search.toLowerCase())
      const matchCat = category === 'All' || m.strCategory === category
      return matchSearch && matchCat
    })
  }, [meals, search, category])

  const featuredMeal = useMemo(() => {
    if (!meals.length) return null
    const todayIndex = (new Date().getDate() + page - 1) % meals.length
    return meals[todayIndex]
  }, [meals, page])

  useEffect(() => {
    localStorage.setItem('meal-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (meal) => {
    setFavorites(current => {
      const exists = current.some(item => item.idMeal === meal.idMeal)
      if (exists) {
        return current.filter(item => item.idMeal !== meal.idMeal)
      }
      return [...current, meal]
    })
  }

  const handlePageChange = (p) => {
    setPage(p)
    setSearch('')
    setCategory('All')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar />
      <HeroStrip
        total={totalItems}
        featuredMeal={featuredMeal}
        onSelect={() => featuredMeal && setSelected(featuredMeal)}
        isFavorite={!!featuredMeal && favorites.some(item => item.idMeal === featuredMeal.idMeal)}
        onToggleFavorite={() => featuredMeal && toggleFavorite(featuredMeal)}
      />

      <main className="app__main">
        <Controls
          search={search}
          onSearch={setSearch}
          categories={categories}
          category={category}
          onCategory={setCategory}
          count={filtered.length}
          loading={loading}
        />

        <MealGrid
          meals={filtered}
          loading={loading}
          error={error}
          onSelect={setSelected}
          onRetry={retry}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />

        {!loading && !error && (
          <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
        )}
      </main>

      {selected && (
        <MealModal
          meal={selected}
          onClose={() => setSelected(null)}
          isFavorite={favorites.some(item => item.idMeal === selected.idMeal)}
          onToggleFavorite={() => toggleFavorite(selected)}
        />
      )}
    </div>
  )
}
