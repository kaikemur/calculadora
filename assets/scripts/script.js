function inserir(data) {
    document.querySelector('#display').value += data;
}

function limpar() {
    document.querySelector('#display').value = '';
}
function voltar() {
    const display = document.querySelector('#display');
   display.value = display.value.slice(0, -1);
}
function resultado() {
    let display = document.querySelector('#display');
    try {
        display.value = eval(display.value);
    }catch (error) {
        display.value = 'Erro';
        setTimeout(() => {            display.value = '';
        }, 1000);
    }
}