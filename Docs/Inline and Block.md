# Few Tips:


# Display two contents inline

```html
<div class="card-badge">
    <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    <span>25 mins</span>
</div>
```

We want  the svg vector icon to display inline with the span text. Though svg is a separate block itself. We can modify SVG to display as inline block.

```html
<div class="card-badge">
    <svg class="w-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
    <span>25 mins</span>
</div>
```

> Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.

> Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.

> Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements.

Simulate [here](https://www.w3schools.com/cssref/playdemo.php?filename=playcss_display)

**[Summary:](https://www.w3schools.com/cssref/pr_class_display.php)**

- ``inline`` Displays an element as an inline element (like ``<span>``). Any height and width properties will have no effect. This is default.

- ``block`` Displays an element as a block element (like ``<p>``). It starts on a new line, and takes up the whole width.

- ``inline-block`` Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values.

