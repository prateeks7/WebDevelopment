/* Prompt If User Do Not Enter Any Input */
function f1()
{
	var first = document.getElementById("firstname").value
	if(first == 0)
	{
		document.getElementById("fn").style.color = "red";
		document.getElementById("fn").innerHTML = "Please Enter Your Name";
	}
	else
	{
		document.getElementById("fn").style.color="green";
		document.getElementById("fn").innerHTML = "Hi " + first;
	}
}	
/*Prompt for invalid Phone Number */
function f2()
{
	var numbers = document.getElementById("contact").value
	if(numbers.length < 10)
	{
		document.getElementById("no").style.color="red";
		document.getElementById("no").innerHTML="Invalid Number";
	}
	else
	{
		document.getElementById("no").style.color="green";
		document.getElementById("no").innerHTML = "Valid";
	}
}
/* Order Summary*/
function f3()
{
	var first = document.getElementById("firstname").value;
	var last = document.getElementById("lastname").value;
	var add = document.getElementById("address").value
	var userName = first + " " + last;
	var numbers = document.getElementById("contact").value;
	var quan = document.getElementById("quantity").value;
	var Rs = document.getElementById("price").value;
	
	document.getElementById("summary").style.color = "white";
	document.getElementById("summary").innerHTML = "<h2>Order Recieved</h2>";
	document.getElementById("summary").innerHTML += userName + "<br>" +"Address: "+ add +"<br>" +"Contact No: " + numbers ;
	document.getElementById("summary").innerHTML += "<p> Order Total: " + (quan * Rs) + "</p>";
}
/* Prompt If User Do Not Enter Any Input */
function f4()
{
	var last = document.getElementById("lastname").value
	if(last == 0)
	{
		document.getElementById("req").style.color = "red";
		document.getElementById("req").innerHTML = "Please Enter Your Last Name";
	}
	
}
/* Prompt If User Do Not Enter Any Input */
function f5()
{
	var add = document.getElementById("address").value
	if(add == 0)
	{
		document.getElementById("req2").style.color = "red";
		document.getElementById("req2").innerHTML = "Please Enter Your Address";
	}
	
}