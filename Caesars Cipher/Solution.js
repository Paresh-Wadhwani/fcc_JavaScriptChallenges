function rot13(str)
{
	var lst = str.split("");
	var ilst = [];
	var klst = [];
	var i;

	for (i = 0; i < lst.length; i++)
	{
		var some = str.charCodeAt(i);
		ilst.push(some - 64);
	}
	
	for (i = 0; i < lst.length; i++)
	{
		if (ilst[i] <= 26 && ilst[i] > 0)
		{
			ilst[i] = ilst[i] - 13;
			if (ilst[i] < 1 && ilst[i] > -26)
			{
				ilst[i] = ilst[i] + 26;
			}
		}
	}
	for (i = 0; i < lst.lenght; i++)
	{
		ilst[i] = ilst[i] + 64;
	}
	for (i = 0; i < lst.length; i++)
	{
		klst.push(String.fromCharCode(ilst[i] + 64));
	}
	return klst.join("");
}
