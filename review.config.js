/* Izobilje Hub — review-widget config (feature_version 1.3.0).
 *
 * Loaded before review-bootstrap.js. Defines the config global the widget reads.
 *
 * BACKEND: FIREBASE_CONFIG is intentionally blank, so comments persist to THIS browser
 * only (localStorage) — fine for solo review, NOT shared between reviewers. This follows
 * the meaning-global and midrata precedent: a hub ships local-only until the org has its
 * own Firebase project. We deliberately do NOT point Izobilje at another client's review
 * database, so one org's comments can never land in another's backend.
 *
 * The localStorage keys are namespaced `izobilje_*` for the same reason: this hub and the
 * other 2-human hubs are all GitHub Pages project sites on the SAME origin
 * (2-human.github.io), so unnamespaced keys would genuinely collide.
 *
 * To enable shared team commenting, paste an Izobilje Realtime Database config below.
 * review-mode.js namespaces comments per page slug, so nothing else needs changing.
 */
window.IZOBILJE_REVIEW_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",          // PASTE an Izobilje RTDB URL here to enable shared comments
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  /* Tags admitted to anchoring even when they carry no direct text. The hub renders
     several components whose meaning is structural rather than textual, and without this
     they would be the only things in the hub you could not comment on. */
  anchorEmpty: ["iframe", "img"],

  /* Anchor the sidebar nav and footer too. The widget excludes site chrome by default
     because identical chrome repeated across many pages would duplicate one comment onto
     every page. This hub is a single page, so there is no duplication to avoid, and
     leaving chrome out would make the section names and the footer the only things here
     you could not comment on. */
  anchorChrome: true,

  REVIEW_LABELS: {
    toggleButton: "Comments",
    toggleButtonTitle: "Open comment review mode",
    bannerTitle: "Review mode · Izobilje hub",
    localOnly: "Local-only — add an Izobilje Firebase config for shared comments",
    exit: "Exit review",
    sidebarTitle: "Comments",
    empty: "No comments on this view yet. Hover any line of text and click the + to add one.",
    add: "+ Comment",
    save: "Post comment",
    cancel: "Cancel",
    edit: "Edit",
    del: "Delete",
    resolve: "Resolve",
    reopen: "Reopen",
    tabOpen: "Open",
    tabResolved: "Resolved",
    resolvePrompt: "Resolution note (what was done):",
    placeholder: "Your feedback…",
    replacementPlaceholder: "Suggested change (optional)…",
    namePrompt: "Your name (so the team knows who left this comment):"
  }
};
