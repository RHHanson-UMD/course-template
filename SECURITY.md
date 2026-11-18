# Security policy

## Reporting a vulnerability

Do not disclose credentials, private class materials, unpublished homework, or exploit details in public Issues, pull requests, Actions logs, or commits. Use GitHub's **Report a vulnerability** / private security advisory process when available at https://github.com/RHHanson-UMD/course-template/security/advisories/new . If unavailable, contact the maintainer privately through an already established secure channel; do not create a public report containing sensitive details.

## Scope

This repository is a public, static educational project. Reports about client-side injection, supply-chain compromise, GitHub Actions permissions, published secrets, and exposure of restricted educational material are in scope. Never include live credentials in reproduction steps.

## Maintainer response

Revoke and replace compromised credentials promptly; assume a credential committed to a public branch or its history is exposed. Resolve the root cause and validate tests before deployment. Do not rely on deleting a file or rewriting current contents to invalidate compromised credentials.
