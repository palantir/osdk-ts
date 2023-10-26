# osdk-ts

## Dev workflow

1. Fork the repo
2. Create a branch
3. `pnpm install`
4. Start dev mode: `pnpm dev --concurrency 20`
5. Add your code
6. Add a changeset

   > 📘 Note
   >
   > **Follow semver rules here.**

   1. Assuming you've run `pnpm install`, run `changeset` (or `pnpm exec changeset`).
   2. The tool will split things into changed vs unchanged packages (which you may need if you decide to add changeset logs in a future PR for past features)
   3. Select the packages you want the changeset applied to using the arrow keys (up/down) and spacebar to "select" the package.
   4. Press enter to continue.
   5. The CLI will go through a progression of asking you which pacakges you previously selected need a major bump? Then a minor bump? Patch bumps assumed for remaining packages changed. Arrows and space bar to select. Enter to continue (even if you selected nothing).
   6. Enter a change (or press enter on empty to open your editor.)

   > Info
   >
   > Full docs on the `changesets` tool can be found at the [changesets/changests github repo](https://github.com/changesets/changesets).

6. If you're curious what the final build output might look like you can run `pnpm build` from root.
7. Run all lint rules with `pnpm lint` from root.
