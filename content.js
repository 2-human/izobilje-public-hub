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


/* ---------------------------------------------------------------------------
 * Content language
 * ---------------------------------------------------------------------------
 * View BODIES are content and get translated. Navigation labels, toolbar headings and
 * the switcher's own chrome are system UI and stay English by decision.
 *
 * Selection order: `?lng=` in the URL, then the last choice in localStorage, then English.
 * The query parameter wins so a link to a given language is shareable, which is also how
 * the website handles it. The language is resolved BEFORE window.HUB is built, so the
 * chassis renders the right copy on first paint: no re-render, no flash of English.
 * ------------------------------------------------------------------------- */
var LANGS = [
  { code: "en", label: "EN", name: "English" },
  { code: "sr", label: "SR", name: "Srpski" },
  { code: "de", label: "DE", name: "Deutsch" },
  { code: "nl", label: "NL", name: "Nederlands" },
  { code: "fr", label: "FR", name: "Français" },
];
var DEFAULT_LANG = "en";
var LANG_KEY = "izobiljeHubLang";

var EMAILS = {
  "contact": {
    "form": {
      "sr": "Kontakt forma",
      "en": "Contact form"
    },
    "formKey": "contactPage",
    "url": "contact/",
    "selector": {
      "sr": "Predmet",
      "en": "Predmet (subject)"
    },
    "fields": {
      "sr": "Ime, Email, Telefon, Predmet, poruka",
      "en": "Ime, Email, Telefon, Predmet, message"
    },
    "sender": "Jovan · Šumski Mir",
    "canon": "content/email/contact-form-autoresponses/EMAIL.md",
    "variants": [
      {
        "id": "v01",
        "label": {
          "sr": "Šumski Mir partnerstvo",
          "en": "Šumski Mir partnership"
        },
        "formValue": "Šumski Mir partnership",
        "note": {
          "sr": "An organisation, business or institution proposing to work together.",
          "en": "An organisation, business or institution proposing to work together."
        },
        "sequence": [
          {
            "step": 1,
            "status": "draft",
            "when": {
              "sr": "Odmah po slanju forme",
              "en": "Immediately on submission"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti na interesovanju za saradnju sa Šumskim Mirom! 🌲",
                "Obnovu Deliblatske peščare ne možemo izvesti sami. Sarađujemo sa institucijama, firmama i organizacijama koje žele da podrže pošumljavanje, održivu poljoprivredu i rad sa zajednicom.",
                "Da bismo ti odgovorili konkretno, javi nam u nekoliko rečenica: čime se baviš, šta imaš na umu i u kom vremenskom okviru. Ako imate CSR program ili godišnji budžet za podršku, napomeni i to.",
                "Javićemo se u roku od nekoliko radnih dana sa predlogom kako bi saradnja mogla da izgleda."
              ],
              "en": [
                "Thank you for your interest in working with Šumski Mir. 🌲",
                "We cannot restore Deliblatska peščara on our own. We work with institutions, businesses and organisations that want to support afforestation, sustainable agriculture and community work.",
                "So we can answer you concretely, tell us in a few sentences what you do, what you have in mind, and over what timeframe. If you have a CSR programme or an annual support budget, mention that too.",
                "We will come back to you within a few working days with a proposal for what the collaboration could look like."
              ]
            }
          }
        ]
      },
      {
        "id": "v02",
        "label": {
          "sr": "Donacija i podrška",
          "en": "Donation & Support"
        },
        "formValue": "Donation & Support",
        "note": {
          "sr": "Someone offering money, materials or other support.",
          "en": "Someone offering money, materials or other support."
        },
        "sequence": [
          {
            "step": 1,
            "status": "draft",
            "when": {
              "sr": "Odmah po slanju forme",
              "en": "Immediately on submission"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti puno na želji da podržiš obnovu Deliblatske peščare! 💚",
                "Naš rad je zasnovan na donacijama. Sredstva idu u sadnice, rasadnik iz kog uzgajamo buduće šume i organizaciju zajedničkih akcija sadnje.",
                "Javićemo ti se sa detaljima o načinima donacije i o tome šta konkretno tvoja podrška pokriva.",
                "Ako želiš da pomogneš i bez donacije, mnogo nam znači ako podeliš informacije o akciji sa prijateljima, kolegama i lokalnim biznisima. Rado ti šaljemo plakat koji možeš odštampati i postaviti na vidno mesto."
              ],
              "en": [
                "Thank you for wanting to support the restoration of Deliblatska peščara. 💚",
                "Our work runs on donations. Funds go into seedlings, the nursery where we grow future forests, and the organisation of shared planting days.",
                "We will come back to you with the ways to donate and with what your support covers specifically.",
                "If you would like to help without donating, it means a great deal if you share the action with friends, colleagues and local businesses. We are glad to send you a poster you can print and put up somewhere visible."
              ]
            }
          }
        ]
      },
      {
        "id": "v03",
        "label": {
          "sr": "Upit o događaju",
          "en": "Event inquiry"
        },
        "formValue": "Event inquiry",
        "note": {
          "sr": "Someone asking about gatherings, workshops or planting days.",
          "en": "Someone asking about gatherings, workshops or planting days."
        },
        "sequence": [
          {
            "step": 1,
            "status": "draft",
            "when": {
              "sr": "Odmah po slanju forme",
              "en": "Immediately on submission"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti na upitu o našim događajima! 🌱",
                "Kroz godinu organizujemo sadnju drveća, radionice, joga sesije i sezonska okupljanja zajednice. Termini zavise od godišnjeg doba i vremenskih uslova, pa ih objavljujemo kada su potvrđeni.",
                "Javi nam koji te tip događaja zanima i da li dolaziš sam ili sa grupom, pa ćemo ti poslati prve slobodne termine.",
                "Za sve najave i nove akcije prati nas na Instagramu, gde redovno objavljujemo šta se sprema."
              ],
              "en": [
                "Thank you for asking about our events. 🌱",
                "Through the year we run tree planting, workshops, yoga sessions and seasonal community gatherings. Dates depend on the season and the weather, so we publish them once they are confirmed.",
                "Tell us which kind of event interests you and whether you are coming alone or with a group, and we will send you the next available dates.",
                "For announcements and new actions, follow us on Instagram, where we post what is coming up."
              ]
            }
          }
        ]
      },
      {
        "id": "v04",
        "label": {
          "sr": "Upit o kampu",
          "en": "Camping Inquiry"
        },
        "formValue": "Camping Inquiry",
        "note": {
          "sr": "Someone asking about staying at the camp, including overland and RV.",
          "en": "Someone asking about staying at the camp, including overland and RV."
        },
        "sequence": [
          {
            "step": 1,
            "status": "draft",
            "when": {
              "sr": "Odmah po slanju forme",
              "en": "Immediately on submission"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti na upitu o kampu! ⛺",
                "Šumski Mir Co-Working Camp nudi izolovana mesta među drvećem, zajedničku opremljenu kuhinju, ognjište za večernja okupljanja, pouzdan internet u celom kampu i siguran parking. Prilaz je asfaltiran, pa je kamp dostupan i za kampere, RV vozila i bicikle.",
                "Kod nas plaćaš koliko želiš i koliko možeš. Radije bismo da dođeš nego da te cena zadrži.",
                "Javi nam željene datume, broj ljudi i da li dolaziš vozilom ili šatorom, pa ćemo ti potvrditi da li imamo mesta."
              ],
              "en": [
                "Thank you for asking about the camp. ⛺",
                "Šumski Mir Co-Working Camp has secluded pitches among the trees, a shared equipped kitchen, a firepit for evening gatherings, reliable internet across the camp and secure parking. The approach is paved, so the camp is reachable by campervan, RV and bicycle.",
                "You pay what you feel and what you can. We would rather you came than let the price keep you away.",
                "Send us your preferred dates, how many people, and whether you are arriving by vehicle or with a tent, and we will confirm availability."
              ]
            }
          }
        ]
      },
      {
        "id": "v05",
        "label": {
          "sr": "Aktivnosti vezane za ranč",
          "en": "Ranch related activities"
        },
        "formValue": "Ranch related activities",
        "note": {
          "sr": "Someone asking about the farm, volunteering or the technology work.",
          "en": "Someone asking about the farm, volunteering or the technology work."
        },
        "sequence": [
          {
            "step": 1,
            "status": "draft",
            "when": {
              "sr": "Odmah po slanju forme",
              "en": "Immediately on submission"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti na interesovanju za ranč! 🚜",
                "Na ranču se bavimo zajedničkim baštovanstvom, pošumljavanjem i primenom savremene tehnologije u poljoprivredi, uključujući dronove i senzore. Deo posla radimo zajedno sa volonterima i partnerima.",
                "Javi nam da li te zanima volontiranje, poseta, saradnja ili nešto konkretno iz našeg rada, i koliko vremena imaš na raspolaganju.",
                "Javićemo ti se sa terminima i sa onim što nam je trenutno najpotrebnije."
              ],
              "en": [
                "Thank you for your interest in the ranch. 🚜",
                "At the ranch we work on shared gardening, afforestation and the use of modern technology in farming, including drones and sensors. Part of that work is done alongside volunteers and partners.",
                "Tell us whether you are interested in volunteering, a visit, a collaboration or something specific from our work, and how much time you have.",
                "We will come back with dates and with what we most need help on right now."
              ]
            }
          }
        ]
      },
      {
        "id": "v06",
        "label": {
          "sr": "Narudžbina meda",
          "en": "Honey order"
        },
        "formValue": "Honey order",
        "note": {
          "sr": "Someone ordering honey.",
          "en": "Someone ordering honey."
        },
        "sequence": [
          {
            "step": 1,
            "status": "draft",
            "when": {
              "sr": "Odmah po slanju forme",
              "en": "Immediately on submission"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti na interesovanju za naš med! 🍯",
                "Naš med je čist, sirov i nefiltriran, sakupljen iz pčelinjaka u šumi oko Šumskog Mira. Količine su ograničene i zavise od sezone.",
                "Javi nam koliko tegli želiš i gde se nalaziš, pa ćemo ti potvrditi dostupnost, cenu i način preuzimanja ili slanja.",
                "Ako si u prilici da svratiš, najlepše je preuzeti med kod nas i videti odakle dolazi."
              ],
              "en": [
                "Thank you for your interest in our honey. 🍯",
                "Our honey is pure, raw and unfiltered, collected from the apiaries in the forest around Šumski Mir. Quantities are limited and depend on the season.",
                "Tell us how many jars you would like and where you are, and we will confirm availability, price and whether you collect or we ship.",
                "If you are able to visit, the nicest way is to collect it here and see where it comes from."
              ]
            }
          }
        ]
      },
      {
        "id": "v07",
        "label": {
          "sr": "Ostalo",
          "en": "Other"
        },
        "formValue": "Other",
        "note": {
          "sr": "Anything that does not fit the six subjects above.",
          "en": "Anything that does not fit the six subjects above."
        },
        "sequence": [
          {
            "step": 1,
            "status": "draft",
            "when": {
              "sr": "Odmah po slanju forme",
              "en": "Immediately on submission"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti što si nam pisao! 🌲",
                "Primili smo tvoju poruku i javićemo ti se u roku od nekoliko radnih dana.",
                "Ako je u pitanju nešto hitno, možeš nas dobiti i telefonom.",
                "U međuvremenu, sve najave, akcije i novosti objavljujemo na Instagramu."
              ],
              "en": [
                "Thank you for writing to us. 🌲",
                "We have received your message and will come back to you within a few working days.",
                "If it is urgent, you can also reach us by phone.",
                "In the meantime, we post all announcements, actions and news on Instagram."
              ]
            }
          }
        ]
      }
    ]
  },
  "planting": {
    "form": {
      "sr": "Prijava za sadnju",
      "en": "Reforestation signup"
    },
    "formKey": "plantingSignup",
    "url": "events/",
    "selector": {
      "sr": "Prijava",
      "en": "Signup"
    },
    "fields": {
      "sr": "Ime, Email, Telefon, Broj učesnika, Željeni termini, Napomena",
      "en": "Ime, Email, Telefon, Broj učesnika, Željeni termini, Napomena"
    },
    "sender": "Jovan · Šumski Mir",
    "canon": "content/email/planting-signup-autoresponse/EMAIL.md",
    "variants": [
      {
        "id": "signup",
        "label": {
          "sr": "Prijava za sadnju",
          "en": "Reforestation signup"
        },
        "formValue": "plantingSignup",
        "note": {
          "sr": "Prijava za akciju obnove Deliblatske peščare.",
          "en": "Registration for the Deliblatska peščara restoration action."
        },
        "sequence": [
          {
            "step": 1,
            "status": "sent",
            "when": {
              "sr": "Odmah po prijavi",
              "en": "Immediately on registration"
            },
            "subject": null,
            "body": {
              "sr": [
                "Hvala ti puno na prijavi i želji da se uključiš u akciju obnove Deliblatske peščare! 🌱🌲",
                "Akcija je planirana za kraj oktobra, a čim utvrdimo tačan datum i detalje, obavestićemo sve prijavljene blagovremeno.",
                "Krajem septembra poslaćemo dodatni email sa informacijama o akciji, organizaciji dolaska, potrebnoj opremi i aktivnostima.",
                "Do tada, svaki vid podrške nam mnogo znači. Posebno nam pomaže ako podeliš informacije o akciji na svojim društvenim mrežama i pozoveš prijatelje i kolege da se uključe. Veća vidljivost znači i više ljudi koji mogu doprineti obnovi Deliblatske peščare. 💚",
                "Za naredne objave, volonterske akcije i obaveštenja:",
                "🌲 WhatsApp komuna · 📅 Događaji · 📲 Instagram",
                "Tu ćemo redovno objavljivati nove informacije i lakše koordinisati zajednicu kako projekat bude napredovao.",
                "U prilogu ti šaljemo i plakat za prikupljanje donacija za obnovu šume. Slobodno ga odštampaj i podeli sa lokalima i biznisima koji su voljni da podrže akciju obnove. Najbolje ga je postaviti na vidno mesto u objektu gde je najveća cirkulacija ljudi.",
                "Hvala ti što želiš da budeš deo ove priče. Vidimo se u šumi! 🌲"
              ]
            }
          },
          {
            "step": 2,
            "status": "planned",
            "when": {
              "sr": "Kraj septembra",
              "en": "End of September"
            },
            "subject": null,
            "body": {},
            "brief": {
              "sr": "Obećan u prvom mejlu: detalji akcije, organizacija dolaska, potrebna oprema i aktivnosti. Još nije napisan.",
              "en": "Promised in email 1: the action's details, arrival logistics, required equipment and activities. Not written yet."
            }
          },
          {
            "step": 3,
            "status": "planned",
            "when": {
              "sr": "Kad se potvrdi datum",
              "en": "When the date is confirmed"
            },
            "subject": null,
            "body": {},
            "brief": {
              "sr": "Obećana najava tačnog datuma krajem oktobra. Još nije napisana.",
              "en": "The promised announcement of the confirmed late-October date. Not written yet."
            }
          }
        ]
      }
    ]
  }
};

