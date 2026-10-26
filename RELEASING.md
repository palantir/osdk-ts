# Releasing

We use changesets for version management in this repository, however we do mostly manual shipping.

In `packages/tool.release` is code that is adapted from changesets/action that will let you create the PR branch for releasing. There is a utility script at `./scripts/createReleasePr.sh` that ensures you are compiled and does some sanity checks prior to creating the release PR.

Major releases require an explicit package name when creating the release PR on `main`:

```sh
./scripts/createReleasePr.sh --allow-major-release "@osdk/unit-testing"
```

Add a major changeset for the package and let the release tool update its version and changelog. Repeat `--allow-major-release` for each package that needs a major release, including any dependent packages that receive major bumps. The option matches exact package names and does not allow major releases on stable release branches.
