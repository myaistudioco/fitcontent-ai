import Link from "next/link";
import SEOHead from "../../components/SEOHead";

const hooks = [
  {
    category: "Myth-Busting Hooks",
    color: "#69C9D0",
    items: [
      { number: 1, text: "Everything you know about losing belly fat is wrong. Here's the truth..." },
      { number: 2, text: "Stop doing crunches. I'm a fitness coach and here's why they're wasting your time..." },
      { number: 3, text: "You don't need to go to the gym to get fit. Watch this..." },
      { number: 4, text: "Cardio is not the best way to lose fat. A fitness coach explains..." },
      { number: 5, text: "The reason you're not losing weight has nothing to do with your diet..." },
      { number: 6, text: "Working out 6 days a week is actually slowing your progress. Here's why..." },
      { number: 7, text: "Protein shakes are not necessary to build muscle. Watch before you buy another tub..." },
      { number: 8, text: "The fitness industry lied to you about how long results take..." },
    ]
  },
  {
    category: "Curiosity & Intrigue Hooks",
    color: "#FF6B00",
    items: [
      { number: 9, text: "I tried working out for 30 days straight. Here's what actually happened..." },
      { number: 10, text: "My client lost 15kg without changing their diet. This is how..." },
      { number: 11, text: "I've trained over 200 people. The ones who fail all have this one thing in common..." },
      { number: 12, text: "The workout I give every single new client regardless of their goal..." },
      { number: 13, text: "What happens to your body if you stop working out for 2 weeks? The answer might surprise you..." },
      { number: 14, text: "I asked 10 fitness coaches what they'd do if they had to start from zero. Here's what they said..." },
      { number: 15, text: "The cheapest fitness investment I ever made changed my entire coaching business..." },
      { number: 16, text: "This one exercise burns more calories than running. Most people have never tried it..." },
    ]
  },
  {
    category: "Transformation & Results Hooks",
    color: "#E1306C",
    items: [
      { number: 17, text: "She came to me after 10 years of failed diets. 6 months later..." },
      { number: 18, text: "Before I became a coach I was 20kg overweight. Here's exactly what I changed..." },
      { number: 19, text: "My client went from zero gym experience to deadlifting twice his bodyweight in 12 months..." },
      { number: 20, text: "The 3 things I changed in my own routine that finally got me results after years of spinning my wheels..." },
      { number: 21, text: "She lost 8kg in 8 weeks without going to the gym once. Here's the full breakdown..." },
      { number: 22, text: "I used to hate my body. Now I help others love theirs. This is my story..." },
    ]
  },
  {
    category: "Educational & Value Hooks",
    color: "#F59E0B",
    items: [
      { number: 23, text: "3 signs your workout programme is actually working that have nothing to do with the scale..." },
      { number: 24, text: "The exact meal I eat before every training session as a fitness coach..." },
      { number: 25, text: "Here's what a perfect training week looks like for a busy professional..." },
      { number: 26, text: "5 exercises you can do at your desk that actually build muscle..." },
      { number: 27, text: "The morning routine that helped my clients lose weight without changing their workouts..." },
      { number: 28, text: "If I could only do 4 exercises for the rest of my life, it would be these..." },
    ]
  },
  {
    category: "Relatable & Emotional Hooks",
    color: "#7C3AED",
    items: [
      { number: 29, text: "If you've ever started a fitness programme and quit within 2 weeks, watch this..." },
      { number: 30, text: "For everyone who feels like they've tried everything and nothing works..." },
    ]
  },
];

