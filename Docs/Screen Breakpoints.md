# Screen and Responsive Design Breakpoints

By default we have following breakpoints in different screen sizes.

## Screen Size Breakpoints:

- sm => 640px => ``@media (min-width: 640px) { ... }``

- md => 768px => ``@media (min-width: 768px) { ... }``

- lg => 1024px => ``@media (min-width: 1024px) { ... }``

- xl => 1280px => ``@media (min-width: 1280px) { ... }``

- 2xl => 1536px => ``@media (min-width: 1536px) { ... }``

Alternatively we have:

- max-sm => 640px => ``@media not all and (min-width: 640px) { ... }``

- max-md => 768px => ``@media not all and (min-width: 768px) { ... }``

- max-lg => 1024px => ``@media not all and (min-width: 1024px) { ... }``

- max-xl => 1280px => ``@media not all and (min-width: 1280px) { ... }``

- max-2xl => 1536px => ``@media not all and (min-width: 1536px) { ... }``



## What's media max-width and min-width:

**@media(min-width: value)**

- will apply only if the viewport width is greater than or equal to the specified min-width value.

- For example: if the value is 640px, it will apply to screens greater or equal to size of 640px.


**@media(max-width: value)**

- will apply only if the viewport width is lesser or equal to the specifed max-width.

- For example: if the value is 300px, it will apply to screens lesser or equal to 300px.


**@media not all and (min-width: 1536px)**

- applies styles to all viewports **except** those that are 1536 pixels wide or wider.

> Caveats: sm doesnt targets the small device, instead it targets the screens sizes greater than 640px.


## How to add custom breakpoints:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  ....
  ...
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '450px'},
        'gt-mobile': {'min': '450px'}
      },
    },
  },
}
```

