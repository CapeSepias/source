# Accessibility

> Supporting assistive technology.

## Screen readers

Screen readers provide an audio representation of a website. They enable people with a vision impairment to navigate and perceive the meaningful content of the website.

We must ensure that all our content is navigable and represented in a meaningful way using a screen reader.

Although we don't maintain a list of screen readers we support, the best screen readers to test with are:

-   On MacOS, VoiceOver + Safari
-   On Windows, NVDA + Firefox

WebAIM provides a useful guide to [testing accessibility with VoiceOver](https://webaim.org/articles/voiceover/).

## Keyboard navigation

Some people cannot, or choose not to, use a mouse or trackpad. The may instead browse the web using their keyboards exclusively, which we should facilitate.

**Links, forms and buttons**

-   All links, form fields and buttons should be accessible using the Tab key
-   Buttons should be activated using both the Enter and Space keys
-   Links should be activated using the Enter key
-   Consider a default action for pressing the Enter key while a form field is in focus

**Dropdown menus**

-   Dropdown menus should be expanded using the Enter key
-   When a dropdown menu is expanded, links within the menu should be accessible using the Tab key
-   When a dropdown menu is collapsed, links within the menu should not be accessible using the Tab key
-   Dropdown menus should be collapsed using the Escape key

**Modal dialogs**

-   Modal dialogs should be closed using the Escape key
-   When a modal dialog is open, the focus should be trapped (i.e. pressing the Tab key should never move focus outside of the dialog) until the dialog is closed

**Tab lists**

-   Tabs (i.e. elements with `role=tab`) should be accessible using the Tab key
-   Tabs should be activated using the Enter key
-   When a tab panel becomes active, focus should be moved into that tab panel
-   Focusable elements in the active tab panel should be accessible using the Tab key
-   Focusable elements in hidden tab panels should not be accessible using the Tab key

**Carousels**

-   Consider implementing intuitive shortcuts, such as using the Left and Right cursor keys to move backwards and forwards through the carousel

## Colour

## Colour contrast

We must always meet the WCAG 2.1 AA standard for colour contrast.

The standard requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.

Large text is consider 24px or larger (18.66px or larger for bold text).

[Who Can Use](https://whocanuse.com/) is a tool that can test a combination of background and foreground colours. It gives an indication of the people who may be excluded from reading your content, based on the vision type they have.

## Use of colour

Avoid using colour only to indicate a change in state. This pattern excludes users who are unable to distinguish certain colours, such as colourblind users or users operating devices in direct sunlight.

For example, if a field is in an error state, it is not enough to change the colour of the label to red. It is necessary to make at least one non-colour change such as increasing the font weight of the label or adding an error icon.

## Helpers

## Focus halo

Providing a clear focus state (the blue halo effect around active elements) is essential to support keyboard navigation.

The focus halo may be imported and applied to custom elements.

```js
import { focusHalo } from '@guardian/src-foundations/accessibility';

const customButton = css`
    ${focusHalo};
`;
```

## Focus manager

While providing a clear focus state is essential to support keyboard navigation, it is less important, and arguably distracting, for mouse users.

Source provides a utility that manages the appearance of focus styles. When enabled, focus styles will be hidden while the user interacts using the mouse. They will appear when the tab key is pressed to begin keyboard navigation.

You must explictly enable this feature in your app (and you probably want to):

```js
import { FocusStyleManager } from '@guardian/src-foundations/utils';

FocusStyleManager.onlyShowFocusOnTabs();
```

## Visually hidden elements

Some elements should be presented only to screen reader users. Examples include restyled checkboxes and button labels that provide more contextual information to the user.

Source provides a snippet of CSS that can be imported and applied to elements that need to be hidden from sighted users and displayed to screen reader users.

```js
import { visuallyHidden } from '@guardian/src-foundations/accessibility';

const label = css`
    ${visuallyHidden};
`;
```

## Description Id

A function that takes the ID of an element and generates a new ID. This should be set as the ID of an element that describes the first element. The generated ID should also be passed to the `aria-describedby` attribute on the first element.

```jsx
import { descriptionId } from '@guardian/src-foundations/accessibility';

const Form = () => {
    const id = 'first_name';
    return (
        <form>
            <input id={id} type="text" aria-describedby={descriptionId(id)} />
            <p class="error" id={descriptionId(id)} />
        </form>
    );
};
```
