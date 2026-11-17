# Course Website Template

Starter GitHub Pages project for a course-specific learning explorer. Make this
repository a GitHub template in Settings, then use **Use this template** to create
a new course repository.

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
