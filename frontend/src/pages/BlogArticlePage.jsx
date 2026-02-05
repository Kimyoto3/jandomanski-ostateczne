import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft, ArrowRight, Calendar, User } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API}/blog/articles/${slug}`);
      setArticle(response.data);
    } catch (err) {
      setError("Nie znaleziono artykułu");
      console.error("Error fetching article:", err);
    } finally {
      setLoading(false);
    }
  };

  const renderMarkdown = (content) => {
    // Simple markdown to HTML conversion
    return content
      .split("\n")
      .map((line, index) => {
        // Headers
        if (line.startsWith("### ")) {
          return (
            <h3 key={index} className="font-display text-xl font-semibold text-[#0A192F] mt-8 mb-4">
              {line.replace("### ", "")}
            </h3>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2 key={index} className="font-display text-2xl font-bold text-[#0A192F] mt-10 mb-4">
              {line.replace("## ", "")}
            </h2>
          );
        }
        // Bold text
        if (line.startsWith("**") && line.endsWith("**")) {
          return (
            <p key={index} className="font-semibold text-[#0A192F] mt-4 mb-2">
              {line.replace(/\*\*/g, "")}
            </p>
          );
        }
        // List items
        if (line.startsWith("- ")) {
          return (
            <li key={index} className="text-slate-600 ml-4 mb-2">
              {line.replace("- ", "")}
            </li>
          );
        }
        // Regular paragraphs
        if (line.trim()) {
          // Handle inline bold
          const parts = line.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={index} className="text-slate-600 leading-relaxed mb-4">
              {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={i} className="text-[#0A192F] font-semibold">
                      {part.replace(/\*\*/g, "")}
                    </strong>
                  );
                }
                return part;
              })}
            </p>
          );
        }
        return null;
      })
      .filter(Boolean);
  };

  if (loading) {
    return (
      <div data-testid="blog-article-loading" className="min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-16">
          <div className="animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-24 mb-6" />
            <div className="h-10 bg-slate-200 rounded w-3/4 mb-4" />
            <div className="h-6 bg-slate-200 rounded w-1/2 mb-8" />
            <div className="aspect-video bg-slate-200 rounded-sm mb-8" />
            <div className="space-y-3">
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-full" />
              <div className="h-4 bg-slate-200 rounded w-2/3" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div data-testid="blog-article-error" className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-[#0A192F] mb-4">
            {error || "Artykuł nie istnieje"}
          </h1>
          <Link to="/blog">
            <Button className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] rounded-xl">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do bloga
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div data-testid="blog-article-page" className="min-h-screen pt-20">
      {/* Article Header */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Link
            to="/blog"
            data-testid="back-to-blog"
            className="inline-flex items-center text-slate-500 hover:text-[#0A192F] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć do bloga
          </Link>

          <Badge
            variant="secondary"
            className="bg-[#D4AF37]/10 text-[#D4AF37] font-medium rounded-sm mb-4"
          >
            {article.category}
          </Badge>

          <h1
            data-testid="article-title"
            className="font-display text-3xl md:text-4xl font-bold text-[#0A192F] mb-6"
          >
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(article.published_at).toLocaleDateString("pl-PL", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.read_time} min czytania
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-4">
          <div className="aspect-video rounded-sm overflow-hidden shadow-lg">
            <img
              src={article.image_url}
              alt={article.title}
              data-testid="article-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div data-testid="article-content" className="prose-wealth">
            {renderMarkdown(article.content)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-2xl font-bold text-[#0A192F] mb-4">
            Masz pytania dotyczące tego tematu?
          </h2>
          <p className="text-slate-600 mb-8">
            Chętnie omówię szczegóły podczas bezpłatnej konsultacji.
          </p>
          <Link to="/umow-spotkanie">
            <Button
              data-testid="article-cta-button"
              className="bg-[#0A192F] text-white hover:bg-[#D4AF37] hover:text-[#0A192F] transition-all duration-300 rounded-xl px-8 py-6 font-semibold"
            >
              Umów spotkanie
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
