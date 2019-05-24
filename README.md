# wlang README

[![License](https://badgen.net/badge/license/MIT/blue)](https://opensource.org/licenses/mit-license.php)
[![Version](https://badgen.net/vs-marketplace/v/gdesnoues.complete-line)](https://marketplace.visualstudio.com/items?itemName=gdesnoues.complete-line)
[![installs](https://badgen.net/vs-marketplace/i/gdesnoues.complete-line)](https://marketplace.visualstudio.com/items?itemName=gdesnoues.complete-line)

This is a Keymaps extension for [VS Code](https://code.visualstudio.com/)
It's use to automatically complete a comment line with a definite character or with your selection

## Configuration

Go to `File > Preferences > Settings > Extensions > Complete Line`
- chose your default repeted character
- chose the final line length

## Command key

Use `Ctrl+Shift+/` to complete the end of your active line with the character define in the configuration

if you want to repete a desired string, select it before use the command key

## Known Issues

- None

## Release Notes

see [CHANGELOG.md](https://github.com/gdesnoues/complete-line/blob/master/CHANGELOG.md) for release notes

## Tips

You can see a vertical line (ruler) at the final length with adding this code in your settings.json
- go to `File > Preferences > Settings > Text Editor > Files`
- clic on `Edit in settings.json`
- add this lines :
```json
    "editor.rulers": [80,120],
    "workbench.colorCustomizations": {
        "editorRuler.foreground": "#333333"
    },
```
the first line is all the rulers positions (2 in mine)

the third line is the ruler color
