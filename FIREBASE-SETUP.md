# Firebase for hub comments — setup checklist

Comments currently live in `localStorage`: they are visible only in the browser that wrote them,
they do not survive clearing site data, and no one else on the team can see them. This connects a
real database so review comments are shared.

**This needs a Google account, so it cannot be done from here.** It is about five minutes.

## What it does and does not cover

- **Comments only.** Realtime Database.
- **Not media.** Raw files go into `intake/` and are processed locally — see
  `content/social/calendar/MEDIA-PIPELINE.md`. Cloud Storage is deliberately not used.

That distinction matters for cost: **Realtime Database still runs on the Spark plan with no
billing account** (1 GB stored, 10 GB/month download, 100 simultaneous connections). Cloud Storage
is the part that started requiring the Blaze plan and a credit card on 3 February 2026, and we are
not using it. Review comments are a few KB each, so Spark's 1 GB is effectively unlimited here.

## Steps

1. Go to <https://console.firebase.google.com> and **Add project**. Name it `izobilje`.
   Google Analytics is not needed — turn it off.
2. In the project, open **Build → Realtime Database → Create Database**.
   - Location: **europe-west1** (closest to Serbia and to the team).
   - Start in **locked mode**. The rules below replace the defaults.
3. Open **Rules** and paste exactly this, then **Publish**:

```json
{
  "rules": {
    "comments": {
      ".read": true,
      ".write": true,
      "$comment": {
        ".validate": "newData.hasChildren(['anchor','page','timestamp'])",
        "comment":      { ".validate": "newData.isString() && newData.val().length <= 4000" },
        "replacement":  { ".validate": "newData.isString() && newData.val().length <= 4000" },
        "resolution":   { ".validate": "newData.isString() && newData.val().length <= 1000" },
        "author":       { ".validate": "newData.isString() && newData.val().length <= 120" },
        "resolved_by":  { ".validate": "newData.isString() && newData.val().length <= 120" },
        "anchor":       { ".validate": "newData.isString() && newData.val().length <= 300" },
        "page":         { ".validate": "newData.isString() && newData.val().length <= 200" },
        "slot":         { ".validate": "newData.isString() && newData.val().length <= 200" },
        "scope":        { ".validate": "newData.isString() && newData.val().length <= 40" },
        "status":       { ".validate": "newData.val() == 'pending' || newData.val() == 'resolved'" },
        "timestamp":    { ".validate": "newData.isNumber()" },
        "edited_at":    { ".validate": "newData.isNumber()" },
        "resolved_at":  { ".validate": "newData.isNumber()" },
        "text_preview": { ".validate": "newData.isString() && newData.val().length <= 600" },
        "url":          { ".validate": "newData.isString() && newData.val().length <= 500" },
        "user_agent":   { ".validate": "newData.isString() && newData.val().length <= 400" },
        "media": {
          "$item": {
            "kind":    { ".validate": "newData.isString() && newData.val().length <= 40" },
            "name":    { ".validate": "newData.isString() && newData.val().length <= 200" },
            "size":    { ".validate": "newData.isNumber()" },
            "local":   { ".validate": "newData.isBoolean()" },
            "dataUrl": { ".validate": "newData.isString() && newData.val().length <= 1400000" },
            "url":     { ".validate": "newData.isString() && newData.val().length <= 1000" },
            "$other":  { ".validate": true }
          }
        },
        "$other": { ".validate": true }
      }
    },
    "$rest": { ".read": false, ".write": false }
  }
}
```

The path is `/comments`, at the root — that is where `review-mode.js` writes, and it is template code shared by every hub in the ecosystem, each pointed at its own project database. Rules that invent a nicer namespace look tidier and simply reject every write.

`$other` is permissive on purpose. The widget already writes fifteen-odd fields and the template keeps gaining more; rules that reject anything unlisted would turn a routine template update into silently failing comments. The caps sit on the fields that actually carry bulk.

4. Open **Project settings → General → Your apps → Web (`</>`)**, register an app called `hub`,
   and copy the `firebaseConfig` object it shows.
5. Paste those values into `FIREBASE_CONFIG` in `public/hub/review.config.js`, then tell me and I
   will verify a comment round-trips between two browsers.

## What these rules do and do not do

They confine all traffic to `/comments`, deny every other path, require each record to
carry an anchor, page and timestamp, and cap field lengths so the database cannot be filled with a
single huge write.

**They do not authenticate anyone.** The widget has no login, so anyone who has the hub URL can
read and write comments. That is the same trade the other review hubs in the ecosystem make, and
it is acceptable because the hub is unlisted and `noindex` — but it is a trade, not a safeguard.
If that is not acceptable, the fix is Firebase Anonymous Auth plus `.write": "auth != null"`, which
is a bigger change to the widget than to the rules.

## Cost

Zero at this volume, on Spark, with no card. If the project ever exceeds 1 GB stored or 10 GB
downloaded per month it would need Blaze — for review comments that is not a realistic outcome.
