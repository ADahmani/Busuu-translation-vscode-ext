import * as vscode from "vscode";
import path from 'path';
import season from 'season';
import {addPropsToFile} from './utils';
const PROJECT_NAME = '/busuu-frontend-webapp/';
const TRANSLATION_FILE = '/source-frontend-webapp.json';

export default class I18nToolboxProvider implements vscode.WebviewViewProvider {

	public static readonly viewType = 'i18nToolboxView';

	private _view?: vscode.WebviewView;

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,

			localResourceRoots: [
				this._extensionUri
			]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

		webviewView.webview.onDidReceiveMessage(data => {
			console.log({data});

			switch (data.type) {
				case "upload-branch":
					{
						if (!data.branch) {
							vscode.window.showErrorMessage(`Branch can't be empty`);
							break;
						}
						const cp = require('child_process');
						let currentFilePath = path.dirname(vscode.window.activeTextEditor.document.uri.path);
						let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
						cp.exec(`cd ${projectDir} && crowdin upload sources -b ${data.branch}`, (err, stdout, stderr) => {
							if (err) {
								console.log('error: ' + err);
							} else {
								vscode.window.showInformationMessage(`Uploaded to branch!`);
							}
						});
						break;
					}
				case "download-branch":
					{
						if (!data.branch) {
							vscode.window.showErrorMessage(`Branch can't be empty`);
							break;
						}
						const cp = require('child_process');
						let currentFilePath = path.dirname(vscode.window.activeTextEditor.document.uri.path);
						let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
						cp.exec(`cd ${projectDir} && crowdin download sources -b ${data.branch}`, (err, stdout, stderr) => {
							if (err) {
								console.log('error: ' + err);
							} else {
								vscode.window.showInformationMessage(`Downloaded translations from branch!`);
							}
						});
						break;
					}
				case "get-branch":
					{
						const cp = require('child_process');
						let currentFilePath = path.dirname(vscode.window.activeTextEditor.document.uri.path);
						let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
						cp.exec(`cd ${projectDir} && git branch --show-current`, (err, stdout, stderr) => {
							if (err) {
								console.log('error: ' + err);
							} else {
								console.log('stdout: ' + stdout);
									const branch = stdout.replace('/', '-');
									this._view.webview.postMessage({type: 'set-branch', branch});
							}
						});
						break;
					}
				case 'focus':
					{
						this._view.webview.postMessage({ type: 'focus' });
						break;
					}
				case 'addKey':
					{
						let currentFilePath: string = path.dirname(vscode.window.activeTextEditor.document.uri.path);
						let translationsDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME + 'app/src/statics/translations';
						const editor = vscode.window.activeTextEditor;
						let textWeWant: string;
						const selection = editor.selection;
						if (selection && !selection.isEmpty) {
							const selectionRange = new vscode.Range(selection.start.line, selection.start.character, selection.end.line, selection.end.character);
							textWeWant = editor.document.getText(selectionRange).replace(/\s+/g, ' ').trim();
						}
						const keyWeWant = data.value;
							
							const fileToRead = translationsDir + TRANSLATION_FILE;

							// Checks if file exists and creates it if not
							if (!season.resolve(fileToRead)) {
								vscode.window.showErrorMessage(`Can't find source file!`);
							}

							// Reads a json file; edits it; save it; and replace text in vscode
							season.readFile(fileToRead, (err, file) => {
							file = addPropsToFile(file, keyWeWant, textWeWant);
							season.writeFile(fileToRead, file, function(err) {
								if (err) console.error(err);
								vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(`{t('${keyWeWant}')}`));
							});
							});
						
						vscode.window.showInformationMessage(`Key ${data.value} Added!`);
					}
			}
		});
	}

	public saveKey() {
		if (this._view) {
			this._view.show?.(true);
			this._view.webview.postMessage({ type: 'saveKey' });
		}
	}

	public addTranslation() {
      const cp = require('child_process');
      let currentFilePath = path.dirname(vscode.window.activeTextEditor.document.uri.path);
      let projectDir = currentFilePath.split(`${PROJECT_NAME}`)[0] + PROJECT_NAME;
      cp.exec(`cd ${projectDir} && git branch --show-current`, (err, stdout, stderr) => {
          if (err) {
              console.log('error: ' + err);
          } else {
              console.log('stdout: ' + stdout);
				const branch = stdout.replace('/', '-');
				this._view.webview.postMessage({type: 'get-branch', branch});
          }
      });
	}

	public focus() {
		if (this._view) {
			this._view.webview.postMessage({ type: 'focus' });
		}
	}

	

	private _getHtmlForWebview(webview: vscode.Webview) {
		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));
		const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css'));
		// Use a nonce to only allow a specific script to be run.
		const nonce = getNonce();

		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleVSCodeUri}" rel="stylesheet">
			</head>
			<body>
				<div class="busuu">
					<h1>Busuu's i18n Toolbox 🛠️</h1>
				</div>
                <label class="json-key-label">Assign key to selection</label>
				<div class="flex-row">
					<input id="json-key" class="json-key-text" type="text">
					<button class="add-key-button">Add Key</button>
				</div>
                <label class="json-key-label">Branch Name</label>
                <div class="flex-column">
					<div class="flex-row">
						<input id="branch-name" class="json-key-text" type="text">
						<button id="get-branch-button" class="add-key-button">Get Branch</button>
					</div>
                </div>
				<div class="flex-column" style="position: fixed; bottom: 0; left:0;">
					<label class="json-key-label">More Actions</label>
                    <div class="flex-row">
                        <button class="add-key-button" id="upload-to-branch-button">Upload To Branch</button>
                        <button class="add-key-button" id="download-from-branch-button">Download From Branch</button>
                    </div>
				</div>
				<script nonce="${nonce}" src="${scriptUri}"></script>
			</body>
			</html>`;
	}
}

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
