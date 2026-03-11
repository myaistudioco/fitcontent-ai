import SEOHead from "../components/SEOHead";
export default function Pricing() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: "'DM Sans', sans-serif",
      color: "#fff",
      padding: "0",
    }}>
  <SEOHead 
  title="Pricing — FitContent AI"
  description="Simple pricing for fitness coaches. Start free, upgrade when ready."
  url="https://fitcontentai.com/pricing"
/>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        .plan-card {
          background: rgba(255,255,255,0.03);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 32px;
          flex: 1;
          transition: all 0.3s;
          position: relative;
        }
        .plan-card:hover { border-color: rgba(255,107,0,0.3); transform: translateY(-4px); }
        .plan-card.popular { border-color: #FF6B00; background: rgba(255,107,0,0.05); }
        .feature-item {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 0; font-size: 14px; color: #aaa;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .checkmark {
          width: 20px; height: 20px; background: rgba(0,200,100,0.1);
          border-radius: 50%; display: flex; align-items: center;
          justify-content: center; font-size: 11px; flex-shrink: 0; color: #00C864;
        }
        .cta-btn {
          width: 100%; padding: 14px; border-radius: 12px; font-size: 15px;
          font-weight: 700; cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: all 0.2s; border: none; margin-top: 24px;
        }
        .cta-btn.primary {
          background: linear-gradient(135deg, #FF6B00, #FF3D00);
          color: white; box-shadow: 0 8px 32px rgba(255,107,0,0.3);
        }
        .cta-btn.primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255,107,0,0.4); }
        .cta-btn.secondary {
          background: rgba(255,255,255,0.05); color: #888;
          border: 1.5px solid rgba(255,255,255,0.1);
        }
        .cta-btn.secondary:hover { background: rgba(255,255,255,0.08); color: #fff; }
        .nav-link { color: #666; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 2, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FITCONTENT AI</span>
        </a>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="/" className="nav-link">Home</a>
          <a href="/pricing" className="nav-link" style={{ color: "#FF6B00" }}>Pricing</a>
          <a href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Try Free</a>
        </div>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "60px 20px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)", borderRadius: 100, padding: "6px 16px", marginBottom: 20, fontSize: 12, fontWeight: 600, color: "#FF6B00", letterSpacing: 1 }}>💰 SIMPLE PRICING</div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: 2, margin: "0 0 16px", lineHeight: 1, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>START FREE. GROW FAST.</h1>
          <p style={{ color: "#666", fontSize: 16, maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>No credit card required to start. Upgrade when you're ready to post more.</p>
          
          {/* Launch banner */}
          <div style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.3)", borderRadius: 100, padding: "8px 20px", fontSize: 13, fontWeight: 600, color: "#FF6B00" }}>
            🎉 Launch Special — 7 days FREE trial! No credit card needed!
          </div>
        </div>

        {/* Plans */}
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 60 }}>

          {/* Free Plan */}
          <div className="plan-card">
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#666", letterSpacing: 1, marginBottom: 8 }}>FREE</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: 48, fontWeight: 700, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 1 }}>$0</span>
                <span style={{ color: "#555", fontSize: 14 }}>/month</span>
              </div>
              <p style={{ color: "#555", fontSize: 13, marginTop: 8 }}>Perfect to try it out</p>
            </div>
            {["5 repurposes per month","3 platforms at once","Basic tones","Copy to clipboard"].map(f => (
              <div key={f} className="feature-item"><span className="checkmark">✓</span>{f}</div>
            ))}
            <button className="cta-btn secondary" onClick={() => window.location.href = "/"}>Get Started Free</button>
          </div>

          {/* Pro Plan */}
          <div className="plan-card popular">
            <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", padding: "4px 16px", borderRadius: 100, fontSize: 11, fontWeight: 700, letterSpacing: 1, whiteSpace: "nowrap" }}>⭐ MOST POPULAR</div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#FF6B00", letterSpacing: 1, marginBottom: 8 }}>PRO</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: 48, fontWeight: 700, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 1, color: "#FF6B00" }}>$9.99</span>
                <span style={{ color: "#555", fontSize: 14 }}>/month</span>
              </div>
              <p style={{ color: "#555", fontSize: 13, marginTop: 8 }}>For serious fitness coaches</p>
            </div>
            {["Unlimited repurposes","All 6 platforms at once","All tones + custom tone","Priority AI processing","Save & organize content","Email support"].map(f => (
              <div key={f} className="feature-item"><span className="checkmark">✓</span>{f}</div>
            ))}
            <button className="cta-btn primary" onClick={() => window.open("https://checkout.dodopayments.com/buy/pdt_0NaGcVBpajCyRGB4J40uq?quantity=1", "_blank")}>
              ⚡ Start Pro — $9.99/mo
            </button>
          </div>

          {/* Agency Plan */}
          <div className="plan-card">
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#666", letterSpacing: 1, marginBottom: 8 }}>AGENCY</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: 48, fontWeight: 700, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 1 }}>$29</span>
                <span style={{ color: "#555", fontSize: 14 }}>/month</span>
              </div>
              <p style={{ color: "#555", fontSize: 13, marginTop: 8 }}>For fitness studios & agencies</p>
            </div>
            {["Everything in Pro","Up to 10 team members","Client management dashboard","White label option","API access","Priority support"].map(f => (
              <div key={f} className="feature-item"><span className="checkmark">✓</span>{f}</div>
            ))}
            <button className="cta-btn secondary" onClick={() => window.open("https://checkout.dodopayments.com/buy/pdt_0NaGdMa3ofaZrEILPS7Tz?quantity=1", "_blank")}>
              Start Agency — $29/mo
            </button>
          </div>

        </div>

        {/* FAQ */}
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 40 }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: 2, marginBottom: 32, textAlign: "center" }}>FREQUENTLY ASKED QUESTIONS</h2>
          {[
            { q: "Do I need a credit card to start?", a: "No! Start with a 7-day free trial. No credit card needed." },
            { q: "Can I cancel anytime?", a: "Yes! Cancel with one click. No questions asked." },
            { q: "What platforms does it support?", a: "Instagram, Twitter/X, TikTok, LinkedIn, Email Newsletter and YouTube." },
            { q: "How good is the AI content?", a: "Powered by AI — the same technology used by top companies worldwide. Content is platform-native and ready to post!" },
          ].map((faq) => (
            <div key={faq.q} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "16px 0" }}>
              <div style={{ fontWeight: 600, marginBottom: 6, fontSize: 15 }}>{faq.q}</div>
              <div style={{ color: "#666", fontSize: 14, lineHeight: 1.6 }}>{faq.a}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <p style={{ color: "#555", fontSize: 14, marginBottom: 20 }}>Join fitness coaches saving 10+ hours every week</p>
          <a href="https://checkout.dodopayments.com/buy/pdt_0NaGcVBpajCyRGB4J40uq?quantity=1" target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", padding: "16px 40px", borderRadius: 14, textDecoration: "none", fontSize: 16, fontWeight: 700, boxShadow: "0 8px 32px rgba(255,107,0,0.3)" }}>⚡ Start Free Trial Today</a>
        </div>

      </div>
    </div>
  );
}
