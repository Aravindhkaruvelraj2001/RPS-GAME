function main ()
{
let rockbutton=document.querySelector('#rock-button');

let paperbutton=document.querySelector('#paper-button');

let scissorbutton=document.querySelector('#scissor-button');

let user=document.querySelector('.user_image');

let userresult=document.querySelector('.user_score_span');

let botresult=document.querySelector('.bot_score_span');

let bot=document.querySelector('.bot_image');

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
	user.src='./rock.jpg'
  	result();

});	

paperbutton.addEventListener('click',(e)=>{
	botbalaji();
	userinput=document.querySelector('.fa-hand-paper');
	userweapon=document.querySelector('.fa-hand-scissors');
	user.src='./paper.jpg'
  	result();
});	


scissorbutton.addEventListener('click',(e)=>{
	botbalaji();
	userinput=document.querySelector('.fa-hand-scissors')
	userweapon=document.querySelector('.fa-hand-rock');
	user.src='./scissor.jpg'
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
  		bot.src='./rock.jpg'
	}
	else if(botchoosebutton===paperbutton)
	{
		botinput=document.querySelector('.fa-hand-paper');
	    botweapon=document.querySelector('.fa-hand-scissors');
		bot.src='./paper.jpg'
	}
	else
	{
		botinput=document.querySelector('.fa-hand-scissors')
		botweapon=document.querySelector('.fa-hand-rock');
		bot.src='./scissor.jpg'
	}
}
 
let usersum,botsum;
usersum=0;
botsum=0;


function result()
{
    if(userweapon===botinput)
	{
		userresult.innerText=usersum;
		botresult.innerText=++botsum;
	}
	else if(userinput===botweapon)
	{
		userresult.innerText=++usersum;
		botresult.innerText=botsum;
	}
	else
	{
		userresult.innerText=usersum;
		botresult.innerText=botsum;
	}
}

}

window.onload=main;
