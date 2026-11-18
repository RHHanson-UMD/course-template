# Course Website Template

Starter GitHub Pages project for a course-specific learning explorer. Make this
repository a GitHub template in Settings, then use **Use this template** to create
a new course repository.

The bundled Pages workflow intentionally **skips deployment in this starter repository**. When a new course repository is created from the template, the same workflow will run there after you enable **Settings > Pages > Source: GitHub Actions**. You must also confirm this repository is marked as a **Template repository** in Settings > General; a successful workflow is not proof of that setting.

## Starting a course

1. Replace `COURSE-XXX` with the course code in `site/index.html`.
2. Replace `Course Title`, the description, and the topic map.
3. Add interactive visualizations under `site/visualizations/`.
4. Link the course from the central `RHHanson-UMD.github.io` homepage.
5. Enable Pages with GitHub Actions in the course repo Settings.

## Design policy

Keep each course independently deployable and avoid dependencies on other
course repositories. Reusable mathematical logic can graduate to the versioned
`learning-core` library. Never check unreleased solutions into a public repo.

## Optional original practice pattern

The starter includes `site/practice.html`, linked from the homepage. It is an **independent example**, not course material: an eight-outcome probability question with a decimal answer, hint, instructive correct/incorrect/invalid feedback, and reset. `site/assets/practice-logic.mjs` contains the pure checker; `site/assets/practice.js` handles accessible DOM interaction. It is optional: new courses can adapt or delete the example without changing other courses.

Run `npm test` (Node 20+) for independent correctness, incorrectness, invalid input, and tolerance-boundary checks. Preview with `python -m http.server 8000 -d site`, then visit `/practice.html` to manually check keyboard, theme persistence, hint, answer and reset. CI is not a substitute for a browser or a live Pages check. No source-specific syllabus or instructor material is included.
