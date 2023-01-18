# Styled Todo App

Create a todo app with HTML, CSS and JavaScript like [this](https://styled-todo-app.netlify.app/).

An unstyled version (that focusses on the functionality) can be found [here](https://bootcamp-todo-app.stackblitz.io/).

## Features

The list of features is ordered by descending priority.

- [ ] Todos can be added using the add button
- [ ] List all added todos
- [ ] Added todos can be marked as done
- [ ] Add styling according to design requirements
- [ ] Add a filter which allows to display either "all todos", "open todos" or "done todos"
- [ ] Add a button which will delete all done todos
- [ ] Add a check that allows only todos with 5 or more characters
- [ ] Add a feature that allows to add todos when pressing enter in the textbox
- [ ] Display the text of done todos different than the text of open todos

## Design

Use the following color scheme from [coolors](https://coolors.co/ef476f-f5ab00-06d6a0-118ab2-073b4c). The design additionally uses `#f5f5f5` as the background color and `#ffffff`.

- [ ] Add custom styling to the input elements (checkbox, radio button, button, input)
- [ ] Use a sans-serif font
- [ ] Add visible focus states to your inputs
- [ ] Responsive design is not required but will be appreciated

**Overall Styling**

![image](https://user-images.githubusercontent.com/16404104/125468256-6ba0bb76-87e9-44c7-a10e-361e53bf2636.png)

**Focus state of input, button and radio**

![image](https://user-images.githubusercontent.com/16404104/125468326-70179413-c728-4290-8c0d-c591a3f35523.png)

![image](https://user-images.githubusercontent.com/16404104/125468456-152c5311-bfa0-4689-9dab-a1dee1f9b328.png)

![image](https://user-images.githubusercontent.com/16404104/125468533-baed1ffc-d9de-4787-b3e0-9d4955bd5347.png)

**Focus state of list items**

![image](https://user-images.githubusercontent.com/16404104/125468616-2deee31e-e269-4d5f-99a8-cba09bf700f2.png)

**Checked Status**

You can use `all: unset` to reset all predefined stylings from input elements - this will also remove `display: inline-block`. Remember to add the `:checked` state for custom elements.

```css
.custom-button {
  all: unset;
  /* your new stylings here */
}
```

You can use an svg to set a check mark as background for the checkbox.

```css
.checkbox:checked {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden='true' focusable='false' %3E%3Cpath fill='none' stroke='white' stroke-width='3' d='M1.73 12.91l6.37 6.37L22.79 4.59' /%3E%3C/svg%3E");
}
```

You can use the `:focus-within` pseudo class to target elements with focussed children.

```css
li:focus-within {
  ...
}
```

The example styling uses `text-shadow` and `box-shadow`.
