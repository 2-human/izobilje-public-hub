/* Izobilje Hub — review-widget config (feature_version 1.3.0).
 *
 * Loaded before review-bootstrap.js. Defines the config global the widget reads.
 *
 * BACKEND: Izobilje's OWN Firebase Realtime Database (project izobilje-27fff,
 * europe-west1), created 2026-08-18. Comments are shared between reviewers and survive
 * clearing site data. We deliberately do NOT point Izobilje at another client's review
 * database, so one org's comments can never land in another's backend.
 *
 * The localStorage keys stay namespaced `izobilje_*` because they remain the fallback when
 * Firebase is unreachable, and because this hub and the other 2-human hubs are all GitHub
 * Pages project sites on the SAME origin (2-human.github.io), where unnamespaced keys
 * would genuinely collide.
 *
 * Comments only. Media attachments still need Cloud Storage, which has required the Blaze
 * plan since 3 Feb 2026 and is deliberately not enabled — raw media goes through `intake/`
 * instead. See content/social/calendar/MEDIA-PIPELINE.md.
 *
 * These keys are public by design: a Firebase web apiKey identifies the project, it does
 * not authorise anything. Access is governed entirely by the database rules, which confine
 * all traffic to `/comments`. See FIREBASE-SETUP.md for the rules of record.
 */
window.IZOBILJE_REVIEW_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyA4QH8pQqlGAIuCUIwgtNtHPlhw4gveKpg",
    authDomain: "izobilje-27fff.firebaseapp.com",
    databaseURL: "https://izobilje-27fff-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "izobilje-27fff",
    storageBucket: "izobilje-27fff.firebasestorage.app",
    messagingSenderId: "522502356752",
    appId: "1:522502356752:web:a18f383b6eb59b3b586f95"
  },

  /* Attachment uploads. FALSE: the project is on the free Spark plan, which covers the
     Realtime Database but NOT Cloud Storage — that has required the paid Blaze plan since
     3 Feb 2026. Images are still attachable: they are downscaled in the browser and stored
     inline. Video is refused with an explicit message rather than accepted and dropped.
     Flip to true only after enabling Blaze + Cloud Storage, or reviewers will hit a 403
     at upload time with no idea why. Raw shoot media does not belong here in any case —
     it goes through `intake/`, see content/social/calendar/MEDIA-PIPELINE.md. */
  OBJECT_STORAGE: false,

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
    namePrompt: "Your name (so the team knows who left this comment):",
    attach: "Attach photo",
    attachLocalOnly: "Photos are resized and stored in THIS browser only — they are not shared and "
      + "will not survive clearing site data. Video needs object storage: set "
      + "FIREBASE_CONFIG.storageBucket below."
  }
};
