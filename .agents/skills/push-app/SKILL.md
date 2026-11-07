---
name: push-app
description: Inspect changes, create structured commits following a strict commit pattern, and push authorized commits to the remote repository across any project. Use for requests to commit changes or push changes with Git without modifying application versions or tags.
---

# push-app

## Scope and authorization

- Follow project-specific repository guidelines, approval rules, and Git standards if present in the workspace. Present intended files, verification checks, and Git actions before executing; obtain user approval if required or not yet granted.
- This skill handles only Git staging, commit creation, and pushing. It strictly excludes version bumping (such as editing version fields in configuration files) and release tagging.
- A commit-only request authorizes a local commit, not a push. A request to push authorizes preparing and pushing the relevant commit.
- Do not run deployment scripts or publish releases as part of this workflow. A successful Git push alone does not confirm deployment.
- Work strictly on the current branch. Do not create, switch, or delete branches, discard unapproved work, rewrite history, or force-push.

## Workflow

### 1. Inspect and select changes

- Inspect the current branch, `git status --short`, staged and unstaged diffs, and untracked files relevant to the request. Review file contents, not just file names.
- Confirm which changes belong to the requested operation; preserve unrelated work and existing staging.
- Define the exact files or hunks intended for the commit. Do not include unrelated working-tree modifications.
- If there is nothing to commit, do not create an empty commit. If a push was requested, inspect existing outgoing commits instead.
- Before remote synchronization, run `git fetch -p` against the intended remote. Inspect its URL, branch tracking/upstream, divergence, and all outgoing commits. If the remote or destination branch is ambiguous, the branch is detached, or unrelated outgoing commits would be included, resolve the scope with the user before pushing. Do not automatically pull or rebase a diverged branch.
- An absent upstream alone is not an error: use an explicit remote and branch when the destination is established. Do not infer an unfamiliar destination or alter upstream configuration without authorization.

### 2. Verify the selected result

- For any repository, always run `git diff --check` on the selected changes to detect whitespace errors, unresolved merge conflicts, or corrupted diffs.
- For code, tests, or build configuration changes, run the project's configured test suites, linters, type checks, or build commands if available (for example, `npm test`, `cargo test`, `pytest`, `make test`, or configured lint/build scripts). Adapt commands to the project's technology stack.
- For documentation-only changes, check text consistency, referenced paths, and formatting without running heavyweight build/test suites unless relevant.
- Prefer non-destructive, check-only commands. Do not run automated fix commands if they touch unapproved files or expand the commit scope.
- Failed required checks block commit and push until resolved or explicitly excused by the user. Report the failing command, error output, whether the issue predates current work, and the risk of proceeding.
- Ensure verification commands do not silently modify files or alter the staged diff before committing.

### 3. Prepare the commit

- Skip this step if only pushing existing outgoing commits.
- Stage intended paths or hunks explicitly (for example, `git add <path1> <path2>`) and inspect the full staged diff using `git diff --staged`. Never use `git add .` or `git add -A` without verifying every staged file.
- If unrelated work is already staged, resolve the staging scope with the user rather than blindly committing or resetting everything.
- Write the commit message in English based strictly on the actual staged diff. Follow this exact pattern:
  1. A concise imperative subject line summarizing the change.
  2. A blank line.
  3. A 60–120-word description explaining the problem/motivation and the resulting change.
  4. A blank line.
  5. A bulleted list of file actions using repository-relative paths:
     - `- added: <path>`
     - `- changed: <path>`
     - `- deleted: <path>`
     - `- moved: <old-path> to <new-path>`
     - `- renamed: <old-path> to <new-path>`
     *(Include only applicable categories; omit any category that has no changes).*

  **Format template:**

  ```text
  <Imperative subject line>

  <60–120-word description of the problem and resulting change>

  - added: path/to/file
  - changed: path/to/file
  - deleted: path/to/file
  - moved: path/to/old to path/to/new
  - renamed: path/to/old to path/to/new
  ```

- Commit only when authorized. Pass multiline messages through a temporary file (for example, `git commit --file <message-file>`) to preserve newlines and prevent shell interpolation, then remove the temporary file. Check the resulting commit SHA and working-tree status.

### 4. Push when authorized

- Skip this step for commit-only requests.
- Immediately before pushing, re-confirm the intended remote, branch, outgoing commits, and verification status.
- Push only the authorized branch using explicit refs (for example, `git push <remote> <branch>`).
- Never use `--force`, `--force-with-lease`, or `--tags`. Do not create or push release tags.
- If all intended commits are already synchronized with the remote, report that nothing needed pushing.
- For rejected or uncertain pushes, inspect remote refs before deciding what remains to do; never overwrite remote history.

### 5. Report the outcome

- State what was completed: local commit created (include commit SHA and subject line) and branch pushed (include remote name and branch name), as applicable.
- Summarize passed, failed, or skipped verification checks with reasons.
- Inspect and report any remaining uncommitted changes or unresolved issues in the working tree. Do not claim a clean working tree without verification.
