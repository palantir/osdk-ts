# expected-template-next-static-export-cors-proxy

This project was generated with `@osdk/create-app` and demonstrates using the OSDK package `@fake/sdk` with React on top of Next.js. Check out the [Next.js](https://nextjs.org/docs) docs for further configuration.

## Developing

Run the following command or equivalent with your preferred package manager to start a local development server on `http://localhost:8080`:

```sh
npm run dev
```

Development configuration is stored in `.env.development`.

In order to make API requests to Foundry, a CORS proxy has been set up for local development which may be removed if the stack is configured to allow `http://localhost:8080` to load resources. The configured OAuth client must also allow `http://localhost:8080/auth/callback` as a redirect URL.

## Deploying

Run the following command or equivalent with your preferred package manager to create a production build of your application:

```sh
npm run build
```

Production configuration is stored in `.env.production`.

If you did not fill in the URL your production application will be hosted on you will need to fill in the `NEXT_PUBLIC_FOUNDRY_REDIRECT_URL` in `.env.production`.

In order to make API requests to Foundry, CORS must be configured for the stack to allow the production origin to load resources. The configured OAuth client must also allow the production origin auth callback as a redirect URL.
