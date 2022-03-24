const form = document.querySelector("form")

// salvar informações locais
form.addEventListener("submit", ev => {
    ev.preventDefault()
    localStorage.setItem("casado", form.casado.checked)
    localStorage.setItem("idade", form.idade.value)
    localStorage.setItem("cidade", form.cidade.value)
    alert("Salvou!")
})

// ler informações locais

const casado = localStorage.getItem("casado") ?? "false"
const idade = localStorage.getItem("idade") ?? 35
const cidade = localStorage.getItem("cidade") ?? "Umuarama"

// adicionar informações nos inputs
form.casado.checked = (casado === "true")
form.idade.value = idade
form.cidade.value = cidade