# Portfolio Context Document
> For AI-assisted portfolio development

---

## Identity

**Name:** Phạm Phan Anh  
**Nickname:** Keishi  
**Age:** 22  
**Location:** Hanoi, Vietnam  
**Current Status:** Final-year Computer Science student at Hanoi University of Science and Technology (HUST), graduating 2025

**Positioning:**  
Engineer × Founder — A pragmatic problem solver building technology that matters.

---

## Professional Summary

A software engineer with system-level depth and product-building ambition. Currently balancing:
- Final year at Vietnam's top technical university
- Software Project Leader role at Samsung R&D Center Vietnam
- Co-founding two startups in edtech and enterprise software

Bridges the gap between low-level systems thinking and user-facing product development.

---

## Technical Profile

### Core Stack
| Category | Technologies |
|----------|-------------|
| Languages | C/C++, Java, Python, TypeScript/JavaScript, SQL |
| Frameworks | Qt (C++), Spring Boot (Java) |
| AI/ML | Vector embeddings, similarity search, model fine-tuning, data pipelines |
| Infrastructure | Docker, Linux, distributed systems |
| Process | Git, Jira, Agile/Scrum, UML |

### Working Style
- AI-augmented development (Cursor, Claude Code)
- Systems-first thinking applied to product problems
- Pragmatic over perfectionist

---

## Experience

### Samsung R&D Center Vietnam | Software Project Leader
*June 2025 – Present*
- Manage global software release schedules for Samsung PC products
- Technical triage across full stack: BIOS → drivers → OS → applications
- First in department to pioneer AI-assisted workflow optimization
- Coordinate with worldwide teams across production regions

### Viettel Aerospace Institute | System Engineer
*Viettel Digital Talent 2024 Program — May 2024 – Nov 2024*
- Selected for intensive high-performance systems program
- Built Person Search Service: C++ facial recognition processing 4K streams from 50 cameras
- Vector embedding pipeline for real-time similarity search
- Expertise gained: distributed systems, event-driven architecture, large-scale data pipelines

### Sun* Vietnam | AI R&D Intern
*Aug 2023 – Nov 2023*
- Fine-tuned SoftVC VITS for Vietnamese singing voice conversion
- Built podcast audio dataset for training and evaluation
- ML model fine-tuning and Vietnamese NLP

### HUST | Teaching Assistant — OOP Course
*Oct 2024 – Dec 2024*
- Mentored student projects with continuous feedback
- Designed hands-on Git workflow labs

---

## Ventures

### Leaply | Co-founder & Technical Lead
*AI+X Global 2025*

Vietnam's first AI-powered study abroad platform. Helping Vietnamese students find their right-fit universities through intelligent matching.

**Technical scope:**
- AI matching system using vector embeddings + cosine similarity
- Multi-dimensional scoring: academic, financial, cultural, career fit
- LLM-integrated mentorship features
- Scalable architecture for growth

**Mission:** Make quality study abroad guidance accessible beyond the privileged few.

### [Stealth Venture] | Co-founder
Building AI-powered ERP solutions for Vietnamese SMEs. Details intentionally minimal.

---

## Education & Recognition

**Hanoi University of Science and Technology**  
B.S. Computer Science | 2021 – 2025 | CPA: 3.4/4.0

**Recognition:**
- Samsung Scholarship for Outstanding SOICT Students (Jan 2024)
- TOEIC: 905/990 (Nov 2024)
- Viettel Digital Talent 2024 Alumni

---

## Selected Projects

### Socket Chatter | C++, Qt, QML
Real-time LAN messaging application
- Async architecture supporting text, images, video
- Responsive QML interface with Qt signal-slot patterns

### TSP-GA | Java, JavaFX
Genetic algorithm visualization for Traveling Salesman Problem
- Team lead, algorithm design
- Interactive visualization of optimization process

---

## Character Context
> *For tone calibration, not direct display*

**Origin:** Grew up with limited resources. Learned to fix household appliances independently. Built first PC on a mass production budget (~500k VND) in high school. This resourcefulness evolved into engineering discipline.

**Mindset:** Rational problem-solver. Faced personal challenges in university and overcame them through systematic thinking. Transformed from people-pleaser into someone who genuinely understands user emotions and pain points.

