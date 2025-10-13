# Build / CI notes for the repo

## api-extractor

Currently, this runs only as part of `@osdk/client.api`, however the goal is to extend this to the entire repo assuming we are satisfied with its output.

While the api-extract can be used for generating rolled up `.d.ts` files, we do not use it for that purpose. Our intention is to use it generate the api report and api documentation. The logic behind the api report is it should make it easier to review the impact of changes to types within the codebase. For example, it can show that we have implicitly created a dependency on a third party library for our own types.

### CI implications

The `api-extractor` has a "local" and a non-local (CI) mode. In the "local" mode, it will automatically update the file we commit for the api report. The intent of the tool is to error in CI if the file that is committed doesn't match the output, however the behavior of the tool is to exit with a non-zero code when there are warnings in the non-local mode. This makes adoption of the tool expensive at best and at worst removes the ability to have granular information.

As such, we run the tool in CI in "local" mode so that we do not get non-zero exits for warnings. Our existing build infrastructure already fails the build if any changes happen to committed files during CI and as such we can rely on that mechanism to be sure that developers have updated the api report that gets committed.
