function clasificar(){

    let reporte = document.getElementById("reporte").value;
    let lugar = document.getElementById("lugar").value;
    let testigos = parseInt(
        document.getElementById("testigos").value
    );

    if(
        reporte === "" ||
        lugar === "" ||
        isNaN(testigos)
    ){
        alert("Complete todos los campos obligatorios");
        return;
    }

    let puntaje = 0;

    if(document.getElementById("video").value === "si"){
        puntaje += 3;
    }

    if(document.getElementById("imagen").value === "si"){
        puntaje += 2;
    }

    if(document.getElementById("radar").value === "si"){
        puntaje += 4;
    }

    if(testigos > 3){
        puntaje += 2;
    }

    if(document.getElementById("explicacion").value === "no"){
        puntaje += 3;
    }

    let resultado =
        document.getElementById("resultado");

    resultado.className = "";

    if(puntaje <= 4){

        resultado.textContent =
        "🟥 Evidencia Débil | Puntaje: " + puntaje;

        resultado.classList.add("debil");

    }
    else if(puntaje <= 8){

        resultado.textContent =
        "🟨 Evidencia Moderada | Puntaje: " + puntaje;

        resultado.classList.add("moderada");

    }
    else{

        resultado.textContent =
        "🟩 Evidencia Fuerte | Puntaje: " + puntaje;

        resultado.classList.add("fuerte");
    }
}