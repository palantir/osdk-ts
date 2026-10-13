# `@osdk/aliases`

This package provides named string configuration values for websites. Its browser API is experimental.

## Install

```sh
npm install @osdk/aliases
```

## Configure a website alias

In a Vite app, place the file at `public/resources.json`. Vite copies it to the build output root. Ensure the deployed file is available at `/resources.json`.

```json
{
  "aliases": {
    "custom": {
      "welcomeMessage": {
        "value": "Welcome to our application!",
        "description": "Message shown on the welcome page",
        "required": false
      }
    }
  }
}
```

Each key under `aliases.custom` is a name your code can request, and each `value` must be a string:

- `value` is the default string value.
- `description` is optional help text shown with the Marketplace input.
- `required` is a boolean that defaults to `false`. Set it to `true` to make the input mandatory.

When packaging a website hosted through Developer Console in Foundry Marketplace, its custom aliases appear as configurable inputs. Installers can override values; optional inputs left unspecified use the defaults from `resources.json`.

## Read an alias

```ts
import { Aliases } from "@osdk/aliases/experimental";

const welcomeMessage = await Aliases.custom("welcomeMessage");
```

Alias values are public because they are served with the website. Do not put secrets in them.

Functions have their own alias configuration and API; see the [Functions custom aliases guide](https://www.palantir.com/docs/foundry/functions/custom-aliases).
