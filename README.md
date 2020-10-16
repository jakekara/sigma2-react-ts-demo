# Using Sigma2 with React and Typescript

- [Live Demo](https://jakekara-sigma2-react-ts-demo.netlify.app/)

## About

This demo shows how to use [Sigma
V2](https://github.com/jacomyal/sigma.js/tree/v2) in a React app with
Typescript.

This React app was created with create-react-app using the Typescript template,
so it's pretty standard.

There are two major components (in src/components) that make up this demo.
FilterNetwork is meant to be a generally reusable network that is "filterable"
allowing nodes to be made visible or invisible. SigmaDemo calls FilterNetwork
with a fake network.
