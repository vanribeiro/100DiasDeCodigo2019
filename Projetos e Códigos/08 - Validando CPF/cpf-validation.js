let cpf = document.querySelector("#cpf_field");
let validationForm = document.querySelector('#validation-form');


validationForm.onsubmit = (e) =>{

    e.preventDefault();
    
    let cpfLength = cpf.value.length;

    if(cpfLength > 11){
        cpf.style.borderColor = "#882b2b";
        cpf.style.backgroundColor = "#e19c9c";
        cpf.style.color = "#882b2b";
    } else{
        cpf.style.borderColor = "#444444";
        
    }
    
    console.log(cpfLength);
    return cpf;
}