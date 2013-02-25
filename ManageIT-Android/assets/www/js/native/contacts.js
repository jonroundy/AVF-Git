document.addEventListener("deviceready", onDeviceReady, false);
//alert("contacts");


function onDeviceReady()
{
	document.getElementById('btnSave').addEventListener('click', saveContact, false);
	alert("device ready");
}

function saveContact()
{
	var fullName = document.getElementById("first").value + " " + document.getElementById("last").value;
	var note = document.getElementById("note").value;
	
	var contact = navigator.contacts.create({"displayName" : fullName});
	contact.note = note;
	
	contact.save();
	alert("Contact Saved");
}