export default function TiktokHooksForFitnessCoaches() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", fontFamily: "'DM Sans', sans-serif", color: "#fff" }}>
      <SEOHead
        title="30 TikTok Hooks for Fitness Coaches That Stop the Scroll | FitContent AI"
        description="Copy these 30 proven TikTok hooks for fitness coaches. Myth-busting, curiosity, transformation and educational hooks ready to use."
        url="https://www.fitcontentai.com/blog/tiktok-hooks-for-fitness-coaches"
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        .nav-link { color: #666; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #fff; }
        .hook-card {
          background: rgba(255,255,255,0.02);
          border: 1.5px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 20px 24px;
          margin-bottom: 12px;
          transition: border-color 0.2s;
        }
        .hook-card:hover { border-color: rgba(105,201,208,0.3); }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 24, letterSpacing: 2, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>FITCONTENT AI</span>
        </Link>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Link href="/blog" className="nav-link">← Back to Blog</Link>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "white", padding: "8px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 700 }}>Try Free ⚡</Link>
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px" }}>

        {/* Badge */}
        <div style={{ marginBottom: 20 }}>
          <span style={{ background: "rgba(105,201,208,0.12)", color: "#69C9D0", fontWeight: 700, fontSize: 11, padding: "4px 14px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            🎵 TikTok
          </span>
        </div>

        {/* H1 */}
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: 2, lineHeight: 1.1, marginBottom: 24, background: "linear-gradient(135deg, #fff 0%, #69C9D0 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          30 TIKTOK HOOKS FOR FITNESS COACHES THAT STOP THE SCROLL
        </h1>

        {/* Intro */}
        <p style={{ fontSize: 18, lineHeight: 1.8, color: "#aaa", borderLeft: "3px solid #69C9D0", paddingLeft: 20, marginBottom: 40 }}>
          On TikTok, you have 3 seconds. That is all. If your opening line does not grab attention instantly, viewers scroll past and your video is buried by the algorithm. These 30 hooks are designed specifically for fitness coaches — copy them, adapt them to your content, and watch your view counts climb.
        </p>

        {/* Early CTA */}
        <div style={{ background: "rgba(105,201,208,0.05)", border: "1.5px solid rgba(105,201,208,0.2)", borderRadius: 16, padding: "28px 32px", marginBottom: 48, textAlign: "center" }}>
          <p style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>
            🎵 Want TikTok hooks generated automatically?
          </p>
          <p style={{ color: "#666", marginBottom: 20, fontSize: 15 }}>
            FitContent AI generates TikTok hooks, Instagram captions, emails and more from one piece of content — in 10 seconds.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 10, textDecoration: "none", fontSize: 16, display: "inline-block", boxShadow: "0 8px 32px rgba(255,107,0,0.3)" }}>
            Try FitContent AI Free
          </Link>
        </div>

        {/* What makes a good hook */}
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: 2, color: "#fff", marginBottom: 16 }}>
          WHAT MAKES A GREAT TIKTOK HOOK?
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: "#aaa", marginBottom: 16 }}>
          A great TikTok hook does one of three things in the first 3 seconds: it challenges a belief the viewer holds, it promises a specific result or piece of information, or it creates an emotional reaction strong enough to make them stop scrolling.
        </p>
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px 24px", marginBottom: 40 }}>
          <p style={{ fontSize: 15, lineHeight: 2, color: "#aaa", margin: 0 }}>
            🎯 <strong style={{ color: "#69C9D0" }}>Pattern interrupt:</strong> Say something unexpected or counterintuitive<br />
            📊 <strong style={{ color: "#69C9D0" }}>Specific promise:</strong> "3 things", "in 30 days", "without going to the gym"<br />
            😮 <strong style={{ color: "#69C9D0" }}>Curiosity gap:</strong> Start a story without finishing it<br />
            🙋 <strong style={{ color: "#69C9D0" }}>Direct address:</strong> "If you've ever..." or "For anyone who..."<br />
            ⚡ <strong style={{ color: "#69C9D0" }}>Bold claim:</strong> Something that makes them think "wait, really?"
          </p>
        </div>

        {/* Hooks by category */}
        {hooks.map((section) => (
          <div key={section.category} style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 2, marginBottom: 20, color: section.color }}>
              {section.category.toUpperCase()}
            </h2>
            {section.items.map((hook) => (
              <div key={hook.number} className="hook-card">
                <div style={{ fontSize: 11, fontWeight: 700, color: section.color, marginBottom: 8, letterSpacing: 1 }}>
                  HOOK #{hook.number}
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.7, color: "#fff", margin: 0, fontWeight: 500 }}>
                  "{hook.text}"
                </p>
              </div>
            ))}
          </div>
        ))}

        {/* How to use section */}
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 32, letterSpacing: 2, color: "#fff", marginBottom: 16, marginTop: 48 }}>
          HOW TO USE THESE HOOKS
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: "#aaa", marginBottom: 16 }}>
          A hook is only the first 3 seconds. After the hook you need to deliver on the promise. Here is the simple TikTok video structure that works for fitness coaches:
        </p>
        <div style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "24px 28px", marginBottom: 24 }}>
          <p style={{ fontSize: 15, lineHeight: 2.2, color: "#aaa", margin: 0 }}>
            <strong style={{ color: "#69C9D0" }}>Seconds 0–3:</strong> Your hook — the pattern interrupt or bold claim<br />
            <strong style={{ color: "#69C9D0" }}>Seconds 3–10:</strong> Expand on the hook — why should they keep watching?<br />
            <strong style={{ color: "#69C9D0" }}>Seconds 10–40:</strong> Deliver the value — the actual tip, story, or information<br />
            <strong style={{ color: "#69C9D0" }}>Seconds 40–55:</strong> Call to action — follow for more, comment your question, try this today<br />
            <strong style={{ color: "#69C9D0" }}>Tip:</strong> Keep most videos under 60 seconds for best completion rate
          </p>
        </div>

        {/* Final CTA */}
        <div style={{ background: "rgba(255,107,0,0.05)", border: "1.5px solid rgba(255,107,0,0.3)", borderRadius: 20, padding: "48px 36px", marginTop: 64, textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, letterSpacing: 2, marginBottom: 12, background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            GENERATE TIKTOK HOOKS IN 10 SECONDS
          </h2>
          <p style={{ fontSize: 16, color: "#666", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
            FitContent AI generates TikTok hooks, Instagram captions, emails and LinkedIn posts from one piece of content automatically.
          </p>
          <Link href="/" style={{ background: "linear-gradient(135deg, #FF6B00, #FF3D00)", color: "#fff", fontWeight: 800, padding: "16px 36px", borderRadius: 12, textDecoration: "none", fontSize: 17, display: "inline-block", boxShadow: "0 8px 32px rgba(255,107,0,0.3)" }}>
            ⚡ Try FitContent AI Free
          </Link>
          <p style={{ fontSize: 13, color: "#444", marginTop: 16 }}>
            Free plan available · No credit card required
          </p>
        </div>

        {/* Back to blog */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Link href="/blog" style={{ color: "#FF6B00", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>
            ← Back to Blog
          </Link>
        </div>

      </article>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "32px 24px", textAlign: "center" }}>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.2)", margin: 0 }}>
          © 2026 FitContent AI · Built for fitness coaches
        </p>
      </footer>

    </div>
  );
}
