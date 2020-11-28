var global = [];

let add12 = (str, amt) =>
{
	if(amt != 0)
		global.push([str, parseFloat(amt)])
}

let sufficient = (change, cid) =>
{
	var chi = change;
	let cidind = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];
	if(cidind< cid)
		return "less";
	else if (cidind == change)
	{
		return "equal"
	}
	else
	{
		let d100 = cid[8][1]/100;
		let c100 = parseInt(change/100);
		if(d100 > c100)
		{
			cid[8][1] = cid[8][1] - c100*100;
			change = change - c100*100;
			add12('ONE HUNDRED', c100*100)
		}
		else
		{
			cid[8][1] = 0;
			change = change - d100 * 100;
			add12('ONE HUNDRED', d100*100)
		}

		let d20 = cid[7][1]/20;
		let c20 = parseInt(change/20);

		if(d20 > c20)
		{
			cid[7][1] = cid[7][1] - c20*20;
			change = change - c20*20;
			add12('TWENTY', c20*20)
		}
		else
		{
			cid[7][1] = 0;
			change = change - d20 * 20;
			add12('TWENTY', d20 * 20)
		}

		let d10 = cid[6][1]/10;
		let c10 = parseInt(change/10);
		if(d10 > c10)
		{
			cid[6][1] = cid[6][1] - c10*10;
			change = change - c10*10;
			add12('TEN', c10*10);
		}
		else
		{
			cid[6][1] = 0;
			change = change - d10 * 10;
			add12('TEN', d10*10);
		}

		let d5 = cid[5][1]/5;
		let c5 = parseInt(change/5);
		if(d5 > c5)
		{
			cid[5][1] = cid[5][1] - c5*5;
			change = change - c5*5;
			add12('FIVE', c5*5);
		}
		else
		{
			cid[5][1] = 0;
			change = change - d5 * 5;
			add12('FIVE', d5*5);
		}

		let d1 = cid[4][1];
		let c1 = parseInt(change);
		if(d1 > c1)
		{
			cid[4][1] = cid[4][1] - c1;
			change = change - c1;
			add12('ONE', c1);
		}
		else
		{
			cid[4][1] = 0;
			change = change - d1;
			add12('ONE', d1);
		}

		let d025 = cid[3][1]*4;
		let c025 = parseInt(change*4);
		if(d025 > c025)
		{
			cid[3][1] = cid[3][1] - c025*4;
			change = change - c025/4;
			add12('QUARTER', c025/4);
		}
		else
		{
			cid[3][1] = 0;
			change = change - d025 / 4;
			add12('QUARTER', d025/4);
		}

		let d01 = cid[2][1]*10;
		let c01 = parseInt(change*10);

		if(d01 > c01)
		{
			cid[2][1] = cid[2][1] - c01*10;
			change = change - c01/10;
			add12('DIME', c01/10);
		}
		else
		{
			cid[2][1] = 0;
			change = change - d01/10;
			add12('DIME', d01/10);
		}

		let d005 = cid[1][1]*20;
		let c005 = parseInt(change*20);

		if(d005 > c005)
		{
			cid[1][1] = cid[1][1] - c005*20;
			change = change - c005/20;
			add12('NICKEL', c005/20);
		}
		else
		{
			cid[1][1] = 0;
			change = change - d005/20;
			add12('NICKEL', d005/20);
		}

		change = change.toFixed(2);

		let d001 = cid[0][1]*100;
		let c001 = parseInt(change*100);

		if(d001 > c001)
		{
			cid[1][1] = cid[1][1] - c001*100;
			var temp9 = c001/100;
			temp9 = temp9.toFixed(2);

			change = change - temp9;
			add12('PENNY', temp9);
		}
		else
		{
			cid[1][1] = 0;
			var temp99 = d001/20;
			temp99 = temp99.toFixed(2);
			change = change - temp99;
			add12('PENNY', temp99);
		}

		let final = cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1];

		if(change > 0)
		return 'nonexact';
		else
		{
			return 'more';
		}

	}
}

function checkCashRegister(price, cash, cid) {
	global = [];
	let status1 = sufficient(cash - price, cid);
	var change1;
	if(status1 == "less" || status1 == 'nonexact')
		change1 = {status: 'INSUFFICIENT_FUNDS', change: []};
	else if(status1 == "equal")
		change1 = {status: "CLOSED", change: cid}
	else
	{
		change1 = {status:"OPEN",change:global}
	}
	return change1;
}