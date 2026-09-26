# Wishwood Academy Pro — Learning Architecture

## New hierarchy

The app now follows a scalable education architecture:

Academy
→ Class
→ Subject
→ Chapter
→ Topic
→ Practice Mode
→ Learning Cards

Example:

Nursery
→ Hindi
→ स्वर
→ Serial Wise / Random

LKG
→ English
→ Alphabet
→ Capital Letters
→ Serial Wise / Random

## Where to add content

All curriculum/content is managed in:

`src/data/academy.js`

You can add:

- new classes
- new subjects
- new chapters
- new topics
- new practice cards

without creating new React pages.

### Example topic

```js
topic(
  "animals",
  "Animals",
  "Learn common animals",
  ["🐶 Dog", "🐱 Cat", "🐘 Elephant"],
  "🐾"
)
```

### Example chapter

```js
chapter(
  "animals",
  "Animals",
  "Common animals around us",
  [
    topic(
      "wild-animals",
      "Wild Animals",
      "Learn animal names",
      ["Lion", "Tiger", "Elephant"],
      "🦁"
    )
  ],
  "🦁"
)
```

### Example subject

```js
subject(
  "evs",
  "EVS",
  "पर्यावरण अध्ययन",
  "Early environmental studies",
  "🌍",
  [
    // chapters here
  ]
)
```

### Example class

```js
classConfig(
  "4th",
  "4th",
  "4TH",
  "Primary",
  "Grade 4 learning",
  "📚",
  [
    // subjects here
  ]
)
```

## Routes

The URL architecture is also hierarchical:

`/study`
`/study/:classId`
`/study/:classId/:subjectId`
`/study/:classId/:subjectId/:chapterId`
`/study/:classId/:subjectId/:chapterId/:topicId`
`/study/:classId/:subjectId/:chapterId/:topicId/serial`
`/study/:classId/:subjectId/:chapterId/:topicId/random`

This makes it easy to later add:

- student login
- parent dashboard
- teacher dashboard
- progress tracking
- scores
- quizzes
- badges
- audio
- images
- videos
- assignments
- chapter completion
- certificates
- admin content management

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm run preview
```

## Deploy

This is a Vite React app and can be deployed directly to Vercel, Netlify or GitHub Pages with the appropriate SPA fallback configuration.
