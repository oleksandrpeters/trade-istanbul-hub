'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion'

const CATS = [
  { name: "Furniture", slug: "furniture" },
  { name: "Apparel", slug: "apparel" },
  { name: "Footwear", slug: "footwear" },
  { name: "Fabrics", slug: "fabrics" },
  { name: "Cosmetics", slug: "cosmetics" },
  { name: "Perfumes", slug: "perfumes" },
  { name: "Home Textiles", slug: "hometextiles" },
  { name: "Food & Beverage", slug: "food" },
  { name: "Lighting", slug: "lighting" },
  { name: "Building Materials", slug: "building" },
  { name: "Home Appliances", slug: "appliances" },
  { name: "Cleaning & Hygiene", slug: "cleaning" },
  { name: "Auto Parts", slug: "autoparts" },
  { name: "Tableware", slug: "tableware" },
  { name: "Jewelry", slug: "jewelry" },
]

const GROUPS = [
  { title: "Fashion & Style", cats: ["apparel","footwear","fabrics"] },
  { title: "Beauty & Care", cats: ["cosmetics","perfumes","cleaning"] },
  { title: "Home & Living", cats: ["furniture","hometextiles","lighting","appliances","tableware"] },
  { title: "Industry & Trade", cats: ["building","autoparts","food","jewelry"] },
]

const SVCS = [
  { name: "Business Club", slug: "club", desc: "Private B2B Network · Exclusive Deals", banner: "/banner-club.jpg" },
  { name: "Business Tours", slug: "tours", desc: "Factory Tours · Istanbul & Bursa", banner: "/banner-tours.jpg" },
  { name: "Medical Tourism", slug: "medical", desc: "Premium Healthcare · Top Turkish Clinics", banner: "/banner-medical.jpg" },
]

const TECH_HUB = [
  { name: "SaaS & Software", slug: "saas" },
  { name: "Game Development", slug: "gamedev" },
  { name: "Fintech & Blockchain", slug: "fintech" },
  { name: "Health IT", slug: "healthit" },
  { name: "IT Outsourcing", slug: "itoutsourcing" },
]

const FRANCHISE_HUB = [
  { name: "F&B Franchises", slug: "fb-franchise" },
  { name: "Retail & Fashion", slug: "retail-franchise" },
  { name: "Service Franchises", slug: "service-franchise" },
  { name: "Investment Data", slug: "investment-data" },
]

const NAV_MENU = {
  Categories: CATS.map(c => ({ name: c.name, slug: c.slug })),
  Services: SVCS.map(s => ({ name: s.name, slug: s.slug })),
  "Tech Hub": TECH_HUB,
  "Franchise Hub": FRANCHISE_HUB,
  Brand: [{ name: "CryptoCharm Official", slug: "cryptocharm" }],
  Founder: [{ name: "Oleksandr Peters", slug: "founder" }],
  Contact: [
    { name: "WhatsApp", slug: "wa" },
    { name: "Email", slug: "email" },
    { name: "Request Form", slug: "contact" },
  ],
  "Social Media": [
    { name: "LinkedIn", slug: "linkedin" },
    { name: "Facebook", slug: "facebook" },
    { name: "Instagram", slug: "instagram" },
    { name: "YouTube", slug: "youtube" },
  ],
}

const SOCIAL_LINKS: Record<string, string> = {
  LinkedIn: "https://linkedin.com/company/trade-istanbul-hub",
  Facebook: "https://facebook.com/TradeIstanbulHub",
  Instagram: "https://instagram.com/trade_istanbul_hub",
  YouTube: "https://youtube.com/@TRADEISTANBULHUB",
}

const FOUNDER_SOCIAL: Record<string, string> = {
  LinkedIn: "https://linkedin.com/in/oleksandrpeters",
  Facebook: "https://facebook.com/OleksandrPeters",
  Instagram: "https://instagram.com/oleksandr_peters",
  YouTube: "https://youtube.com/@TRADEISTANBULHUB",
}

const CAT_BANNERS: Record<string, string> = {
  furniture: "/banner-furniture.jpg",
  apparel: "/banner-apparel.jpg",
  footwear: "/banner-footwear.jpg",
  fabrics: "/banner-fabrics.jpg",
  cosmetics: "/banner-cosmetics.jpg",
  perfumes: "/banner-perfumes.jpg",
  hometextiles: "/banner-hometextiles.jpg",
  food: "/banner-food.jpg",
  lighting: "/banner-lighting.jpg",
  building: "/banner-building.jpg",
  appliances: "/banner-appliances.jpg",
  cleaning: "/banner-cleaning.jpg",
  autoparts: "/banner-autoparts.jpg",
  tableware: "/banner-tableware.jpg",
  jewelry: "/banner-jewelry.jpg",
}

const WA = "https://wa.me/905464151011?text=Hello%20Oleksandr%2C%20I%20am%20interested%20in%20wholesale%20cooperation%20with%20Trade%20Istanbul%20Hub."
const G = "#C9A84C"
const D = "#0A0A0A"
const PEARL = "#E5E3EE"
const MONO = "'Courier New', monospace"

