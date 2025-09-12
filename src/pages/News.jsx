import React, { useEffect } from 'react'
import NewsBlogHero from '../components/news/NHero'
import BlogBody from '../components/news/Nbody'

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <NewsBlogHero/>
      <BlogBody/>
    </div>
  )
}

export default News
