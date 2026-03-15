import Link from "next/link";
import SEOHead from "../components/SEOHead";

export default function InstagramCaptionGenerator() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>
      <SEOHead
        title="Free Instagram Caption Generator for Fitness Coaches | FitContent AI"
        description="Generate engaging Instagram captions for fitness coaches in 10 seconds. Free AI caption generator that writes motivational, educational and promotional captions automatically."
        url="https://www.fitcontentai.com/instagram-caption-generator"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        .nav-link { color: #666; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .feature-card {
          background: rgba(255,255,255,0.02);
          border: 1.5px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s;
        }
        .feature-card:hover { border-color: rgba(225,48,108,0.3); transform: translateY(-4px); }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 0; }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 2, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FITCONTENT AI</span>
        </Link>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/pricing" className="nav-link">Pricing</Link>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Try Free ⚡</Link>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ background: "rgba(225,48,108,0.04)", borderBottom: "1px solid rgba(225,48,108,0.1)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(225,48,108,0.1)", border: "1px solid rgba(225,48,108,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 24, fontSize: 12, fontWeight: 600, color: "#E1306C", letterSpacing: 1 }}>
            📸 INSTAGRAM CAPTION GENERATOR
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 7vw, 72px)", letterSpacing: 2, lineHeight: 1, marginBottom: 24, background: "linear-gradient(135deg, #fff 0%, #E1306C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            FREE INSTAGRAM CAPTION GENERATOR FOR FITNESS COACHES
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#666", marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            Stop spending an hour writing Instagram captions. Our AI generates engaging, hashtag-rich captions for fitness coaches in 10 seconds — free to start.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #E1306C, #C13584)", color: "#fff", fontWeight: 800, padding: "18px 44px", borderRadius: 12, textDecoration: "none", fontSize: 18, display: "inline-block", boxShadow: "0 8px 32px rgba(225,48,108,0.35)" }}>
            Generate Your Caption Free →
          </Link>
          <p style={{ fontSize: 13, color: "#444", marginTop: 16 }}>
            Free to use · No sign up required · 5 repurposes per month free
          </p>
        </div>
      </section>

      {/* How it works */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: 2, textAlign: "center", marginBottom: 56 }}>
          HOW IT WORKS
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {[
            { icon: "📝", step: "1", title: "Paste Your Content", desc: "Add your workout tip, client story, or fitness advice — even just a few bullet points works perfectly." },
            { icon: "⚡", step: "2", title: "AI Writes Your Caption", desc: "Our AI instantly generates an engaging Instagram caption with the right tone, structure, and hashtags for fitness coaches." },
            { icon: "🚀", step: "3", title: "Copy and Post", desc: "Copy your caption and paste it directly into Instagram. Done in seconds — ready to go live." },
          ].map((item) => (
            <div key={item.step} style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#E1306C", letterSpacing: 1, marginBottom: 8 }}>STEP {item.step}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#666", margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: 2, textAlign: "center", marginBottom: 56 }}>
            WHY FITNESS COACHES USE FITCONTENT AI
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { icon: "🎯", title: "Built for Fitness Coaches", desc: "Every caption is written specifically for fitness coaches — not generic AI output. The tone, hashtags, and structure match what performs on fitness Instagram." },
              { icon: "⏱️", title: "Save 5+ Hours Per Week", desc: "Writing 7 Instagram captions manually takes hours. FitContent AI does it in seconds so you can focus on training clients." },
              { icon: "📸", title: "Every Caption Type Covered", desc: "Motivational, educational, personal story, promotional, behind the scenes — our AI writes every caption type your fitness account needs." },
              { icon: "🏷️", title: "Hashtags Included", desc: "Every caption comes with relevant fitness hashtags automatically — no more guessing which tags to use." },
              { icon: "🆓", title: "Free to Start", desc: "Use FitContent AI free with 5 repurposes per month. No credit card required. Upgrade to Pro at $9.99/month for unlimited captions." },
              { icon: "🔄", title: "6 Platforms at Once", desc: "FitContent AI doesn't just write Instagram captions — it repurposes your content for TikTok, LinkedIn, email, Twitter/X and YouTube simultaneously." },
            ].map((item) => (
              <div key={item.title} className="feature-card">
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#666", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, letterSpacing: 2, textAlign: "center", marginBottom: 48 }}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        {[
          { q: "Is the Instagram caption generator really free?", a: "Yes! You can generate 5 repurposes per month completely free with no sign up required. For unlimited captions, upgrade to Pro at $9.99/month." },
          { q: "Does it include hashtags?", a: "Yes. Every Instagram caption generated by FitContent AI includes relevant fitness hashtags automatically — optimised for fitness coach accounts." },
          { q: "Can it write different types of captions?", a: "Yes. FitContent AI generates motivational, educational, personal story, promotional, and behind-the-scenes captions — whatever tone you select." },
          { q: "How is this different from ChatGPT?", a: "FitContent AI is built specifically for fitness coaches. It understands fitness content, platform-specific formats, and what performs on fitness Instagram — unlike generic AI tools." },
          { q: "Can I use it for multiple platforms?", a: "Yes. FitContent AI repurposes one piece of content into Instagram, TikTok, LinkedIn, email, Twitter/X and YouTube simultaneously." },
        ].map((item) => (
          <div key={item.q} className="faq-item">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.q}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#666", margin: 0 }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1052, margin: "0 auto", background: "rgba(225,48,108,0.05)", border: "1.5px solid rgba(225,48,108,0.2)", borderRadius: 20, padding: "64px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: 2, marginBottom: 16, background: "linear-gradient(135deg, #fff 0%, #E1306C 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            START GENERATING CAPTIONS FREE
          </h2>
          <p style={{ fontSize: 18, color: "#666", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Join fitness coaches who use FitContent AI to save hours every week and grow their Instagram audience faster.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "#fff", fontWeight: 800, padding: "18px 44px", borderRadius: 12, textDecoration: "none", fontSize: 18, display: "inline-block", boxShadow: "0 8px 32px rgba(255,107,0,0.3)" }}>
            ⚡ Try FitContent AI Free
          </Link>
          <p style={{ fontSize: 13, color: "#444", marginTop: 16 }}>
            5 free repurposes per month · Pro at $9.99/month · Agency at $29/month
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.2)", margin: 0 }}>
          © 2026 FitContent AI ·{" "}
          <Link href="/blog" style={{ color: "#FF6B00", textDecoration: "none" }}>Blog</Link>
          {" "}·{" "}
          <Link href="/pricing" style={{ color: "#FF6B00", textDecoration: "none" }}>Pricing</Link>
        </p>
      </footer>

    </div>
  );
}
