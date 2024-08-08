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

**4. Adjusting Fonts:**

`fontFamily` object key in config file is used to configure the fonts.

> By default, it used sans font, fontFamily -> sans

1. select the fonts from google fonts [here](https://fonts.google.com/)

2. Use the imoprt section and copy the imports.

3. Import the font url code and import it in base ``style.css``

```css
/* import over here */
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

/* tailwind core */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Now, extend the font settings over ``tailwind.config.js``

```css
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        /* font name can also be reffered from google font selection dashboard */
        body: ["Nunito"]
      }
    },
  },
  plugins: [],
}
```

> Rebuild the css script, usage: ``font-body``
