document.getElementById("formReserva").addEventListener("submit", function(e) {
    e.preventDefault();

    let valido = true;

    let nome = document.getElementById("nome");
    let telefone = document.getElementById("telefone");
    let email = document.getElementById("email");
    let lugares = document.getElementById("lugares");

    // limpar erros
    document.getElementById("erroNome").innerText = "";
    document.getElementById("erroTelefone").innerText = "";
    document.getElementById("erroEmail").innerText = "";
    document.getElementById("erroLugares").innerText = "";

    // validações
    if (nome.value.trim() === "") {
        document.getElementById("erroNome").innerText = "Preenchimento obrigatório";
        valido = false;
    }

    if (telefone.value.trim() === "") {
        document.getElementById("erroTelefone").innerText = "Preenchimento obrigatório";
        valido = false;
    }

    if (email.value.trim() === "") {
        document.getElementById("erroEmail").innerText = "Preenchimento obrigatório";
        valido = false;
    }

    if (lugares.value.trim() === "") {
        document.getElementById("erroLugares").innerText = "Preenchimento obrigatório";
        valido = false;
    }

    // sucesso
    if (valido) {
        document.getElementById("formReserva").style.display = "none";
        document.getElementById("mensagemSucesso").style.display = "block";
    }
});