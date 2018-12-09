// Adam Dressel - Ceasar cipher code
function caesar() {
  var input = document.getElementById("decrypt").value;
  var char; // Counter variable
  var text = "";
  // This loop ensures that each character in the input gets encrypted, up to 500 characters. 
  for(char = 0; char < 500; char++){
    if(input.charCodeAt(char) >= 32 && input.charCodeAt(char) <= 64) {
      var convert = input.charCodeAt(char);//convert takes the character at each char                                            count
       }
    else if(input.charCodeAt(char) >= 91 && input.charCodeAt(char) <= 96) {
      var convert = input.charCodeAt(char);    
       }
    else if(input.charCodeAt(char) >= 123){
      var convert = input.charCodeAt(char);        
            }
    else{
      var convert = input.charCodeAt(char) + 3;     
       }
    text += String.fromCharCode(convert);//changes convert from an integer to it's string value.
    document.getElementById("cipher").innerHTML = text;
  }

}