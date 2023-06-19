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
const btn = document.getElementById('form-botao')
let formPlacaValido = false
let formCidadeValido = false

function validarPlacaInput() {
    const formatoPlaca = /^[0-9]{7}$/;
    if (placa.value.match(formatoPlaca)) {
        console.log('true', placa.value.length);
        placa.style.border = '1px solid green';
        invalidoPlaca.style.display = 'none'
        formPlacaValido = true;
        validaBotaoSubmit()
    } else {
        console.log('false', placa.value.length);
        placa.style.border = '1px solid red';
        invalidoPlaca.style.display = 'block';
    }
}

function validarCidadeInput() {
    if (cidade.value) {
        console.log('valido!')
        cidade.style.border = '1px solid green';
        invalidoCidade.style.display = 'none';
        formCidadeValido = true;
        validaBotaoSubmit()
    } else {
        console.log('inválido!')
        cidade.style.border = '1px solid red';
        invalidoCidade.style.display = 'block';
    }
}

function validarCepInput() {
    const formatoCep = /^[0-9]{8}$/;
    if (cep.value.match(formatoCep)) {
        console.log('true', cep.value.length);
        cep.style.border = '1px solid green';
        invalidoCep.style.display = 'none';
    } else {
        console.log('false', cep.value.length);
        cep.style.border = '1px solid red';
        invalidoCep.style.display = 'block';
    }
}

function validaBotaoSubmit() {
    if (formPlacaValido && formCidadeValido) {
        btn.removeAttribute('disabled')
    }
}

placa.addEventListener('change', validarPlacaInput)
cidade.addEventListener('change', validarCidadeInput)
cep.addEventListener('change', validarCepInput)

// mudança dos campos do formulário

const btn_placa = document.getElementById('btn-placa');
const btn_vin = document.getElementById('btn-vin');
const campo_placa = document.getElementById('campo-placa');
const campo_vin = document.getElementById('campo-vin');

btn_vin.addEventListener('click', (e) => {
    e.preventDefault()
    // btn_placa.setAttribute('class', 'btn')
    btn_placa.classList.remove('selected')
    btn_vin.classList.add('selected')
    campo_vin.classList.remove('hidden')
    campo_placa.classList.add('hidden')
})

btn_placa.addEventListener('click', (e) => {
    e.preventDefault()
    btn_vin.classList.remove('selected')
    btn_placa.classList.add('selected')
    campo_vin.classList.add('hidden')
    campo_placa.classList.remove('hidden')
})

