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
            let desiredLen = vscode.workspace.getConfiguration('completeline').desiredLength;
            let line = selection.start.line;
            let text = document.lineAt(line).text;
            let lineLength = text.length;
            lineLength += (text.split('\t').length - 1) * (editor.options.tabSize - 1);
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