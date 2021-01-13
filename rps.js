function main ()
{
let rockbutton=document.querySelector('#rock-button');

let paperbutton=document.querySelector('#paper-button');

let scissorbutton=document.querySelector('#scissor-button');

let user=document.querySelector('.user');

let userresult=document.querySelector('.userresult');

let botresult=document.querySelector('.botresult');

let bot=document.querySelector('.bot');

var userinput,userweapon,botinput,botweapon;

let arrobject=[
	{
		name:"#rock-button",
		defeat:"#paper-button"
	},
	{
		name:"#paper-button",
		defeat:"#scissor-button"
	},
	{
		name:"#scissor-button",
		defeat:"#rock-button"
	}];

rockbutton.addEventListener('click',(e)=>{
	botbalaji();
    userinput=document.querySelector('.fa-hand-rock');
    userweapon=document.querySelector('.fa-hand-paper');
  	let newicon=document.createElement('i');
  	newicon.classList.add('far');
  	newicon.classList.add('fa-hand-rock');
  	newicon.style.color='white';
  	user.appendChild(newicon);
  	result();

});	

paperbutton.addEventListener('click',(e)=>{
	botbalaji();
	userinput=document.querySelector('.fa-hand-paper');
	userweapon=document.querySelector('.fa-hand-scissors');
  	let newicon=document.createElement('i');
  	newicon.classList.add('far');
  	newicon.classList.add('fa-hand-paper');
  	newicon.style.color='white';
  	user.appendChild(newicon);
  	result();
});	


scissorbutton.addEventListener('click',(e)=>{
	botbalaji();
	userinput=document.querySelector('.fa-hand-scissors')
	userweapon=document.querySelector('.fa-hand-rock');
  	let newicon=document.createElement('i');
  	newicon.classList.add('far');
  	newicon.classList.add('fa-hand-scissors');
  	newicon.style.color='white';
  	user.appendChild(newicon);
  	result();
});	


function botbalaji()
{
	let index=Math.floor(Math.random()*3);
	//console.log(index);
	var find=arrobject[index];
	//console.log(find.name);
	let botchoosebutton=document.querySelector(find.name);
	//console.log(botchoosebutton);
	if(botchoosebutton===rockbutton)
	{
		botinput=document.querySelector('.fa-hand-rock');
	    botweapon=document.querySelector('.fa-hand-paper');
		let newicon=document.createElement('i');
  		newicon.classList.add('far');
  		newicon.classList.add('fa-hand-rock');
  		newicon.style.color='white';
  		bot.appendChild(newicon);
	}
	else if(botchoosebutton===paperbutton)
	{
		botinput=document.querySelector('.fa-hand-paper');
	    botweapon=document.querySelector('.fa-hand-scissors');
		let newicon=document.createElement('i');
  		newicon.classList.add('far');
  		newicon.classList.add('fa-hand-paper');
  		newicon.style.color='white';
  		bot.appendChild(newicon);
	}
	else
	{
		botinput=document.querySelector('.fa-hand-scissors')
		botweapon=document.querySelector('.fa-hand-rock');
		let newicon=document.createElement('i');
  		newicon.classList.add('far');
  		newicon.classList.add('fa-hand-scissors');
  		newicon.style.color='white';
  		bot.appendChild(newicon);
	}
}
 
let usersum,botsum;
usersum=0;
botsum=0;


function result()
{
    if(userweapon===botinput)
	{
		userresult.innerHTML+='<h5>'+usersum+'</h5>';
		botresult.innerHTML+='<h5>'+(++botsum)+'</h5>';
	}
	else if(userinput===botweapon)
	{
		userresult.innerHTML+='<h5>'+(++usersum)+'</h5>';
		botresult.innerHTML+='<h5>'+botsum+'</h5>';
	}
	else
	{
		userresult.innerHTML+='<h5>'+usersum+'</h5>';
		botresult.innerHTML+='<h5>'+botsum+'</h5>';
	}
}

}

window.onload=main;
