var inputs = document.getElementsByTagName('input');
for(var i = 0, len = inputs.length; i < len; i++) {
    var input = inputs[i];
    if (input.type == "password"){
		input.type ="text";
	}
}