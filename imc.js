
const calculo = document.getElementById('btn-calculo');
const limpar = document.getElementById('limpar') 

function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value; 
    const resultado = document.getElementById('resultado');   

    if (nome != '' && peso != '' && altura != '') {
        
        const valorImc = (peso / (altura*altura)).toFixed(1); // calculo
         
        let termos ='';
        
        if(valorImc < 18.5) {
            termos = 'Abaixo do peso.';
        }else if (valorImc < 25){
            termos = 'Dentro do peso ideal.';
        }else {
            termos = 'Acima do peso.';
        }
        resultado.textContent = `${nome} seu indice de massa corporal é ${valorImc}, você está ${termos}`;
    }
    
}



function apagar() {
    resultado.textContent= "";
    nome.value="";
    altura.value="";
    peso.value="";
}
calculo.addEventListener('click', imc);  //chamei a função do calculo
limpar.addEventListener('click', apagar); //e para apagar os campos


