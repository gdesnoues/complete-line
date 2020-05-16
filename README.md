# Complete Line

[![License](https://badgen.net/badge/license/MIT/blue)](https://opensource.org/licenses/mit-license.php)
[![Version](https://badgen.net/vs-marketplace/v/gdesnoues.complete-line)](https://marketplace.visualstudio.com/items?itemName=gdesnoues.complete-line)
[![installs](https://badgen.net/vs-marketplace/i/gdesnoues.complete-line)](https://marketplace.visualstudio.com/items?itemName=gdesnoues.complete-line)

This is a Keymaps extension for [VS Code](https://code.visualstudio.com/)

It's use to automatically complete a comment line with a definite character or with your selection

## Configuration

Go to `File > Preferences > Settings > Extensions > Complete Line`
- choose your default repeated character (leave the variable empty to repeat the last character of the line)
- choose the final line length (to have several steps, use the `editor.rulers` also)

## Command key

Use `Ctrl+Shift+:` to complete the end of your active line with the character define in the configuration

- if you want to repeat a desired string : select it before use the command key
- if you want to repeat the last character of the line : leave `Complete Line` empty

## Release Notes

see [CHANGELOG.md](https://github.com/gdesnoues/complete-line/blob/master/CHANGELOG.md) for release notes

## :bulb: Tips

You can see a vertical line (ruler) at the final length with adding this code in your settings.json
- go to `File > Preferences > Settings > Text Editor > Files`
- click on `Edit in settings.json`
- add this lines :
```json
    "editor.rulers": [80,120],
    "workbench.colorCustomizations": {
        "editorRuler.foreground": "#333333"
    },
```
- The first line is all the rulers positions (2 in mine)
- The third line is the ruler color

They will be added to an array with `Settings > Extensions > Complete Line`. So you may have several steps to complete the line

## Contributors

Thanks to :

- [Pascal Polleunus](https://github.com/ppo)
- [wimille](https://github.com/wimille)