// Горизонтальный скролл с вертикальными баннерами
function MobileBannerScroll({ items }: { items: { name: string, slug: string, banner: string }[] }) {
  return (
    <div style={{ display: "flex", overflowX: "auto", gap: 8, paddingLeft: 16, paddingRight: 16, scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", backgroundImage: "linear-gradient(rgba(201,168,76,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.035) 1px,transparent 1px)", backgroundSize: "60px 60px" }}>
      {items.map(item => (
        <a key={item.slug} href={`/${item.slug}`} style={{
          textDecoration: "none", flexShrink: 0, width: "78vw", scrollSnapAlign: "start",
          position: "relative", overflow: "hidden"
        }}>
          <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
            <img src={item.banner} alt={item.name}
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ textAlign: "center", padding: "8px 0 12px" }}>
            <span style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600, border: "1px solid #C9A84C", padding: "6px 16px" }}>EXPLORE →</span>
          </div>
        </a>
      ))}
    </div>
  )
}

function CookieBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const accepted = localStorage.getItem('tig_cookies')
    if (!accepted) setVisible(true)
  }, [])
  const accept = () => { localStorage.setItem('tig_cookies', '1'); setVisible(false) }
  if (!visible) return null
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 500, background: "rgba(6,6,6,0.97)", borderTop: "1px solid rgba(201,168,76,0.2)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
      <p style={{ fontSize: 11, color: PEARL, fontFamily: MONO, letterSpacing: 1, margin: 0, maxWidth: 700 }}>
        We use cookies to improve your experience. By continuing, you agree to our{" "}
        <a href="/cookies" style={{ color: G, textDecoration: "underline" }}>Cookie Policy</a> and{" "}
        <a href="/privacy" style={{ color: G, textDecoration: "underline" }}>Privacy Policy</a>.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <a href="/cookies" style={{ padding: "8px 16px", border: "1px solid rgba(201,168,76,0.3)", color: PEARL, fontSize: 9, letterSpacing: 2, textDecoration: "none", fontFamily: MONO, textTransform: "uppercase" }}>Learn More</a>
        <button onClick={accept} style={{ padding: "8px 20px", border: `1px solid ${G}`, background: G, color: D, fontSize: 9, letterSpacing: 2, cursor: "pointer", fontFamily: MONO, textTransform: "uppercase", fontWeight: 600 }}>Accept</button>
      </div>
    </motion.div>
  )
}

