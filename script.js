

function criptografar(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        
        if (char >= 'a' && char <= 'z') {
            let novoChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 3) % 26) + 97);
            resultado += novoChar;
        } else {
            resultado += char;
        }
    }
    return resultado;
}


function descriptografar(texto) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        
        if (char >= 'a' && char <= 'z') {
            let novoChar = String.fromCharCode(((char.charCodeAt(0) - 97 - 3 + 26) % 26) + 97);
            resultado += novoChar;
        } else {
            resultado += char;
        }
    }
    return resultado;
}

document.addEventListener('DOMContentLoaded', function() {
    const campoTexto = document.querySelector('.campo-texto');
    const botaoCriptografar = document.querySelector('.botao-criptografar');
    const botaoDescriptografar = document.querySelector('.botao-descriptografar');
    const mensagemPrincipal = document.querySelector('.mensagem-principal');
    const mensagemSecundaria = document.querySelector('.mensagem-secundaria');
    const botaoCopiar = document.querySelector('.botao-copiar');

   
    botaoCriptografar.addEventListener('click', function() {
        const texto = campoTexto.value.trim();
        if (texto) {
            const textoCriptografado = criptografar(texto);
            mensagemPrincipal.textContent = textoCriptografado;
            mensagemSecundaria.textContent = '';
        } else {
            mensagemPrincipal.textContent = 'Nenhuma mensagem encontrada';
            mensagemSecundaria.textContent = 'Digite um texto que você deseja criptografar ou descriptografar';
        }
    });

   
    botaoDescriptografar.addEventListener('click', function() {
        const texto = campoTexto.value.trim();
        if (texto) {
            const textoDescriptografado = descriptografar(texto);
            mensagemPrincipal.textContent = textoDescriptografado;
            mensagemSecundaria.textContent = '';
        } else {
            mensagemPrincipal.textContent = 'Nenhuma mensagem encontrada';
            mensagemSecundaria.textContent = 'Digite um texto que você deseja criptografar ou descriptografar';
        }
    });

  
    function copiarTexto() {
        const texto = mensagemPrincipal.textContent;
        if (texto) {
            navigator.clipboard.writeText(texto).then(() => {
                alert('Texto copiado para a área de transferência!');
            }).catch(err => {
                alert('Não foi possível copiar o texto.');
            });
        }
    }

   
    botaoCopiar.addEventListener('click', copiarTexto);
});
