function theme1(){
  var theme = document.getElementById('css');  
  theme.setAttribute('href', 'theme1.css');
}

function theme2(){
  var theme = document.getElementById('css');  
  theme.setAttribute('href', 'theme2.css');
}

function theme3(){
  var theme = document.getElementById('css');  
  theme.setAttribute('href', 'theme3.css');
}

var result="";
function insert(num)   
{  
  document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + num;  
  result = result + num;
}  

function reset(){
  result="";
  document.getElementById("screen").innerHTML = result;
}

function deleteLast(){
  result = result.slice(0, -1); 
  document.getElementById("screen").innerHTML = result;
}

function history(num){
  var his =  document.getElementById("history").innerHTML +"<br>"+ num;
  document.getElementById("history").innerHTML = his;
}

function equal(){
  if(result)  
  {  
    document.getElementById("screen").innerHTML = eval(result);  
    var res = result + " = " + eval(result);
    history(res);     
  }
}  
 