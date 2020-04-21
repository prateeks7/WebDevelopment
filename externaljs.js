function f1()
{
	var firstn= document.getElementById("firstname").value
	var rex1= /^[a-zA-Z\s\'\-]{2,15}$/;
	
    if(rex1.test(firstn))
	{document.getElementById("firstnamePrompt").style.color = "green";
	 document.getElementById("firstnamePrompt").innerHTML = "<strong>valid</strong>";
	 return true;}
	
	else 
    {document.getElementById("firstnamePrompt").style.color = "red";
	 document.getElementById("firstnamePrompt").innerHTML = "<strong>Enter 2-15 letters</strong>";
	 return false;}
}
function f2()
{
	var lastn= document.getElementById("lastname").value
	var rex2= /^[a-zA-Z\s\'\-]{2,15}$/;
	
    if(rex2.test(lastn))
	{document.getElementById("lastnamePrompt").style.color = "green";
	 document.getElementById("lastnamePrompt").innerHTML = "<strong>valid</strong>";
	 return true;}
	
	else 
    {document.getElementById("lastnamePrompt").style.color = "red";
	 document.getElementById("lastnamePrompt").innerHTML = "<strong>Enter 2-15 letters</strong>";
	 return false;}
}
function f3()
{
	var phonen= document.getElementById("phonenumber").value;
	var rex3= /^\d{3}-\d{3}-\d{4}$/;
	
    if(rex3.test(phonen))
	{document.getElementById("phonenumberPrompt").style.color = "green";
	 document.getElementById("phonenumberPrompt").innerHTML = "<strong>valid</strong>";
	 return (true);}
	
	else 
    {document.getElementById("phonenumberPrompt").style.color = "red";
	 document.getElementById("phonenumberPrompt").innerHTML = "<strong>Please use xxx-xxx-xxxx format</strong>";
	 return (false);}
}
function calOrder()
{
    var firstn = document.getElementById("firstname").value;
	var lastn = document.getElementById("lastname").value;
	var userName = firstn + " " + lastn;
	var phoneN = document.getElementById("phonenumber").value;
	var quantity = document.getElementById("quantity").value;
	var price = document.getElementById("price").value;
	
	document.getElementById("orderConfirm").innerHTML ="<h2>Order Summary:</h2>";
	document.getElementById("orderConfirm").innerHTML += userName + "<br>" + phoneN;
    document.getElementById("orderConfirm").innerHTML += "<p>Order Total: $" + (quantity * price) + "</p>";


}	