function NavItem({ label, items }: { label: string, items: { name: string, slug: string }[] }) {
  const [open, setOpen] = useState(false)
  const isSpecial = label === "Tech Hub" || label === "Franchise Hub"
  return (
    <div style={{ position: "relative" }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button style={{ background: "none", border: "none", color: open ? G : PEARL, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", cursor: "pointer", fontFamily: MONO, padding: "8px 16px", transition: "color .2s", fontWeight: 500 }}>
        {label} {isSpecial && <span style={{ color: G, fontSize: 8 }}>★</span>}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
            style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", background: "rgba(6,6,6,0.98)", border: `1px solid ${isSpecial ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.15)"}`, backdropFilter: "blur(20px)", padding: "12px 0", minWidth: 220, zIndex: 300 }}>
            {isSpecial && (
              <div style={{ padding: "6px 20px 10px", fontSize: 12, letterSpacing: 4, color: G, textTransform: "uppercase", fontFamily: MONO, borderBottom: "1px solid rgba(201,168,76,0.1)", marginBottom: 4 }}>
                {label === "Tech Hub" ? "Turkey Digital Export · $120B" : "Scale Your Brand · Turkish Franchises"}
              </div>
            )}
            {items.map(item => (
              <a key={item.slug} href={item.slug === "wa" ? WA : SOCIAL_LINKS[item.name] ? SOCIAL_LINKS[item.name] : `/${item.slug}`}
                target={item.slug === "wa" || SOCIAL_LINKS[item.name] ? "_blank" : "_self"}
                style={{ display: "block", padding: "10px 20px", fontSize: 11, color: isSpecial ? "#FFFFFF" : PEARL, textDecoration: "none", fontFamily: MONO, letterSpacing: 1, textTransform: "uppercase", transition: "all .15s", fontWeight: 500 }}
                onMouseEnter={e => { e.currentTarget.style.color = G; e.currentTarget.style.paddingLeft = "26px" }}
                onMouseLeave={e => { e.currentTarget.style.color = isSpecial ? "#FFFFFF" : PEARL; e.currentTarget.style.paddingLeft = "20px" }}>
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileBurgerMenu({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)
  const menuSections = [
    { label: "Categories", items: CATS.map(c => ({ name: c.name, slug: c.slug })) },
    { label: "Services", items: SVCS.map(s => ({ name: s.name, slug: s.slug })) },
    { label: "Tech Hub ★", items: TECH_HUB },
    { label: "Franchise Hub ★", items: FRANCHISE_HUB },
    { label: "Brand", items: [{ name: "CryptoCharm Official", slug: "cryptocharm" }] },
    { label: "Sourcing Showcase", items: [{ name: "Production Gallery", slug: "gallery" }] },
    { label: "Founder", items: [{ name: "Oleksandr Peters", slug: "founder" }] },
    { label: "Contact", items: [{ name: "WhatsApp", slug: "wa" }, { name: "Email", slug: "email" }, { name: "Request Form", slug: "contact" }] },
    { label: "Social Media", items: [{ name: "LinkedIn", slug: "linkedin" }, { name: "Facebook", slug: "facebook" }, { name: "Instagram", slug: "instagram" }, { name: "YouTube", slug: "youtube" }] },
  ]
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          style={{ position: "fixed", top: 0, right: 0, width: "85%", height: "100vh", background: "#060606", zIndex: 200, overflowY: "auto", borderLeft: "1px solid rgba(201,168,76,0.2)" }}>
          <div style={{ padding: "20px 20px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
            <span style={{ fontFamily: "Georgia,serif", fontSize: 14, color: G, letterSpacing: 3, textTransform: "uppercase" }}>Menu</span>
            <button onClick={onClose} style={{ background: "none", border: "none", color: G, fontSize: 24, cursor: "pointer" }}>✕</button>
          </div>
          <div style={{ padding: "8px 0" }}>
            {menuSections.map(section => (
              <div key={section.label}>
                <button onClick={() => setExpanded(expanded === section.label ? null : section.label)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "none", border: "none", borderBottom: "1px solid rgba(201,168,76,0.06)", cursor: "pointer" }}>
                  <span style={{ fontSize: 11, letterSpacing: 4, color: expanded === section.label ? G : PEARL, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>{section.label}</span>
                  <span style={{ color: G, fontSize: 14, transition: "transform .2s", transform: expanded === section.label ? "rotate(90deg)" : "rotate(0)" }}>›</span>
                </button>
                <AnimatePresence>
                  {expanded === section.label && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: "hidden", background: "rgba(201,168,76,0.02)" }}>
                      {section.items.map(item => (
                        <a key={item.slug}
                          href={item.slug === "wa" ? WA : SOCIAL_LINKS[item.name] || `/${item.slug}`}
                          target={item.slug === "wa" || SOCIAL_LINKS[item.name] ? "_blank" : "_self"}
                          onClick={onClose}
                          style={{ display: "block", padding: "12px 32px", fontSize: 12, color: PEARL, textDecoration: "none", fontFamily: MONO, letterSpacing: 1, textTransform: "uppercase", borderBottom: "1px solid rgba(201,168,76,0.04)", fontWeight: 500 }}>
                          {item.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CatRow({ name, slug, isMobile }: { name: string, slug: string, isMobile: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.a href={`/${slug}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      animate={{ x: hov ? 10 : 0, backgroundColor: hov ? "rgba(201,168,76,0.04)" : "rgba(0,0,0,0)" }}
      transition={{ duration: .18 }}
      style={{ textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "16px 0" : "20px 0", borderBottom: "1px solid rgba(201,168,76,0.06)", cursor: "pointer" }}>
      <span style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 20 : 24, fontWeight: 500, color: hov ? "#F59E0B" : PEARL, transition: "color .2s", letterSpacing: .5, textShadow: hov ? "0 0 12px rgba(245,158,11,0.5)" : "none" }}>{name}</span>
      <motion.span animate={{ opacity: hov ? 1 : 0, x: hov ? 0 : 8 }} style={{ color: G, fontSize: 20 }}>→</motion.span>
    </motion.a>
  )
}

