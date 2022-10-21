function date(){
  alert(Date());
}
function change(){
  document.getElementById('change').style.color='mediumpurple';
  document.getElementById('change').style.fontFamily='Chalkduster';
  document.getElementById('change').innerHTML='Kuromi appears similar to those of cartoon characters from the 1990 such as Pichu from Pokémon. Kuromi has become a popular character for the punk, scene, and goth crowds due to her appearance.'
}
function change2(){
  document.getElementById('change2').style.backgroundColor='floralwhite';
  document.getElementById('change2').style.fontFamily='Arial';
  document.getElementById('change2').style.textAlign='center';
}
function ftoc(){
var f=parseFloat(prompt())
var f1=(f-32)*5/9;
document.getElementById('temp').innerHTML=f1;
}
function sum(a,b){
var a=parseFloat(prompt('Enter one number please:'))
var b=parseFloat(prompt('Enter one number please:'))
var c=a+b
document.getElementById('sum').innerHTML=c;
}
function superise(){
  var firstname=prompt('Enter your firstname:');
  var lastname=prompt('Enter your lastname:');
  document.getElementById('superise').style.color='mediumpurple';
  document.getElementById('superise').style.backgroundColor='floralwhite';
  document.getElementById('superise').style.fontFamily='Chalkduster'
  document.getElementById('superise').innerHTML='Nice to meet you'+','+firstname+' '+lastname;
}
function showAlert() {
  alert ("See you next time(It's an alert box)");
}