const urlmarca = 'https://parallelum.com.br/fipe/api/v1/carros/marcas'

const uf = document.getElementById("uf")
const modelo = document.getElementById("modelo")

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

window.addEventListener("load", async () =>{
    const result = await fetch(urlmarca, requestOptions)
    const response  = await result.json()
    response.forEach((marca) => {
        uf.innerHTML += `<option value = ${marca['codigo']}>`+ marca["nome"] + '</option>'
    });
})

uf.addEventListener("change", async () => {
    const urlmodelo = "https://parallelum.com.br/fipe/api/v1/carros/marcas/"+ uf.value +"/modelos"
    const result = await fetch(urlmodelo, requestOptions)
    const response = await result.json()
    let op = ''
    response["modelos"].forEach((tipo) => {
        op += "<option>"+ tipo["nome"] + '</option>'
    });

    modelo.innerHTML =  op
})