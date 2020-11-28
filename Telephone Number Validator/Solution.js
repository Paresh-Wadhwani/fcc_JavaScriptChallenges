function telephoneCheck(str) {
	if (str.split("").reverse()[0] == ")" || str.split("")[0] == "-")
	{
		return false;
	}

	var bracleft = str.split("(").length;
	var bracright = str.split(")").length;

	if ( bracleft != bracright)
	{
		return false;
	}

	str = str.split("(").join("");
	str = str.split(")").join("");
	str = str.split("-").join("");
	str = str.split(" ").join("");

	if (str.length == 11)
	{
		return str.split("")[0] == "1"
	}
	else
	{
		return str.length == 10;
	}
}
