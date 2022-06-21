function valor(){
    var city = document.getElementById("city");
    var r_city = city.options[city.selectedIndex].value;
    var r_area = document.getElementById("range_area").value;
    var r_quarto = document.getElementById("range_quartos").value;
    
    if(r_city == 'Boituva'){
        var valor = ((3330 * r_area) + (20000 * r_quarto)).toLocaleString('pt-br', {minimumFractionDigits: 2});
        document.getElementById("valorfinal").innerHTML = "VALOR APROXIMADO: R$ " + valor;
    }
}

function enviarForms(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var tel = document.getElementById("tel").value;

    document.getElementById("forms_result").innerHTML = "Olá " + nome + ", Agradecemos pelo contato.</br>Em breve te retornaremos !";
}

function range_area(){
    var r_area = document.getElementById("range_area").value;
    document.getElementById("res_area").innerHTML = Number(r_area);
}

function range_quarto(){
    var r_quarto = document.getElementById("range_quartos").value;
    document.getElementById("res_quartos").innerHTML = Number(r_quarto);
}

const btnMobile = document.getElementById("btn_mobile");

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
