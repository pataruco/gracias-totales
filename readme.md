# Gracias totales

## What it is?

A static [website](https://pataruco.github.io/gracias-totales/) to invite to my 41 birthday party 🎂using:

- DOM Navigator
- Google Maps directions API
- Google Calendar API

Build it with Webpack on TypeScript and deployed on GitHub pages

## How to run it?

- Install dependencies
  - `yarn`
- Development
  - `yarn start:dev`

## Deployment

- Compile bundle
  - `yarn build`
- Commit and push to master

## Impediments

I couldn't resolve `.env` using [dotenv webpack](https://github.com/mrsteele/dotenv-webpack). Is a known problem when webpack is written on TS, I used Mozilla convict to introduce envs.
Variables can be found [here](https://gist.github.com/pataruco/6e6a39f336483b806ca5dc312b113986)
