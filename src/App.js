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
    description: {
      EN: "Dedicated to providing free, compassionate and confidential support by phone and text message (SMS). For everyone in Nepal who may need emotional support with anxiety, bullying, depression, self-harm, sexual abuse.",
      NP: "फोन र टेक्स्ट सन्देश (एसएमएस) मार्फत नि:शुल्क, सहानुभूति र गोपनीय समर्थन प्रदान गर्न समर्पित। नेपालमा जो कोहीलाई चिन्ता, धम्की, डिप्रेसन, आत्म-हानि, यौन दुरुपयोगको लागि मनोवैज्ञानिक समर्थन आवश्यक छ।"
    },
    url: "https://www.tponepal.org",
    category: "health",
    scope: "local",
  },
    {
    id: "koshish",
    name: "KOSHISH Nepal",
    description: {
      EN: "Self-help and advocacy for mental health; rehabilitation and counseling.",
      NP: "आत्म-सहायता र मानसिक स्वास्थ्यका लागि वकालत; पुनर्स्थापना र परामर्श।"
    },
    url: "https://koshishnepal.org/",
    category: "health",
    scope: "local",
  },
  {
    id: "msi",
    name: "Marie Stopes Nepal",
    description: {
      EN: "Reproductive health services and education across Nepal.",
      NP: "नेपालभर प्रजनन स्वास्थ्य सेवा र शिक्षा।"
    },
    url: "https://www.mariestopes.org.np/",
    category: "health",
    scope: "local",
  },
  {
    id: "mantracare",
    name: "MantraCare Nepal",
    description: {
      EN: "Mental health counseling and wellness services.",
      NP: "मानसिक स्वास्थ्य परामर्श र कल्याण सेवा।"
    },
    url: "https://mantra.care/nepal/",
    category: "health",
    scope: "local",
  },
  {
    id: "sano",
    name: "Sano Sansar Initiative",
    description: {
      EN: "Youth-led organization for environment, health, and sustainability.",
      NP: "पर्यावरण, स्वास्थ्य, र स्थिरताका लागि युवाहरू नेतृत्व गरेको संस्था।"
    },
    url: "https://www.sanosansar.org",
    category: "education",
    scope: "local",
  },
  {
    id: "nepalmental",
    name: "Nepal Mental Health",
    description: {
      EN: "Information and resources for mental health awareness and services in Nepal.",
      NP: "नेपालमा मानसिक स्वास्थ्य सचेतना र सेवाहरूको जानकारी र स्रोतहरू।"
    },
    url: "https://nepalmentalhealth.com",
    category: "health",
    scope: "local",
  },
  {
    id: "cmc",
    name: "CMC Nepal",
    description: {
      EN: "Community mental health services including counseling and psychosocial programs.",
      NP: "सल्लाहकार र मनो सामाजिक कार्यक्रमहरू सहित सामुदायिक मानसिक स्वास्थ्य सेवा।"
    },
    url: "https://cmcnepal.org.np",
    category: "health",
    scope: "local",
  },
  {
    id: "life",
    name: "LIFE Nepal",
    description: {
      EN: "Child rights, education, and health projects in Nepal.",
      NP: "नेपालमा बाल अधिकार, शिक्षा, र स्वास्थ्य परियोजनाहरू।"
    },
    url: "https://lifenepal.org.np/about-us/",
    category: "education",
    scope: "local",
  },
  {
    id: "mankaakura",
    name: "Mankaakura",
    description: {
      EN: "Counseling and mental health support for Nepalis.",
      NP: "नेपालीहरूको लागि परामर्श र मानसिक स्वास्थ्य सहयोग।"
    },
    url: "https://mankaakura.com/our-counselors/",
    category: "health",
    scope: "local",
  },
  {
    id: "healthy",
    name: "Healthy Minds Nepal",
    description: {
      EN: "Nepali-led organization building a supportive mental health ecosystem.",
      NP: "मदत गर्ने मानसिक स्वास्थ्य प्रणाली निर्माण गर्दै नेपाली नेतृत्व संस्था।"
    },
    url: "https://healthyminds.com.np/our-team/",
    category: "health",
    scope: "local",
  },
  {
    id: "mhsn",
    name: "Mental Health Society of Nepal",
    description: {
      EN: "Non-profit focused on promoting mental health and psychosocial support.",
      NP: "मानसिक स्वास्थ्य र मनो सामाजिक समर्थन प्रवर्द्धन गर्ने गैर-नाफामूलक संस्था।"
    },
    url: "https://mhsnepal.org",
    category: "health",
    scope: "local",
  },
  {
    id: "maiti",
    name: "Maiti Nepal",
    description: {
      EN: "Anti-trafficking, shelter, legal aid, and empowerment for women and girls.",
      NP: "महिला र बालिकाहरूलाई मानव तस्करी बिरुद्ध, आश्रय, कानुनी सहायता र सशक्तिकरण।"
    },
    url: "https://maitinepal.org/",
    category: "rights",
    scope: "local",
  },
  {
    id: "fwld",
    name: "FWLD",
    description: {
      EN: "Forum for Women, Law & Development—legal rights, advocacy, and support.",
      NP: "महिला, कानून र विकासको लागि मञ्च — कानुनी अधिकार, वकालत र समर्थन।"
    },
    url: "https://fwld.org/",
    category: "rights",
    scope: "local",
  },
  {
    id: "shakti",
    name: "Shakti Samuha",
    description: {
      EN: "Survivor-led organization against trafficking; protection and reintegration.",
      NP: "मानव तस्करी विरुद्ध बाँचेकाहरूले सञ्चालित संस्था; संरक्षण र पुनःसमायोजन।"
    },
    url: "https://shaktisamuha.org.np/",
    category: "rights",
    scope: "local",
  },
  {
    id: "girlsnotbrides",
    name: "Girls Not Brides (Nepal Partner)",
    description: {
      EN: "Global network with Nepal partners focused on child marriage prevention.",
      NP: "शिशु विवाह रोकथाममा केन्द्रित नेपाल साझेदारहरू सहित विश्वव्यापी नेटवर्क।"
    },
    url: "https://www.girlsnotbrides.org/our-partnership/member-directory/protection-nepal/",
    category: "rights",
    scope: "global",
  },
  {
    id: "wnf",
    name: "Women NGOs Federation Nepal",
    description: {
      EN: "Federation advocating for the rights and empowerment of women in Nepal.",
      NP: "नेपालमा महिलाहरूको अधिकार र सशक्तीकरणका लागि संघ।"
    },
    url: "https://wnfnepal.org.np",
    category: "rights",
    scope: "local",
  },
  {
    id: "samabikas",
    name: "Samabikas Nepal",
    description: {
      EN: "Civil society organization advancing equality, inclusion, and safety.",
      NP: "समानता, समावेशीकरण, र सुरक्षा प्रवर्द्धन गर्ने नागरिक समाज संस्था।"
    },
    url: "https://www.samabikas.org",
    category: "rights",
    scope: "local",
  },
  {
    id: "traveladvisory",
    name: "Nepal Travel Advisory (US State Dept.)",
    description: {
      EN: "Government-level safety and rights advisories for travelers in Nepal.",
      NP: "नेपालमा यात्रा गर्नेहरूको लागि सरकारी स्तरको सुरक्षा र अधिकार सल्लाह।"
    },
    url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/nepal-travel-advisory.html",
    category: "rights",
    scope: "global",
  },
  {
    id: "rukmini",
    name: "Rukmini Foundation",
    description: {
      EN: "Girls’ education and empowerment programs in Nepal.",
      NP: "नेपालमा बालिकाहरूको शिक्षा र सशक्तिकरण कार्यक्रमहरू।"
    },
    url: "https://www.rukminifoundation.org/",
    category: "education",
    scope: "local",
  },
  {
    id: "wfn",
    name: "The Women’s Foundation Nepal",
    description: {
      EN: "Education, shelter, enterprise, and advocacy for women.",
      NP: "महिलाहरूमाथि शिक्षा, आश्रय, उद्यम र वकालत।"
    },
    url: "https://www.womenepal.org/",
    category: "education",
    scope: "local",
  },
  {
    id: "nyf",
    name: "Nepal Youth Foundation",
    description: {
      EN: "Education, health, and empowerment initiatives for children and youth.",
      NP: "बालबालिका र युवाहरूका लागि शिक्षा, स्वास्थ्य र सशक्तिकरण पहलहरू।"
    },
    url: "https://www.nepalyouthfoundation.org/",
    category: "education",
    scope: "local",
  },
  {
    id: "womenlead",
    name: "Women LEAD Nepal",
    description: {
      EN: "Leadership development for young women and girls.",
      NP: "युवा महिलाहरू र बालिकाहरूका लागि नेतृत्व विकास।"
    },
    url: "https://www.women-lead.org/",
    category: "education",
    scope: "local",
  },
  {
    id: "codefornepal",
    name: "Code for Nepal",
    description: {
      EN: "Digital literacy, open data, and tech empowerment.",
      NP: "डिजिटल साक्षरता, खुला डाटा, र प्रविधि सशक्तिकरण।"
    },
    url: "https://codefornepal.org/",
    category: "education",
    scope: "local",
  },
  {
    id: "backward",
    name: "Backward Society Education (BASE)",
    description: {
      EN: "Educational empowerment and volunteering opportunities in Nepal.",
      NP: "नेपालमा शैक्षिक सशक्तिकरण र स्वयंसेवा अवसरहरू।"
    },
    url: "https://nepalbase.org/volunteers-internship/",
    category: "education",
    scope: "local",
  },
  {
    id: "ole",
    name: "OLE Nepal",
    description: {
      EN: "Open Learning Exchange Nepal providing free digital learning in schools.",
      NP: "स्कूलहरूमा नि:शुल्क डिजिटल शिक्षा प्रदान गर्ने ओपन लर्निङ एक्सचेन्ज नेपाल।"
    },
    url: "https://www.olenepal.org",
    category: "education",
    scope: "local",
  },
  {
    id: "ncef",
    name: "Nepalese Children’s Education Fund",
    description: {
      EN: "Sponsors children’s education in Nepal.",
      NP: "नेपालमा बालबालिकाको शिक्षालाई प्रायोजन गर्ने संस्था।"
    },
    url: "https://www.nepalchildren.org",
    category: "education",
    scope: "local",
  },
  {
    id: "nta",
    name: "Nepal Teachers Association",
    description: {
      EN: "Union association supporting Nepalese teachers.",
      NP: "नेपालका शिक्षकहरूको समर्थन गर्ने संघ संस्था।"
    },
    url: "https://ntuc.org.np/affiliates/nepal-teachers-association-nta",
    category: "education",
    scope: "local",
  },
  {
    id: "hotlines",
    name: "Crisis & Hotlines",
    description: {
      EN: "Suicide prevention, sexual assault, domestic violence, and substance use hotlines. Replace this card with your locally verified numbers and links.",
      NP: "आत्महत्या रोकथाम, यौन दुर्व्यवहार, घरेलु हिंसा, र पदार्थ प्रयोग हटलाइनहरू। यो कार्डलाई स्थानीय रूपमा प्रमाणित नम्बर र लिंकहरूसँग प्रतिस्थापन गर्नुहोस्।",
    },
    url: "#",
    category: "emergency",
    scope: "global",
  },
  {
    id: "embassy",
    name: "U.S. Embassy Nepal: Emergency Assistance",
    description: {
      EN: "Consular emergency help info for U.S citizens in Nepal.",
      NP: "नेपालमा अमेरिकन नागरिकहरूका लागि कन्सुलर आपतकालीन सहायता सूचना।"
    },
    url: "https://np.usembassy.gov/emergency-assistance/",
    category: "emergency",
    scope: "global",
  },
  {
    id: "touristpolice",
    name: "Nepal Tourist Police",
    description: {
      EN: "Tourist police services for safety, emergencies, and crime support.",
      NP: "सुरक्षा, आपतकालीन, र अपराध सहायता को लागि पर्यटक प्रहरी सेवा।"
    },
    url: "https://www.tourism.gov.np/pages/tourist-police/9",
    category: "emergency",
    scope: "local",
  },
  {
    id: "districtpolice",
    name: "Nepal District Police Directory",
    description: {
      EN: "Contact numbers for district police across Nepal. Quick access during emergencies.",
      NP: "नेपालभर जिल्लास्तर प्रहरी सम्पर्क नम्बरहरू। आपतकालीन अवस्थामा छिटो पहुँच।"
    },
    url: "https://common.usembassy.gov/wp-content/uploads/sites/27/2022/02/Tourist-Police-telephone-Directory.pdf",
    category: "emergency",
    scope: "local",
  },
  {
    id: "actionnepal",
    name: "Emergency Relief Support (Action for Nepal)",
    description: {
      EN: "Aid and relief response during emergencies across Nepal.",
      NP: "नेपालभर आपतकालीन समयमा सहायता र राहत प्रदान।"
    },
    url: "https://actionfornepal.org/why-emergency-relief-support/",
    category: "emergency",
    scope: "local",
  },
  {
    id: "mountsinai1",
    name: "Strengthening Mental Health Education in Nepal",
    description: {
      EN: "Article on improving mental health training and systems in Nepal.",
      NP: "नेपालमा मानसिक स्वास्थ्य प्रशिक्षण र प्रणाली सुधारको बारेमा लेख।"
    },
    url: "https://health.mountsinai.org/blog/strengthening-mental-health-education-in-nepal/",
    category: "community",
    scope: "global",
  },
  {
    id: "mountsinai2",
    name: "Project ECHO Nepal: Emergency Care",
    description: {
      EN: "Expanding emergency medical capacity in rural Nepal through tele-education.",
      NP: "टेलि-शिक्षणमार्फत ग्रामीण नेपालमा आपतकालीन चिकित्सा क्षमता विस्तार।"
    },
    url: "https://health.mountsinai.org/blog/project-echo-launched-in-nepal-to-advance-emergency-care-in-rural-areas/",
    category: "community",
    scope: "global",
  },
  {
    id: "nepalpolice",
    name: "Nepal Police",
    description: {
      EN: "Official Nepal Police website. Law enforcement and safety support.",
      NP: "नेपाल प्रहरीको आधिकारिक वेबसाइट। कानून प्रवर्तन र सुरक्षा सहयोग।"
    },
    url: "https://www.nepalpolice.gov.np",
    category: "emergency",
    scope: "local",
  },
  {
    id: "girlswhocode",
    name: "Girls Who Code",
    description: {
      EN: "Free programs and content to learn to code (beginner to advanced).",
      NP: "कोड सिक्न नि:शुल्क कार्यक्रम र सामग्री (शुरुआती देखि उन्नत)।"
    },
    url: "https://girlswhocode.com/",
    category: "education",
    scope: "global",
  },
  {
    id: "rtc",
    name: "Rewriting the Code",
    description: {
      EN: "Global community for college and early-career women in tech.",
      NP: "टेक क्षेत्रमा कलेज र प्रारम्भिक करियर महिलाहरूका लागि विश्वव्यापी समुदाय।"
    },
    url: "https://rewritingthecode.org/",
    category: "education",
    scope: "global",
  },
  {
    id: "khan",
    name: "Khan Academy",
    description: {
      EN: "Free courses in math, science, computing, and more.",
      NP: "गणित, विज्ञान, कम्प्युटिङ, र अन्य नि:शुल्क कोर्सहरू।"
    },
    url: "https://www.khanacademy.org/",
    category: "education",
    scope: "global",
  },
  {
    id: "coursera",
    name: "Coursera (Free Courses)",
    description: {
      EN: "University courses—audit free; certificates optional.",
      NP: "विश्वविद्यालय कोर्सहरू - नि:शुल्क अडिट; प्रमाणपत्र वैकल्पिक।"
    },
    url: "https://www.coursera.org/",
    category: "education",
    scope: "global",
  },
  {
    id: "Nepal National Suicide Prevention Helpline",
    name: "Nepal National Suicide Prevention Helpline",
    description: {
      EN: "National Suicide Prevention Helpline Service - Helping save lives across Nepal. Call 1166.",
      NP: "राष्ट्रिय आत्महत्या रोकथाम हेल्पलाइन सेवा - नेपालभर ज्यान बचाउनेमा मद्दत। कल गर्नुहोस् ११६६।"
    },
    url: "https://www.who.int/nepal/news/detail/09-12-2022-Nepal-National-Suicide-Prevention-Helpline-Service-helping-save-lives",
    category: "community",
    scope: "local",
  },
  {
    id: "BetterHelp",
    name: "BetterHelp",
    category: "health",
   description: {
      EN: "Global online counseling platform providing accessible mental health support.",
      NP: "सुलभ मानसिक स्वास्थ्य समर्थन प्रदान गर्ने विश्वव्यापी अनलाइन परामर्श प्लेटफर्म।"
    },
    url: "https://www.betterhelp.com/get-started/?go=true&utm_content=133524759310&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_b&network=g&placement=&target=&matchtype=b&utm_campaign=15234220559&ad_type=text&adposition=&kwd_id=kwd-299033048821&gad_source=1&gad_campaignid=15234220559&gbraid=0AAAAADqBHib7-Q9rKYnujLDMPZgQHPX47&gclid=Cj0KCQjw-4XFBhCBARIsAAdNOkugzqPwB0DRySDEZ3-cGhsgJ1tdROiD7rCCLE4E5qh5UeC8X0vKz8caAqdsEALw_wcB&not_found=1&gor=start",
  },
  ], []);

  const featured = useMemo(() => [
    resources.find((r) => r.category === "emergency1"),
    resources.find((r) => r.category === "health2"),
    resources.find((r) => r.category === "rights1"),
    resources.find((r) => r.category === "rights2"),
    resources.find((r) => r.category === "health"),
    resources.find((r) => r.category === "education"),
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
      <section id="emergency" className="emergency-banner" aria-label={t.emergencyHelp}>
  {lang === "NP" ? (
    <>
      <p>{t.emergencyBanner}</p>
      <ul className="info-list">
        <li>📞 प्रहरीले फोन गर्नुहोस् <strong>१००</strong></li>
        <li>📞 आगो निभाउन फोन गर्नुहोस् <strong>१०१</strong></li>
        <li>🚑 एम्बुलेन्सका लागि फोन गर्नुहोस् <strong>१०२</strong></li>
        <li>🚦 ट्राफिक कन्ट्रोलका लागि फोन गर्नुहोस् <strong>१०३</strong></li>
        <li>☎️ फोन सोधपुछका लागि फोन गर्नुहोस् <strong>१९७</strong></li>
      </ul>
      <small className="muted">{t.hotlinesNote}</small>
    </>
  ) : (
    <>
      <p>{t.emergencyBanner}</p>
      <ul className="info-list">
        <li>📞 Dial <strong>100</strong> for Police</li>
        <li>📞 Dial <strong>101</strong> for Fire</li>
        <li>🚑 Dial <strong>102</strong> for Ambulance</li>
        <li>🚦 Dial <strong>103</strong> for Traffic Control</li>
        <li>☎️ Dial <strong>197</strong> for Telephone Inquiry</li>
      </ul>
      <small className="muted">{t.hotlinesNote}</small>
    </>
  )}
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
                <p className="card-desc">{r.description[lang]}</p>
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
                <p className="card-desc">{r.description[lang]}</p>
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