function SvcCard({ name, slug, desc, isMobile }: { name: string, slug: string, desc: string, isMobile: boolean }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.a href={`/${slug}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.02, y: -3 }} transition={{ duration: .2 }}
      style={{ textDecoration: "none", background: hov ? G : "#0d0d0d", padding: "36px 28px", display: "flex", flexDirection: "column", border: `1px solid ${hov ? G : "rgba(201,168,76,0.3)"}`, cursor: "pointer", boxShadow: hov ? `0 0 24px rgba(201,168,76,0.4)` : "none", transition: "background .25s, box-shadow .25s" }}>
      <span style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontFamily: MONO, color: hov ? D : G, marginBottom: 8, fontWeight: 600, transition: "color .2s" }}>{name}</span>
      <span style={{ fontSize: 11, letterSpacing: 1, color: hov ? D : PEARL, fontFamily: MONO, textTransform: "uppercase", lineHeight: 1.6, transition: "color .2s", fontWeight: 500 }}>{desc}</span>
    </motion.a>
  )
}

function StrategicCard({ name, slug, desc }: { name: string, slug: string, desc: string }) {
  const [hov, setHov] = useState(false)
  return (
    <motion.a href={`/${slug}`}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: .2 }}
      style={{ textDecoration: "none", background: hov ? G : "#080808", padding: "40px 32px", display: "flex", flexDirection: "column", border: `1px solid ${hov ? G : "rgba(201,168,76,0.25)"}`, cursor: "pointer", boxShadow: hov ? `0 0 32px rgba(201,168,76,0.45)` : "none", transition: "background .25s, box-shadow .25s" }}>
      <span style={{ fontSize: 8, letterSpacing: 4, textTransform: "uppercase", fontFamily: MONO, color: hov ? D : G, marginBottom: 6, transition: "color .2s" }}>Strategic Ventures</span>
      <span style={{ fontSize: 16, letterSpacing: 2, textTransform: "uppercase", fontFamily: MONO, color: hov ? D : "#FFFFFF", marginBottom: 8, fontWeight: 600, transition: "color .2s" }}>{name}</span>
      <span style={{ fontSize: 11, letterSpacing: 1, color: hov ? D : PEARL, fontFamily: MONO, textTransform: "uppercase", lineHeight: 1.6, transition: "color .2s", fontWeight: 500 }}>{desc}</span>
    </motion.a>
  )
}

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 })
  const gridX = useTransform(springX, [-1, 1], [-20, 20])
  const gridY = useTransform(springY, [-1, 1], [-20, 20])

  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springTiltX = useSpring(tiltX, { stiffness: 100, damping: 20 })
  const springTiltY = useSpring(tiltY, { stiffness: 100, damping: 20 })
  const rotateX = useTransform(springTiltY, [-1, 1], [8, -8])
  const rotateY = useTransform(springTiltX, [-1, 1], [-8, 8])
  const [photoHov, setPhotoHov] = useState(false)
  const [founderHov, setFounderHov] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2)
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const handlePhotoMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    tiltX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
    tiltY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
  }

  const handlePhotoLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
    setPhotoHov(false)
  }

  return (
    <main style={{ background: D, color: "#F5F3EE", margin: 0, padding: 0, fontFamily: "Georgia,serif", overflowX: "hidden" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Oleksandr Peters",
          "jobTitle": "Founder & CEO",
          "image": "https://tradeistanbulhub.com/founder.jpg",
          "url": "https://tradeistanbulhub.com/founder",
          "knowsAbout": ["Turkish Export","B2B Wholesale","Furniture","Apparel","Footwear","Fabrics","Cosmetics","Perfumes","Home Textiles","Food & Beverage","Lighting","Building Materials","Home Appliances","Cleaning & Hygiene","Auto Parts","Tableware","Jewelry"],
          "sameAs": ["https://linkedin.com/in/oleksandrpeters","https://instagram.com/oleksandr_peters","https://facebook.com/OleksandrPeters","https://youtube.com/@TRADEISTANBULHUB"],
          "worksFor": {
            "@type": "Organization",
            "name": "Trade Istanbul Hub LLC",
            "url": "https://tradeistanbulhub.com",
            "address": { "@type": "PostalAddress", "addressRegion": "Florida", "addressCountry": "US" },
            "areaServed": ["UK","IT","ES","FR","DE","PL","US","CA","MX","PA","CO","BR","AR","PE","CL","SA","AE","EG","ZA","NG","GH","KE","IN","KR","VN"]
          },
          "description": "Personal Guarantor of Every Transaction. Premium Turkish B2B Export & Wholesale."
        })
      }} />

      <CookieBanner />
      <MobileBurgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {menuOpen && <div onClick={() => setMenuOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 199 }} />}

      {/* HEADER */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(10,10,10,0.97)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(201,168,76,0.1)" }}>
        <div style={{ height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "0 16px" : "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <img src="/logo.png" alt="TIG" style={{ height: isMobile ? 28 : 32, width: "auto" }} onError={e => { e.currentTarget.style.display = "none" }} />
            <span style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 11 : 17, letterSpacing: isMobile ? 2 : 7, color: G, textTransform: "uppercase", fontWeight: 400 }}>Trade Istanbul Hub</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {!isMobile && (
              <a href={WA} target="_blank"
                style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 16px", border: `1px solid ${G}`, color: G, fontSize: 9, letterSpacing: 2, textDecoration: "none", fontFamily: MONO, textTransform: "uppercase", fontWeight: 600, transition: "all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = D }}
                onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = G }}>
                ✆ WhatsApp
              </a>
            )}
            {isMobile && (
              <button onClick={() => setMenuOpen(true)}
                style={{ background: "none", border: `1px solid rgba(201,168,76,0.4)`, color: G, fontSize: 18, cursor: "pointer", padding: "4px 12px", fontFamily: MONO, lineHeight: 1 }}>
                ☰
              </button>
            )}
          </div>
        </div>
        {!isMobile && (
          <div style={{ height: 42, borderTop: "1px solid rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {Object.entries(NAV_MENU).map(([label, items]) => (
              <NavItem key={label} label={label} items={items} />
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section style={{ minHeight: "auto", padding: isMobile ? "72px 0 0" : "130px 48px 0", position: "relative", overflow: "hidden", background: `radial-gradient(ellipse at 30% 50%, #1a1005 0%, ${D} 65%)` }}>
        {!isMobile && (
          <motion.div style={{ position: "absolute", inset: -60, x: gridX, y: gridY, backgroundImage: "linear-gradient(rgba(201,168,76,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.035) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />
        )}

        {isMobile ? (
          <div>
            <div style={{ textAlign: "center", padding: "16px 16px 12px", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
              <div style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600, lineHeight: 2 }}>
                Trade Istanbul Hub LLC<br />B2B Wholesale · Istanbul · Florida, USA
              </div>
            </div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
              onClick={() => window.location.href = '/founder'} style={{ cursor: "pointer", width: "100%" }}>
              <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                <img src="/founder.jpg" alt="Oleksandr Peters"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }} />
              </div>
            </motion.div>
            <div style={{ textAlign: "center", padding: "10px 16px", background: "rgba(201,168,76,0.03)", borderBottom: "1px solid rgba(201,168,76,0.08)" }}>
              <div style={{ fontSize: 10, color: G, fontFamily: "Georgia,serif", fontStyle: "italic", letterSpacing: 3 }}>— Personal Guarantee —</div>
            </div>
            {/* ЗОЛОТАЯ РАМОЧКА */}
            <div style={{ margin: "16px", border: "1px solid rgba(201,168,76,0.35)", padding: "20px 16px" }}>
              <p style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 10, fontFamily: MONO, fontWeight: 600 }}>Premium Turkish Export · Managed B2B Sourcing</p>
              <h2 style={{ fontFamily: "Georgia,serif", fontSize: 26, fontWeight: 300, color: "#F5F3EE", marginBottom: 4, lineHeight: 1.1 }}>Oleksandr Peters</h2>
              <div style={{ fontSize: 9, letterSpacing: 2, color: PEARL, textTransform: "uppercase", fontFamily: MONO, marginBottom: 14, fontWeight: 500 }}>Founder & CEO · Trade Istanbul Hub LLC</div>
              <p style={{ fontSize: 12, color: PEARL, lineHeight: 1.8, fontFamily: "Georgia,serif", marginBottom: 16, fontStyle: "italic", fontWeight: 400 }}>
                "Every factory verified personally. Every shipment backed by my name. This is not a marketplace — this is a partnership built on trust."
              </p>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", paddingTop: 14, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "space-between" }}>
                {[["15","Categories"],["5","Verticals"],["500+","Factories"],["40+","Countries"]].map(([n,l]) => (
                  <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 55 }}>
                    <div style={{ fontFamily: "Georgia,serif", fontSize: 22, color: G, fontWeight: 300, lineHeight: 1, textAlign: "center" }}>{n}</div>
                    <div style={{ fontSize: 7, letterSpacing: 2, color: PEARL, textTransform: "uppercase", marginTop: 3, fontFamily: MONO, fontWeight: 500, textAlign: "center" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* КНОПКИ ПОД РАМОЧКОЙ */}
            <div style={{ padding: "0 16px" }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
                {Object.entries(FOUNDER_SOCIAL).map(([name, url]) => (
                  <a key={name} href={url} target="_blank" style={{ padding: "7px 12px", border: "1px solid rgba(201,168,76,0.25)", background: "none", color: PEARL, fontSize: 9, letterSpacing: 1, textTransform: "uppercase", textDecoration: "none", fontFamily: MONO, fontWeight: 500 }}>{name}</a>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                {[["WhatsApp", WA, true], ["Founder Story", "/founder", false], ["Blog", "/blog", false]].map(([label, href, isWa]) => (
                  <a key={String(label)} href={String(href)} target={isWa ? "_blank" : "_self"}
                    style={{ padding: "10px 14px", border: `1px solid ${G}`, color: G, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none", fontFamily: MONO, fontWeight: 600 }}>
                    {String(label)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* DESKTOP HERO */
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <div style={{ fontSize: 10, letterSpacing: 6, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>
                Trade Istanbul Hub LLC · B2B Wholesale · Istanbul, Turkey · Florida, USA
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 64, alignItems: "flex-start" }}>
              <div>
                <motion.div
                  style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000, cursor: "pointer" }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                  onMouseMove={handlePhotoMove}
                  onMouseEnter={() => setPhotoHov(true)}
                  onMouseLeave={handlePhotoLeave}
                  onClick={() => window.location.href = '/founder'}
                  whileHover={{ scale: 1.02 }}>
                  <div style={{ width: "100%", aspectRatio: "4/3", overflow: "hidden", border: `1px solid rgba(201,168,76,${photoHov ? "0.5" : "0.15"})`, transition: "border-color .3s", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="/founder.jpg" alt="Oleksandr Peters"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                  </div>
                </motion.div>
                <div style={{ textAlign: "center", marginTop: 12, fontSize: 10, color: G, fontFamily: "Georgia,serif", fontStyle: "italic", letterSpacing: 3 }}>— Personal Guarantee —</div>
              </div>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9 }}>
                <p style={{ fontSize: 11, letterSpacing: 4, color: G, textTransform: "uppercase", marginBottom: 28, fontFamily: MONO, fontWeight: 600 }}>Premium Turkish Export · Managed B2B Sourcing</p>
                <motion.h2
                  onMouseEnter={() => setFounderHov(true)} onMouseLeave={() => setFounderHov(false)}
                  animate={{ letterSpacing: founderHov ? "6px" : "0px", color: founderHov ? G : "#F5F3EE" }}
                  transition={{ duration: .4 }}
                  style={{ fontFamily: "Georgia,serif", fontSize: 36, fontWeight: 300, marginBottom: 6, lineHeight: 1.1, cursor: "default" }}>
                  Oleksandr Peters
                </motion.h2>
                <div style={{ fontSize: 11, letterSpacing: 2, color: PEARL, textTransform: "uppercase", fontFamily: MONO, marginBottom: 24, fontWeight: 500 }}>Founder & CEO · Trade Istanbul Hub LLC</div>
                <p style={{ fontSize: 14, color: PEARL, lineHeight: 1.85, fontFamily: "Georgia,serif", marginBottom: 24, fontStyle: "italic", fontWeight: 400, maxWidth: 400 }}>
                  "Every factory verified personally. Every shipment backed by my name. This is not a marketplace — this is a partnership built on trust."
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 16 }}>
                  {Object.entries(FOUNDER_SOCIAL).map(([name, url]) => (
                    <a key={name} href={url} target="_blank" style={{ padding: "8px 16px", border: "1px solid rgba(201,168,76,0.25)", background: "none", color: PEARL, fontSize: 9, letterSpacing: 1, textTransform: "uppercase", textDecoration: "none", fontFamily: MONO, transition: "all .2s", fontWeight: 500 }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = G; e.currentTarget.style.color = G }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; e.currentTarget.style.color = PEARL }}>
                      {name}
                    </a>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
                  {[["WhatsApp", WA, true], ["Founder Story", "/founder", false], ["Blog", "/blog", false]].map(([label, href, isWa]) => (
                    <a key={String(label)} href={String(href)} target={isWa ? "_blank" : "_self"}
                      style={{ padding: "9px 20px", border: `1px solid ${G}`, color: G, fontSize: 9, letterSpacing: 2, textTransform: "uppercase", textDecoration: "none", fontFamily: MONO, transition: "all .25s", fontWeight: 600 }}
                      onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = D }}
                      onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = G }}>
                      {String(label)}
                    </a>
                  ))}
                </div>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.08)", paddingTop: 8, paddingBottom: 0, display: "flex", gap: 36, flexWrap: "wrap", alignItems: "center" }}>
                  {[["15","Product Categories"],["5","Service Verticals"],["500+","Manufacturers"],["40+","Countries"]].map(([n,l]) => (
                    <div key={l} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: 80 }}>
                      <div style={{ fontFamily: "Georgia,serif", fontSize: 36, color: G, fontWeight: 300, lineHeight: 1, textAlign: "center" }}>{n}</div>
                      <div style={{ fontSize: 9, letterSpacing: 3, color: PEARL, textTransform: "uppercase", marginTop: 6, fontFamily: MONO, fontWeight: 500, textAlign: "center" }}>{l}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </section>

      {/* SERVICES */}
      {isMobile ? (
        <section style={{ padding: "16px 0 24px", background: "#0A0A0A", backgroundImage: "linear-gradient(rgba(201,168,76,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.035) 1px,transparent 1px)", backgroundSize: "60px 60px" }}>
          <div style={{ padding: "0 16px", display: "flex", alignItems: "center", gap: 20, marginBottom: 12 }}>
            <span style={{ fontSize: 9, letterSpacing: 5, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>Services</span>
            <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.12)" }} />
          </div>
          <MobileBannerScroll items={SVCS.map(s => ({ name: s.name, slug: s.slug, banner: s.banner }))} />
        </section>
      ) : (
        <section style={{ padding: "0px 48px 48px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: 9, letterSpacing: 5, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>Services</span>
              <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.12)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2 }}>
              {SVCS.map(s => <SvcCard key={s.slug} {...s} isMobile={false} />)}
            </div>
          </div>
        </section>
      )}

      {/* STRATEGIC VENTURES */}
      {isMobile ? (
        <section style={{ padding: "0 0 40px" }}>
          <div style={{ padding: "0 16px", display: "flex", alignItems: "center", gap: 20, marginBottom: 12 }}>
            <span style={{ fontSize: 9, letterSpacing: 5, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>Strategic Ventures</span>
            <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.12)" }} />
          </div>
          <MobileBannerScroll items={[
            { name: "Tech Hub", slug: "techhub", banner: "/banner-tech.jpg" },
            { name: "Franchise Hub", slug: "franchisehub", banner: "/banner-franchise.jpg" },
          ]} />
        </section>
      ) : (
        <section style={{ padding: "0 48px 16px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
              <span style={{ fontSize: 9, letterSpacing: 5, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>Strategic Ventures</span>
              <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.12)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2 }}>
              <StrategicCard name="Tech Hub" slug="techhub" desc="Turkey Digital Export · $120B · SaaS, Fintech, Game Dev" />
              <StrategicCard name="Franchise Hub" slug="franchisehub" desc="Scale Your Brand · F&B, Retail, Service Franchises" />
            </div>
          </div>
        </section>
      )}

      {/* BRAND CryptoCharm */}
      {isMobile ? (
        <section style={{ padding: "0 0 24px" }}>
          <div style={{ padding: "0 16px", display: "flex", alignItems: "center", gap: 20, marginBottom: 12 }}>
            <span style={{ fontSize: 8, letterSpacing: 4, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>Brand</span>
            <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.08)" }} />
          </div>
          <MobileBannerScroll items={[{ name: "CryptoCharm Official", slug: "cryptocharm", banner: "/baner-cryptocharm.jpg" }]} />
        </section>
      ) : (
        <section style={{ padding: "0 48px 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 8 }}>
              <span style={{ fontSize: 10, letterSpacing: 4, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>Brand</span>
              <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.08)" }} />
            </div>
            <CatRow name="CryptoCharm Official" slug="cryptocharm" isMobile={false} />
          </div>
        </section>
      )}

      {/* КАТЕГОРИИ */}
      {GROUPS.map(group => (
        isMobile ? (
          <section key={group.title} style={{ padding: "0 0 24px" }}>
            <div style={{ padding: "0 16px", display: "flex", alignItems: "center", gap: 20, marginBottom: 12 }}>
              <span style={{ fontSize: 8, letterSpacing: 4, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>{group.title}</span>
              <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.08)" }} />
            </div>
            <MobileBannerScroll items={CATS.filter(c => group.cats.includes(c.slug)).map(c => ({ name: c.name, slug: c.slug, banner: CAT_BANNERS[c.slug] }))} />
          </section>
        ) : (
          <section key={group.title} style={{ padding: "0 48px 48px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 8 }}>
                <span style={{ fontSize: 10, letterSpacing: 4, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600 }}>{group.title}</span>
                <div style={{ flex: 1, height: 1, background: "rgba(201,168,76,0.08)" }} />
              </div>
              {CATS.filter(c => group.cats.includes(c.slug)).map(c => <CatRow key={c.slug} name={c.name} slug={c.slug} isMobile={false} />)}
            </div>
          </section>
        )
      ))}

      {/* SOURCING SHOWCASE */}
      <section style={{ padding: isMobile ? "32px 16px 40px" : "24px 48px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 450, margin: "0 auto" }}>
          <div style={{ fontSize: 9, letterSpacing: 6, color: G, textTransform: "uppercase", fontFamily: MONO, fontWeight: 600, marginBottom: 16 }}>Sourcing Showcase</div>
          <h2 style={{ fontFamily: "Georgia,serif", fontSize: isMobile ? 18 : 26, fontWeight: 300, color: PEARL, marginBottom: 12, lineHeight: 1.3, letterSpacing: 1 }}>Verified. Inspected. Delivered.</h2>
          <p style={{ fontSize: isMobile ? 9 : 10, color: "rgba(229,227,238,0.45)", fontFamily: MONO, letterSpacing: 2, lineHeight: 1.9, marginBottom: 28, textTransform: "uppercase" }}>
            A visual archive of our verified manufacturing processes,<br />factories, workshops, and quality control inspections.
          </p>
          <a href="/gallery"
            style={{ display: "inline-block", padding: isMobile ? "10px 24px" : "12px 32px", border: `1px solid ${G}`, color: G, fontSize: 9, letterSpacing: 3, textTransform: "uppercase", textDecoration: "none", fontFamily: MONO, fontWeight: 600, transition: "all .25s" }}
            onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = D }}
            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = G }}>
            Explore Production Gallery →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#040404", borderTop: "1px solid rgba(201,168,76,0.06)", padding: isMobile ? "32px 16px 20px" : "52px 48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {isMobile ? (
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontFamily: "Georgia,serif", fontSize: 16, color: G, marginBottom: 8, letterSpacing: 2 }}>Trade Istanbul Hub</div>
              <div style={{ fontSize: 9, letterSpacing: 1, color: PEARL, lineHeight: 1.7, fontFamily: MONO, marginBottom: 6, fontWeight: 500, textTransform: "uppercase" }}>Premium B2B export & wholesale. 15 categories. 500+ manufacturers.</div>
              <div style={{ fontSize: 9, color: G, fontFamily: MONO, letterSpacing: 2, marginBottom: 14, textTransform: "uppercase" }}>Trade Istanbul Hub LLC · Florida, USA</div>
              <a href={WA} target="_blank" style={{ display: "inline-block", padding: "9px 20px", border: `1px solid ${G}`, color: G, fontSize: 9, letterSpacing: 2, textDecoration: "none", fontFamily: MONO, textTransform: "uppercase", marginBottom: 20 }}>WhatsApp</a>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
                <div>
                  <div style={{ fontSize: 8, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 10, fontFamily: MONO, fontWeight: 600 }}>Categories</div>
                  {CATS.slice(0,8).map(c => <a key={c.slug} href={`/${c.slug}`} style={{ display: "block", fontSize: 9, color: PEARL, marginBottom: 6, fontFamily: MONO, fontWeight: 500, textTransform: "uppercase", textDecoration: "none" }}>{c.name}</a>)}
                </div>
                <div>
                  <div style={{ fontSize: 8, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 10, fontFamily: MONO, fontWeight: 600 }}>More</div>
                  {CATS.slice(8).map(c => <a key={c.slug} href={`/${c.slug}`} style={{ display: "block", fontSize: 9, color: PEARL, marginBottom: 6, fontFamily: MONO, fontWeight: 500, textTransform: "uppercase", textDecoration: "none" }}>{c.name}</a>)}
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.06)", paddingTop: 16 }}>
                <div style={{ fontSize: 8, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 10, fontFamily: MONO, fontWeight: 600 }}>Legal</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                  {[["Privacy Policy","/privacy"],["Terms","/terms"],["Cookies","/cookies"],["Disclaimer","/disclaimer"]].map(([n,h]) => (
                    <a key={h} href={h} style={{ fontSize: 9, color: PEARL, fontFamily: MONO, textDecoration: "none", textTransform: "uppercase", letterSpacing: 1 }}>{n}</a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
                <div>
                  <div style={{ fontFamily: "Georgia,serif", fontSize: 18, color: G, marginBottom: 12, letterSpacing: 2 }}>Trade Istanbul Hub</div>
                  <div style={{ fontSize: 11, letterSpacing: 1, color: PEARL, lineHeight: 1.8, fontFamily: MONO, marginBottom: 8, maxWidth: 240, fontWeight: 500, textTransform: "uppercase" }}>Premium B2B export & wholesale. 15 categories. 500+ manufacturers.</div>
                  <div style={{ fontSize: 10, color: G, fontFamily: MONO, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase", fontWeight: 500 }}>Trade Istanbul Hub LLC · Florida, USA</div>
                  <div style={{ fontSize: 9, color: PEARL, fontFamily: MONO, letterSpacing: 1, marginBottom: 20, textTransform: "uppercase" }}>
                    <a href="mailto:oleksandr@tradeistanbulhub.com" style={{ color: G, textDecoration: "none" }}>oleksandr@tradeistanbulhub.com</a>
                  </div>
                  <a href={WA} target="_blank" style={{ display: "inline-block", padding: "10px 24px", border: `1px solid ${G}`, color: G, fontSize: 9, letterSpacing: 2, textDecoration: "none", fontFamily: MONO, textTransform: "uppercase", transition: "all .25s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = G; e.currentTarget.style.color = D }}
                    onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = G }}>
                    WhatsApp
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16, fontFamily: MONO, fontWeight: 600 }}>Categories</div>
                  {CATS.slice(0,8).map(c => <a key={c.slug} href={`/${c.slug}`} style={{ display: "block", fontSize: 10, letterSpacing: 1, color: PEARL, marginBottom: 8, fontFamily: MONO, fontWeight: 500, textTransform: "uppercase", textDecoration: "none" }}>{c.name}</a>)}
                </div>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16, fontFamily: MONO, fontWeight: 600 }}>More</div>
                  {CATS.slice(8).map(c => <a key={c.slug} href={`/${c.slug}`} style={{ display: "block", fontSize: 10, letterSpacing: 1, color: PEARL, marginBottom: 8, fontFamily: MONO, fontWeight: 500, textTransform: "uppercase", textDecoration: "none" }}>{c.name}</a>)}
                </div>
                <div>
                  <div style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 16, fontFamily: MONO, fontWeight: 600 }}>Company</div>
                  {[["About Us","/about"],["Contact","/contact"],["Founder","/founder"],["Blog","/blog"]].map(([n,h]) => (
                    <a key={h} href={h} style={{ display: "block", fontSize: 10, letterSpacing: 1, color: PEARL, marginBottom: 8, fontFamily: MONO, fontWeight: 500, textTransform: "uppercase", textDecoration: "none" }}
                      onMouseEnter={e => e.currentTarget.style.color = G}
                      onMouseLeave={e => e.currentTarget.style.color = PEARL}>
                      {n}
                    </a>
                  ))}
                  <div style={{ marginTop: 16 }}>
                    <div style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 12, fontFamily: MONO, fontWeight: 600 }}>Social</div>
                    {Object.entries(SOCIAL_LINKS).map(([name, url]) => (
                      <a key={name} href={url} target="_blank" style={{ display: "block", fontSize: 10, letterSpacing: 1, color: PEARL, marginBottom: 8, fontFamily: MONO, fontWeight: 500, textTransform: "uppercase", textDecoration: "none" }}
                        onMouseEnter={e => e.currentTarget.style.color = G}
                        onMouseLeave={e => e.currentTarget.style.color = PEARL}>
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(201,168,76,0.06)", paddingTop: 24, marginBottom: 20 }}>
                <div style={{ fontSize: 9, letterSpacing: 3, color: G, textTransform: "uppercase", marginBottom: 12, fontFamily: MONO, fontWeight: 600 }}>Legal</div>
                <div style={{ display: "flex", gap: 24 }}>
                  {[["Privacy Policy","/privacy"],["Terms of Service","/terms"],["Cookie Policy","/cookies"],["Disclaimer","/disclaimer"]].map(([n,h]) => (
                    <a key={h} href={h} style={{ fontSize: 10, color: PEARL, fontFamily: MONO, textDecoration: "none", textTransform: "uppercase", letterSpacing: 1, fontWeight: 500, transition: "color .2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = G}
                      onMouseLeave={e => e.currentTarget.style.color = PEARL}>
                      {n}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div style={{ borderTop: "1px solid rgba(201,168,76,0.04)", paddingTop: 16, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ fontSize: isMobile ? 8 : 9, color: G, letterSpacing: 2, fontFamily: MONO, textTransform: "uppercase", fontWeight: 500 }}>© 2025 Trade Istanbul Hub LLC · Florida, USA</div>
            <div style={{ fontSize: isMobile ? 8 : 9, color: PEARL, fontFamily: MONO, fontWeight: 500 }}>Founder: <span style={{ color: G }}>Oleksandr Peters</span></div>
          </div>
        </div>
      </footer>
    </main>
  )
}
