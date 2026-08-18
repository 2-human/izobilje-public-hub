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

    qamap: `
      <style>.qa-list{margin-top:2rem}.qa{border-top:1px solid var(--hairline);padding:1.5rem 0;scroll-margin-top:1rem}.qa:target{background:var(--accent-soft);border-radius:10px;padding-left:1rem;padding-right:1rem}.qa__top{display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem}.qa__n{font-family:var(--font-display);font-size:1.05rem;color:var(--accent);min-width:1.6rem}.qa__chip{font-size:.66rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;padding:.2rem .5rem;border-radius:.3rem}.qa__chip--full{background:var(--accent-soft);color:var(--accent-strong)}.qa__chip--partial{background:#f6ecd6;color:#8a6a14}.qa__chip--none{background:var(--bg-alt);color:var(--ink-muted)}.qa__q{font-family:var(--font-display);font-size:1.2rem;font-weight:600;color:var(--ink);margin:0 0 .5rem}.qa__a{color:var(--ink);margin:0 0 .7rem;max-width:60rem;line-height:1.6}.qa__links{margin:0;display:flex;flex-wrap:wrap;gap:.5rem}.qa-link{font-size:.85rem;font-weight:600;color:var(--accent-strong);text-decoration:none;border:1px solid var(--hairline);border-radius:999px;padding:.35rem .8rem;background:#fff}.qa-link:hover{border-color:var(--accent)}.qa-src{margin-top:1rem;border-left:3px solid var(--hairline);padding:.1rem 0 .1rem 1rem}.qa-src__h{font-size:.7rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:0 0 .45rem}.qa-src__q{margin:0 0 .5rem;font-size:.95rem;line-height:1.55;color:var(--ink-muted);font-style:normal;quotes:none}.qa-src__q::before{content:open-quote}.qa-src__q::after{content:close-quote}.qa-src__links{margin:0;display:flex;flex-wrap:wrap;gap:.9rem}.qa-src__links a{font-size:.8rem;color:var(--ink-muted);text-decoration:none;border-bottom:1px solid var(--hairline)}.qa-src__links a:hover{color:var(--accent-strong);border-color:var(--accent)}.qa-src{margin-top:1rem;border-left:3px solid var(--hairline);padding:.1rem 0 .1rem 1rem}.qa-src__sum{cursor:pointer;font-size:.78rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);list-style:none;display:flex;align-items:center;gap:.4rem}.qa-src__sum::-webkit-details-marker{display:none}.qa-src__sum::before{content:"▸";display:inline-block;transition:transform .15s}.qa-src[open] .qa-src__sum::before{transform:rotate(90deg)}.qa-src__sum:hover{color:var(--accent-strong)}.qa-src__list{list-style:none;margin:.9rem 0 0;padding:0}.qa-src__item{padding:0 0 1rem}.qa-src__item+.qa-src__item{border-top:1px solid var(--hairline);padding-top:1rem}.qa-src__meta{font-size:.72rem;color:var(--ink-muted);margin:0 0 .35rem;letter-spacing:.03em}.qa-src__tag{background:var(--bg-alt);border-radius:.25rem;padding:.1rem .35rem;font-size:.66rem;text-transform:uppercase;letter-spacing:.06em}</style><div class="brief"><p class="brief__eyebrow">Inquiries · question to answer</p><h1>Question and answer map</h1><p class="brief__lede">64 comments contain an ask · 42 map to a template · 39 of those answer fully from the site</p><div class="brief__body"><p>Click any question on the left to jump to its answer below. A dashed line means the site answers only part of it, or that the reply deliberately hands off to a person. Each answer carries the original comment it came from, quoted verbatim including its original spelling, with links to the post and the comment on Instagram.</p></div><div style="margin:1.6rem 0 1rem;overflow-x:auto;-webkit-overflow-scrolling:touch"><div style="min-width:720px"><svg viewBox="0 0 880 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Question to answer map" style="width:100%;height:auto;font-family:Inter,sans-serif"><path d="M 250 70 C 360 70, 475 170, 585 170" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 70 C 360 70, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 128 C 360 128, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 186 C 360 186, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 244 C 360 244, 475 258, 585 258" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 244 C 360 244, 475 170, 585 170" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 244 C 360 244, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 302 C 360 302, 475 170, 585 170" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 302 C 360 302, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 360 C 360 360, 475 522, 585 522" fill="none" stroke="var(--ink-muted)" stroke-width="1.4" opacity="0.5" stroke-dasharray='5 4'/><path d="M 250 418 C 360 418, 475 346, 585 346" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 476 C 360 476, 475 258, 585 258" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 534 C 360 534, 475 82, 585 82" fill="none" stroke="#c98a1b" stroke-width="1.4" opacity="0.85" stroke-dasharray='5 4'/><path d="M 250 534 C 360 534, 475 434, 585 434" fill="none" stroke="#c98a1b" stroke-width="1.4" opacity="0.85" stroke-dasharray='5 4'/><path d="M 250 534 C 360 534, 475 522, 585 522" fill="none" stroke="#c98a1b" stroke-width="1.4" opacity="0.85" stroke-dasharray='5 4'/><a href="#qamap=participate-planting" style="cursor:pointer"><rect x="8" y="52" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="75" font-size="13.5" fill="var(--ink)">Take part in planting</text><circle cx="228" cy="70" r="13" fill="var(--accent)"/><text x="228" y="74.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">16</text></a><a href="#qamap=species-method" style="cursor:pointer"><rect x="8" y="110" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="133" font-size="13.5" fill="var(--ink)">Which species / method</text><circle cx="228" cy="128" r="13" fill="var(--accent)"/><text x="228" y="132.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">9</text></a><a href="#qamap=permissions-governance" style="cursor:pointer"><rect x="8" y="168" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="191" font-size="13.5" fill="var(--ink)">Permits & the reserve</text><circle cx="228" cy="186" r="13" fill="var(--accent)"/><text x="228" y="190.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">5</text></a><a href="#qamap=donation-doubt" style="cursor:pointer"><rect x="8" y="226" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="249" font-size="13.5" fill="var(--ink)">Why collect money</text><circle cx="228" cy="244" r="13" fill="var(--accent)"/><text x="228" y="248.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">3</text></a><a href="#qamap=schools-groups" style="cursor:pointer"><rect x="8" y="284" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="307" font-size="13.5" fill="var(--ink)">Schools & groups</text><circle cx="228" cy="302" r="13" fill="var(--accent)"/><text x="228" y="306.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">3</text></a><a href="#qamap=policy-petition" style="cursor:pointer"><rect x="8" y="342" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--ink-muted)" stroke-width="1.5"/><text x="22" y="365" font-size="13.5" fill="var(--ink)">Petition & land law</text><circle cx="228" cy="360" r="13" fill="var(--ink-muted)"/><text x="228" y="364.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">2</text></a><a href="#qamap=visit-camping" style="cursor:pointer"><rect x="8" y="400" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="423" font-size="13.5" fill="var(--ink)">Visiting & equipment</text><circle cx="228" cy="418" r="13" fill="var(--accent)"/><text x="228" y="422.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">2</text></a><a href="#qamap=donation-mechanics" style="cursor:pointer"><rect x="8" y="458" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="481" font-size="13.5" fill="var(--ink)">How to donate</text><circle cx="228" cy="476" r="13" fill="var(--accent)"/><text x="228" y="480.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">1</text></a><a href="#qamap=material-offers" style="cursor:pointer"><rect x="8" y="516" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="#c98a1b" stroke-width="1.5"/><text x="22" y="539" font-size="13.5" fill="var(--ink)">Offers of materials</text><circle cx="228" cy="534" r="13" fill="#c98a1b"/><text x="228" y="538.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">1</text></a><rect x="585" y="62" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="80" font-size="13.5" font-weight="600" fill="var(--ink)">/projects</text><text x="601" y="94" font-size="11" fill="var(--ink-muted)">ranch & reserve, species</text><rect x="585" y="150" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="168" font-size="13.5" font-weight="600" fill="var(--ink)">/events</text><text x="601" y="182" font-size="11" fill="var(--ink-muted)">signup, schools & groups</text><rect x="585" y="238" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="256" font-size="13.5" font-weight="600" fill="var(--ink)">/donate</text><text x="601" y="270" font-size="11" fill="var(--ink-muted)">Novo Jutro, account, PayPal</text><rect x="585" y="326" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="344" font-size="13.5" font-weight="600" fill="var(--ink)">/camping</text><text x="601" y="358" font-size="11" fill="var(--ink-muted)">equipment, lending</text><rect x="585" y="414" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="432" font-size="13.5" font-weight="600" fill="var(--ink)">/contact</text><text x="601" y="446" font-size="11" fill="var(--ink-muted)">form subjects</text><rect x="585" y="502" width="255" height="40" rx="8" fill="var(--bg-alt)" stroke="var(--ink-muted)" stroke-width="1.5" stroke-dasharray='5 4'/><text x="601" y="520" font-size="13.5" font-weight="600" fill="var(--ink)">a human</text><text x="601" y="534" font-size="11" fill="var(--ink-muted)">a hand-off</text><text x="8" y="34" font-size="11" font-weight="700" letter-spacing="1.4" fill="var(--ink-muted)">WHAT PEOPLE ASK</text><text x="585" y="34" font-size="11" font-weight="700" letter-spacing="1.4" fill="var(--ink-muted)">WHAT ANSWERS IT</text><line x1="8" y1="566" x2="34" y2="566" stroke="var(--accent)" stroke-width="2.4"/><text x="42" y="570" font-size="11.5" fill="var(--ink-muted)">Answered on the site</text><line x1="180.0" y1="566" x2="206.0" y2="566" stroke="#c98a1b" stroke-width="2.4" stroke-dasharray='5 4'/><text x="214.0" y="570" font-size="11.5" fill="var(--ink-muted)">Partly answered</text><line x1="319.0" y1="566" x2="345.0" y2="566" stroke="var(--ink-muted)" stroke-width="2.4" stroke-dasharray='5 4'/><text x="353.0" y="570" font-size="11.5" fill="var(--ink-muted)">Deliberately not automated</text></svg></div></div><div class="qa-list"><div class="qa" id="qa-participate-planting"><div class="qa__top"><span class="qa__n">16</span><span class="qa__chip qa__chip--full">Answered on the site</span></div><h3 class="qa__q">Can we take part in the planting?</h3><p class="qa__a">Yes. Planting is done together with people who register. Phase one is the preparation and planting of 100,000 seedlings; dates depend on conditions on the ground and the weather, so we publish them only once confirmed. Leave an expression of interest and we will come back with the date, arrival details and what to bring.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/events" target="_blank" rel="noopener">Planting signup ↗</a></p><details class="qa-src"><summary class="qa-src__sum">16 comments asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 133 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901428730502850/">Javljam se da sadim...ali BEZ politike, molim..ovo radim za džabe za Srbiju za Srbe za budućnost planete... obavestite ne, tu sam</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901428730502850/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 106 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17942474631337513/">da se organizuje vikend akcija posumljavanja? :)</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17942474631337513/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 34 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18056727797788648/">Da li možemo da učestvujemo u saðenju?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18056727797788648/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 14 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18107092430326851/">Bravo ljudi ,zovite doci cemo da sadimo i kupimo sadnice.Napisite sta da kupimo i dolazimo da sadimo .</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18107092430326851/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 13 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18019351124879077/">Bravo! Molim izvestavajte o napretku i javite kad bude sadnja, dolazimo 🌳🌲</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18019351124879077/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 6 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18095472293526500/">Kako može da se volontira?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18095472293526500/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 4 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18111550444794112/">@sumski.mir naravno da ću doći. Samo blagovremeno objavite kada je akcija..odazvaće se još mojih prijatelja i sugrađana🍀</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18111550444794112/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 4 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17910888297444752/">Evo izvolite sta vi predlazete kao stucnjak. Daj da vidimo tu konkretnu pomoc i predlog. Daj da vidimo sta se moze zaista kad nije samo kuckanje na ekranu. Pun mi je vise vas mudrosera sto ste za tastaturom. Hajde gospodjo sad predlozi, primeri, javite se dobrovoljno da pomognete kad znate. Ostavite ovde vas predlog sa spiskom sadnica da vas cujemo. Eto samo to - komentar nista vise.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17910888297444752/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 4 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18133354075616185/">Bravo bravo! Tu smo za sadnju i sve što možemo da pomognemo 🙌🏻</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18133354075616185/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 3 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18609161800011912/">@nem.b8 trebalo bi<br> A naročito oni što dobijaju socijalnu pomoć<br>Pitam se kako bi se odazvala omladina danas<br>Da li isto kao u Titovo vreme....</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18609161800011912/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18110329460079542/">bravo,ucestvovacu kako mogu❤️❤️❤️</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18110329460079542/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-03-27 &middot; 1 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DWYolG9DPsZ/c/18093308671892058/">pozovite PD Jelenak iz Panceva. Oni odrzavaju deo oko Susare</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DWYolG9DPsZ/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/DWYolG9DPsZ/c/18093308671892058/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 1 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18104063300593994/">Koju vrstu drveća planirate da sadite?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18104063300593994/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 0 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18439687372121435/">Upravo sam u Pefkiju na Eviji. Pre 5 godina pola ostrva je izgorelo. Tuga. Šuma borova iznad mesta je cela izgorela i sada tek nakon 5 godina vidim da se zeleni neko rastinje. Tek sada. A od 21.dolazim četvrti put. Hoću reći da je proces obnove jako spor i da će to ići teže. Ali... kako izbeći takve nesreće?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18439687372121435/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 0 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DbWE9T7M49R/c/18218076154337327/">ГДЕ је ТО и како се пријављује за учешће?!?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DbWE9T7M49R/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/DbWE9T7M49R/c/18218076154337327/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-11 &middot; 0 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18603088270057058/">👏👏👏bravooooooooo molim da se javiteeeee ,nas par iz Su želimo učestvovati👏</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18603088270057058/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-species-method"><div class="qa__top"><span class="qa__n">9</span><span class="qa__chip qa__chip--full">Answered on the site</span></div><h3 class="qa__q">Which species do you plan to plant?</h3><p class="qa__a">Deliberately, there is no single species and no universal formula for the whole area. Species suited to sandy, drier habitats are being considered with experts, including native oaks, shrub species and the accompanying ground vegetation. Restoring this ecosystem means gradually returning the structure of the habitat, not only planting trees.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/projects" target="_blank" rel="noopener">The restoration plan ↗</a></p><details class="qa-src"><summary class="qa-src__sum">9 comments asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 37 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17991203214032784/">Ne možemo da delimo jer ne znamo koje sadnice planirate da sadite. Drugo to je specijalni rezervat, ne može da se sadi baš tek tako.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17991203214032784/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 32 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17944166856279225/">Bravo! Takođe, vrlo je važno da drveće, grmlje i ostalo bude autohtono i da se sade sadnice koje su već tu bile. Posle požara će podivljati dosta invazivnih vrsta.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17944166856279225/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 16 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18160196773468915/">@pletilicasvastarica_mastalica Nije tačno. Poslednjih godina su svi krenuli da sade, bez ikakvog smisla i kontrole! Tako su kod Mokrina posadili hrastove na staništu tekunice koja je  strogo zašticena vrsta i živi isključivo na otvorenim staništima. Da ne pominjem da je u pitanju i slatinasto zemljište, da tu ima i drugih ugroženih vrsta i da takvo zemljište nije pogodno za drvenaste vrste.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18160196773468915/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 7 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211649176357987/">koje vrste planirate da sadite?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211649176357987/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 7 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18090622553389692/">Bor je sadjen još u19. Veku, još Nemci, zato sto je divlji pesak pravio haos u naseljima. E, sad listopadno drvo isto može da spreči raznošenje peska, ali sta kad lišće opadne. A opet, listopadno drveće stabilizuje teren korenskim sistemom i pravi bolje tlo, humus.... Borovi su dadkeni u vreme kafa nisu bile obalve klimatske nepogode.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18090622553389692/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18022149821899654/">Које саднице сакупљате?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18022149821899654/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 1 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18610180609025450/">@mare_nik84 OPASNOST PRAŠE NAS. 🔥 <br> UNIŠTAVAJU DRVEĆE VODU I HRANU SVE ŠTO LETI JE NESTALO. 🔥 <br>Zaštita životne sredine pale šume sa borovima i četinarima po celome svetu, lažu da su borovi i četinarii opasni za požare i da moraju da sade nove sorte drveća, zbog požara i klimatskih promena, znači GMO drveće. Dok nas sve Vlade praše sa otrovnim gasom koji je na kolima, zalepio se za šume, osušile se kao papir gore, drveće po gradovima i selima sa voćnjacima padaju, nema ptica, insekata, LIŠĆE u junu opada, lažu nas, magla, pesak iz Sahare. Plan da Sunce gas zagreje, zima + 20, leto + 50, usevi gore, reke presuše, sparno, nema kiseonika, lažu  za vrele talase, gas pravi otrovne kiše, koje su izvršile Ekološku Katastrofu. ☠️👍🔥 ☠️</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18610180609025450/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 1 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18108666460831987/">Inicijativa je odlicna ,lepo .  Samo , koje sadnice ?! Drugo ,u pitanju je specijalni rezervat . Da li moze prvo neko strucan da izadje i kaze plan za posumljavanje ,i koliko traje oporavak zemljista ? Neko ko je skolovan za ovo ,kada se sagleda celokupno zemljiste . Nakon toga nije sporna bilo kakva pomoc ili donacija .</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18108666460831987/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-11 &middot; 0 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17925443844166459/">Zašto je važno koje sadnice? Bolje bilo kakve nego nikakve, a verujem da su ovi ljudi dovoljno upućeni.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17925443844166459/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-permissions-governance"><div class="qa__top"><span class="qa__n">5</span><span class="qa__chip qa__chip--full">Answered on the site</span></div><h3 class="qa__q">It is a special reserve, you cannot just plant there.</h3><p class="qa__a">Correct, which is why two things are kept separate. Deliblatska peščara is managed by JP Vojvodinašume, and Šumski Mir does not plant independently inside the reserve. Phase one takes place at the Šumski Mir ranch, where planting stock is prepared, grown, hardened off and cared for. Any further planting inside the reserve will happen solely with the manager's coordination and approval, and in line with expert recommendation in forestry, ecology and biodiversity protection.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/projects" target="_blank" rel="noopener">The ranch and the reserve ↗</a></p><details class="qa-src"><summary class="qa-src__sum">5 comments asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 8 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17946238200256162/">@sladja_skobic to na papiru da. U realnosti pitanje je koliko ljudi vojvodina šume imaju da znaju bilo šta o šumama.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17946238200256162/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 4 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901124536551776/">Прво морате да се консултујете са државним институцијама јер постоје планска документа која прописују где и шта сме да се ради. Прво иде санација земљишта од пожара после иде припрема и вероватно неће се бор пошумљавати из тог разлога што песак није природно станиште бора.  Друго последњих година је слаб пријем бора због промене климатских услова у делиблатској пешчари. Сачекајте прво да се све санира и да се одраде планска документација. Санација није једноставан план као што мислите и то није само посадити и препустити биљке суровим условима пешчаре.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901124536551776/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18109252577089805/">Bravo za vas ali za godinu dana može svašta da se dogodi daj Bože da se požar  što pre ugasi i da narod ne dozvoli ništa drugo u Peščari osim pošumljavanja  šume uz dobar odabir sorte sadnica u skladu sa podnevljem.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18109252577089805/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 1 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211938220351221/">a sra rade nadležni, plaćeni... ???</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211938220351221/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 0 likes <span class="qa-src__tag">reply</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18096149453616897/">@kraljod pretpostavke zasnovane na poluinformacijama  se ne iznose javno jer onda prelaze u javnu raspravu zasnovanu na nečemu što je osoba sama izmislila. U ovom slučaju ne zna da li su kontaktirani stručnjaci, Vojvodina šume, da li imaju stručnjake u timu i ne postavlja ta pitanja već iznosi pretpostavke kao tvrdnje, što stvara svađu i neprijatnosti.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18096149453616897/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-donation-doubt"><div class="qa__top"><span class="qa__n">3</span><span class="qa__chip qa__chip--full">Answered on the site</span></div><h3 class="qa__q">Why collect money at all? We are tired of collecting money for something intangible.</h3><p class="qa__a">You do not have to donate in order to take part. If you would rather help with your hands, planting is open to anyone who registers. For those who do want to give: funds are received by Udruženje „NOVO JUTRO”, and phase one is the preparation and planting of 100,000 seedlings in the fire-affected areas.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/events" target="_blank" rel="noopener">Register to plant ↗</a><a class="qa-link" href="https://izobilje.com/donate" target="_blank" rel="noopener">How donating works ↗</a></p><details class="qa-src"><summary class="qa-src__sum">3 comments asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 4 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18093755105548709/">Dobro da postoji ova akcija jer.ne postoje sumska gazdinstva koja dobijaju debele pare za sve zivo 😂 ovaca za shishanje svuda</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18093755105548709/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 2 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18028751351845170/">Шта је ово? Пожар још није угашен а ви већ направили бизнис план? Јесте ли ви део ове трагедије?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18028751351845170/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 0 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18113128381945425/">Narod i vatrogasci krvare na terenu dok vi, plaćeni neradnici, hladite noge u lavoru. Vi ste obično dno koje živi na našoj grbači i mirno spava dok Srbija gori! Vaše fotelje i funkcije su plaćene uništavanjem prirode, nemate ni trunke stida</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18113128381945425/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-schools-groups"><div class="qa__top"><span class="qa__n">3</span><span class="qa__chip qa__chip--full">Answered on the site</span></div><h3 class="qa__q">Why not have children come with their school to plant?</h3><p class="qa__a">We are open to organised visits from primary and secondary schools, universities and other institutions, by prior arrangement. One or several classes can come. The maximum number of participants is agreed in advance, depending on the activity, the age of the group, available space, the number of accompanying adults and our capacity for that date. For participants under 18, the school or organisation bringing the group provides supervision.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/events" target="_blank" rel="noopener">Arrange a date ↗</a></p><details class="qa-src"><summary class="qa-src__sum">3 comments asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 50 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18404449066085148/">Velika podrška za vas! 💪✨<br><br>Bilo bi divno da se pokrene projekat i da se uključe sve škole iz Banata, ili čak iz cele Vojvodine.<br><br>Da deca zajedno pošume Deliblatsku peščaru 🌱🌳 i kroz to nauče koliko je vremena, truda i ljubavi potrebno da jedna šuma nastane. Verujem da bi na taj način razvila svest o značaju prirode i kasnije je još više čuvala. 💚<br><br>Da učimo decu da budu čuvari prirode, kako nam se ovakve stvari više nikada ne bi ponovile na ovaj način. 🍀💚</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18404449066085148/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 1 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18068784953709683/">Može apel sportskim društvima, teretanama i svima koji se bave sportom da se uključe u pošumljavanje!</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18068784953709683/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 0 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18064795211764827/">Zašto ne bi deca sa školom došla da sade na proleće? Ako se odobri sadnja, pozvati škole da se uključe. Sigurna sam da će svaki nastavnik biologije voditi decu. Deca će tako mnogo naučiti.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18064795211764827/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-policy-petition"><div class="qa__top"><span class="qa__n">2</span><span class="qa__chip qa__chip--none">Deliberately not automated</span></div><h3 class="qa__q">Start a petition to change the law so burned land cannot be sold to investors.</h3><p class="qa__a">This one is deliberately not answered automatically. We have no published position on petitions or changes to the law, and we do not want to send you a stance in our name that is not ours. Get in touch and a person will reply.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/contact" target="_blank" rel="noopener">Write to us ↗</a></p><details class="qa-src"><summary class="qa-src__sum">2 comments asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 130 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17908355871454552/">Направите петицију за измену закона као у Шпанији .Да након било ког пожара , то земљиште не може бити продато инвеститорима за изградњу,отуђити или присвојити на 100 година .То урадите под хитно или смо изгубили још једну битку као људи у Калифорнији и оно шта се њима дешавало.Толико.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17908355871454552/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-15 &middot; 2 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DcDP6bqMALx/c/18153188830506935/">https://www.peticije.online/ne_gradnji_na_pepelu_zatitimo_obnovimo_deliblatsku_pescaru?utm_source=copy_link</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DcDP6bqMALx/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/DcDP6bqMALx/c/18153188830506935/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-visit-camping"><div class="qa__top"><span class="qa__n">2</span><span class="qa__chip qa__chip--full">Answered on the site</span></div><h3 class="qa__q">Is there room for those of us without a tent?</h3><p class="qa__a">Šumski Mir is primarily a bring-your-own campsite, so we recommend your own tent and gear. For guests who need the basics we have a limited number of sets to lend by prior arrangement: 3 tents, 3 sleeping bags and 3 sleeping mats. Equipment is not guaranteed without a reservation, so contact us before arrival so we can check availability for your dates.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/camping" target="_blank" rel="noopener">The camp and equipment ↗</a></p><details class="qa-src"><summary class="qa-src__sum">2 comments asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-03-24 &middot; 1 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DWRdJe1jOiz/c/18075930164449836/">Да ли има места за нас који немамо шатор?😮</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DWRdJe1jOiz/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/DWRdJe1jOiz/c/18075930164449836/" target="_blank" rel="noopener">Open the comment ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-07-04 &middot; 0 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DaXykLesCu-/c/18084894560548118/">a gde je kafica????</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DaXykLesCu-/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/DaXykLesCu-/c/18084894560548118/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-donation-mechanics"><div class="qa__top"><span class="qa__n">1</span><span class="qa__chip qa__chip--full">Answered on the site</span></div><h3 class="qa__q">Publish your address and account so we can organise locally.</h3><p class="qa__a">Donations are received by Udruženje „NOVO JUTRO”, Užička 24, Banatski Karlovac. Registration number 28026218, tax ID 106822975. Transfers within Serbia go to the dinar account 325-9500500164433-45. For donations from abroad there is a dedicated PayPal on the donations page. For international bank transfer details, get in touch. Companies can also enter into a donation agreement.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/donate" target="_blank" rel="noopener">The donations page ↗</a></p><details class="qa-src"><summary class="qa-src__sum">1 comment asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 5 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18007168778959244/">Divna inicijativa. Molim Vas da objavite vašu adresu i račun, kako bi organizovali na lokalnom terenu zborove Pančeva.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18007168778959244/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div><div class="qa" id="qa-material-offers"><div class="qa__top"><span class="qa__n">1</span><span class="qa__chip qa__chip--partial">Partly answered</span></div><h3 class="qa__q">You can have 50 Siberian elms from me.</h3><p class="qa__a">Thank you, and it does not have to be money. Write to us through the contact form choosing the subject “Donation & Support”, and tell us what you can provide and in what quantity. We cannot confirm every species in advance: species are chosen to suit the habitat and in consultation with experts, so not every sapling is suitable for the restoration area.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/contact" target="_blank" rel="noopener">The contact form ↗</a><a class="qa-link" href="https://izobilje.com/projects" target="_blank" rel="noopener">How species are chosen ↗</a></p><details class="qa-src"><summary class="qa-src__sum">1 comment asked this</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 likes</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18126304612681808/">Hajde da vidimo ko od naših komsija može da donira ili proda adekvatne mladice spremne za sadnju? Rumunija? Češka? Madjarska? BIH? Hrvatska? Crna Gora?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Open the post ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18126304612681808/" target="_blank" rel="noopener">Open the comment ↗</a></p></li></ul></details></div></div></div>`,


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
I18N.sr = {

  qamap: `
      <style>.qa-list{margin-top:2rem}.qa{border-top:1px solid var(--hairline);padding:1.5rem 0;scroll-margin-top:1rem}.qa:target{background:var(--accent-soft);border-radius:10px;padding-left:1rem;padding-right:1rem}.qa__top{display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem}.qa__n{font-family:var(--font-display);font-size:1.05rem;color:var(--accent);min-width:1.6rem}.qa__chip{font-size:.66rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;padding:.2rem .5rem;border-radius:.3rem}.qa__chip--full{background:var(--accent-soft);color:var(--accent-strong)}.qa__chip--partial{background:#f6ecd6;color:#8a6a14}.qa__chip--none{background:var(--bg-alt);color:var(--ink-muted)}.qa__q{font-family:var(--font-display);font-size:1.2rem;font-weight:600;color:var(--ink);margin:0 0 .5rem}.qa__a{color:var(--ink);margin:0 0 .7rem;max-width:60rem;line-height:1.6}.qa__links{margin:0;display:flex;flex-wrap:wrap;gap:.5rem}.qa-link{font-size:.85rem;font-weight:600;color:var(--accent-strong);text-decoration:none;border:1px solid var(--hairline);border-radius:999px;padding:.35rem .8rem;background:#fff}.qa-link:hover{border-color:var(--accent)}.qa-src{margin-top:1rem;border-left:3px solid var(--hairline);padding:.1rem 0 .1rem 1rem}.qa-src__h{font-size:.7rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-muted);margin:0 0 .45rem}.qa-src__q{margin:0 0 .5rem;font-size:.95rem;line-height:1.55;color:var(--ink-muted);font-style:normal;quotes:none}.qa-src__q::before{content:open-quote}.qa-src__q::after{content:close-quote}.qa-src__links{margin:0;display:flex;flex-wrap:wrap;gap:.9rem}.qa-src__links a{font-size:.8rem;color:var(--ink-muted);text-decoration:none;border-bottom:1px solid var(--hairline)}.qa-src__links a:hover{color:var(--accent-strong);border-color:var(--accent)}.qa-src{margin-top:1rem;border-left:3px solid var(--hairline);padding:.1rem 0 .1rem 1rem}.qa-src__sum{cursor:pointer;font-size:.78rem;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-muted);list-style:none;display:flex;align-items:center;gap:.4rem}.qa-src__sum::-webkit-details-marker{display:none}.qa-src__sum::before{content:"▸";display:inline-block;transition:transform .15s}.qa-src[open] .qa-src__sum::before{transform:rotate(90deg)}.qa-src__sum:hover{color:var(--accent-strong)}.qa-src__list{list-style:none;margin:.9rem 0 0;padding:0}.qa-src__item{padding:0 0 1rem}.qa-src__item+.qa-src__item{border-top:1px solid var(--hairline);padding-top:1rem}.qa-src__meta{font-size:.72rem;color:var(--ink-muted);margin:0 0 .35rem;letter-spacing:.03em}.qa-src__tag{background:var(--bg-alt);border-radius:.25rem;padding:.1rem .35rem;font-size:.66rem;text-transform:uppercase;letter-spacing:.06em}</style><div class="brief"><p class="brief__eyebrow">Pitanja · mapa pitanja i odgovora</p><h1>Mapa pitanja i odgovora</h1><p class="brief__lede">64 komentara sadrži pitanje · 42 se mapira na šablon · na 39 sajt odgovara u potpunosti</p><div class="brief__body"><p>Klikni na pitanje levo da skočiš na odgovor ispod. Isprekidana linija znači da sajt odgovara samo delimično ili da odgovor namerno prepuštamo čoveku. Uz svaki odgovor stoji originalni komentar iz kog je nastao, citiran doslovno, uključujući originalni pravopis, sa linkovima ka objavi i komentaru na Instagramu.</p></div><div style="margin:1.6rem 0 1rem;overflow-x:auto;-webkit-overflow-scrolling:touch"><div style="min-width:720px"><svg viewBox="0 0 880 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa pitanja i odgovora" style="width:100%;height:auto;font-family:Inter,sans-serif"><path d="M 250 70 C 360 70, 475 170, 585 170" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 70 C 360 70, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 128 C 360 128, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 186 C 360 186, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity="0.85"/><path d="M 250 244 C 360 244, 475 258, 585 258" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 244 C 360 244, 475 170, 585 170" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 244 C 360 244, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 302 C 360 302, 475 170, 585 170" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 302 C 360 302, 475 82, 585 82" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 360 C 360 360, 475 522, 585 522" fill="none" stroke="var(--ink-muted)" stroke-width="1.4" opacity="0.5" stroke-dasharray='5 4'/><path d="M 250 418 C 360 418, 475 346, 585 346" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 476 C 360 476, 475 258, 585 258" fill="none" stroke="var(--accent)" stroke-width="1.4" opacity="0.85"/><path d="M 250 534 C 360 534, 475 82, 585 82" fill="none" stroke="#c98a1b" stroke-width="1.4" opacity="0.85" stroke-dasharray='5 4'/><path d="M 250 534 C 360 534, 475 434, 585 434" fill="none" stroke="#c98a1b" stroke-width="1.4" opacity="0.85" stroke-dasharray='5 4'/><path d="M 250 534 C 360 534, 475 522, 585 522" fill="none" stroke="#c98a1b" stroke-width="1.4" opacity="0.85" stroke-dasharray='5 4'/><a href="#qamap=participate-planting" style="cursor:pointer"><rect x="8" y="52" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="75" font-size="13.5" fill="var(--ink)">Učešće u sadnji</text><circle cx="228" cy="70" r="13" fill="var(--accent)"/><text x="228" y="74.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">16</text></a><a href="#qamap=species-method" style="cursor:pointer"><rect x="8" y="110" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="133" font-size="13.5" fill="var(--ink)">Koje vrste i metod</text><circle cx="228" cy="128" r="13" fill="var(--accent)"/><text x="228" y="132.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">9</text></a><a href="#qamap=permissions-governance" style="cursor:pointer"><rect x="8" y="168" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="191" font-size="13.5" fill="var(--ink)">Dozvole i rezervat</text><circle cx="228" cy="186" r="13" fill="var(--accent)"/><text x="228" y="190.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">5</text></a><a href="#qamap=donation-doubt" style="cursor:pointer"><rect x="8" y="226" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="249" font-size="13.5" fill="var(--ink)">Zašto se skuplja novac</text><circle cx="228" cy="244" r="13" fill="var(--accent)"/><text x="228" y="248.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">3</text></a><a href="#qamap=schools-groups" style="cursor:pointer"><rect x="8" y="284" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="307" font-size="13.5" fill="var(--ink)">Škole i grupe</text><circle cx="228" cy="302" r="13" fill="var(--accent)"/><text x="228" y="306.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">3</text></a><a href="#qamap=policy-petition" style="cursor:pointer"><rect x="8" y="342" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--ink-muted)" stroke-width="1.5"/><text x="22" y="365" font-size="13.5" fill="var(--ink)">Peticija i zakon</text><circle cx="228" cy="360" r="13" fill="var(--ink-muted)"/><text x="228" y="364.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">2</text></a><a href="#qamap=visit-camping" style="cursor:pointer"><rect x="8" y="400" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="423" font-size="13.5" fill="var(--ink)">Poseta i oprema</text><circle cx="228" cy="418" r="13" fill="var(--accent)"/><text x="228" y="422.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">2</text></a><a href="#qamap=donation-mechanics" style="cursor:pointer"><rect x="8" y="458" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="var(--accent)" stroke-width="1.5"/><text x="22" y="481" font-size="13.5" fill="var(--ink)">Kako donirati</text><circle cx="228" cy="476" r="13" fill="var(--accent)"/><text x="228" y="480.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">1</text></a><a href="#qamap=material-offers" style="cursor:pointer"><rect x="8" y="516" width="242" height="36" rx="8" fill="var(--bg-alt)" stroke="#c98a1b" stroke-width="1.5"/><text x="22" y="539" font-size="13.5" fill="var(--ink)">Ponude materijala</text><circle cx="228" cy="534" r="13" fill="#c98a1b"/><text x="228" y="538.5" font-size="12" font-weight="700" text-anchor="middle" fill="var(--bg)">1</text></a><rect x="585" y="62" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="80" font-size="13.5" font-weight="600" fill="var(--ink)">/projects</text><text x="601" y="94" font-size="11" fill="var(--ink-muted)">ranč i rezervat, vrste</text><rect x="585" y="150" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="168" font-size="13.5" font-weight="600" fill="var(--ink)">/events</text><text x="601" y="182" font-size="11" fill="var(--ink-muted)">prijava, škole i grupe</text><rect x="585" y="238" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="256" font-size="13.5" font-weight="600" fill="var(--ink)">/donate</text><text x="601" y="270" font-size="11" fill="var(--ink-muted)">Novo Jutro, račun, PayPal</text><rect x="585" y="326" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="344" font-size="13.5" font-weight="600" fill="var(--ink)">/camping</text><text x="601" y="358" font-size="11" fill="var(--ink-muted)">oprema, pozajmica</text><rect x="585" y="414" width="255" height="40" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><text x="601" y="432" font-size="13.5" font-weight="600" fill="var(--ink)">/contact</text><text x="601" y="446" font-size="11" fill="var(--ink-muted)">predmeti forme</text><rect x="585" y="502" width="255" height="40" rx="8" fill="var(--bg-alt)" stroke="var(--ink-muted)" stroke-width="1.5" stroke-dasharray='5 4'/><text x="601" y="520" font-size="13.5" font-weight="600" fill="var(--ink)">čovek</text><text x="601" y="534" font-size="11" fill="var(--ink-muted)">predaja čoveku</text><text x="8" y="34" font-size="11" font-weight="700" letter-spacing="1.4" fill="var(--ink-muted)">ŠTA LJUDI PITAJU</text><text x="585" y="34" font-size="11" font-weight="700" letter-spacing="1.4" fill="var(--ink-muted)">ŠTA NA TO ODGOVARA</text><line x1="8" y1="566" x2="34" y2="566" stroke="var(--accent)" stroke-width="2.4"/><text x="42" y="570" font-size="11.5" fill="var(--ink-muted)">Odgovoreno na sajtu</text><line x1="173.39999999999998" y1="566" x2="199.39999999999998" y2="566" stroke="#c98a1b" stroke-width="2.4" stroke-dasharray='5 4'/><text x="207.39999999999998" y="570" font-size="11.5" fill="var(--ink-muted)">Delimično odgovoreno</text><line x1="345.4" y1="566" x2="371.4" y2="566" stroke="var(--ink-muted)" stroke-width="2.4" stroke-dasharray='5 4'/><text x="379.4" y="570" font-size="11.5" fill="var(--ink-muted)">Namerno bez automatskog odgovora</text></svg></div></div><div class="qa-list"><div class="qa" id="qa-participate-planting"><div class="qa__top"><span class="qa__n">16</span><span class="qa__chip qa__chip--full">Odgovoreno na sajtu</span></div><h3 class="qa__q">Da li možemo da učestvujemo u sađenju?</h3><p class="qa__a">Da. Sadnja se radi zajedno sa ljudima koji se prijave. Prva faza obnove je priprema i sadnja 100.000 mladica, a termini zavise od stanja na terenu i vremenskih uslova, pa ih objavljujemo tek kada su potvrđeni. Ostavi prijavu interesovanja i javljamo se sa datumom, informacijama o dolasku i onim što treba poneti.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/events" target="_blank" rel="noopener">Prijava za sadnju ↗</a></p><details class="qa-src"><summary class="qa-src__sum">16 komentara postavlja ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 133 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901428730502850/">Javljam se da sadim...ali BEZ politike, molim..ovo radim za džabe za Srbiju za Srbe za budućnost planete... obavestite ne, tu sam</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901428730502850/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 106 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17942474631337513/">da se organizuje vikend akcija posumljavanja? :)</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17942474631337513/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 34 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18056727797788648/">Da li možemo da učestvujemo u saðenju?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18056727797788648/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 14 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18107092430326851/">Bravo ljudi ,zovite doci cemo da sadimo i kupimo sadnice.Napisite sta da kupimo i dolazimo da sadimo .</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18107092430326851/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 13 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18019351124879077/">Bravo! Molim izvestavajte o napretku i javite kad bude sadnja, dolazimo 🌳🌲</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18019351124879077/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 6 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18095472293526500/">Kako može da se volontira?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18095472293526500/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 4 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18111550444794112/">@sumski.mir naravno da ću doći. Samo blagovremeno objavite kada je akcija..odazvaće se još mojih prijatelja i sugrađana🍀</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18111550444794112/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 4 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17910888297444752/">Evo izvolite sta vi predlazete kao stucnjak. Daj da vidimo tu konkretnu pomoc i predlog. Daj da vidimo sta se moze zaista kad nije samo kuckanje na ekranu. Pun mi je vise vas mudrosera sto ste za tastaturom. Hajde gospodjo sad predlozi, primeri, javite se dobrovoljno da pomognete kad znate. Ostavite ovde vas predlog sa spiskom sadnica da vas cujemo. Eto samo to - komentar nista vise.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17910888297444752/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 4 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18133354075616185/">Bravo bravo! Tu smo za sadnju i sve što možemo da pomognemo 🙌🏻</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18133354075616185/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 3 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18609161800011912/">@nem.b8 trebalo bi<br> A naročito oni što dobijaju socijalnu pomoć<br>Pitam se kako bi se odazvala omladina danas<br>Da li isto kao u Titovo vreme....</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18609161800011912/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18110329460079542/">bravo,ucestvovacu kako mogu❤️❤️❤️</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18110329460079542/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-03-27 &middot; 1 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DWYolG9DPsZ/c/18093308671892058/">pozovite PD Jelenak iz Panceva. Oni odrzavaju deo oko Susare</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DWYolG9DPsZ/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/DWYolG9DPsZ/c/18093308671892058/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 1 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18104063300593994/">Koju vrstu drveća planirate da sadite?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18104063300593994/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 0 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18439687372121435/">Upravo sam u Pefkiju na Eviji. Pre 5 godina pola ostrva je izgorelo. Tuga. Šuma borova iznad mesta je cela izgorela i sada tek nakon 5 godina vidim da se zeleni neko rastinje. Tek sada. A od 21.dolazim četvrti put. Hoću reći da je proces obnove jako spor i da će to ići teže. Ali... kako izbeći takve nesreće?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18439687372121435/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 0 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DbWE9T7M49R/c/18218076154337327/">ГДЕ је ТО и како се пријављује за учешће?!?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DbWE9T7M49R/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/DbWE9T7M49R/c/18218076154337327/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-11 &middot; 0 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18603088270057058/">👏👏👏bravooooooooo molim da se javiteeeee ,nas par iz Su želimo učestvovati👏</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18603088270057058/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-species-method"><div class="qa__top"><span class="qa__n">9</span><span class="qa__chip qa__chip--full">Odgovoreno na sajtu</span></div><h3 class="qa__q">Koje vrste planirate da sadite?</h3><p class="qa__a">Namerno nema jedne vrste ni univerzalne formule za celo područje. Sa stručnjacima se razmatraju vrste prilagođene peskovitim i suvljim staništima, uključujući autohtone hrastove, žbunaste vrste i prateću prizemnu vegetaciju. Obnova ovakvog ekosistema znači postepeno vraćanje strukture staništa, ne samo sadnju drveća.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/projects" target="_blank" rel="noopener">Plan obnove ↗</a></p><details class="qa-src"><summary class="qa-src__sum">9 komentara postavlja ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 37 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17991203214032784/">Ne možemo da delimo jer ne znamo koje sadnice planirate da sadite. Drugo to je specijalni rezervat, ne može da se sadi baš tek tako.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17991203214032784/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 32 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17944166856279225/">Bravo! Takođe, vrlo je važno da drveće, grmlje i ostalo bude autohtono i da se sade sadnice koje su već tu bile. Posle požara će podivljati dosta invazivnih vrsta.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17944166856279225/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 16 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18160196773468915/">@pletilicasvastarica_mastalica Nije tačno. Poslednjih godina su svi krenuli da sade, bez ikakvog smisla i kontrole! Tako su kod Mokrina posadili hrastove na staništu tekunice koja je  strogo zašticena vrsta i živi isključivo na otvorenim staništima. Da ne pominjem da je u pitanju i slatinasto zemljište, da tu ima i drugih ugroženih vrsta i da takvo zemljište nije pogodno za drvenaste vrste.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18160196773468915/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 7 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211649176357987/">koje vrste planirate da sadite?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211649176357987/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 7 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18090622553389692/">Bor je sadjen još u19. Veku, još Nemci, zato sto je divlji pesak pravio haos u naseljima. E, sad listopadno drvo isto može da spreči raznošenje peska, ali sta kad lišće opadne. A opet, listopadno drveće stabilizuje teren korenskim sistemom i pravi bolje tlo, humus.... Borovi su dadkeni u vreme kafa nisu bile obalve klimatske nepogode.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18090622553389692/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18022149821899654/">Које саднице сакупљате?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18022149821899654/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 1 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18610180609025450/">@mare_nik84 OPASNOST PRAŠE NAS. 🔥 <br> UNIŠTAVAJU DRVEĆE VODU I HRANU SVE ŠTO LETI JE NESTALO. 🔥 <br>Zaštita životne sredine pale šume sa borovima i četinarima po celome svetu, lažu da su borovi i četinarii opasni za požare i da moraju da sade nove sorte drveća, zbog požara i klimatskih promena, znači GMO drveće. Dok nas sve Vlade praše sa otrovnim gasom koji je na kolima, zalepio se za šume, osušile se kao papir gore, drveće po gradovima i selima sa voćnjacima padaju, nema ptica, insekata, LIŠĆE u junu opada, lažu nas, magla, pesak iz Sahare. Plan da Sunce gas zagreje, zima + 20, leto + 50, usevi gore, reke presuše, sparno, nema kiseonika, lažu  za vrele talase, gas pravi otrovne kiše, koje su izvršile Ekološku Katastrofu. ☠️👍🔥 ☠️</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18610180609025450/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 1 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18108666460831987/">Inicijativa je odlicna ,lepo .  Samo , koje sadnice ?! Drugo ,u pitanju je specijalni rezervat . Da li moze prvo neko strucan da izadje i kaze plan za posumljavanje ,i koliko traje oporavak zemljista ? Neko ko je skolovan za ovo ,kada se sagleda celokupno zemljiste . Nakon toga nije sporna bilo kakva pomoc ili donacija .</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18108666460831987/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-11 &middot; 0 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17925443844166459/">Zašto je važno koje sadnice? Bolje bilo kakve nego nikakve, a verujem da su ovi ljudi dovoljno upućeni.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17925443844166459/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-permissions-governance"><div class="qa__top"><span class="qa__n">5</span><span class="qa__chip qa__chip--full">Odgovoreno na sajtu</span></div><h3 class="qa__q">To je specijalni rezervat, ne može da se sadi baš tek tako.</h3><p class="qa__a">Tačno, i zato razdvajamo dve stvari. Deliblatskom peščarom upravlja JP Vojvodinašume i Šumski Mir ne sadi samostalno na teritoriji rezervata. Prva faza projekta odvija se na ranču Šumski Mir, gde se sadni materijal priprema, uzgaja, školuje i neguje. Dalja sadnja u rezervatu sprovodiće se isključivo uz koordinaciju i odobrenje upravljača i u skladu sa stručnim preporukama iz šumarstva, ekologije i zaštite biodiverziteta.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/projects" target="_blank" rel="noopener">Ranč i rezervat ↗</a></p><details class="qa-src"><summary class="qa-src__sum">5 komentara postavlja ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 8 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17946238200256162/">@sladja_skobic to na papiru da. U realnosti pitanje je koliko ljudi vojvodina šume imaju da znaju bilo šta o šumama.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17946238200256162/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 4 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901124536551776/">Прво морате да се консултујете са државним институцијама јер постоје планска документа која прописују где и шта сме да се ради. Прво иде санација земљишта од пожара после иде припрема и вероватно неће се бор пошумљавати из тог разлога што песак није природно станиште бора.  Друго последњих година је слаб пријем бора због промене климатских услова у делиблатској пешчари. Сачекајте прво да се све санира и да се одраде планска документација. Санација није једноставан план као што мислите и то није само посадити и препустити биљке суровим условима пешчаре.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/17901124536551776/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18109252577089805/">Bravo za vas ali za godinu dana može svašta da se dogodi daj Bože da se požar  što pre ugasi i da narod ne dozvoli ništa drugo u Peščari osim pošumljavanja  šume uz dobar odabir sorte sadnica u skladu sa podnevljem.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18109252577089805/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 1 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211938220351221/">a sra rade nadležni, plaćeni... ???</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18211938220351221/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 0 lajkova <span class="qa-src__tag">odgovor</span></p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18096149453616897/">@kraljod pretpostavke zasnovane na poluinformacijama  se ne iznose javno jer onda prelaze u javnu raspravu zasnovanu na nečemu što je osoba sama izmislila. U ovom slučaju ne zna da li su kontaktirani stručnjaci, Vojvodina šume, da li imaju stručnjake u timu i ne postavlja ta pitanja već iznosi pretpostavke kao tvrdnje, što stvara svađu i neprijatnosti.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18096149453616897/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-donation-doubt"><div class="qa__top"><span class="qa__n">3</span><span class="qa__chip qa__chip--full">Odgovoreno na sajtu</span></div><h3 class="qa__q">Zašto bi se sakupljao novac? Umorni smo od skupljanja novca za nešto što nije opipljivo.</h3><p class="qa__a">Ne moraš da doniraš da bi učestvovao. Ako ti je draže da pomogneš rukama, sadnja je otvorena za sve koji se prijave. Za one koji ipak žele da doniraju: sredstva prima Udruženje „NOVO JUTRO”, a prva faza je priprema i sadnja 100.000 mladica na područjima pogođenim požarima.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/events" target="_blank" rel="noopener">Prijavi se za sadnju ↗</a><a class="qa-link" href="https://izobilje.com/donate" target="_blank" rel="noopener">Kako se donira ↗</a></p><details class="qa-src"><summary class="qa-src__sum">3 komentara postavljaju ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 4 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18093755105548709/">Dobro da postoji ova akcija jer.ne postoje sumska gazdinstva koja dobijaju debele pare za sve zivo 😂 ovaca za shishanje svuda</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18093755105548709/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 2 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18028751351845170/">Шта је ово? Пожар још није угашен а ви већ направили бизнис план? Јесте ли ви део ове трагедије?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18028751351845170/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 0 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18113128381945425/">Narod i vatrogasci krvare na terenu dok vi, plaćeni neradnici, hladite noge u lavoru. Vi ste obično dno koje živi na našoj grbači i mirno spava dok Srbija gori! Vaše fotelje i funkcije su plaćene uništavanjem prirode, nemate ni trunke stida</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18113128381945425/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-schools-groups"><div class="qa__top"><span class="qa__n">3</span><span class="qa__chip qa__chip--full">Odgovoreno na sajtu</span></div><h3 class="qa__q">Zašto ne bi deca sa školom došla da sade?</h3><p class="qa__a">Otvoreni smo za organizovane posete osnovnih i srednjih škola, fakulteta i drugih institucija, uz obavezan prethodni dogovor. Može doći jedno ili više odeljenja. Maksimalan broj učesnika dogovaramo unapred, u zavisnosti od vrste aktivnosti, uzrasta grupe, raspoloživog prostora, broja pratilaca i kapaciteta za taj termin. Za maloletne učesnike pratnju i nadzor obezbeđuje škola ili organizacija koja dovodi grupu.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/events" target="_blank" rel="noopener">Dogovor termina ↗</a></p><details class="qa-src"><summary class="qa-src__sum">3 komentara postavljaju ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 50 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18404449066085148/">Velika podrška za vas! 💪✨<br><br>Bilo bi divno da se pokrene projekat i da se uključe sve škole iz Banata, ili čak iz cele Vojvodine.<br><br>Da deca zajedno pošume Deliblatsku peščaru 🌱🌳 i kroz to nauče koliko je vremena, truda i ljubavi potrebno da jedna šuma nastane. Verujem da bi na taj način razvila svest o značaju prirode i kasnije je još više čuvala. 💚<br><br>Da učimo decu da budu čuvari prirode, kako nam se ovakve stvari više nikada ne bi ponovile na ovaj način. 🍀💚</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18404449066085148/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 1 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18068784953709683/">Može apel sportskim društvima, teretanama i svima koji se bave sportom da se uključe u pošumljavanje!</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18068784953709683/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-10 &middot; 0 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18064795211764827/">Zašto ne bi deca sa školom došla da sade na proleće? Ako se odobri sadnja, pozvati škole da se uključe. Sigurna sam da će svaki nastavnik biologije voditi decu. Deca će tako mnogo naučiti.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18064795211764827/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-policy-petition"><div class="qa__top"><span class="qa__n">2</span><span class="qa__chip qa__chip--none">Namerno bez automatskog odgovora</span></div><h3 class="qa__q">Napravite peticiju za izmenu zakona, da se izgorelo zemljište ne može prodati investitorima.</h3><p class="qa__a">Na ovo namerno ne odgovaramo automatski. O peticijama i izmenama zakona nemamo objavljen stav, i ne želimo da ti u naše ime pošaljemo stav koji nije naš. Javi nam se i odgovoriće ti čovek.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/contact" target="_blank" rel="noopener">Piši nam ↗</a></p><details class="qa-src"><summary class="qa-src__sum">2 komentara postavljaju ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-08 &middot; 130 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/17908355871454552/">Направите петицију за измену закона као у Шпанији .Да након било ког пожара , то земљиште не може бити продато инвеститорима за изградњу,отуђити или присвојити на 100 година .То урадите под хитно или смо изгубили још једну битку као људи у Калифорнији и оно шта се њима дешавало.Толико.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/17908355871454552/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-08-15 &middot; 2 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DcDP6bqMALx/c/18153188830506935/">https://www.peticije.online/ne_gradnji_na_pepelu_zatitimo_obnovimo_deliblatsku_pescaru?utm_source=copy_link</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DcDP6bqMALx/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/DcDP6bqMALx/c/18153188830506935/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-visit-camping"><div class="qa__top"><span class="qa__n">2</span><span class="qa__chip qa__chip--full">Odgovoreno na sajtu</span></div><h3 class="qa__q">Da li ima mesta za nas koji nemamo šator?</h3><p class="qa__a">Šumski Mir je prvenstveno bring-your-own kamp, pa preporučujemo sopstveni šator i opremu. Za goste kojima treba osnovna oprema imamo ograničen broj kompleta za pozajmicu uz prethodni dogovor: 3 šatora, 3 vreće za spavanje i 3 dušeka. Oprema nije garantovana bez prethodne rezervacije, pa se javi pre dolaska da proverimo dostupnost za tvoje datume.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/camping" target="_blank" rel="noopener">Kamp i oprema ↗</a></p><details class="qa-src"><summary class="qa-src__sum">2 komentara postavljaju ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-03-24 &middot; 1 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DWRdJe1jOiz/c/18075930164449836/">Да ли има места за нас који немамо шатор?😮</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DWRdJe1jOiz/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/DWRdJe1jOiz/c/18075930164449836/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li><li class="qa-src__item"><p class="qa-src__meta">2026-07-04 &middot; 0 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/DaXykLesCu-/c/18084894560548118/">a gde je kafica????</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/DaXykLesCu-/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/DaXykLesCu-/c/18084894560548118/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-donation-mechanics"><div class="qa__top"><span class="qa__n">1</span><span class="qa__chip qa__chip--full">Odgovoreno na sajtu</span></div><h3 class="qa__q">Objavite vašu adresu i račun, da organizujemo lokalno.</h3><p class="qa__a">Donacije prima Udruženje „NOVO JUTRO”, Užička 24, Banatski Karlovac. Matični broj 28026218, PIB 106822975. Uplate iz Srbije idu na dinarski račun 325-9500500164433-45. Za donacije iz inostranstva dostupan je namenski PayPal na stranici za donacije. Za podatke o međunarodnom bankarskom transferu javi nam se. Sa kompanijama je moguće zaključiti i ugovor o donaciji.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/donate" target="_blank" rel="noopener">Stranica za donacije ↗</a></p><details class="qa-src"><summary class="qa-src__sum">1 komentar postavlja ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 5 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/reel/Db0BhQJMCbv/c/18007168778959244/">Divna inicijativa. Molim Vas da objavite vašu adresu i račun, kako bi organizovali na lokalnom terenu zborove Pančeva.</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/reel/Db0BhQJMCbv/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/reel/Db0BhQJMCbv/c/18007168778959244/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div><div class="qa" id="qa-material-offers"><div class="qa__top"><span class="qa__n">1</span><span class="qa__chip qa__chip--partial">Delimično odgovoreno</span></div><h3 class="qa__q">Od mene imate 50 sibirskih brestova.</h3><p class="qa__a">Hvala, i ne mora novac. Javi nam se preko kontakt forme i izaberi predmet „Donacija i podrška”, pa napiši šta možeš da obezbediš i u kojoj količini. Ne možemo unapred potvrditi svaku vrstu: vrste se biraju prema staništu i u dogovoru sa strukom, pa nije svaka sadnica pogodna za područje obnove.</p><p class="qa__links"><a class="qa-link" href="https://izobilje.com/contact" target="_blank" rel="noopener">Kontakt forma ↗</a><a class="qa-link" href="https://izobilje.com/projects" target="_blank" rel="noopener">Kako se biraju vrste ↗</a></p><details class="qa-src"><summary class="qa-src__sum">1 komentar postavlja ovo pitanje</summary><ul class="qa-src__list"><li class="qa-src__item"><p class="qa-src__meta">2026-08-09 &middot; 2 lajkova</p><blockquote class="qa-src__q" cite="https://www.instagram.com/p/Dbx44VojI72/c/18126304612681808/">Hajde da vidimo ko od naših komsija može da donira ili proda adekvatne mladice spremne za sadnju? Rumunija? Češka? Madjarska? BIH? Hrvatska? Crna Gora?</blockquote><p class="qa-src__links"><a href="https://www.instagram.com/p/Dbx44VojI72/" target="_blank" rel="noopener">Otvori objavu ↗</a><a href="https://www.instagram.com/p/Dbx44VojI72/c/18126304612681808/" target="_blank" rel="noopener">Otvori komentar ↗</a></p></li></ul></details></div></div></div>`,
};


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
    { section: "Inquiries", items: [
      { view: "qamap", label: "Q&A map", badge: 42,
        icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.6'><circle cx='6' cy='7' r='2.5'/><circle cx='18' cy='17' r='2.5'/><path d='M8.5 7H13a4 4 0 014 4v3.5'/></svg>" },
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
    qamap:     { title: "Q&A map", sub: "What people ask, and what answers it" },
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

    /* Q&A map anchors. The chassis parses `#view=param` and ignores the param, so a link like
       `#qamap=species-method` keeps the right view AND leaves the slug for us to act on. Using
       the chassis's own convention means the URL stays shareable and a reload lands correctly,
       which a bare `#qa-…` anchor would not: it would leave the router with an unknown view. */
    var scrollToQa = function () {
      var m = (window.location.hash || "").match(/^#qamap=([\w-]+)$/);
      if (!m) return;
      var el = document.getElementById("qa-" + m[1]);
      if (!el) return;
      var box = el.closest("section.view") || el.parentElement;
      box.scrollTop = el.offsetTop - box.offsetTop - 12;
      el.style.transition = "background .4s";
      el.style.background = "var(--accent-soft)";
      setTimeout(function () { el.style.background = ""; }, 1400);
    };
    window.addEventListener("hashchange", function () { setTimeout(scrollToQa, 30); });
    setTimeout(scrollToQa, 60);

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
