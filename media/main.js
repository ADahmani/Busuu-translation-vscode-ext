//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
    const vscode = acquireVsCodeApi();

    document.querySelector('.add-key-button').addEventListener('click', () => {
        addKey();
    });

    document.querySelector('#get-branch-button').addEventListener('click', () => {
        vscode.postMessage({ type: 'get-branch'});
    });

    document.querySelector('#upload-to-branch-button').addEventListener('click', () => {
        uploadToBranch();
    });

    document.querySelector('#download-from-branch-button').addEventListener('click', () => {
        downloadFromBranch();
    });

    const jsonKey = document.querySelector('#json-key');
    const branchName = document.querySelector('#branch-name');

    // Handle messages sent from the extension to the webview
    window.addEventListener('message', event => {
        const message = event.data; // The json data that the extension sent
        switch (message.type) {
            case 'addKey':
                {
                    addKey();
                    break;
                }
            case 'set-branch':
                {
                    branchName.value = message.branch;
                    break;
                }
            case "focus":
                jsonKey.focus();
            break;

        }
    });

    function addKey() {
        let jsonKeyValue = jsonKey.value;
        vscode.postMessage({ type: 'addKey', value: jsonKeyValue });
        jsonKey.value = '';
    }

    function uploadToBranch() {
        vscode.postMessage({ type: 'upload-branch', branch: branchName.value });
    }
    
    function downloadFromBranch() {
        if (!branchName.value) {
            vscode.window.showErrorMessage(`Branch Can't be empty`);
            return;
        }
        vscode.postMessage({ type: 'download-branch', branch: branchName.value });
    }

    const handleEnterKey = (e) => {
        if (e.keyCode == 13) {
            addKey();
        }
    };

    window.addEventListener('keydown', handleEnterKey.bind(this), false);
}());
