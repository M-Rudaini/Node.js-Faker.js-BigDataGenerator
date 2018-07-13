var fs = require('fs');
var faker = require('../../index');
var FileName = 'purchace1B.csv';
var RowCount = 10000000;
var i, UserId, Pr, PrName, UAmount, UPrice, TPrice;
var line;
var stream = fs.createWriteStream(FileName, {flags: 'a'});
	
var x = parseInt(process.argv[2]);

if (x == 0){
	line = 'Invoice_ID,User_ID,Product,Unit_Amount,Unit_Price\n';
	stream.write(line);
}

for ( i = (x*RowCount)+1; i <= (x+1)*RowCount; i++) {

		UserId = faker.random.number({min:1, max:1500000});
		Pr = faker.commerce.product();
		UAmount = faker.random.number({min:1, max:50});
		UPrice = faker.commerce.price();

		line = i+','+UserId+','+Pr+','+UAmount+','+UPrice+'\n';
	stream.write(line);
}



console.log(x, ': Data Created Successfully...\n');
