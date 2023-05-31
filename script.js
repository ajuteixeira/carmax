const icone = document.querySelector('.localizacao')
const modal = document.getElementById('modal')

function abreModal () { 
    modal.style.display = 'flex'
}

function fechaModal () { 
    modal.style.display = 'none'
}

icone.addEventListener("mouseover", abreModal);
icone.addEventListener("mouseout", fechaModal);
modal.addEventListener("mouseover", abreModal);
modal.addEventListener("mouseout", fechaModal);
