## Introduction

This is and example of a design system with a single button component

## Installing

To install this app and it's dependencies run

```bash
npm i
```

# Running

To run the storybook server, run

```bash
npm run storybook
```

The server can be located at [http://localhost:6006](http://localhost:6006)

There is a React Next webpage aswell, but this is not implemented currently

## About

This project uses React as a framework, installed using Next, and has a single button component that uses a theme for styling. The theme allows for switching the whole app
to another one (such as a dark mode) by changing a single variable. Currently the theme is focused on just the button component, but it could be modified to add branding colors
and change all components to use new branding colors by changing a single variable. Currently the button component is locked down in terms of styling so that any consumers are
gaurunteed to have similar styling as other products, but this could be changed to allow some styling changes to be passed to the component as props.

One change I know needs to happen it how the components get their fonts. Currently the font is retrived from Google fonts in the Storybook preview, but the fonts would not exist
if another application tried to import this project currently.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).


