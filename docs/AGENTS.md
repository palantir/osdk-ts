<!-- cspell:ignore Fumadocs frontmatter llms -->

# Writing the OSDK docs

The site at https://palantir.github.io/osdk-ts/ is a [Fumadocs](https://fumadocs.dev) app (Next.js, static export). These rules apply to every page.

## Where content lives

| Content                               | Location                          | Format                                                                        |
| ------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------- |
| Guides, concepts, React SDK, devtools | `docs/content/`                   | `.mdx` with `title` and `description` frontmatter                             |
| Component pages                       | `packages/react-components/docs/` | `.md`, titled by an H1, because they also ship on npm and render in Storybook |
| Sidebar order and sections            | `meta.json` in each folder        | `---Label---` adds a section header                                           |

Component pages stay `.md` in place. `scripts/gen-props.mjs` only scans that folder, Storybook imports them by file name, and the first H1 and the paragraph under it become the page title and description. The component sidebar is `docs/content/components/meta.json`; a component page must also be listed in `docs/lib/source.ts`.

## Voice

- Address the reader as "you". Use present tense and active voice.
- Open every page with one or two sentences that say what the reader can do with it. Do not restate the title.
- Prefer short paragraphs, numbered steps for procedures, and tables for options.
- Use sentence case for headings: "Apply an action", not "Applying Actions".
- Cut filler: "simply", "just", "easily", "powerful", "seamless", "robust", "leverage".
- State each caveat once, on the page that owns the topic, and link to it from elsewhere.

## Code samples

- Every sample must compile against the current exports in `packages/*/src`. Check signatures before writing them.
- Import the generated SDK from `@my-app/sdk` and use the example types `Employee`, `Office`, and the action `modifyEmployee`.
- Components keep rendering while loading or on error. Do not early-return a spinner when data may already be present.
- `applyAction` rethrows. Await it inside `try`/`catch` or attach `.catch`.
- Give token providers a real body, such as `auth` from `@osdk/oauth`, never an empty function.
- Use a `npm` fence for install commands. It renders as npm, pnpm, yarn, and bun tabs.
- Add a file name to non-trivial snippets: `` ```tsx title="src/EmployeeList.tsx" ``.

## Components available in `.mdx`

`<Callout type="info | warn | error | success">`, `<Steps>`/`<Step>`, `<Tabs items={[...]}>`/`<Tab>`, `<Cards>`/`<Card href title>`, `<Accordions>`/`<Accordion title>`, `<TypeTable type={{...}} />`, and `<Files>`/`<Folder>`/`<File>`.

In `.md` files, use GitHub alerts (`> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`). They render as callouts on the site and on GitHub.

## Links

Link between pages with relative file paths (`./actions.mdx`, `../concepts/caching.mdx`). The build resolves them and fails on broken ones.

## AI readers

Every page is also published as Markdown (`<page>.md`), and in `/llms.txt` and `/llms-full.txt`. Write so a page stands alone: name the package and import path in each sample, and do not rely on surrounding pages for context.

## Checks

```sh
pnpm --filter @osdk/docs build        # builds the site, fails on broken links
pnpm exec cspell "docs/content/**/*.mdx"
pnpm --filter @osdk/react-components check-gen-props
```
