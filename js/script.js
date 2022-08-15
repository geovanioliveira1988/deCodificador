//As "chaves" de criptografia que utilizaremos são:
//`A letra "e" é convertida para "enter"`
//`A letra "i" é convertida para "imes"`
//`A letra "a" é convertida para "ai"`
//`A letra "o" é convertida para "ober"`
//`A letra "u" é convertida para "ufat"`

//códigos que serão inseridos no lugar das vogais
let codigos = ["ai", "enter", "imes", "ober", "ufat"];

let vogais = ["a", "e", "i", "o", "u"];

//vetor armazenar o texto digitado pelo usuário
let msgDigitada = [];

//vetor com as palavras já codificadas
let msgCodificada = "";

//vetor com as palavras já decodificadas
let msgDecodificada = "";


function copiar() {
    let textoCopiado = document.getElementById("resultado");
    textoCopiado.select() ;   
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

//função utilizando busca no vetor para substituir as palavras
function codificar(){
    const textArea = document.querySelector(".divTextArea");
    const semMensagem = document.querySelector(".semMensagem");
    const section = document.querySelector(".section");
    //capturar mensagem digitada
    let msg = document.querySelector("#texto");

    //capturando a textarea onde será exibido o texto codificado
    let txtArea = document.querySelector("#resultado");   

    msgDigitada = (msg.value).toString();
    
    if (msgDigitada == ""){
        alert("É obrigado preencher o campo do texto.");
    } else {
        semMensagem.style.display = "none";
        textArea.style.display = 'block';
        
        
       
        for(let i=0; i<msgDigitada.length; i++){        
            if (msgDigitada[i] == "a"){
               msgCodificada = msgCodificada + codigos[0]; 
            } else if(msgDigitada[i] == "e"){          
                msgCodificada = msgCodificada + codigos[1]; 
            } else if(msgDigitada[i] == "i"){            
                msgCodificada = msgCodificada + codigos[2]; 
            } else if(msgDigitada[i] == "o"){            
                msgCodificada = msgCodificada + codigos[3]; 
            } else if(msgDigitada[i] == "u"){            
                msgCodificada = msgCodificada + codigos[4]; 
            }
            else {
               msgCodificada = msgCodificada+msgDigitada[i];
            }
        }
    }   
      
    txtArea.innerHTML= msgCodificada;
    msgCodificada = "";    
} 


//função utilizando REGEX e replace para substituir as palavras
function decodificar(){
    const textArea = document.querySelector(".divTextArea");
    const semMensagem = document.querySelector(".semMensagem");

    //capturar mensagem digitada
    let msg = document.querySelector("#texto");

    //capturar o valor da mensagem na variável texto
    let texto = msg.value.toString();  
     
    //capturando a textarea onde será exibido o texto codificado
    let txtArea = document.querySelector("#resultado");  
    
    

    if (texto == ""){
        alert("É obrigado preencher o campo do texto.");
     }else{
        semMensagem.style.display = "none";
        textArea.style.display = 'block';
        
        //verificar se alguma das palavras do VETOR CÓDIGO está contido na mensagem criptografada
        for (let i=0; i<codigos.length; i++){
        
        //declarar novo objeto REGEX para que possa utiliza-lo como variável no 1° parâmetro do REPLACE
        //conforme incrementa no contador, ele vai atribuindo no 1° parametro seu valor ref. a sua posição no vetor CODIGO 
        let regex = new RegExp(codigos[i],'g')
              
        if (msgDecodificada !== ""){
            texto = msgDecodificada;
        }
        
        //checagem de existe uma substring (VETOR CODIGO) dentro do texto digitado ou da mensagem que está sendo DECODIFICADA
        if (texto.indexOf(codigos[i]) > -1){ 
            
            //substitui o codigo pela letra informada no vetor vogais conforme sua posição/valor            
            msgDecodificada =  texto.replace(regex, vogais[i]);                  
        }        
     }
    }   

    txtArea.innerHTML= msgDecodificada;
    msgDecodificada = "";
}
