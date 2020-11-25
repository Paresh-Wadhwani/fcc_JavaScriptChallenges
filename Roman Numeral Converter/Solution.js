function convertToRoman(num) {
	var a = num;
	var ans = "";
	var i;
	var n1000 = 0;

	n1000 = parseInt(a/1000);
	a = a%1000;

	for(i = 0; i < n1000; i++)
	{
		ans = ans + "M";
	}

	var n900 = 0;
	n900 = parseInt(a/900);
	a = a%900;

	if(n900 == 1)
		ans = ans + "CM";

	var n500 = 0;
	n500 = parseInt(a/500);
	a = a%500;

	if(n500 == 1)
		ans = ans + "D";

	var n400 = 0;
	n400 = parseInt(a/400);
	a = a%400;

	if(n400 == 1)
		ans = ans + "CD";

	var n100 = 0;
	n100 = parseInt(a/100);
	a = a%100;

	for(i = 0; i < n100; i++)
	{
		ans = ans + "C";
	}

	var n90 = 0;
	n90 = parseInt(a/90);
	a = a%90;

	if(n90 == 1)
		ans = ans + "XC";

	var n50 = 0;
	n50 = parseInt(a/50);
	a = a%50;

	if(n50 == 1)
		ans = ans + "L";

	var n40 = 0;
	n40 = parseInt(a/40);
	a = a%40;

	if(n40 == 1)
		ans = ans + "XL";

	var n10 = 0;
	n10 = parseInt(a/10);
	a = a%10;

	for(i = 0; i < n10; i++)
	{
		ans = ans + "X";
	}

	var n9 = 0;
	n9 = parseInt(a/9);
	a = a%9;

	if(n9 == 1)
		ans = ans + "IX";

	var n5 = 0;
	n5 = parseInt(a/5);
	a = a%5;

	if(n5 == 1)
		ans = ans + "V";

	var n4 = 0;
	n4 = parseInt(a/4);
	a = a%4;

	if(n4 == 1)
		ans = ans + "IV";

	var n1 = 0;
	n1 = parseInt(a/1);
	a = a%1;
	
	for(i = 0; i < n1; i++)
	{
		ans = ans + "I";
	}
	return ans;
}
