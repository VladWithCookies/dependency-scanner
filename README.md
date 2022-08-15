# Dependency Scanner
Dependency Scanner - is an application for automatic detection of vulnerabilities in project dependencies.

## Technology Stack
* [Vue](https://vuejs.org/) - An approachable, performant and versatile framework for building web user interfaces. 
* [Vue Router](https://router.vuejs.org/) - The official router for Vue.js.
* [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
* [Vitest](https://vitest.dev/) - A Vite-native unit test framework. It's fast!
* [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/) - Utils for Vue components testing.
* [MSW](https://mswjs.io/) - Mock by intercepting requests on the network level. 
* [C8](https://github.com/bcoe/c8) - Code-coverage using Node.js' built in functionality that's compatible with Istanbul's reporters.
* [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js.
* [Element Plus](https://element-plus.org/en-US/) - A Vue 3 based component library for designers and developers.

## Project Setup
First install required dependencies:
```bash
npm i
```

Then create an `.env` file in the root directory of application and fill it with the necessary environment variables:
```
VITE_DEBRICKED_ACCESS_TOKEN=<Your Debricked Access Token>
```

## Development
To run the app in development mode, run:
```bash
npm run dev
```

Now the app is available on [localhost:8080](http://localhost:8080).

## Tests
To run unit and integration, run:
```bash
npm run test
```

## Production
To run the app in production mode, build the app with:
```bash
npm run build
```

And then, run:
```
npm run preview
```

## Docker
The application also contains a `Dockerfile` suitable for deploying the production version of the app.

To build the image, run:
```bash
docker build -t dependency-scanner .
```

To run the docerized app, run:
```
docker run -it -p 8080:80 --rm --name dependency-scanner-1 dependency-scanner
```

Now the app is available on [localhost:8080](http://localhost:8080).
