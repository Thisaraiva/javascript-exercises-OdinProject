const palindromes = function (...args) {
    return args.every(str => {
        // Remove caracteres não alfanuméricos e converte para minúsculas
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        // Verifica se a string normalizada é igual à sua versão invertida
        return cleanedStr === cleanedStr.split('').reverse().join('');
    });
};

// Do not edit below this line
module.exports = palindromes;