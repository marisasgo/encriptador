function isValidText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showAlert(message) {
    alert(message);
}

function encryptText() {
    let text = document.getElementById("inputText").value.trim();

    if (!isValidText(text)) {
        showAlert("No son admitidas mayusculas, numeros o caracteres especiales.");
        return;
    }

    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

        document.getElementById("outputText").value = encryptedText;

}

function decryptText() {
    let text = document.getElementById("inputText").value.trim();
    let decryptedText = text
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u")

        document.getElementById("outputText").value = decryptedText;
}

function copyToClipboard() {
    let outputText = document.getElementById("outputText").value;

    if (outputText === "") {
        showAlert("Está vacio el mensaje. No hay texto");
        return;
    }

    navigator.clipboard.writeText(outputText)
        .then(() => {
            showAlert("Texto copiado en el portapapeles");
        })
        .catch(err => {
            showAlert("Hubo un problema al copiar el texto" + err);
        });
}

function pasteFromClipboard() {
    navigator.clipboard.readText()
    .then(text => {
        document.getElementById("inputText").value = text;
    })
    .catch(err => {
        showAlert("Hubo un prolema al pegar el texto. " + err);
    });
}