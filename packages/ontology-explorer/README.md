# @osdk/ontology-explorer

> **Experimental.** This package is under active development and its behavior may change in any release.

This package contains the server for the Ontology Explorer application, a browser view of a SuperRepo's
ontology. It serves the frontend application.

## Usage

The Foundry CLI starts the explorer as part of `foundry start ontology` when this package is installed in
the ontology component. To start it by hand, run it from the ontology component:

```sh
pnpm exec ontology-explorer
```

| Flag             | Default     | Description                                                              |
| ---------------- | ----------- | ------------------------------------------------------------------------ |
| `--port`, `-p`   | `8083`      | Port to listen on                                                        |
| `--host`         | `127.0.0.1` | Address to listen on                                                     |
| `--project-root` |             | Root of the SuperRepo, the directory holding `foundry.yml`. Not used yet |

Unknown flags are ignored, so a newer Foundry CLI can pass flags this version doesn't know.
