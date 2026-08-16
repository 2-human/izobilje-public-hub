/* ============================================================================
 * Izobilje Hub — content.js
 * ----------------------------------------------------------------------------
 * The per-instance config for the `proposal-hub` chassis (chassis_version 2.0.0).
 * `index.html` is the pinned chassis and is NEVER edited per instance, with one
 * recorded exception noted in .composition-manifest.md (a robots noindex meta).
 * Everything else about this hub is authored here.
 *
 * This hub is not a pitch. Izobilje is an umbrella brand, and the hub's function is
 * to hold the architecture and the relationships between every asset the community
 * develops from here on. Sections are the architecture; each view is one artefact.
 *
 * Validate after every edit:   node validate-content.mjs
 * ========================================================================== */

/* The website artefact is the already-published mirror, iframed rather than copied.
   Embedding by reference means the hub can never drift from the real site, and the
   20MB of imagery is not duplicated into a second repo. */
var WEB = "https://2-human.github.io/izobilje-public-main-website/";

window.HUB = {

  /* ---- The org whose brand the hub wears ---------------------------------- */
  agency: {
    name: "Izobilje",
    unit: "Deliblatska peščara",
    org:  "Izobilje",
    lang: "en",
    /* No logo mark. The chassis renders the sidebar logo through
       `filter: brightness(0) invert(1)`, which expects a monochrome asset with
       transparency; the site's only logo is an opaque JPG photo and turns into a solid
       white block. Drop in an SVG or an alpha PNG and re-add this line. */
    favicon: "assets/favicon.jpg",
    /* Palette lifted from the live site's own token set, so the hub and the website
       read as one brand rather than two. */
    tokens: {
      accent: "#358D6D", accentStrong: "#246B51", accentSoft: "#DDEEE8",
      ink: "#17362A", ink2: "#244C3D", inkMuted: "rgba(23,54,42,.58)",
      sidebar: "#0E1B16", bg: "#F7F6F2", bgAlt: "#F3F1ED",
      hairline: "rgba(23,54,42,.14)", onDark: "#F6F4EE",
    },
    fonts: {
      display: "Lexend, sans-serif",
      body: "Inter, sans-serif",
      import: "https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
    },
  },

  brand: {
    proposalFor: "Izobilje and the brands under it",
    foot: "Izobilje &middot; Poljoprivredno gazdinstvo Jeličić, BPG 803138021723.<br>" +
          "Working surface, not a public page. Artefacts here are review candidates.",
  },

  title: "Izobilje Hub",
  favicon: "assets/favicon.jpg",
  defaultView: "intro",
  WEB: WEB,

  /* ---- Sections (architecture) and their artefacts ------------------------ */
  nav: [
    { section: "Start", items: [
      { view: "intro", label: "What this is",
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='12' cy='12' r='9'/><path d='M12 8h.01M11 12h1v4h1'/></svg>" },
    ]},
    { section: "The Community", items: [
      { view: "who", label: "Who we are", badge: 9,
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><path d='M3 20v-1a4 4 0 014-4h4a4 4 0 014 4v1'/><circle cx='9' cy='8' r='3'/><path d='M16 3.5a3 3 0 010 5.8M21 20v-1a4 4 0 00-3-3.8'/></svg>" },
      { view: "audiences", label: "Who it's for",
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='12' cy='12' r='3'/><circle cx='12' cy='12' r='8'/></svg>" },
    ]},
    { section: "Digital Estate", items: [
      { view: "website", label: "izobilje.com", badge: 14,
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18'/></svg>" },
    ]},
    { section: "Governance", items: [
      { view: "decisions", label: "Decisions & open questions",
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><path d='M5 4h11l3 3v13H5z'/><path d='M9 10h6M9 14h4'/></svg>" },
    ]},
  ],

  VIEWS: {
    intro:     { title: "What this is", sub: "The hub, its function, and how to read it" },
    who:       { title: "Who we are", sub: "Izobilje as an umbrella, and the brands under it" },
    audiences: { title: "Who it's for", sub: "The people the work is aimed at, in tiers" },
    website:   { title: "izobilje.com", sub: "14 routes, 5 languages, rendered from the repo",
                 open: WEB, openLabel: "Open the site ↗", tbBadge: "Live mirror", infoPane: true },
    decisions: { title: "Decisions & open questions", sub: "What is settled, and what is not" },
  },

  /* Required by the chassis even with no social view: renderSocial() runs on load
     and throws if `social` or `PF` is absent. The validator does not catch this. */
  PF: {
    instagram: { name: "Instagram", cls: "ig", tag: "◉" },
    facebook:  { name: "Facebook",  cls: "fb", tag: "f"  },
  },
  social: [],

  /* Placeholder pipeline. No CRM view ships in v1; these are the stages a membership
     and enquiry pipeline would use once there is a backend to hold them. */
  STAGES: {
    "Enquiry": "st-new", "In conversation": "st-contacted", "Visited": "st-visit",
    "Volunteering": "st-quoted", "Member": "st-won", "Lapsed": "st-lost",
  },

  sitepane: `
    <h3>How this artefact was made</h3>
    <p>The site was built on Lovable as a React single-page app. Every one of its 14 routes
    returned an identical empty shell, so a normal crawl would have captured 14 blank pages.
    The content was instead extracted from the compiled bundle as structured data: 1,431
    strings per language across five languages.</p>
    <p>Those strings now live as 14 <code>PAGE.md</code> files in the private repo. The published
    HTML is generated from them, so the Markdown is the source of truth and the site is a
    rendered output rather than a thing edited in place.</p>
    <h3>What is not carried over</h3>
    <p>The contact form and planting signup render as copy. They have no backend yet, so the
    site cannot capture an enquiry. That gap is what the planned database closes.</p>
    <h3>Where it points</h3>
    <p>izobilje.com still resolves to Lovable. This mirror is the rebuild, published for review;
    moving the domain is a separate decision.</p>`,

  html: {

    /* ------------------------------------------------------------------ intro */
    intro: `
    <div class="brief">
      <p class="brief__eyebrow">Izobilje &middot; asset architecture</p>
      <h1>The Izobilje hub</h1>
      <p class="brief__lede">Izobilje is an umbrella. Under it sit a growing set of places,
      projects and services, each with its own name, its own audience and its own assets. This
      hub is where that architecture is held: what exists, what it is called, who it is for, and
      how the pieces relate to each other.</p>
      <div class="brief__body">
        <p>It is a working surface rather than a public page. It is deliberately not indexed, and
        it is meant to be read by the people building the thing.</p>
        <p>The hub grows one artefact at a time. Each artefact gets its own view; a family of
        artefacts gets its own section. Nothing is added here as a placeholder, so what you see
        is an honest picture of what exists rather than a plan drawn in advance.</p>
        <div class="brief__aside">Today the hub holds one artefact: the website. Everything else
        in this view describes the shape the architecture is taking, not work already done.</div>
        <h2>How to read it</h2>
        <p><b>Who we are</b> is the brand architecture: Izobilje and the nine named brands
        currently living under it. <b>Who it's for</b> sets out the audiences in tiers, because
        the tiering decides what gets built first. <b>izobilje.com</b> is the first artefact, and
        <b>Decisions</b> records what has been settled and what is still open.</p>
      </div>
      <div class="brief__foot"><span class="brief__num">1</span>
        <span>artefact in the hub. The next ones are named in Decisions.</span></div>
    </div>`,

    /* -------------------------------------------------------------------- who */
    who: `
    <div class="brief">
      <p class="brief__eyebrow">Brand architecture</p>
      <h1>Izobilje, and the brands under it</h1>
      <p class="brief__lede">Izobilje is a community on a working ranch in Deliblatska peščara,
      Serbia, practising environmental regeneration, circular and sustainable growth, communal
      living, and participatory decision making. People live on the land now.</p>
      <div class="brief__body">
        <p>The name that appears most in public is not always Izobilje. Most of the activity is
        carried by named sub-brands, several of which share the <b>Šumski Mir</b> prefix. Getting
        that hierarchy explicit is the first job of this hub, because it decides what each future
        asset is called and where it belongs.</p>
        <div class="brief__aside">Nine named brands are in use today. Only one of them, the
        website, currently has an artefact in this hub.</div>
      </div>

      <div class="brief__sec"><span class="brief__num">01</span><div>
        <h2>Šumski Mir</h2>
        <p>The outdoor centre in the heart of Deliblatska peščara, and the flagship under the
        umbrella. Most other brands sit beneath it rather than beside it.</p></div></div>

      <div class="brief__sec"><span class="brief__num">02</span><div>
        <h2>Šumski Mir Co-Working Camp</h2>
        <p>The camping offer, aimed at digital nomads and remote workers. Positioned around
        reliable wifi, forest workspaces and pay-what-you-feel pricing.</p></div></div>

      <div class="brief__sec"><span class="brief__num">03</span><div>
        <h2>Šumski Mir Overland &amp; RV Campsite</h2>
        <p>Vehicle-based camping, described on the site as a first of its kind in Serbia for
        overland travellers.</p></div></div>

      <div class="brief__sec"><span class="brief__num">04</span><div>
        <h2>Šumski Mir Ranč</h2>
        <p>The agricultural side: shared gardening, afforestation, and drone, AI and IoT
        technology applied to modern farming.</p></div></div>

      <div class="brief__sec"><span class="brief__num">05</span><div>
        <h2>Šumski Mir med</h2>
        <p>Honey from the forest apiaries, sold raw and unfiltered. The clearest product brand in
        the set, and the one most obviously able to carry commerce.</p></div></div>

      <div class="brief__sec"><span class="brief__num">06</span><div>
        <h2>Wrangleritza</h2>
        <p>Guided Jeep safari and off-road tours. The only brand in the set whose name does not
        signal its parent, which may be deliberate and is worth a decision either way.</p></div></div>

      <div class="brief__sec"><span class="brief__num">07</span><div>
        <h2>Udruženje Novo Jutro</h2>
        <p>The association: the governance, membership and ethics vehicle. Structurally different
        from the others, since it is a legal body rather than an offer.</p></div></div>

      <div class="brief__sec"><span class="brief__num">08</span><div>
        <h2>Silva Banatica</h2>
        <p>The forest and biodiversity restoration initiative for the Banat. Live in the site's
        router but deliberately absent from its sitemap, because the page is still a placeholder.
        It reads as the most fundable thing here.</p></div></div>

      <div class="brief__sec"><span class="brief__num">09</span><div>
        <h2>Rasadnik</h2>
        <p>The nursery, growing and tending seedlings to share with the community and to push
        further planting across Serbia. Currently a section of the site rather than a brand with
        its own surface.</p></div></div>

      <div class="brief__foot"><span class="brief__num">?</span>
        <span>Open question: which of these are brands, which are products, and which are just
        page headings. Recorded in Decisions.</span></div>
    </div>`,

    /* -------------------------------------------------------------- audiences */
    audiences: `
    <div class="brief">
      <p class="brief__eyebrow">Audiences</p>
      <h1>Who the work is for</h1>
      <p class="brief__lede">The community names many audiences, spanning Serbia, the Balkans and
      further out, with a stated skew toward Gen Z and younger millennials. They are grouped in
      three tiers here, because an untiered list cannot decide what gets built first.</p>
      <div class="brief__body">
        <p>The tiering below is proposed rather than settled. It is the single most useful thing
        to confirm, since it drives the content, the channels and the order of the build.</p>
      </div>

      <div class="brief__sec"><span class="brief__num">1</span><div>
        <h2>People who come to the land</h2>
        <p>Prospective members and residents, volunteers and WWOOF-style visitors, campers, and
        digital nomads. Different depths of commitment, but one funnel and one body of copy.
        Proposed as the primary tier.</p></div></div>

      <div class="brief__sec"><span class="brief__num">2</span><div>
        <h2>Peers and experts</h2>
        <p>Direct-action and direct-democracy communities, circular-economy communities, and
        specialists in forestry, environmental studies, agriculture, environmental technology and
        sustainability policy. This tier buys credibility and knowledge exchange, not
        bookings.</p></div></div>

      <div class="brief__sec"><span class="brief__num">3</span><div>
        <h2>Funders and partners</h2>
        <p>Companies with CSR programmes looking for spaces and initiatives to support. Smallest
        in number, largest per unit, and they want entirely different evidence: outcomes,
        governance and transparency rather than atmosphere.</p></div></div>

      <div class="brief__foot"><span class="brief__num">!</span>
        <span>If CSR funding is what actually keeps the lights on, tier 3 is primary and the
        content strategy inverts. That call has not been made.</span></div>
    </div>`,

    /* ---------------------------------------------------------------- website */
    website: `<iframe title="izobilje.com" src="${WEB}"></iframe>`,

    /* -------------------------------------------------------------- decisions */
    decisions: `
    <div class="brief">
      <p class="brief__eyebrow">Governance</p>
      <h1>Decisions and open questions</h1>
      <p class="brief__lede">What has been settled so far, and what is deliberately still open.
      Each decision lives as its own file in the private repo; this view is the readable summary
      rather than the record itself.</p>

      <div class="brief__body"><h2>Settled</h2></div>

      <div class="brief__sec"><span class="brief__num">01</span><div>
        <h2>The repo is the source of truth for the website</h2>
        <p>izobilje.com was adopted off Lovable. Copy lives as Markdown; the published site is
        generated from it. Editing the site in Lovable is now a smell, because the repo would
        stop reflecting what is served.</p></div></div>

      <div class="brief__sec"><span class="brief__num">02</span><div>
        <h2>Languages are URLs, not query parameters</h2>
        <p>Serbian renders at the site root; English, German, Dutch and French render under their
        own prefixes, each with hreflang and canonical tags. The original switched language in
        JavaScript, which meant no language had an indexable address.</p></div></div>

      <div class="brief__sec"><span class="brief__num">03</span><div>
        <h2>The hub embeds the website by reference</h2>
        <p>This hub iframes the published mirror rather than carrying its own copy, so the two can
        never drift apart. The hub is also not indexed, since it holds working material.</p></div></div>

      <div class="brief__body"><h2>Open</h2></div>

      <div class="brief__sec"><span class="brief__num">04</span><div>
        <h2>Audience tiering</h2>
        <p>Whether the three tiers are right, and whether tier 1 is genuinely primary for the next
        twelve months.</p></div></div>

      <div class="brief__sec"><span class="brief__num">05</span><div>
        <h2>Brand architecture</h2>
        <p>Which of the nine names are brands, which are products, and which are page headings.
        Wrangleritza in particular does not signal its parent.</p></div></div>

      <div class="brief__sec"><span class="brief__num">06</span><div>
        <h2>The site cannot capture anyone</h2>
        <p>The contact form and planting signup are copy without a backend. Until that is closed,
        every channel pointed at the site leaks. This is the most consequential open item.</p></div></div>

      <div class="brief__sec"><span class="brief__num">07</span><div>
        <h2>Engagement model</h2>
        <p>How somebody moves from interested to present on the land to member, and where money
        changes hands. The site already sells camping, honey, tours and donations, which implies a
        model that has not been written down.</p></div></div>

      <div class="brief__sec"><span class="brief__num">08</span><div>
        <h2>Italian and Spanish</h2>
        <p>Both were asked for and neither exists. Each is roughly 1,431 strings to
        translate.</p></div></div>

      <div class="brief__sec"><span class="brief__num">09</span><div>
        <h2>The domain</h2>
        <p>izobilje.com still points at Lovable. Nothing here has touched DNS. Moving it is a
        deliberate step once the rebuild is signed off.</p></div></div>

      <div class="brief__foot"><span class="brief__num">→</span>
        <span>Next artefacts, in the order they would most likely land: a backend for the forms,
        the social surface, and Silva Banatica as a fundable project page.</span></div>
    </div>`,
  },
};

/* The chassis writes "Proposal for <b>…</b>" into #hubProposal at load, and that string is
   not configurable in chassis 2.0.0. This hub is not a proposal, so the lede is corrected
   here rather than by editing the pinned chassis. Registered on DOMContentLoaded, which
   fires after the chassis IIFE has run. Logged as a backport candidate (a `brand.lede` key)
   in .composition-manifest.md. Guarded on the method rather than on `document`, because
   validate-content.mjs loads this file in a vm sandbox whose document stub is `{title:""}`. */
if (typeof document !== "undefined" && typeof document.addEventListener === "function") {
  document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("hubProposal");
    if (el) el.innerHTML = "Asset architecture for <b>Izobilje</b>";
  });
}
