# Complete Line

[![License](https://badgen.net/badge/license/MIT/blue)](https://opensource.org/licenses/mit-license.php)
[![Version](https://badgen.net/vs-marketplace/v/gdesnoues.complete-line)](https://marketplace.visualstudio.com/items?itemName=gdesnoues.complete-line)
[![installs](https://badgen.net/vs-marketplace/i/gdesnoues.complete-line)](https://marketplace.visualstudio.com/items?itemName=gdesnoues.complete-line)

This is a Keymaps extension for [VS Code](https://code.visualstudio.com/).

It provides line padding, repeating a given string up to a given line length.

The string to repeat is either the current selection, or the configured value, or the last character of the line.  
The line length is consecutively each value of the configuration or the VS Code vertical rulers.


## Configuration

Go to `File` (Windows) or `Code` (Mac) then `Preferences > Settings > Extensions > Complete Line`.

This extension contributes the following variables to the [settings](https://code.visualstudio.com/docs/getstarted/settings):

```
"completeline.padString": null, // Examples: "=" or "_/\"
"completeline.padLengths": [], // Examples: [80] or [80, 100, 120]
```

**`completeline.padString`** 
- The string to use for padding.
- Leave this empty (or set it to `null`) to use the last character of the line.
- Default: `null`.

**`completeline.padLengths`**
- The desired line lengths (defined as an array of integers).
- Leave this empty (or set it to `[]`) to use the `editor.rulers` values.
- Default: `[]`.


## Keyboard Shortcut

Use `Ctrl + Shift + :` (Windows) or `Ctrl + Shift + ,` (Mac) to pad the current line.

To repeat a given string, select the character(s) anywhere on the line.


## Release Notes

See [CHANGELOG.md](CHANGELOG.md).


## :bulb: Tips

You can define vertical rulers in your `settings.json` as follows.  
For more information, see VS Code documentation: [Settings](https://code.visualstudio.com/docs/getstarted/settings) and [Theme Color](https://code.visualstudio.com/api/references/theme-color).


```
  // Render vertical rulers after a certain number of monospace characters. Use multiple values for multiple rulers.
  // No rulers are drawn if array is empty.
  "editor.rulers": [80, 120],

  "workbench.colorCustomizations": {
    "editorRuler.foreground": "#333", // Color of the editor rulers.
  },
```

Or

```
  "editor.rulers": [
    80,
    { "column": 100, "color: "#444" },
    { "column": 120, "color: "#555" },
  ],
```


## Contributors

Thanks to:

- [Pascal Polleunus](https://github.com/ppo)
- [wimille](https://github.com/wimille)


## License

[MIT](LICENSE)
