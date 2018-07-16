$('#envoyer').on('click', function()
{
	var login= $('input[name=login]').val();
	console.log(login);
	var password= $('input[name=password]').val();
	console.log(password);
	
	$.ajax(
	{
		type: "POST",
		url: "/",
		data:
		{ 
			login : login,
			motdepasse : password 
		} 

	}).done(function(reponse) 
	{
		// console.log( "success" );
		alert(reponse)
		location.href="myaccount.html";


	}).fail(function() 
	{
		alert( reponse );
		// console.log( "error" );

	}).always(function() 
	{
		console.log( "complete" );
	});
});



















