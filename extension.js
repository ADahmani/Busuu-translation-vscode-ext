import * as vscode from "vscode";
import I18nToolboxProvider from './src/I18nToolboxProvider';

export function activate(context) {
	const provider = new I18nToolboxProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(I18nToolboxProvider.viewType, provider));


	context.subscriptions.push(
		vscode.commands.registerCommand('busuu-i18n-toolbox.saveKey', () => {
			provider.saveKey();
		}));
		
	const helloCommand = vscode.commands.registerCommand("busuu-i18n-toolbox.addTranslation", () => {
		provider.addTranslation();
		provider.focus();
		// await vscode.commands.executeCommand('workbench.views.explorer.i18nToolboxView');
	});

	context.subscriptions.push(helloCommand);
}
