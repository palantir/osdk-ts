# Releasing

We use changesets for version management in this repository, however we do mostly manual shipping.

In `packages/tool.release` is code that is adapted from changesets/action that will let you create the PR branch for releasing. There is a utility script at `./scripts/createReleasePr.sh` that ensures you are compiled and does some sanity checks prior to creating the release PR.

At a near future date, the
