# AGENTS.md — reusable course-template

This repository is a starter for **one independent new course website per repository**. It is not an active teaching course and should not publish a public template Pages site. The GitHub Actions Pages job skips execution only when `github.repository` equals `RHHanson-UMD/course-template`; when used to create a new `RHHanson-UMD/COURSE-CODE` repository, the job is eligible to deploy after Pages is enabled via GitHub Actions.

## Template creation checklist

1. Confirm `Settings > General > Template repository` is enabled for this starter (not verifiable by the presence of source files).
2. Use **Use this template**, create a distinct repository and course chat; do not merge course repos.
3. Update all `COURSE-XXX`, `Course Title`, description, topic placeholder and GitHub source link strings in `site/index.html`.
4. Verify `site/assets/course.js` theme toggle, CSS variables, back-to-portal links, mobile/keyboard support and correct Pages subpath.
5. Set **Settings > Pages > Source: GitHub Actions** in the generated course repo, test the `site/` artifact, confirm actual Pages deployment and live URL.
6. Request a separate portal change to `content/courses.json` from the main/shared infrastructure chat; rebuild portal with `scripts/build.py`.
7. Add original source-verified modules with their own pure math and independent tests. Share reusable math via `learning-core` only with tested, pinned compatibility.

## Engineering, publication and reporting

The existing architecture is static HTML/CSS/vanilla JavaScript under `site/` with no required backend, React, or Vite. Dark theme is the default for new visitors; offer remembered light theme and accessible focus and contrast. Preview by running `python -m http.server 8000 -d site`.

Never copy instructor documents, unreleased homework solutions, private Drive PDFs, student identifiers, credentials, or non-licensed textbook artwork into a public repo. Even officially released solutions need confirmed redistribution permission. Attribute verified materials and draw original diagrams.

Review live repo and issue state before edits; make small PRs, run applicable tests and browser previews, then verify GitHub Pages separately. End with sources opened, exact changed files, test commands actually run, commit/PR, deployment result, blockers and next step. Cross-course changes are coordinated through the main-site chat, not silently applied.
