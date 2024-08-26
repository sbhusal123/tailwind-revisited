# Tailwind Transform Class

> Note that, we need to apply ``transform`` utility class to enable transformation.


## 1. Scaling:

> These classes scale an element up or down on both the X and Y axes, or individually on each axis.

``scale-<value>`` value can be ``0, 50, 75, 90, 95, 100, ..., 150``

For specific scaling: ``scale-x-{amount}`` or ``scale-y-{amount}``


## 2. Rotate:

> These classes rotate an element by a specified number of degrees.

``rotate-<value>`` can be ``0, 45, 90, 180, 270``

## 3. Translate (Moving):

- ``translate-x-{amount}`` : Moves the element horizontally. Replace {amount} with values like 1, 2, 4, 8, etc., or percentages like 1/2, full, etc.

- ``translate-y-{amount}`` : Moves the element vertically. Replace {amount} with values like 1, 2, 4, 8, etc., or percentages like 1/2, full, etc.


## 4. Skew (Stretching or Tilting):

- ``skew-x-{amount}`` : Skews the element along the X-axis. Replace {amount} with values like 1, 2, 3, 6, 12, etc.

- ``skew-y-{amount}`` : Skews the element along the Y-axis. Replace {amount} with values like 1, 2, 3, 6, 12, etc.


## 5. Controlling Origin Point of Transformation:

- ``origin-center`` : The transform origin is at the center of the element (default).

- ``origin-top`` : The transform origin is at the top of the element.

- ``origin-top-right`` : The transform origin is at the top-right corner.

- ``origin-right`` : The transform origin is at the right side of the element.

- ``origin-bottom-right`` : The transform origin is at the bottom-right corner.

- ``origin-bottom`` : The transform origin is at the bottom of the element.

- ``origin-bottom-left`` : The transform origin is at the bottom-left corner.

- ``origin-left`` : The transform origin is at the left side of the element.

- ``origin-top-left`` : The transform origin is at the top-left corner.

## Example:

```html
<div class="transform origin-center hover:rotate-180 transition duration-500 bg-blue-500 text-white p-10">
  Rotate Me
</div>
```
**Explanation:**

- ``transform``: Enables transformations on the element.

- ``origin-center`` : Sets the transform origin to the center of the element. This means the rotation will happen around the center point of the element.

- ``hover:rotate-180`` : When you hover over the element, it will rotate 180 degrees.

- ``transition duration-500`` : The rotation will take 500 milliseconds, creating a smooth effect.

- ``bg-blue-500 text-white p-10`` : These classes add some styling to the element—a blue background, white text, and padding.
