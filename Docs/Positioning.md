# Absolute And Relative positioning of an element:

```html
<div class="px-20 py-10">
  <div class="flex flex-col gap-2 sm:flex-row">
    <div class="relative overflow-hidden rounded-lg border shadow-lg">
      <img src="https://cdn.explorecams.com/storage/photos/LEFEikw0MR_1600.jpg" alt="" />
      <div class="m-5">
        <span class="block text-xl">Huming bird</span>
        <span class="text-sm text-gray-600">Huming bird, its a nice bird</span>
      </div>
      <div class="absolute top-2 text-sm text-white">
        <p>Buy for 20$</p>
      </div>
    </div>
  </div>
</div>
```

We wanted to Align the text `Buy for 20$` at the top of the image in the above card. What we can do is:
- Position the parent `relative`
- Then position the child i.e. parent div containing p as relative.

> What this does is, positions the one div relative to another, yet the child position is absolute. 

**Note that the positioning from top and bottom is controlled with top-strength left-strength bottom-strength.**
