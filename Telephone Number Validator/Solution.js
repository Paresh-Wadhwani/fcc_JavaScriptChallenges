function telephoneCheck(str) {
	if (str.split("").reverse()[0] == ")" || str.split("")[0] == "-")
		return false;

	var bracleft = str.split("(").length;
	var bracright = str.split(")").length;

	if( bracleft != bracright)
	{
		return false;
	}

	str = str.split("(").join("");
	str = str.split(")").join("");
	str = str.split("-").join("");
	str = str.split(" ").join("");

	if(str.length == 11)
	{
		if(str.split("")[0] == "1")
			return true;
		return false;
	}
	else if(str.length == 10)
	{
		return true;
	}
	else
		return false;
}