function abrirForm() {
    document.querySelector(".container").classList.add("active");
}

function fecharForm() {
    document.querySelector(".container").classList.remove("active");
}




const container = document.querySelector(".container");
const formBox = document.querySelector(".form-container");

container.addEventListener("click", function(e) {
    if (!formBox.contains(e.target)) {
        fecharForm();
    }
});