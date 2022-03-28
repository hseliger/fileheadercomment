// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var command = require('./command');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.insertFileHeaderComment', function () {
        command.insertFileHeaderComment();
    });
    context.subscriptions.push(disposable);

    context.subscriptions.push(vscode.commands.registerCommand('extension.insertFileHeaderCommentOther', function(){
        command.insertFileHeaderCommentOther();
    }));
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;