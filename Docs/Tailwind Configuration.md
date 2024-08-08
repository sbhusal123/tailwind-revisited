# Tailwind Configuration

Handled from ``tailwind.config.js``

To generate a full config file: ``npx tailwindcss init --full`` gives a full settings with default values. 

> For the reference we've a file: ``tailwind-default.config.js`` use it as a reference.

> Caveats: instead of modifying the default value config files, we can use ``npx tailwindcss init`` to use our own config.


## Few Examples:

**1. Adjusting Padding ``p-4`` to have 10px padding**


```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      padding: {
        4: '10px'
      }
    }
  },
  plugins: [],
}
```

**2. Create fontsize: ``text-mamoth``**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    extend: {
      fontSize: {   
          mamoth: '10rem'
      }
    }
  },
  plugins: [],
}
```

> Every time the config file is changed, it must be reprocessed with ``npx tailwindcss -i <in_path> -o <out_path>``


**3. Adjusting Colors:**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // text-primary, bg-primary, <property>-<color>
        primary: '#FF6363',
        secondary: {
          // text-secondary-100, bg-secondary-100, <property>-<color>-100
          100: "E2E2D5",

          // text-secondary-100, bg-secondary-100, <property>-<color>-200
          200: "888883"
        }
      }
    },
  },
  plugins: [],
}
```
