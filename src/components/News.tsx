export const News = () => {
  const news = [
    {
      title: "GGCorp Expands Global Reach with New Tech Hub",
      date: "2024-02-15",
      category: "Expansion",
    },
    {
      title: "Revolutionary Software Platform Launches",
      date: "2024-02-10",
      category: "Technology",
    },
    {
      title: "Sustainable Manufacturing Initiative Announced",
      date: "2024-02-05",
      category: "Sustainability",
    },
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-corporate-dark">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-sm text-primary-DEFAULT mb-2">{item.category}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <div className="text-sm text-gray-500">{item.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};