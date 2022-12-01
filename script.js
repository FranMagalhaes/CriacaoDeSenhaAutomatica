    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuVwxyz';
    const digits = '013456789';
    const symbols = '!@#$%¨&*()_+{}[]`´^~;.,/?';


    function randnumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function gerarSenha() {
            
        let elementoNovaSenha = document.querySelector('#novasenha');
        let elementoOptions = document.querySelectorAll('input[type=checkbox]:checked');
        let elementoErro = document.querySelector('#erro');
    
         if (elementoOptions.length === 0) {
            elementoErro.innerHTML = 'selecione uma das opções para uma senha mais segura!';
            elementoErro.style.display = 'block';
            return;
            }else {
            elementoErro.innerHTML = '';
            elementoErro.style.display = 'none';    
    }
    
        let caracteres = '';


        elementoOptions.forEach(elemento => {
        let options = elemento.value;

        if (options === 'uppercase') {
            caracteres = caracteres + uppercase;
        }

       if (options === 'lowercase') {
           caracteres = caracteres + lowercase;
       }

       if (options === 'digits') {
            caracteres = caracteres + digits;
        }

        if (options === 'symbols') {
            caracteres = caracteres + symbols;
        }

    });


        let passlength = 20;
        let totalChar = caracteres.length; 
       
    
        let newPassword = '';

        for (let index = 0;index < passlength; index ++) {
            let key = randnumber (0, totalChar - 1);
            newPassword = newPassword + caracteres[key];
    }

        elementoNovaSenha.value = newPassword
    
        console.log(totalChar);
}