var EMAIL_UI = {
  "sr": {
    "triggeredBy": "Pokreće",
    "fields": "Polja forme",
    "sender": "Pošiljalac",
    "sequence": "Sekvenca",
    "canon": "Kanonski izvor",
    "step": "Mejl",
    "of": "od",
    "subject": "Naslov",
    "noSubject": "nije definisan",
    "when": "Kada",
    "sent": "POSLATO",
    "draft": "NACRT",
    "planned": "PLANIRANO",
    "asSent": "Prikazano onako kako je poslato, na srpskom.",
    "notWritten": "Nije napisan"
  },
  "en": {
    "triggeredBy": "Triggered by",
    "fields": "Form fields",
    "sender": "Sender",
    "sequence": "Sequence",
    "canon": "Canonical source",
    "step": "Email",
    "of": "of",
    "subject": "Subject",
    "noSubject": "not defined",
    "when": "When",
    "sent": "SENT",
    "draft": "DRAFT",
    "planned": "PLANNED",
    "asSent": "Shown as sent, in Serbian.",
    "notWritten": "Not written yet"
  }
};

var SIGNOFF = {"sr": "Srdačan pozdrav,", "en": "Warm regards,"};

/* ---------------------------------------------------------------------------
 * Email artefact renderer
 * ---------------------------------------------------------------------------
 * One template for every email artefact, driven by the EMAILS data above. A form is a
 * page; each of its variants is a tab; each variant holds a SEQUENCE of sends. Adding a
 * follow-up is appending one object to `sequence` — no markup, no new view, no chassis
 * change. Adding a whole new form is one key in EMAILS plus a nav item.
 *
 * Tabs are CSS-only (radio + `:checked ~` sibling selectors, scoped <style>), so nothing
 * here depends on script running after the chassis injects the HTML.
 * ------------------------------------------------------------------------- */
