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

## New-repository smoke test (tracked in #3)

Before saying the starter is ready to use, inspect `.github/workflows/deploy.yml` and verify its `github.repository` guard keeps the starter from deploying. The repository's **Template repository** checkbox is a GitHub setting, not a property that can be inferred from README or workflow code. If that setting cannot be viewed, report it unverified.

For a newly instantiated course repo, check that no `COURSE-XXX` or generic course-title placeholder remains, the home link returns to the portal, the route works at `/COURSE-CODE/`, dark-first/light-persisted theme and keyboard focus function, and all referenced assets resolve. Confirm GitHub Pages setting, Actions run and public URL **in the new repo**; never claim deployment based solely on the template's source tree. Add independent mathematical tests only when an actual engine exists.


## Mandatory publication and workflow security rules

These constraints apply to both human contributors and automated coding agents.
Before creating a public commit, PR, Issue, comment, artifact, or Pages deployment:

1. **No secrets:** Never paste or commit access tokens, GitHub PATs, API keys, passwords, SSH/private keys, session cookies, sensitive configuration, or credentials. Read secrets only from a dedicated secret store, and use a least-privilege short-lived credential if needed. If exposure occurs, stop publication, revoke/rotate privately, and never copy the value into a public remediation issue.
2. **No restricted academic data:** Never publish private Drive/ELMS URLs, instructor PDFs, office/lecture material, student records, answer keys, unreleased homework or copyrighted figures without documented redistribution rights. Solution release alone is insufficient. Prefer original independent examples and neutral source references.
3. **No dangerous workflows:** Keep third-party GitHub Actions pinned to verified full commit SHAs; set minimal explicit workflow permissions; do not introduce \`pull_request_target\`, \`workflow_run\`, or workflow-wide write tokens without separate security review. Deploy only from reviewed \`main\` changes.
4. **Do not bypass checks:** The publication safety gate and Gitleaks secret scan must pass before merge. Never disable, skip, weaken or add an exclusion to either tool merely to clear a failing check. A false positive requires documented maintainer review and a tested narrow fix.
5. **Pre-merge review:** Inspect the full diff for accidental publication and workflow privilege changes. Require independent approval for security-control changes when GitHub branch protections support it. Verify Pages after deploy; do not treat passing CI as proof of publication safety or licensing.
6. **New repositories:** Copy this policy, the pinned-workflow baseline, secret scanning and publication guard into every new course repo before enabling Pages.

The automated \`scripts/check_publication.py\` gate blocks common accidental disclosure paths, selected restricted file formats, private course-storage URLs, and unsafe workflow references. It cannot determine copyright ownership or detect every secret; maintain human rights/security review as a separate requirement.
