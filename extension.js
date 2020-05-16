const vscode = require('vscode');

// == Position / Range wrapper =================================================
const position = (l, c) => new vscode.Position(l, c);
const range = (l1, c1, l2, c2) => new vscode.Range(position(l1, c1), position(l2, c2));

// ===== activate ==============================================================
exports.activate = (context) => {
    let complete = vscode.commands.registerCommand('completeline.complete', () => {

        // ===== no active editor ==============================================
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('There is no active text editor!');
            return;
        }

        // ===== grab doc and selection ========================================
        let document = vscode.window.activeTextEditor.document;
        let selections = vscode.window.activeTextEditor.selections;

        // ===== for each selection ============================================
        selections.map((selection) => {
            
            // ===== no multiline ==============================================
            if (selection.start.line !== selection.end.line) {
                vscode.window.showWarningMessage('Multiline is not supported');
                return;
            }

            // ===== determine nb chars ========================================
            let rulerList = vscode.workspace.getConfiguration('editor').rulers;
            let desiredLen = vscode.workspace.getConfiguration('completeline').desiredLength;
            let line = selection.start.line;
            let text = document.lineAt(line).text;
            let lineLength = text.length;
            lineLength += (text.split('\t').length - 1) * (editor.options.tabSize - 1);

            // If editor.rulers is not empty. If it does, it is the extension configuration
            // parameter which will be take into account
            if (rulerList.length > 0) {
                // Process each defined ruler
                for (var ruler in rulerList) {
                    // If ruler is strictly greater than line length, set the desired
                    // length to the current ruler and stop the loop
                    if (rulerList[ruler] > lineLength) {
                        desiredLen = rulerList[ruler];
                        break;
                    }
                    // Otherwise desired length is defined with the last ruler value
                    else {
                        desiredLen = rulerList[ruler];
                    }
                }
            }

            let len = desiredLen - lineLength;

            // ===== return when line length is hover ==========================
            if (len <= 0) {
                vscode.window.showInformationMessage('the line length is over '+desiredLen);
                return;
            }

            // ===== determine the repeted char ================================
            let sel = vscode.workspace.getConfiguration('completeline').desiredCharacter;
            let selStart = selection.start.character;
            let selEnd = selection.end.character;
            if (selStart !== selEnd) {
                sel = text.substring(selStart, selEnd); //repeat the selected string instead of the desiredCharacter
            }
            let str = sel.repeat(len).substring(0, len);

            // ===== add the repeted string add the end of the line ============
            editor.edit((edit) => {
                edit.insert(position(line, text.length), str);
            });
        });
    });

    context.subscriptions.push(complete);
};

// ===== deactivate =============================================================
exports.deactivate = () => {
};