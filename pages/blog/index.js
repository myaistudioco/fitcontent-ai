import Link from "next/link";
import SEOHead from "../../components/SEOHead";

const articles = [
  {
    slug: "how-to-repurpose-fitness-content",
    badge: "Content Strategy",
    badgeColor: "#FF6B00",
    title: "How to Repurpose Fitness Content Across 6 Platforms in 2026",
    description: "Stop creating content from scratch every day. Learn how to turn one piece of fitness content into posts for Instagram, TikTok, LinkedIn, email and more.",
    readTime: "6 min read",
  },
  {
    slug: "instagram-captions-for-fitness-coaches",
    badge: "Instagram",
    badgeColor: "#E1306C",
    title: "50 Instagram Captions for Fitness Coaches That Get More Followers",
    description: "Copy these proven Instagram captions and adapt them to your brand. Includes motivational, educational, and promotional captions.",
    readTime: "8 min read",
  },
  {
    slug: "tiktok-hooks-for-fitness-coaches",
    badge: "TikTok",
    badgeColor: "#69C9D0",
    title: "30 TikTok Hooks for Fitness Coaches That Stop the Scroll",
    description: "The first 3 seconds decide everything on TikTok. Use these proven hooks to grab attention and keep viewers watching.",
    readTime: "7 min read",
  },
  {
    slug: "email-newsletter-fitness-coach",
    badge: "Email",
    badgeColor: "#F59E0B",
    title: "How to Write a Fitness Coach Email Newsletter That People Actually Read",
    description: "Most fitness coach newsletters get ignored. Learn the exact formula for writing emails your subscribers look forward to receiving.",
    readTime: "6 min read",
  },
  {
    slug: "linkedin-tips-for-fitness-coaches",
    badge: "LinkedIn",
    badgeColor: "#0077B5",
    title: "LinkedIn Tips for Fitness Coaches — How to Get Clients From LinkedIn in 2026",
    description: "LinkedIn is the most underused platform for fitness coaches. Learn how to position yourself and attract high-paying clients.",
    readTime: "7 min read",
  },
];

export default function BlogIndex() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>
      <SEOHead
        title="Blog — Fitness Content Tips & Strategy | FitContent AI"
        description="Free guides for fitness coaches on Instagram captions, TikTok hooks, email newsletters, and LinkedIn. Practical tips to grow your audience faster."
        url="https://www.fitcontentai.com/blog"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        .article-card {
          background: rgba(255,255,255,0.02);
          border: 1.5px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          padding: 28px;
          text-decoration: none;
          color: inherit;
          display: block;
          transition: all 0.3s;
        }
        .article-card:hover {
          border-color: rgba(255,107,0,0.3);
          transform: translateY(-4px);
          background: rgba(255,107,0,0.03);
        }
        .nav-link { color: #666; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 2, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FITCONTENT AI</span>
        </Link>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Try Free ⚡</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "64px 24px 48px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 20, fontSize: 12, fontWeight: 600, color: "#FF6B00", letterSpacing: 1 }}>
          📝 FITCONTENT BLOG
        </div>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: 2, margin: "0 0 16px", lineHeight: 1, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          FITNESS CONTENT TIPS
        </h1>
        <p style={{ color: "#666", fontSize: 16, lineHeight: 1.6, maxWidth: 480, margin: "0 auto" }}>
          Free guides for fitness coaches on Instagram, TikTok, email, and LinkedIn. Grow your audience faster with less effort.
        </p>
      </section>

      {/* Articles */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {articles.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="article-card">
              <div style={{ marginBottom: 14 }}>
                <span style={{ background: article.badgeColor + "22", color: article.badgeColor, fontWeight: 700, fontSize: 11, padding: "4px 12px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {article.badge}
                </span>
              </div>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10, lineHeight: 1.4 }}>
                {article.title}
              </h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginBottom: 16 }}>
                {article.description}
              </p>
              <span style={{ fontSize: 13, color: "#FF6B00", fontWeight: 600 }}>
                {article.readTime} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ maxWidth: 1052, margin: "0 auto 80px", padding: "0 24px" }}>
        <div style={{ background: "rgba(255,107,0,0.05)", border: "1.5px solid rgba(255,107,0,0.2)", borderRadius: 20, padding: "48px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: 2, marginBottom: 12, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            STOP WRITING CONTENT MANUALLY
          </h2>
          <p style={{ color: "#666", marginBottom: 28, fontSize: 16, maxWidth: 480, margin: "0 auto 28px" }}>
            Turn one piece of fitness content into posts for all 6 platforms in 10 seconds — completely free to start.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", fontWeight: 700, padding: "14px 36px", borderRadius: 12, textDecoration: "none", fontSize: 16, display: "inline-block", boxShadow: "0 8px 32px rgba(255,107,0,0.3)" }}>
            ⚡ Try FitContent AI Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.2)", margin: 0 }}>
          © 2026 FitContent AI · Built for fitness coaches
        </p>
      </footer>

    </div>
  );
}
