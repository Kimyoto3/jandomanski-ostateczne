import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Clock, ArrowRight, BookOpen } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogPage() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
    fetchCategories();
  }, [selectedCategory]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const params = selectedCategory ? { category: selectedCategory } : {};
      const response = await axios.get(`${API}/blog/articles`, { params });
      setArticles(response.data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API}/blog/categories`);
      setCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div data-testid="blog-page" className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[#D4AF37] text-xs tracking-widest mb-4">
              BLOG
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0A192F] mb-6">
              Edukacja finansowa
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Artykuły, poradniki i analizy, które pomogą Ci lepiej zrozumieć 
              świat finansów i podejmować świadome decyzje inwestycyjne.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                data-testid="category-all"
                className={`rounded-sm ${
                  selectedCategory === null
                    ? "bg-[#0A192F] text-white"
                    : "border-slate-200 text-slate-600 hover:border-[#0A192F]"
                }`}
              >
                Wszystkie
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`category-${category.toLowerCase().replace(/\s/g, "-")}`}
                  className={`rounded-sm ${
                    selectedCategory === category
                      ? "bg-[#0A192F] text-white"
                      : "border-slate-200 text-slate-600 hover:border-[#0A192F]"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Szukaj artykułów..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="blog-search-input"
                className="pl-10 rounded-sm border-slate-200 focus:border-[#0A192F] focus:ring-[#0A192F]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-slate-200 aspect-video rounded-sm mb-4" />
                  <div className="h-4 bg-slate-200 rounded w-1/4 mb-3" />
                  <div className="h-6 bg-slate-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-slate-200 rounded w-full" />
                </div>
              ))}
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-[#0A192F] mb-2">
                Brak artykułów
              </h3>
              <p className="text-slate-500">
                Nie znaleziono artykułów pasujących do Twojego wyszukiwania.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  data-testid={`blog-article-card-${article.slug}`}
                  className="group"
                >
                  <Link to={`/blog/${article.slug}`}>
                    <div className="aspect-video bg-slate-100 rounded-sm overflow-hidden mb-5">
                      <img
                        src={article.image_url}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-600 font-normal rounded-sm"
                      >
                        {article.category}
                      </Badge>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock className="w-3 h-3" />
                        {article.read_time} min
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-[#0A192F] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-[#0A192F] font-medium text-sm group-hover:text-[#D4AF37] transition-colors">
                      Czytaj dalej
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="bg-[#0A192F] rounded-sm p-10 md:p-16 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              Chcesz więcej wiedzy?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Umów się na spotkanie, a opowiem Ci więcej o strategiach 
              budowania majątku dopasowanych do Twojej sytuacji.
            </p>
            <Link to="/umow-spotkanie">
              <Button
                data-testid="blog-cta-button"
                className="bg-[#D4AF37] text-[#0A192F] hover:bg-white transition-all duration-300 rounded-sm px-8 py-6 font-semibold"
              >
                Umów bezpłatną konsultację
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
