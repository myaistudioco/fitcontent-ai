import Link from "next/link";
import SEOHead from "../components/SEOHead";

export default function EmailNewsletterGenerator() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>
      <SEOHead
        title="Free Email Newsletter Generator for Fitness Coaches | FitContent AI"
        description="Generate engaging email newsletters for fitness coaches in 10 seconds. Free AI newsletter generator that writes subject lines, body copy and calls to action automatically."
        url="https://www.fitcontentai.com/email-newsletter-generator"
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
        .feature-card:hover { border-color: rgba(245,158,11,0.3); transform: translateY(-4px); }
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
      <section style={{ background: "rgba(245,158,11,0.04)", borderBottom: "1px solid rgba(245,158,11,0.1)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 24, fontSize: 12, fontWeight: 600, color: "#F59E0B", letterSpacing: 1 }}>
            📧 EMAIL NEWSLETTER GENERATOR
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 7vw, 72px)", letterSpacing: 2, lineHeight: 1, marginBottom: 24, background: "linear-gradient(135deg, #fff 0%, #F59E0B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            FREE EMAIL NEWSLETTER GENERATOR FOR FITNESS COACHES
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#666", marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            Stop staring at a blank email every week. Our AI generates complete fitness coach email newsletters — subject line, body copy, and call to action — in 10 seconds.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #F59E0B, #D97706)", color: "#fff", fontWeight: 800, padding: "18px 44px", borderRadius: 12, textDecoration: "none", fontSize: 18, display: "inline-block", boxShadow: "0 8px 32px rgba(245,158,11,0.35)" }}>
            Generate Your Newsletter Free →
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
            { icon: "📝", step: "1", title: "Paste Your Content Idea", desc: "Add your fitness tip, client story, or weekly insight. Even rough notes or bullet points work perfectly." },
            { icon: "⚡", step: "2", title: "AI Writes Your Newsletter", desc: "Our AI instantly generates a complete email newsletter — engaging subject line, personal body copy, and a clear call to action." },
            { icon: "🚀", step: "3", title: "Copy and Send", desc: "Copy your newsletter into Mailchimp, Beehiiv, ConvertKit, or any email tool. Done in seconds." },
          ].map((item) => (
            <div key={item.step} style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#F59E0B", letterSpacing: 1, marginBottom: 8 }}>STEP {item.step}</div>
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
              { icon: "🎯", title: "Built for Fitness Coaches", desc: "Every newsletter is written specifically for fitness coaches — the tone, structure, and content match what resonates with fitness audiences." },
              { icon: "⏱️", title: "Save Hours Every Week", desc: "Writing a weekly newsletter manually takes 1-2 hours. FitContent AI does it in 10 seconds so you can focus on coaching clients." },
              { icon: "📧", title: "Subject Lines That Get Opened", desc: "Our AI writes curiosity-driven subject lines that get 40%+ open rates — not generic titles that get ignored in a crowded inbox." },
              { icon: "💰", title: "Convert Subscribers to Clients", desc: "A well-written newsletter is your highest-converting marketing channel. FitContent AI writes emails that build trust and sell your coaching naturally." },
              { icon: "🆓", title: "Free to Start", desc: "Use FitContent AI free with 5 repurposes per month. No credit card required. Upgrade to Pro at $9.99/month for unlimited newsletters." },
              { icon: "🔄", title: "6 Platforms at Once", desc: "FitContent AI doesn't just write email newsletters — it repurposes your content for Instagram, TikTok, LinkedIn, Twitter/X and YouTube simultaneously." },
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
          { q: "Is the email newsletter generator really free?", a: "Yes! You can generate 5 repurposes per month completely free with no sign up required. For unlimited newsletters, upgrade to Pro at $9.99/month." },
          { q: "Does it write the subject line too?", a: "Yes. FitContent AI generates a complete newsletter including a curiosity-driven subject line, personal body copy, and a clear call to action — all in one click." },
          { q: "Which email platforms does it work with?", a: "FitContent AI generates plain text that works with any email platform — Mailchimp, Beehiiv, ConvertKit, Substack, ActiveCampaign, or any other tool you use." },
          { q: "How is this different from ChatGPT?", a: "FitContent AI is built specifically for fitness coaches. It understands fitness content, email newsletter structure, and what converts fitness subscribers into paying clients." },
          { q: "Can I use it for multiple platforms?", a: "Yes. FitContent AI repurposes one piece of content into an email newsletter, Instagram captions, TikTok hooks, LinkedIn posts, Twitter/X threads and YouTube descriptions simultaneously." },
        ].map((item) => (
          <div key={item.q} className="faq-item">
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{item.q}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#666", margin: 0 }}>{item.a}</p>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ maxWidth: 1052, margin: "0 auto", background: "rgba(245,158,11,0.05)", border: "1.5px solid rgba(245,158,11,0.2)", borderRadius: 20, padding: "64px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48, letterSpacing: 2, marginBottom: 16, background: "linear-gradient(135deg, #fff 0%, #F59E0B 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            START GENERATING NEWSLETTERS FREE
          </h2>
          <p style={{ fontSize: 18, color: "#666", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Join fitness coaches who use FitContent AI to send newsletters that get opened, read, and convert subscribers into clients.
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
