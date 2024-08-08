# Curated Docs:

- [Color Pallate](https://tailwindcss.com/docs/customizing-colors#default-color-palette)

For tailwind intellisense to be activated, initialize the tailwind ``npx tailwindcss-cli init -p``


Note that, in config file, we'll have to explicitly mention the content section as:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // path where we'll use the styles generated
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
