const campoDigitacaoUsuario = document.querySelector('#campo-digitacao-usuario');
const palavrasEscritas = [];
const teclas = document.querySelectorAll('.tecla');
const letras = document.querySelectorAll('.letra');
const capslock = document.querySelector('#capslock');
const backspace = document.querySelector('#backspace');
const space = document.querySelector('#space');
const enter = document.querySelector('#enter');


(function capsLock() {
  capslock.addEventListener('click', ()=>{
    campoDigitacaoUsuario.focus();
    if (capslock.textContent === '⇧') {
      capslock.textContent = '⇩';
      letras.forEach(letra =>{
        letra.textContent = letra.textContent.toUpperCase();
      });
    }
    else if (capslock.textContent === '⇩') {
      capslock.textContent = '⇧';
      letras.forEach(letra =>{
        letra.textContent = letra.textContent.toLowerCase();
      });
    }
  });
})();

(function espaco() {
  space.addEventListener('click', ()=>{
    campoDigitacaoUsuario.focus();
    campoDigitacaoUsuario.value += ' ';
    let pressionado = campoDigitacaoUsuario.value[campoDigitacaoUsuario.value.length - 1];
    palavrasEscritas.push(pressionado);
  });
})();

(function inserirTeclaPressionada() {
  teclas.forEach(prop => {
    prop.addEventListener('click', ()=>{
      campoDigitacaoUsuario.focus();
      let pressionado = prop.textContent;
      campoDigitacaoUsuario.value += pressionado; 
      palavrasEscritas.push(pressionado);
    });
  });
})();

(function apagar() {
  backspace.addEventListener('click', ()=>{
    campoDigitacaoUsuario.focus();
    campoDigitacaoUsuario.value = "";
    palavrasEscritas.pop();
    for (i = 0; i < palavrasEscritas.length; i++) {
      campoDigitacaoUsuario.value += palavrasEscritas[i];
    };
    return campoDigitacaoUsuario.value;
  });
})();

(function enterPressionado() {
  enter.addEventListener('click', () => {
    campoDigitacaoUsuario.focusout();
  });
})();