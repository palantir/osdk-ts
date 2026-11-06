# `@osdk/aliases`

This package provides named string configuration values and Workshop module references for websites. Its browser API is experimental.

## Install

```sh
npm install @osdk/aliases
```

## Configure a website alias

Include `resources.json` at the root of your built website so it is available at `/resources.json`. In Vite apps, place it in `public/resources.json`; Vite copies it there when building.

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

## Read a Workshop module alias

Add Workshop module references as an array under `aliases.workshops` in your website's `resources.json`:

```json
{
  "aliases": {
    "workshops": [
      {
        "alias": "orderDetails",
        "rid": "ri.workshop.main.module.example"
      }
    ]
  }
}
```

Replace the example RID with your module's RID. Alias names must be unique, contain 1–50 ASCII letters or digits, and start with a lowercase letter.

```ts
import { Aliases } from "@osdk/aliases/experimental";

const { rid: moduleRid } = await Aliases.workshop("orderDetails");
```

Use `moduleRid` when rendering the module. The browser reads the RID served in `resources.json`, so it uses the installation-specific value when Marketplace remaps the reference. Packaging Workshop dependencies requires a Foundry version that supports `aliases.workshops`.

`Aliases.workshop` is available in browser builds only. Custom and Workshop aliases share one cached request; a failed load can be retried on a later call. A missing alias, malformed declaration, or duplicate Workshop alias rejects the promise.