function emailEsc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

function renderEmail(formKey, lang) {
  var F = EMAILS[formKey], T = EMAIL_UI[lang] || EMAIL_UI.en;
  var vs = F.variants, pre = formKey + "-";
  var style = ['<style>',
    '.em-label{font-size:.7rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-muted);margin:1.4rem 0 .6rem}',
    '.em input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}',
    '.em-tabs{display:flex;flex-wrap:wrap;gap:.4rem}',
    '.em-tabs label{border:1px solid var(--hairline);background:#fff;border-radius:999px;padding:.45rem .95rem;font-size:.85rem;font-weight:600;color:var(--ink);cursor:pointer}',
    '.em-tabs label:hover{border-color:var(--accent)}',
    '.em-panel{display:none}',
    '.em-step{margin-top:1.5rem}',
    '.em-step__top{display:flex;align-items:center;gap:.6rem;margin-bottom:.6rem;flex-wrap:wrap}',
    '.em-chip{font-size:.66rem;font-weight:700;letter-spacing:.1em;padding:.2rem .5rem;border-radius:.3rem}',
    '.em-chip--sent{background:#e7f6ec;color:#1a7f45}',
    '.em-chip--draft{background:var(--accent-soft);color:var(--accent-strong)}',
    '.em-chip--planned{background:#f1efe9;color:#8a7f66}',
    '.em-step__n{font-family:var(--font-display);font-size:1.05rem;color:var(--ink)}',
    '.em-when{font-size:.8rem;color:var(--ink-muted)}',
    '.em-empty{border:1px dashed var(--hairline);border-radius:12px;padding:1.2rem 1.4rem;color:var(--ink-muted);font-size:.92rem}',
    '.em-note{font-size:.8rem;color:var(--ink-muted);margin:.5rem 0 0}'].join("");
  for (var i = 0; i < vs.length; i++) {
    style += '#' + pre + (i + 1) + ':checked ~ .em-field .em-tabs label[for=' + pre + (i + 1) + ']{background:var(--accent);border-color:var(--accent);color:var(--bg)}';
    style += '#' + pre + (i + 1) + ':checked ~ .em-panels #' + pre + 'p' + (i + 1) + '{display:block}';
  }
  style += '</style>';

  var meta = '<div class="state">' +
    row(T.triggeredBy, '<b>' + emailEsc(F.formKey) + '</b> &middot; /' + emailEsc(F.url)) +
    row(T.fields, emailEsc(F.fields[lang] || F.fields.en)) +
    row(T.sender, emailEsc(F.sender)) +
    row(T.canon, '<span class="mono">' + emailEsc(F.canon) + '</span>') +
    '</div>';
  function row(k, v) {
    return '<div class="state__row"><div class="state__k">' + emailEsc(k) + '</div><div class="state__v">' + v + '</div></div>';
  }

  var inputs = "", tabs = "", panels = "";
  for (var v = 0; v < vs.length; v++) {
    var V = vs[v], id = pre + (v + 1);
    inputs += '<input type="radio" name="' + pre + 'tab" id="' + id + '"' + (v === 0 ? " checked" : "") + '>';
    tabs += '<label for="' + id + '">' + emailEsc(V.label[lang] || V.label.en) + '</label>';

    var steps = "";
    for (var s = 0; s < V.sequence.length; s++) {
      var S = V.sequence[s];
      var chip = '<span class="em-chip em-chip--' + S.status + '">' + emailEsc(T[S.status]) + '</span>';
      var when = '<span class="em-when">' + emailEsc(S.when[lang] || S.when.en) + '</span>';
      var head = '<div class="em-step__top"><span class="em-step__n">' + emailEsc(T.step) + " " +
        S.step + " " + emailEsc(T.of) + " " + V.sequence.length + '</span>' + chip + when + '</div>';
      var body = S.body && (S.body[lang] || S.body.sr || S.body.en);
      var inner;
      if (body) {
        var ps = "";
        for (var b = 0; b < body.length; b++) ps += '<p style="margin:0 0 .85rem">' + emailEsc(body[b]) + '</p>';
        ps += '<p style="margin:0">' + emailEsc(SIGNOFF[lang] || SIGNOFF.en) + '<br>Jovan<br>Šumski Mir</p>';
        inner = '<div class="ledger" style="padding:1.5rem 1.7rem;line-height:1.6">' + ps + '</div>';
        if (!S.body[lang] && S.body.sr) inner += '<p class="em-note">' + emailEsc(T.asSent) + '</p>';
      } else {
        inner = '<div class="em-empty"><b>' + emailEsc(T.notWritten) + '.</b> ' +
          emailEsc((S.brief && (S.brief[lang] || S.brief.en)) || "") + '</div>';
      }
      var subj = '<p class="em-note">' + emailEsc(T.subject) + ": " +
        (S.subject ? emailEsc(S.subject) : "<i>" + emailEsc(T.noSubject) + "</i>") + '</p>';
      steps += '<div class="em-step">' + head + inner + subj + '</div>';
    }

    panels += '<div class="em-panel" id="' + pre + 'p' + (v + 1) + '">' +
      '<p class="svc__tags" style="margin:0 0 .4rem">' + emailEsc(V.formValue) + '</p>' +
      '<p style="margin:0 0 .2rem">' + emailEsc(V.note[lang] || V.note.en) + '</p>' +
      steps + '</div>';
  }

  return style + '<div class="brief">' + meta + '<div class="em">' + inputs +
    '<div class="em-field"><div class="em-label">' + emailEsc(F.selector[lang] || F.selector.en) +
    '</div><div class="em-tabs">' + tabs + '</div></div>' +
    '<div class="em-panels">' + panels + '</div></div></div>';
}

