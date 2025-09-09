import React from 'react';

const BlogBody = () => {
  const additionalNews = [
    {
      id: 1,
      title: "Renewable Energy Projects Attract $2.3B in Gulf Investments",
      excerpt: "Solar and wind energy initiatives across East Africa have secured significant funding from Gulf-based investors, signaling growing confidence in Africa's renewable sector.",
      category: "Energy",
      date: "May 12, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Tech Startups Bridge Gulf-Africa Digital Divide",
      excerpt: "African fintech companies are partnering with Gulf investors to expand digital payment solutions across the continent, creating new economic opportunities.",
      category: "Technology",
      date: "May 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  

  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {additionalNews.map((news) => (
                <article key={news.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">{news.category}</span>
                      
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#143E37] transition-colors">
                      {news.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {news.excerpt}
                    </p>
                    
                    <button className="text-[#143E37] font-medium hover:underline flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-[#143E37] to-[#0A1F44] rounded-2xl p-6 md:p-8 text-white mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
                  <p className="text-gray-200">Subscribe to our newsletter for the latest insights on Gulf-Africa investments and partnerships.</p>
                </div>
                <div className="w-full md:w-auto">
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="px-4 py-3 rounded-lg text-white outline-white focus:ring-2 focus: border-white ring-white flex-1"
                    />
                    <button
                      type="submit"
                      className="bg-white text-[#143e37] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            
          </div>

          

          

         
          </div>
        </div>
    </section>
  );
};

export default BlogBody;