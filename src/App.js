import React, { useMemo, useState, useEffect } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [lang, setLang] = useState("EN");
  const [showFeatured, setShowFeatured] = useState(false);
  const t = useMemo(() => {
    const EN = {
      siteTitle: "A guide for every woman, everywhere.",
      startExploring: "Start Exploring",
      emergencyHelp: "Emergency Help",
      nav: {
        health: "Health & Wellness",
        education: "Education & Career",
        rights: "Rights & Safety",
        emergency: "Emergency Help",
        community: "Community & Inspiration",
      },
      featuredResources: "Featured Resources",
      footer: { about: "About", contact: "Contact", donate: "Donate" },
      emergencyBanner: "If you are in immediate danger, use the emergency resources below.",
      hotlinesNote: "Hotline numbers and links vary by country. Add/verify your local hotlines here.",
      learnMore: "Open resource",
      langLabel: "Language",
    };
    const NP = {
      siteTitle: "हरेक महिलाका लागि, जहाँ भए पनि एक मार्गदर्शक।",
      startExploring: "सुरु गर्नुहोस्",
      emergencyHelp: "आपतकालीन सहायता",
      nav: {
        health: "स्वास्थ्य र कल्याण",
        education: "शिक्षा र रोजगारी",
        rights: "अधिकार र सुरक्षा",
        emergency: "आपतकालीन सहायता",
        community: "समुदाय र प्रेरणा",
      },
      featuredResources: "विशेष स्रोतहरू",
      footer: { about: "हाम्रो बारे", contact: "सम्पर्क", donate: "दान" },
      emergencyBanner: "यदि तुरुन्त जोखिममा हुनुहुन्छ भने तलका आपतकालीन स्रोत प्रयोग गर्नुहोस्।",
      hotlinesNote: "हटलाइन नम्बर र लिङ्क देशअनुसार फरक पर्छ। यहाँ स्थानीय हटलाइनहरू थप्नुहोस्/जाँच गर्नुहोस्।",
      learnMore: "खोल्नुहोस्",
      langLabel: "भाषा",
    };
    return lang === "NP" ? NP : EN;
  }, [lang]);

  const resources = useMemo(() => [
    {
      id: "tpo",
      name: "TPO Nepal",
      description: "Mental health and psychosocial support services in Nepal.",
      url: "https://www.tponepal.org",
      category: "health",
      scope: "local",
    },
    {
      id: "koshish",
      name: "KOSHISH Nepal",
      description: "Self-help and advocacy for mental health; rehabilitation and counseling.",
      url: "https://koshishnepal.org/",
      category: "health",
      scope: "local",
    },
    {
      id: "msi",
      name: "Marie Stopes Nepal",
      description: "Reproductive health services and education across Nepal.",
      url: "https://www.mariestopes.org.np/",
      category: "health",
      scope: "local",
    },
    {
      id: "mantracare",
      name: "MantraCare Nepal",
      description: "Mental health counseling and wellness services.",
      url: "https://mantra.care/nepal/",
      category: "health",
      scope: "local",
    },
    {
      id: "sano",
      name: "Sano Sansar Initiative",
      description: "Youth-led organization for environment, health, and sustainability.",
      url: "https://www.sanosansar.org",
      category: "health",
      scope: "local",
    },
    {
      id: "nepalmental",
      name: "Nepal Mental Health",
      description: "Information and resources for mental health awareness and services in Nepal.",
      url: "https://nepalmentalhealth.com",
      category: "health",
      scope: "local",
    },
    {
      id: "cmc",
      name: "CMC Nepal",
      description: "Community mental health services including counseling and psychosocial programs.",
      url: "https://cmcnepal.org.np",
      category: "health",
      scope: "local",
    },
    {
      id: "life",
      name: "LIFE Nepal",
      description: "Child rights, education, and health projects in Nepal.",
      url: "https://lifenepal.org.np/about-us/",
      category: "education",
      scope: "local",
    },
    {
      id: "mankaakura",
      name: "Mankaakura",
      description: "Counseling and mental health support for Nepalis.",
      url: "https://mankaakura.com/our-counselors/",
      category: "health",
      scope: "local",
    },
    {
      id: "healthy",
      name: "Healthy Minds Nepal",
      description: "Nepali-led organization building a supportive mental health ecosystem.",
      url: "https://healthyminds.com.np/our-team/",
      category: "health",
      scope: "local",
    },
    {
      id: "mhsn",
      name: "Mental Health Society of Nepal",
      description: "Non-profit focused on promoting mental health and psychosocial support.",
      url: "https://mhsnepal.org",
      category: "health",
      scope: "local",
    },
    {
      id: "maiti",
      name: "Maiti Nepal",
      description: "Anti-trafficking, shelter, legal aid, and empowerment for women and girls.",
      url: "https://maitinepal.org/",
      category: "rights",
      scope: "local",
    },
    {
      id: "fwld",
      name: "FWLD",
      description: "Forum for Women, Law & Development—legal rights, advocacy, and support.",
      url: "https://fwld.org/",
      category: "rights",
      scope: "local",
    },
    {
      id: "shakti",
      name: "Shakti Samuha",
      description: "Survivor-led organization against trafficking; protection and reintegration.",
      url: "https://shaktisamuha.org.np/",
      category: "rights",
      scope: "local",
    },
    {
      id: "girlsnotbrides",
      name: "Girls Not Brides (Nepal Partner)",
      description: "Global network with Nepal partners focused on child marriage prevention.",
      url: "https://www.girlsnotbrides.org/our-partnership/member-directory/protection-nepal/",
      category: "rights",
      scope: "global",
    },
    {
      id: "wnf",
      name: "Women NGOs Federation Nepal",
      description: "Federation advocating for the rights and empowerment of women in Nepal.",
      url: "https://wnfnepal.org.np",
      category: "rights",
      scope: "local",
    },
    {
      id: "samabikas",
      name: "Samabikas Nepal",
      description: "Civil society organization advancing equality, inclusion, and safety.",
      url: "https://www.samabikas.org",
      category: "rights",
      scope: "local",
    },
    {
      id: "traveladvisory",
      name: "Nepal Travel Advisory (US State Dept.)",
      description: "Government-level safety and rights advisories for travelers in Nepal.",
      url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nepal-travel-advisory.html",
      category: "rights",
      scope: "global",
    },
    {
      id: "rukmini",
      name: "Rukmini Foundation",
      description: "Girls’ education and empowerment programs in Nepal.",
      url: "https://www.rukminifoundation.org/",
      category: "education",
      scope: "local",
    },
    {
      id: "wfn",
      name: "The Women’s Foundation Nepal",
      description: "Education, shelter, enterprise, and advocacy for women.",
      url: "https://www.womenepal.org/",
      category: "education",
      scope: "local",
    },
    {
      id: "nyf",
      name: "Nepal Youth Foundation",
      description: "Education, health, and empowerment initiatives for children and youth.",
      url: "https://www.nepalyouthfoundation.org/",
      category: "education",
      scope: "local",
    },
    {
      id: "womenlead",
      name: "Women LEAD Nepal",
      description: "Leadership development for young women and girls.",
      url: "https://www.women-lead.org/",
      category: "education",
      scope: "local",
    },
    {
      id: "codefornepal",
      name: "Code for Nepal",
      description: "Digital literacy, open data, and tech empowerment.",
      url: "https://codefornepal.org/",
      category: "education",
      scope: "local",
    },
    {
      id: "backward",
      name: "Backward Society Education (BASE)",
      description: "Educational empowerment and volunteering opportunities in Nepal.",
      url: "https://nepalbase.org/volunteers-internship/",
      category: "education",
      scope: "local",
    },
    {
      id: "ole",
      name: "OLE Nepal",
      description: "Open Learning Exchange Nepal providing free digital learning in schools.",
      url: "https://www.olenepal.org",
      category: "education",
      scope: "local",
    },
    {
      id: "ncef",
      name: "Nepalese Children’s Education Fund",
      description: "Sponsors children’s education in Nepal.",
      url: "https://www.nepalchildren.org",
      category: "education",
      scope: "local",
    },
    {
      id: "nta",
      name: "Nepal Teachers Association",
      description: "Union association supporting Nepalese teachers.",
      url: "https://ntuc.org.np/affiliates/nepal-teachers-association-nta",
      category: "education",
      scope: "local",
    },
    {
      id: "hotlines",
      name: "Crisis & Hotlines",
      description: "Suicide prevention, sexual assault, domestic violence, and substance use hotlines. Replace this card with your locally verified numbers and links.",
      url: "#",
      category: "emergency",
      scope: "global",
    },
    {
      id: "embassy",
      name: "U.S. Embassy Nepal: Emergency Assistance",
      description: "Consular emergency help info for U.S citizens in Nepal.",
      url: "https://np.usembassy.gov/emergency-assistance/",
      category: "emergency",
      scope: "global",
    },
    {
      id: "touristpolice",
      name: "Nepal Tourist Police",
      description: "Tourist police services for safety, emergencies, and crime support.",
      url: "https://www.tourism.gov.np/pages/tourist-police/9",
      category: "emergency",
      scope: "local",
    },
    {
      id: "districtpolice",
      name: "Nepal District Police Directory",
      description: "Contact numbers for district police across Nepal. Quick access during emergencies.",
      url: "https://common.usembassy.gov/wp-content/uploads/sites/27/2022/02/Tourist-Police-telephone-Directory.pdf",
      category: "emergency",
      scope: "local",
    },
    {
      id: "actionnepal",
      name: "Emergency Relief Support (Action for Nepal)",
      description: "Aid and relief response during emergencies across Nepal.",
      url: "https://actionfornepal.org/why-emergency-relief-support/",
      category: "emergency",
      scope: "local",
    },
    {
      id: "mountsinai1",
      name: "Strengthening Mental Health Education in Nepal",
      description: "Article on improving mental health training and systems in Nepal.",
      url: "https://health.mountsinai.org/blog/strengthening-mental-health-education-in-nepal/",
      category: "community",
      scope: "global",
    },
    {
      id: "mountsinai2",
      name: "Project ECHO Nepal: Emergency Care",
      description: "Expanding emergency medical capacity in rural Nepal through tele-education.",
      url: "https://health.mountsinai.org/blog/project-echo-launched-in-nepal-to-advance-emergency-care-in-rural-areas/",
      category: "community",
      scope: "global",
    },
    {
      id: "nepalpolice",
      name: "Nepal Police",
      description: "Official Nepal Police website. Law enforcement and safety support.",
      url: "https://www.nepalpolice.gov.np",
      category: "emergency",
      scope: "local",
    },
    {
      id: "girlswhocode",
      name: "Girls Who Code",
      description: "Free programs and content to learn to code (beginner to advanced).",
      url: "https://girlswhocode.com/",
      category: "education",
      scope: "global",
    },
    {
      id: "rtc",
      name: "Rewriting the Code",
      description: "Global community for college and early-career women in tech.",
      url: "https://rewritingthecode.org/",
      category: "education",
      scope: "global",
    },
    {
      id: "khan",
      name: "Khan Academy",
      description: "Free courses in math, science, computing, and more.",
      url: "https://www.khanacademy.org/",
      category: "education",
      scope: "global",
    },
    {
      id: "coursera",
      name: "Coursera (Free Courses)",
      description: "University courses—audit free; certificates optional.",
      url: "https://www.coursera.org/",
      category: "education",
      scope: "global",
    },
  ], []);

  const featured = useMemo(() => [
    resources.find((r) => r.category === "health"),
    resources.find((r) => r.category === "education"),
    resources.find((r) => r.category === "rights"),
    resources.find((r) => r.category === "emergency"),
    resources.find((r) => r.category === "community"),
  ].filter(Boolean), [resources]);

  const CATS = [
    { key: "health", icon: "🪷", label: t.nav.health },
    { key: "education", icon: "💻", label: t.nav.education },
    { key: "rights", icon: "⚖️", label: t.nav.rights },
    { key: "emergency", icon: "🚨", label: t.nav.emergency },
    { key: "community", icon: "✨", label: t.nav.community },
  ];

  
  const [activeCat, setActiveCat] = useState(null);

  const filtered = useMemo(() => {
    if (!activeCat) return [];
    return resources.filter((r) => r.category === activeCat);
  }, [activeCat, resources]);

  return (
    <div className="App">
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header" role="banner">
        <div className="brand">
          <div className="logo" aria-hidden="true">◎</div>
          <span className="brand-text">HerGuide</span>
        </div>
        <div className="lang-switch">
          <label htmlFor="lang-select">{t.langLabel}:</label>
          <select id="lang-select" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="EN">EN</option>
            <option value="NP">NP</option>
          </select>
        </div>
      </header>
      <section className="hero" aria-label="Hero">
        <h1>{t.siteTitle}</h1>
      </section>
      <nav className="nav-grid" aria-label="Primary">
        {CATS.map(c => (
          <button
            key={c.key}
            className={`nav-card ${activeCat === c.key ? "active" : ""}`}
            onClick={() => setActiveCat(prev => prev === c.key ? null : c.key)}
            aria-pressed={activeCat === c.key}
          >
            <span className="nav-icon" aria-hidden="true">{c.icon}</span>
            <span className="nav-label">{c.label}</span>
          </button>
        ))}
      </nav>
      <section id="emergency" className="emergency-banner" aria-label="Emergency">
        <p>{t.emergencyBanner}</p>
        <ul className="info-list">
          <li>📞 Dial <strong>101</strong> for Fire</li>
          <li>🚑 Dial <strong>102</strong> for Ambulance</li>
          <li>🚦 Dial <strong>103</strong> for Traffic Control</li>
          <li>☎️ Dial <strong>197</strong> for Telephone Inquiry</li>
        </ul>
        <small className="muted">{t.hotlinesNote}</small>
      </section>

      {activeCat && (
        <main className="content" aria-live="polite">
          <h2 className="section-title">{CATS.find(c => c.key === activeCat)?.label}</h2>
          <ul className="card-grid">
            {filtered.map(r => (
              <li key={r.id} className="card" data-scope={r.scope}>
                <div className="card-badge" aria-label={r.scope}>
                  {r.scope === "local" ? "🇳🇵" : "🌏"}
                </div>
                <h3 className="card-title">
                  <span aria-hidden="true">{r.logo ?? "📌"}</span>{" "}
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                </h3>
                <p className="card-desc">{r.description}</p>
              </li>
            ))}
          </ul>
        </main>
      )}
      {showFeatured && (
        <main
          className="content featured-panel"
          role="region"
          aria-live="polite"
          aria-label="Featured Resources"
        >
          <h2 className="section-title">{t.featuredResources}</h2>
          <ul className="card-grid">
            {featured.map(r => (
              <li key={r.id} className="card">
                <div className="card-title">
                  <span aria-hidden="true">{r.logo ?? "📌"}</span>{" "}
                  <a href={r.url} target="_blank" rel="noopener noreferrer">{r.name}</a>
                </div>
                <p className="card-desc">{r.description}</p>
              </li>
            ))}
          </ul>
        </main>
      )}

      <button
        className="feature-btn"
        aria-expanded={showFeatured}
        onClick={() => setShowFeatured(prev => !prev)}
        aria-label="Toggle featured resources"
        type="button"
      >
        {t.featuredResources}
      </button>

      <footer className="site-footer" aria-label="Footer">
        <nav>
          <a href="/about">{t.footer.about}</a>
          <a href="/contact">{t.footer.contact}</a>
          <a href="/donate">{t.footer.donate}</a>
        </nav>
        <small className="muted">© {new Date().getFullYear()} HerGuide</small>
      </footer>
    </div>
  );
}

export default App;

