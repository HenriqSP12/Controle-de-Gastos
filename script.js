const inputElement = document.getElementById('gasto');

inputElement.addEventListener('input',function() {
    let value = e.target.value.replace(/\D/g, "");

    value = value.replace(".", ",")

    value = value.replace(/(\d)(\d{3})(?!\d)/g, "$1.$2");

    e.target.value = value ? "R$ " + value : "";
});

function sendData(){
    const telephone = "5527999266559"
    const gasto = document.getElementById('gasto').value;
    const tipo_gasto = document.getElementById('tipo_gasto').value;
    const descricao = document.getElementById('descricao').value;

    if(!gasto || !tipo_gasto){
        alert("Preencha os campos obrigatórios!");
        return;
    }

    if(descricao.length === 0){
        console.log("Sem descrição");
        return;
    }

    const message = `Gasto HPterraplenagem: ${gasto}\nTipo de gasto: ${tipo_gasto}\nDescrição: ${descricao}`;
    const codifyMessage = encodeURIComponent(message);
    const url = `https://wa.me/${telephone}?text=${codifyMessage}`;
    window.open(url, '_blank');
}