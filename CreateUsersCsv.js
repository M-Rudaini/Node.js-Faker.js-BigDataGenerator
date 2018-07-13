var fs = require('fs');
var faker = require('../../index');
var FileName = 't.csv'
var RowCount = 50000;
var i, dop, firstName, lastName;
var line;
var stream = fs.createWriteStream(FileName, {flags: 'w'});
for ( i = 0; i <= RowCount; i++) {
	if(i == 0){
		line = 'User_ID,First_Name,Last_name,DOP,Address,City,State_Abbr,Zip_Code,Country,Phone_Number,User_Name,Password,Email\n';
	} else{
		dob = faker.date.past(50, new Date('Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)'));
		dob = dob.getFullYear() + '-' + (dob.getMonth()+1) + '-' + dob.getDate();  // First month is '1'
		firstName = faker.name.firstName();
		lastName = faker.name.lastName();
		line = i+','+firstName+','+lastName+','+dob+','+faker.address.streetAddress()+','+faker.address.city()+','+faker.address.stateAbbr()+','+faker.address.zipCode()+','+faker.locales[faker.locale].address.default_country+','+faker.phone.phoneNumber()+','+faker.internet.userName(firstName, lastName)+','+faker.internet.password()+','+faker.internet.email(firstName, lastName)+'\n';
	}
		stream.write(line);
}
console.log('File Created Successfully\n');