var I18N = {};

I18N.en = {

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
        <p><b>Who we are</b> is the brand architecture: the five brands under Izobilje, one of
        which (Šumski Mir) is itself a parent with four offers. <b>Who it's for</b> sets out the audiences in tiers, because
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
        <p>The name that appears most in public is not always Izobilje. Nine named things are in
        use today, and they are not siblings: four of them are offers that live inside
        <b>Šumski Mir</b> and carry its name. Grouping them that way leaves <b>five brands</b>
        directly under the umbrella.</p>
        <p>Getting that hierarchy explicit is the first job of this hub, because it decides what
        each future asset is called, which brand it belongs to, and where its files live.</p>
        <div class="brief__aside">Five brands under Izobilje. One of them, Šumski Mir, is itself a
        parent with four offers under it. Only the website currently has an artefact in this
        hub.</div>
      </div>

      <div class="brief__sec"><span class="brief__num">01</span><div>
        <h2>Šumski Mir</h2>
        <p>The outdoor centre in the heart of Deliblatska peščara, and the flagship under the
        umbrella. It is the only sub-brand that is itself a parent: four of the community's offers
        run under its name rather than beside it, which is why they are nested here instead of
        listed as separate brands.</p>
        <div class="svc">
          <div class="svc__row"><div class="svc__name">Co-Working Camp</div>
            <div class="svc__desc">Camping aimed at digital nomads and remote workers, positioned
            on reliable wifi, forest workspaces and pay-what-you-feel pricing.
            <span class="svc__tags">Šumski Mir Co-Working Camp</span></div></div>
          <div class="svc__row"><div class="svc__name">Overland &amp; RV Campsite</div>
            <div class="svc__desc">Vehicle-based camping, described on the site as a first of its
            kind in Serbia for overland travellers.
            <span class="svc__tags">Šumski Mir Overland &amp; RV Campsite</span></div></div>
          <div class="svc__row"><div class="svc__name">Ranč</div>
            <div class="svc__desc">The agricultural side: shared gardening, afforestation, and
            drone, AI and IoT technology applied to modern farming.
            <span class="svc__tags">Šumski Mir Ranč</span></div></div>
          <div class="svc__row"><div class="svc__name">Med</div>
            <div class="svc__desc">Honey from the forest apiaries, sold raw and unfiltered. The
            clearest product brand in the set, and the one most obviously able to carry commerce.
            <span class="svc__tags">Šumski Mir med</span></div></div>
        </div></div></div>

      <div class="brief__sec"><span class="brief__num">02</span><div>
        <h2>Wrangleritza</h2>
        <p>Guided Jeep safari and off-road tours. The only brand in the set whose name does not
        signal its parent, which may be deliberate and is worth a decision either way.</p></div></div>

      <div class="brief__sec"><span class="brief__num">03</span><div>
        <h2>Udruženje Novo Jutro</h2>
        <p>The association: the governance, membership and ethics vehicle. Structurally different
        from the others, since it is a legal body rather than an offer.</p></div></div>

      <div class="brief__sec"><span class="brief__num">04</span><div>
        <h2>Silva Banatica</h2>
        <p>The forest and biodiversity restoration initiative for the Banat. Live in the site's
        router but deliberately absent from its sitemap, because the page is still a placeholder.
        It reads as the most fundable thing here.</p></div></div>

      <div class="brief__sec"><span class="brief__num">05</span><div>
        <h2>Rasadnik</h2>
        <p>The nursery, growing and tending seedlings to share with the community and to push
        further planting across Serbia. Currently a section of the site rather than a brand with
        its own surface, and arguably an offer under Šumski Mir rather than a brand beside
        it.</p></div></div>

      <div class="brief__foot"><span class="brief__num">?</span>
        <span>Open question: whether Rasadnik belongs inside Šumski Mir, and whether Wrangleritza
        should carry the parent name. Recorded in Decisions.</span></div>
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

    /* --------------------------------------------------------------- planting */

    /* ---------------------------------------------------------------- contact */

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
  };


