import { useState } from "react";
import SEOHead from "../components/SEOHead";

const PLATFORMS = [
  { id: "instagram", label: "Instagram Caption", icon: "📸", color: "#E1306C" },
  { id: "twitter", label: "X / Twitter Thread", icon: "🐦", color: "#1DA1F2" },
  { id: "tiktok", label: "TikTok Hook", icon: "🎵", color: "#69C9D0" },
  { id: "email", label: "Email Newsletter", icon: "📧", color: "#F4A261" },
  { id: "linkedin", label: "LinkedIn Post", icon: "💼", color: "#0A66C2" },
  { id: "youtube", label: "YouTube Description", icon: "▶️", color: "#FF0000" },
];

const TONES = ["Motivational 🔥", "Educational 📚", "Personal Story 💬", "Promotional 💰"];

export default function FitContentAI() {
  const [input, setInput] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState(["instagram", "twitter"]);
  const [tone, setTone] = useState("Motivational 🔥");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [copied, setCopied] = useState(null);
  const [charCount, setCharCount] = useState(0);

  const togglePlatform = (id) => {
    setSelectedPlatforms((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    setCharCount(e.target.value.length);
  };

  const repurpose = async () => {
    if (!input.trim() || selectedPlatforms.length === 0) return;
    setLoading(true);
    setResults({});
    setActiveTab(null);

    const platformNames = selectedPlatforms
      .map((id) => PLATFORMS.find((p) => p.id === id)?.label)
      .join(", ");

    const prompt = `You are a fitness content expert. A fitness coach has given you this content:

"${input}"

Repurpose it for these platforms: ${platformNames}
Tone: ${tone}

For each platform, write platform-native content:
- Instagram Caption: 150-200 words, emojis, hashtags at end
- X / Twitter Thread: 3-5 tweets, numbered, punchy
- TikTok Hook: First 3 seconds hook + script outline, max 150 words
- Email Newsletter: Subject line + body, 200-250 words, personal
- LinkedIn Post: Professional but engaging, 150-200 words, no hashtag spam
- YouTube Description: SEO-optimized, 150-200 words, include timestamps placeholder

Respond ONLY in valid JSON format like this (no markdown, no backticks):
{
  "instagram": "content here",
  "twitter": "content here",
  "tiktok": "content here",
  "email": "content here",
  "linkedin": "content here",
  "youtube": "content here"
}

Only include the platforms that were requested.`;

    try {
      const response = await fetch("/api/repurpose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setResults(data);
      setActiveTab(selectedPlatforms[0]);
    } catch (err) {
      setResults({ error: "Something went wrong. Please try again." });
    }
    setLoading(false);
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const activePlatform = PLATFORMS.find((p) => p.id === activeTab);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0a",
      fontFamily: "'DM Sans', sans-serif",
      color: "#fff",
      padding: "0",
      position: "relative",
      overflow: "hidden"
    }}>
        <SEOHead />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; }
        .platform-btn {
          border: 1.5px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #888;
          border-radius: 12px;
          padding: 10px 14px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .platform-btn:hover { border-color: rgba(255,255,255,0.2); color: #fff; }
        .platform-btn.active { background: rgba(255,107,0,0.12); border-color: #FF6B00; color: #FF6B00; }
        .tone-btn {
          border: 1.5px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #888;
          border-radius: 100px;
          padding: 8px 16px;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
        }
        .tone-btn:hover { color: #fff; border-color: rgba(255,255,255,0.2); }
        .tone-btn.active { background: #FF6B00; border-color: #FF6B00; color: #fff; }
        .tab-btn {
          background: none;
          border: none;
          padding: 10px 16px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #555;
          border-bottom: 2px solid transparent;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .tab-btn:hover { color: #999; }
        .tab-btn.active { color: #FF6B00; border-bottom-color: #FF6B00; }
        .generate-btn {
          background: linear-gradient(135deg, #FF6B00, #FF3D00);
          color: white;
          border: none;
          border-radius: 14px;
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.2s;
          box-shadow: 0 8px 32px rgba(255,107,0,0.3);
          width: 100%;
        }
        .generate-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(255,107,0,0.4); }
        .generate-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .copy-btn {
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.1);
          color: #888;
          border-radius: 8px;
          padding: 7px 14px;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.2s;
        }
        .copy-btn:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .copy-btn.copied { background: rgba(0,200,100,0.1); color: #00C864; border-color: #00C864; }
        .content-area {
          background: rgba(255,255,255,0.03);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 20px;
          font-size: 14px;
          line-height: 1.8;
          color: #ccc;
          white-space: pre-wrap;
          min-height: 200px;
        }
        textarea {
          background: rgba(255,255,255,0.03) !important;
          border: 1.5px solid rgba(255,255,255,0.08) !important;
          color: #fff !important;
          resize: none !important;
        }
        textarea:focus { outline: none !important; border-color: #FF6B00 !important; }
        textarea::placeholder { color: #444 !important; }
        @keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        .loading-dot { width:8px; height:8px; background:#FF6B00; border-radius:50%; animation:pulse 1.2s ease-in-out infinite; }
      `}</style>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 20px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)",
            borderRadius: 100, padding: "6px 16px", marginBottom: 20,
            fontSize: 12, fontWeight: 600, color: "#FF6B00", letterSpacing: 1
          }}>⚡ AI-POWERED</div>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(48px, 8vw, 84px)",
            letterSpacing: 2, margin: "0 0 16px", lineHeight: 1,
            background: "linear-gradient(135deg, #fff 0%, #FF6B00 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>FITCONTENT AI</h1>
          <p style={{ color: "#666", fontSize: 16, margin: "0 auto", maxWidth: 480, lineHeight: 1.6 }}>
            Turn one piece of fitness content into posts for every platform — in seconds.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1, background: "rgba(255,255,255,0.05)",
          borderRadius: 16, overflow: "hidden", marginBottom: 32
        }}>
          {[
            { value: "6", label: "Platforms at once" },
            { value: "10s", label: "Average generation" },
            { value: "10x", label: "Faster than manual" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "#0a0a0a", padding: "18px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 700, color: "#FF6B00", fontFamily: "'Bebas Neue', sans-serif", letterSpacing: 1 }}>{stat.value}</div>
              <div style={{ fontSize: 12, color: "#555", marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,255,255,0.06)",
          borderRadius: 20, padding: "28px", marginBottom: 24
        }}>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: "#888", letterSpacing: 0.5 }}>YOUR CONTENT</label>
              <span style={{ fontSize: 12, color: charCount > 800 ? "#FF6B00" : "#444" }}>{charCount} chars</span>
            </div>
            <textarea
              value={input}
              onChange={handleInput}
              placeholder="Paste your blog post, idea, or notes here..."
              style={{ width: "100%", borderRadius: 14, padding: "16px", fontSize: 14, lineHeight: 1.7, minHeight: 140, fontFamily: "'DM Sans', sans-serif" }}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#888", letterSpacing: 0.5, display: "block", marginBottom: 10 }}>REPURPOSE TO</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {PLATFORMS.map((p) => (
                <button
                  key={p.id}
                  className={`platform-btn ${selectedPlatforms.includes(p.id) ? "active" : ""}`}
                  onClick={() => togglePlatform(p.id)}
                  style={selectedPlatforms.includes(p.id) ? { background: `${p.color}15`, borderColor: p.color, color: p.color } : {}}
                >
                  {p.icon} {p.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 28 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: "#888", letterSpacing: 0.5, display: "block", marginBottom: 10 }}>TONE</label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {TONES.map((t) => (
                <button key={t} className={`tone-btn ${tone === t ? "active" : ""}`} onClick={() => setTone(t)}>{t}</button>
              ))}
            </div>
          </div>

          <button className="generate-btn" onClick={repurpose} disabled={loading || !input.trim() || selectedPlatforms.length === 0}>
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                <span style={{ display: "flex", gap: 4 }}>
                  {[0,1,2].map(i => <span key={i} className="loading-dot" style={{ animationDelay: `${i * 0.2}s` }} />)}
                </span>
                Generating your content...
              </span>
            ) : `⚡ Repurpose to ${selectedPlatforms.length} Platform${selectedPlatforms.length !== 1 ? "s" : ""}`}
          </button>
        </div>

        {Object.keys(results).length > 0 && !results.error && (
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1.5px solid rgba(255,107,0,0.2)", borderRadius: 20, overflow: "hidden" }}>
            <div style={{ display: "flex", overflowX: "auto", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 16px", background: "rgba(255,255,255,0.02)" }}>
              {selectedPlatforms.filter(id => results[id]).map((id) => {
                const p = PLATFORMS.find(pl => pl.id === id);
                return (
                  <button key={id} className={`tab-btn ${activeTab === id ? "active" : ""}`} onClick={() => setActiveTab(id)}
                    style={activeTab === id ? { color: p.color, borderBottomColor: p.color } : {}}>
                    {p.icon} {p.label}
                  </button>
                );
              })}
            </div>
            {activeTab && results[activeTab] && (
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 20 }}>{activePlatform?.icon}</span>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{activePlatform?.label}</span>
                    <span style={{ fontSize: 11, padding: "3px 10px", borderRadius: 100, background: "rgba(0,200,100,0.1)", color: "#00C864", fontWeight: 600 }}>Ready to post</span>
                  </div>
                  <button className={`copy-btn ${copied === activeTab ? "copied" : ""}`} onClick={() => copyToClipboard(results[activeTab], activeTab)}>
                    {copied === activeTab ? "✓ Copied!" : "Copy"}
                  </button>
                </div>
                <div className="content-area">{results[activeTab]}</div>
              </div>
            )}
          </div>
        )}

        {results.error && (
          <div style={{ background: "rgba(255,50,50,0.08)", border: "1px solid rgba(255,50,50,0.2)", borderRadius: 14, padding: 20, color: "#ff6b6b", textAlign: "center" }}>
            {results.error}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 40, color: "#333", fontSize: 12 }}>
          Built for fitness coaches who'd rather train clients than write captions.
        </div>
      </div>
    </div>
  );
}
