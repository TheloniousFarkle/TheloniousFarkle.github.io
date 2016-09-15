function straptogether(str1,str2){
	var result = str1 + str2;
	return result;
}
var myHeading = document.querySelector('h1');
myHeading.textContent = straptogether('Hello ','Assholes!');

var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/scoots.png'){
		myImage.setAttribute('src','images/moo.png');
		alert('I am a dog, bitch!');
	}else {
		myImage.setAttribute('src','images/scoots.png');
		alert('RUB MAH TUMMEH!');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
  var myName = prompt('Please enter your name.');
  if(!myName.endsWith('y')){myName = myName + 'y';}
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hey, ' + myName + ' McPoopFace';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  if(!storedName.endsWith('y')){storedName = storedName + 'y';}
  myHeading.textContent = 'Hey, ' + storedName + ' McPoopFace';
}
myButton.onclick = function(){
	setUserName();
}