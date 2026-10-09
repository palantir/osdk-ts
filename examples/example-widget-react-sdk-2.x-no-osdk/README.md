# example-widget-react

This project was generated with [`@osdk/create-widget`](https://www.npmjs.com/package/@osdk/create-widget) from the `widget-react` template. It is built against a locally generated SDK and a non-existent Foundry stack, so it is intended for reference purposes only.

To quickly create your own version of this template run the following command and answer the prompts based on your Custom Widgets widget set:

```
npm create @osdk/widget@latest -- --template widget-react --skipOsdk
```

Alternatively check out the Custom Widgets docs for a full guide on creating and deploying widgets.

## Workshop custom theme

`FoundryWidget` automatically converts the host theme into Blueprint CSS tokens on the
widget iframe's document root, including for portals. This example requires no per-widget
theme mapping. The SDK must include the theme contract, client forwarding, and React
provider changes; updating only the host's API package is insufficient.

Run the widget against the Workshop custom-theme follow-up. Change the saved module
border radius between Square, Regular, and Rounded and confirm the card updates
without a reload. Removing the theme restores the widget's original tokens. Reload the
widget to verify the saved theme arrives on readiness.