/* Serbian layer. Only the two EMAIL views are translated so far: those are the artefacts that
   actually get sent to people, and the reforestation replies go out in Serbian today. The
   editorial views fall back to English through the merge in `html` below, which is why partial
   translation is safe to ship. */
I18N.sr = {};


/* Email views are generated from EMAILS for every language layer, so the two forms share
   one template and a follow-up is a data edit rather than markup. */
["en", "sr"].forEach(function (l) {
  I18N[l] = I18N[l] || {};
  I18N[l].contact = renderEmail("contact", l);
  I18N[l].planting = renderEmail("planting", l);
});

function pickLang() {
  try {
    var q = new URLSearchParams(window.location.search).get("lng");
    if (q && I18N[q]) { try { localStorage.setItem(LANG_KEY, q); } catch (e) {} return q; }
    var stored = localStorage.getItem(LANG_KEY);
    if (stored && I18N[stored]) return stored;
  } catch (e) {}
  return DEFAULT_LANG;
}
var LANG = pickLang();


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
      { view: "who", label: "Who we are", badge: 5,
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><path d='M3 20v-1a4 4 0 014-4h4a4 4 0 014 4v1'/><circle cx='9' cy='8' r='3'/><path d='M16 3.5a3 3 0 010 5.8M21 20v-1a4 4 0 00-3-3.8'/></svg>" },
      { view: "audiences", label: "Who it's for",
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='12' cy='12' r='3'/><circle cx='12' cy='12' r='8'/></svg>" },
    ]},
    { section: "Digital Estate", items: [
      { view: "website", label: "izobilje.com", badge: 14,
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='12' cy='12' r='9'/><path d='M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18'/></svg>" },
    ]},
    { section: "Emails", items: [
      { view: "contact", label: "Contact form", badge: 7,
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><path d='M4 4h16v12H7l-3 3z'/></svg>" },
      { view: "planting", label: "Reforestation signup", badge: 3,
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/></svg>" },
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
    contact:   { title: "Contact form", sub: "Seven subjects, one sequence each",
                 open: WEB + "contact/", openLabel: "Open the form ↗", tbBadge: "Drafts" },
    planting:  { title: "Reforestation signup", sub: "One signup, a three-email sequence",
                 open: WEB + "events/", openLabel: "Open the form ↗", tbBadge: "1 sent · 2 planned" },
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

  /* Merged over English so a partially translated language degrades to English for the
     views it is missing, instead of rendering an empty section. This is what lets
     translation land view by view rather than all at once. */
  html: Object.assign({}, I18N[DEFAULT_LANG], I18N[LANG] || {}),
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

    /* Content-language switcher. Rendered under the hub lede in the sidebar, in the
       chassis's own chip styling so it does not look bolted on. Switching sets `?lng=`
       and reloads, preserving the current view hash: no partial re-render to keep in
       sync, and the resulting URL is shareable. Its label stays English because it is
       chrome, not content. */
    if (!el || typeof I18N === "undefined") return;
    var wrap = document.createElement("div");
    wrap.className = "hub-lang";
    wrap.style.cssText = "padding:.9rem 1.2rem 1rem";
    var caption = document.createElement("div");
    caption.textContent = "Content language";
    caption.style.cssText =
      "font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:.5rem";
    wrap.appendChild(caption);

    var row = document.createElement("div");
    row.style.cssText = "display:flex;flex-wrap:wrap;gap:.3rem";
    LANGS.forEach(function (l) {
      var available = !!I18N[l.code];
      var a = document.createElement(available ? "a" : "span");
      a.textContent = l.label;
      a.title = available ? l.name : l.name + " — not translated yet";
      if (available) {
        a.href = "?lng=" + l.code + (window.location.hash || "");
      }
      var on = l.code === LANG;
      a.style.cssText =
        "font-size:.7rem;font-weight:700;letter-spacing:.04em;padding:.25rem .5rem;" +
        "border-radius:.35rem;text-decoration:none;border:1px solid transparent;" +
        (on
          ? "background:var(--accent);color:var(--bg);"
          : available
          ? "color:var(--on-dark);opacity:.62;border-color:rgba(255,255,255,.16);"
          : "color:var(--on-dark);opacity:.22;cursor:not-allowed;");
      row.appendChild(a);
    });
    wrap.appendChild(row);
    el.parentNode.insertBefore(wrap, el.nextSibling);
  });
}

/* ---------------------------------------------------------------------------
 * Review widget (feature review-widget, feature_version 1.3.0)
 * ---------------------------------------------------------------------------
 * Loaded from here rather than by adding <script> tags to index.html, because index.html is
 * the pinned chassis and every line added to it is a divergence to re-apply on the next
 * chassis upgrade. content.js is ours by contract, so the widget rides along with the config
 * it needs. This is a deliberate difference from the midrata/credo compositions, which add
 * two script tags to their chassis copy.
 *
 * `async = false` preserves execution order: the config global must exist before the
 * bootstrap reads it. The bootstrap is inert without `?review=1` — it only paints a floating
 * "Comments" button until review mode is entered.
 * ------------------------------------------------------------------------- */
if (typeof document !== "undefined" && document.createElement) {
  ["review.config.js", "review-bootstrap.js"].forEach(function (src) {
    var el = document.createElement("script");
    el.src = src;
    el.async = false;
    el.setAttribute("data-review-skip", "");
    document.head.appendChild(el);
  });
}
