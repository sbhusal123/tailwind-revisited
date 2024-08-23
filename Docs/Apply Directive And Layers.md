# Apply Directive

- If we have a element with multiple classs and we want to give it a separate class as per our usage.

- We can use apply directive. i.e. it allows grouping of tailwind classes in one for ease of use.

```html
<div class="bg-red-50 rounded-sm md:bg-slate-50 ...." id="foo">
    Foo
</div>
``` 

Suppose we've a following html element and we want to minify it.

```css
@tailwind base;
@tailwind components;

.foo_div {
    @apply  bg-red-50 rounded-sm md:bg-slate-50 ....
}

@tailwind utilities;
```

Now we can use the same class in the div as:

```html
<div class="foo-div" id="foo">
    Foo
</div>
```

Note that the classes defined for the base / components or utilities can instead be used with `@layer` directive.

```css
/* base if for p, h1, h2, h3, button, a ... */
/* these are the base styles provided by tailwind for simple html tags */
@tailwind base;

/* we might define btn-primary, card,  */
@tailwind components;

/* p-<strength>, m-<strength>, these are to controll the styles values with strength */
@tailwind utilities;

@layer base {
    p
}

/* custom div  */
@lyer components {
    .foo_div {
        @apply  bg-red-50 rounded-sm md:bg-slate-50 ....
    }
}
```

> Note that we must place our custom classes and styles in the same layers we need. 

If we want to customize base, we need to keep it inside base layer, components inside components layers and utility inside utilities layer.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* base */
@layer base {
    h1 {
        @apply bg-red-500 font-bold
    }
    ....
}

/* components */
@layer components {
    .card {
        @apply rounded-sm border-b;
    }
}

@layer utilities {
  .rotate-15 {
    transform: rotate(15deg);
  }
  .rotate-20 {
    transform: rotate(20deg);
  }
  .rotate--20 {
    transform: rotate(-20deg);
  }
}

```
