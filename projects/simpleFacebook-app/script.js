var database=[
	{
		username:"Ann",
		password:"Ann123!"
	},
	{
		username:"Saly",
		password:"555"
	},
	{
		username:"bob",
		password:"boby"
	}

];

var newsFeed=[
	{
		username:"Boby",
		timeline:"Its ot a good day"
	},
	{
		username:"Sussy",
		timeline:"still running i hate this"
	},
];

var userNamePrompt=prompt("What's your username?");
var passwordPrompt=prompt("What's your password?");


function isUserValid(username,password){
	for (var i = 0; i<database.length;i++) {
		if(database[i].username=username&&
		database[i].password==password){
			return true;
		}
	}
	return false;
}

function signIn(username,password){
	
	if(isUserValid(username,password)){
		console.log(newsFeed);
	}else{
		alert("username or password it's incorrect!");
	}
}

signIn(userNamePrompt,passwordPrompt);