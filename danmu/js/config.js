const baseURL = "baidu.com";
var request = new XMLHttpRequest();
function getData() {
	let username = $("#username").val();
	let userpass = $("#password").val();
	console.log({username,userpass});
	request.open("POST",baseURL + "/post");
	let data = {
		'username': username,
		'userpass': userpass
	}
	request.send(JSON.stringify(data));
	request.onload = function(e){
		console.log("请求成功");
		console.log({e});
	}
	request.onerror = function(e){
		console.log("请求失败");
		console.log({e});
	}
}
