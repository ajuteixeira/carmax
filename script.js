const icone = document.querySelector('.localizacao')
const modal = document.getElementById('modal')

function abreModal() {
    modal.style.display = 'flex'
}

function fechaModal() {
    modal.style.display = 'none'
}

icone.addEventListener("mouseover", abreModal);
icone.addEventListener("mouseout", fechaModal);
modal.addEventListener("mouseover", abreModal);
modal.addEventListener("mouseout", fechaModal);

// formulario

const formulario = document.getElementById('formulario');
const placa = document.getElementById('placa');
const invalidoPlaca = document.getElementById('invalido-placa');
const cidade = document.getElementById('cidade');
const invalidoCidade = document.getElementById('invalido-cidade');
const cep = document.getElementById('cep');
const invalidoCep = document.getElementById('invalido-cep');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (placa.value.length === 7) {
        console.log('true', placa.value.length);
        placa.style.border = '1px solid green';
        invalidoPlaca.style.display = 'none'
    } else {
        console.log('false', placa.value.length);
        placa.style.border = '1px solid red';
        invalidoPlaca.style.display = 'block';
    }

    if (cidade.value) {
        console.log('inválido!')
        cidade.style.border = '1px solid red';
        invalidoCidade.style.display = 'block'
    } else {
        console.log('valido!')
        cidade.style.border = '1px solid green';
        invalidoCidade.style.display = 'none'
    }

    if (cep.value.length === 8) {
        console.log('true', cep.value.length);
        cep.style.border = '1px solid green';
        invalidoCep.style.display = 'none'
    } else {
        console.log('false', cep.value.length);
        cep.style.border = '1px solid red';
        invalidoCep.style.display = 'block';
    }
})