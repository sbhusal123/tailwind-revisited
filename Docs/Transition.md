# Adding a Transition:

## 1. Transition for a button:

```html
                <a href="#" class="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Log In</a>
```

Here for the hover effect, we are using a transition:
- **Note** that, every element using transition should have ``transition`` class in it. Enables smooth transitions for properties that change on hover (like background-color and color)

- ``duration-500`` : Transition of 500ms

- ``ease-out`` causes transition to happen when hovers out, or mouse moved away, it makes the transition start quickly and then slow down toward the end.


## 2. More about transition classes:

### Transition:

> specify which CSS properties should be animated during the transition.

- ``transition`` Applies transitions to all properties that change.

- ``transition-none`` Disables all transitions.

- ``transition-colors`` Only transitions color-related properties (color, background-color, border-color, etc.).

- ``transition-opacity``  Only transitions the opacity property.

- ``transition-shadow`` Only transitions box shadow changes.

- ``transition-transform``  Only transitions transform properties like scale, rotate, translate, etc.


### Transition Timing Function Classes:

> control the speed curve of the transition, defining how the transition progresses over its duration.

- ``duration-75``: Transition duration of 75ms.

- ``duration-100``: Transition duration of 100ms.

- ``duration-150``: Transition duration of 150ms.

- ``duration-200``: Transition duration of 200ms.

- ``duration-300``: Transition duration of 300ms.

- ``duration-500``: Transition duration of 500ms.

- ``duration-700``: Transition duration of 700ms.

- ``duration-1000``: Transition duration of 1000ms.


#### Transition Timing:

> control the speed curve of the transition, defining how the transition progresses over its duration.

- ``ease-linear``: The transition progresses at a constant speed from start to end.

- ``ease-in``: The transition starts slowly and then speeds up towards the end.

- ``ease-out``: The transition starts quickly and then slows down towards the end.

``ease-in-out``: The transition starts slowly, speeds up, and then slows down again before finishing.

#### Transition Delay:

> define a delay before the transition starts.

- ``delay-75``: 75ms delay before starting the transition.

- ``delay-100``: 100ms delay before starting the transition.

- ``delay-150``: 150ms delay before starting the transition.

- ``delay-200``: 200ms delay before starting the transition.

- ``delay-300``: 300ms delay before starting the transition.

- ``delay-500``: 500ms delay before starting the transition.

- ``delay-700``: 700ms delay before starting the transition.

- ``delay-1000``: 1000ms delay before starting the transition.


### Example:

```html
<button class="transition ease-in-out duration-300 transform hover:scale-105">
  Hover Me
</button>
```

In this example:

- The button will smoothly scale up by 5% when hovered.
- The transition lasts 300ms.
- The transition starts slowly, speeds up in the middle, and then slows down towards the end.


