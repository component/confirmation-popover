# Confirmation Popover

  Popover confirmation component built on top of [Popover](http://github.com/component/popover).

  ![js popover confirmation component](http://f.cl.ly/items/2H3a3C1M1k071z1B360I/Screen%20Shot%202012-08-06%20at%2012.16.59%20PM.png)

  Live demo is [here](http://component.github.io/confirmation-popover/).

## Installation

```
$ component install component/confirmation-popover
```

## Features

  - all the features of Popover / Tip

## Events

  - `show` the confirmation is shown
  - `hide` the confirmation is hidden
  - `cancel` the user closed the confirmation or cancelled
  - `ok` the user accepted

## API

### new ConfirmationPopover(msg, [title])

  Create a new popover with `msg` and optional `title`.

```js
var Confirmation = require('confirmation-popover');
var confirm = new Confirmation('This action cannot be undone.', 'Delete tobi?');
confirm.show(el);
```

### .focus(type)

  By default the "cancel" button is focused, however you
  may invoke `.focus('ok')`.

### .cancel(text)

  Set cancel button `text`.

### .ok(text)

  Set cancel ok `text`.

### .show(el, [fn])

  Attach to `el`, and invoke `fn` with
  a boolean representing the user's choice.

  When `fn` is omitted you may still utilize the `cancel` / `ok` events.

### ...

  View [Tip](http://github.com/component/tip) and [Popover](http://github.com/component/popover) for additional
  API documentation.

## License

  MIT
