document.getElementById('encrypt-button').addEventListener('click', () => {
    const inputText = document.getElementById('input-textarea').value.toLowerCase();
    const encryptedText = encrypt(inputText);
    document.getElementById('output-textarea').value = encryptedText;
});

document.getElementById('decrypt-button').addEventListener('click', () => {
    const inputText = document.getElementById('input-textarea').value.toLowerCase();
    const decryptedText = decrypt(inputText);
    document.getElementById('output-textarea').value = decryptedText;
});

document.getElementById('copy-button').addEventListener('click', () => {
    const textarea = document.getElementById('output-textarea');
    textarea.select();
    document.execCommand('copy');
});

function encrypt(text) {
    const encryptMap = {
        e: 'enter',
        i: 'imes',
        a: 'ai',
        o: 'ober',
        u: 'ufat'
    };

    return text.split('').map(char => encryptMap[char] || char).join('');
}

function decrypt(text) {
    const decryptMap = {
        enter: 'e',
        imes: 'i',
        ai: 'a',
        ober: 'o',
        ufat: 'u'
    };

    return text.split(' ').map(word => {
        let decryptedWord = '';
        for (let i = 0; i < word.length; i++) {
            if (decryptMap[word.slice(i, i + 5)]) {
                decryptedWord += decryptMap[word.slice(i, i + 5)];
                i += 4;
            } else {
                decryptedWord += word[i];
            }
        }
        return decryptedWord;
    }).join(' ');
}