**Values:**
- Pragmatism over idealism
- Building for impact, not vanity
- Technology as equalizer — making quality tools accessible
- Growth through continuous learning and critical thinking

**Interests:** Linux ricing, DIY projects, system optimization

---

## Contact & Intent

**GitHub:** [github.com/VoidKeishi](https://github.com/VoidKeishi)  
**LinkedIn:** [linkedin.com/in/voidkeishi314](https://linkedin.com/in/voidkeishi314)  
**Email:** phananha4@gmail.com  
**Phone:** +84 904 954 246

**Open to:**
- Collaboration on meaningful projects
- Software development opportunities
- Startup conversations
- Good conversations about technology and building things

---

## Design Direction

### Aesthetic Vision
- **Style:** Clean, modern, pragmatic — but designed to impress. Think landing page for a premium product. The "product" is Keishi.
- **Palette:** Black and white foundation with strategic accent moments
- **Visual Language:** Sharp, smart, technical. Use "aura" elements — glowing lines, subtle gradients, light trails — to convey precision and forward-thinking energy
- **Feel:** Professional credibility meets founder ambition. Not corporate sterile. Not playful casual. The intersection of engineer rigor and entrepreneurial boldness.

### Design References
- Landing pages of developer tools (Linear, Vercel, Raycast)
- Sharp geometric accents, not decorative fluff
- Typography-driven hierarchy with intentional whitespace
- Subtle depth through shadows, glows, and layering

### Interaction & Motion
- **Smooth scroll animations** — content reveals as user scrolls through the story
- Section entries: fade-up, slide-in, or parallax depth
- Progress indicators that respond to scroll position
- Micro-interactions on hover: subtle lifts, glows, line animations
- Performance-first: animations should feel buttery, never janky

---

## Navigation & UX Architecture

### Hybrid Navigation Pattern

**Navbar:** Persistent top navigation with section links + Blog link

**Two browsing modes:**

1. **Home (Full Story Mode)**
   - All sections visible in one continuous scroll
   - Storytelling flow — user experiences the full narrative
   - Scroll animations trigger as sections enter viewport
   - Progress indicator shows current position in journey

2. **Direct Section Mode (Nav Click)**
   - Clicking a nav item navigates to that section as an isolated view
   - Section behaves like its own "page" — scroll is locked to that section only
   - Cannot scroll up/down into other sections
   - Clean, focused experience for users who know what they want
   - Back to "Home" returns to full-scroll mode

**Why this works:**
- Respects user intent: explorers get the story, seekers get direct access
- Familiar navbar pattern, but with enhanced purpose
- Each section is optimized to stand alone AND flow in sequence

### Navbar Structure
```
┌────────────────────────────────────────────────────────────┐
│  Keishi    Home   About   Work   Ventures   Blog →   [●○]  │
└────────────────────────────────────────────────────────────┘
```
- **Logo/Name:** Returns to Home (full scroll mode)
- **Section links:** About, Work, Ventures, Projects, Connect
- **Blog:** External link to personal blog (opens new tab or navigates out)
- **Theme toggle:** Optional dark/light mode

### Mobile Behavior
- Navbar collapses to hamburger menu
- Same hybrid logic: Home = scroll all, Nav tap = isolated section
- Touch-friendly scroll snapping if appropriate

---

## Content Sections

### Section Flow (Home Mode)
```
1. Hero        — Hook: Name, positioning, visual impact
2. About       — Who I am, condensed professional identity  
3. Experience  — Where I've worked: Samsung → Viettel → Sun*
4. Ventures    — What I'm building: Leaply + stealth hint
5. Projects    — Selected technical work with links
6. Skills      — Technical toolkit, visual representation
7. Connect     — CTA: collaboration, opportunities, conversation
```

### Section Design Notes

**Hero**
- Bold name, sharp tagline
- Subtle animated element (aura lines, geometric accent)
- Scroll indicator inviting exploration
- Should feel like opening a product launch page

**About**
- Brief, impactful summary
- Can include a professional photo or abstract avatar
- Key stats or highlights as visual anchors

**Experience**
- Timeline or card layout
- Each role: company, title, dates, 2-3 bullet achievements
- Visual distinction between roles (cards, alternating layout)

**Ventures**
- Leaply: Featured with description, role, tech involved
- Stealth: Subtle mention — "Also building something in enterprise AI. Stay tuned."
- This section should feel entrepreneurial, forward-looking

**Projects**
- 2-3 selected projects with:
  - Name, tech stack, brief description
  - Link to GitHub/demo
  - Optional: screenshot or visual

**Skills**
- Clean visual representation (tags, grid, or grouped list)
- Avoid generic skill bars
- Group by category: Languages, Frameworks, AI/ML, Tools

**Connect**
- Clear CTA: What you're open to
- Contact methods: Email, LinkedIn, GitHub
- Optional: Simple contact form
- Warm but professional tone

---

## Technical Specification

### Framework
**Astro.js** — Static site generation for fast loading
- Partial hydration for interactive components only
- Optimized asset handling
- SEO-friendly out of the box

### Architecture Approach
```
/src
  /layouts
    BaseLayout.astro       # Shared layout with navbar
  /pages
    index.astro            # Home: full scroll mode
    about.astro            # Isolated section pages (optional)
    work.astro
    ventures.astro
    projects.astro
    connect.astro
  /components
    Navbar.astro
    Hero.astro
    SectionWrapper.astro   # Handles scroll-lock logic
    ProgressIndicator.astro
    ExperienceCard.astro
    ProjectCard.astro
    SkillGrid.astro
    ContactForm.astro      # Optional, can use static links
  /styles
    global.css
  /assets
    # Images, icons
```

### Key Implementation Notes
- **Scroll behavior:** Use Intersection Observer for scroll animations
- **Section isolation:** When navigating directly, render section in a scroll-locked container (overflow: hidden on body or section-only scroll)
- **View transitions:** Astro's View Transitions API for smooth page switches
- **Animations:** CSS animations preferred, JS for scroll-triggered effects (GSAP or native)

### Performance Targets
- First paint < 1s
- Fully interactive < 2s
- Lighthouse score > 95
- Zero layout shift

### Accessibility
- Keyboard navigation for all interactive elements
- Proper heading hierarchy
- Sufficient color contrast
- Screen reader friendly

---

## Creative Freedom

The AI developer has liberty to:
- Push visual boundaries — this should look like a product worth buying
- Use aura effects, glowing lines, subtle gradients to create depth and sharpness
- Propose section layouts that maximize impact (cards, timelines, grids, bento)
- Add scroll-triggered animations that feel premium
- Experiment with typography pairings for hierarchy
- Suggest color accents if it elevates the design (keeping B&W as anchor)
- Interpret "pragmatic" as "no bullshit, every element earns its place" — not as "boring"

**Constraints:**
- Maintain professional credibility as primary impression
- No clutter — intentional whitespace, purposeful density
- Ensure all claims are verifiable (links work, facts accurate)
- No stock photos or generic tech imagery
- Animations must be performant — never sacrifice speed for flair
- Respect the hybrid nav pattern: Home = full scroll, Nav click = isolated section

**Reference Aesthetic:**
Look at how these products present themselves:
- Linear.app — sharp, dark, precise
- Vercel.com — clean but bold, confident whitespace
- Raycast.com — premium feel, smart interactions
- Arc browser site — personality within polish

The portfolio should feel like it belongs in this tier.

---

## Blog Integration

**Blog Link:** Include in navbar, links to external personal blog

**Purpose:** Establishes thought leadership, shows depth beyond code

**Implementation:**
- Navbar item "Blog" that opens external blog URL
- Optional: If blog supports RSS/API, fetch 2-3 latest post titles for a "Writing" preview section on portfolio
- Blog link should feel integrated, not afterthought

**Blog URL:** *[To be provided by Keishi]*

---

## Summary for AI

**Build a portfolio website with these priorities:**

1. **Astro.js** static site — fast, SEO-friendly
2. **Hybrid navigation** — Home scrolls all sections as story; nav clicks isolate sections as pages
3. **Visual identity** — Clean, modern, sharp. Black/white base with aura effects (glowing lines, subtle gradients). Premium product-launch feel.
4. **Smooth animations** — Scroll-triggered reveals, micro-interactions, buttery performance
5. **Content** — Engineer × Founder positioning. Samsung/Viettel/Sun* experience. Leaply venture. Technical credibility.
6. **Blog** — Linked in navbar to external blog

**This portfolio sells Keishi as a product. Make it undeniable.**

---

*Document prepared for AI-assisted portfolio development. Last updated: 2025.*