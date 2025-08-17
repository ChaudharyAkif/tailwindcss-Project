import React from 'react'

const ArticlesSection = () => {
  const articles = [
    {
      title: "Getting Started with React: A Beginner's Guide",
      description: "Learn the fundamentals of React.js and build your first component.",
      iframe: "https://www.youtube.com/embed/GBu1DLwb-TM?si=97lHz_5h83aiHvVL",
    },
    {
      title: "Python for Data Science: Essential Libraries",
      description: "Explore the most important Python libraries for data analysis and visualization.",
      iframe: "https://www.youtube.com/embed/4jA96fnRPFU?si=WJLtG0JlqbbndlcA",
    },
    {
      title: "Mastering Tailwind CSS for Responsive Design",
      description: "Dive deep into Tailwind CSS to create stunning and responsive web interfaces.",
      iframe: "https://www.youtube.com/embed/8eRH7iSwSQU?si=041aOxC_rIldoAvQ",
    },
  ]

  return (
    <>
      <section className="py-20 md:py-32 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Latest Articles & Tutorials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <iframe
                  width="100%"
                  height="200"
                  src={article.iframe}
                  title={article.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="group-hover:scale-105 transition-transform duration-300"
                ></iframe>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{article.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ArticlesSection
