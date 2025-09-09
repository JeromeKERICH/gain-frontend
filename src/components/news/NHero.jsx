import React, { useState } from 'react';

const NewsBlogHero = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'investments', name: 'Investments' },
    { id: 'technology', name: 'Technology' },
    { id: 'energy', name: 'Energy' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'policy', name: 'Policy' }
  ];

  const featuredPost = {
    title: "Gulf-Africa Investment Partnerships Reach Record High in 2025",
    excerpt: "New data shows a 47% increase in cross-continental investments, with technology and renewable energy leading the growth.",
    category: "Investments",
    
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNMCwwIEw2MCw2ME02MCwwIEwwLDYwIi8+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">News & Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest developments, trends, and opportunities in Gulf-Africa investments and partnerships.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#143E37] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{featuredPost.category}</span>
                
                
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center">
                <button className="bg-[#143E37] hover:bg-[#0A1F44] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Read Article
                </button>
                <button className="ml-4 text-gray-500 hover:text-[#143E37] flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-[#143E37] text-white'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#143E37] focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#143E37] p-2 rounded-full">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg className="relative block w-full h-16 text-white" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path fill="currentColor" d="M500,80L0,80L0,0L500,100L1000,0L1000,80L500,80Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default NewsBlogHero;