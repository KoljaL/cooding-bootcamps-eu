# Fast Cheap Good

Implement a web app that will implement a tricky toggle behavior of three checkboxes like this [example](https://coding-katas.netlify.app/fast-cheap-good/).

## Requirments

- [ ] Add three checkboxes with labels (fast, cheap and good)
- [ ] Implement the feature that not all checkboxes can be checked at the same time
- [ ] If the third checkbox is checked you have to uncheck the one that got checked before

## Hints

Checkboxes and checked state

```html
<!-- Checked checkbox -->
<input type="checkbox" checked>

<!-- Unchecked checkbox -->
<input type="checkbox">
```

A label should point to it's input element. The label can then be used to access the input by clicking it.

```html
<input type="checkbox" id="fast">
<label for="fast">Fast</label>
```

## Example Video

https://user-images.githubusercontent.com/16404104/146916035-59f1b678-f87b-4529-a18e-0578bb2d3d37.mov
