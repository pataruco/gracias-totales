[![CI/CD](https://github.com/pataruco/gracias-totales/actions/workflows/ci.yml/badge.svg)](https://github.com/pataruco/gracias-totales/actions/workflows/ci.yml)

# Gracias totales

## What it is?

Vanilla, HTML, CSS, JavaScript static [website](https://pataruco.github.io/gracias-totales/) to invite to my ~~41~~ 43 birthday party 🎂 using:

- [DOM Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
- [Google Maps directions API](https://developers.google.com/maps/documentation/javascript/directions)
- [Google Calendar API](https://developers.google.com/calendar/v3/reference)

Build it with Webpack on TypeScript and deployed on GitHub pages

## How to run it?

- Install dependencies

  ```sh
  yarn
  ```

- Development

  ```sh
  yarn start
  ```

- Local build

  ```sh
  yarn build:local
  ```

## Deployment

- Create a tag release
  ```sh
  git tag R.<release name>
  ```
- Push tag
  ```sh
  git push --tags
  ```

## Notes

I followed this [steps](https://medium.com/@pablo127/google-api-authentication-with-oauth-2-on-the-example-of-gmail-a103c897fd98) to get OAuth token and refresh token for Google API
