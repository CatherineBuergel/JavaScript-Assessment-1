//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me['name'] = 'Catherine Buergel'
me.age = 26
me['hair color'] = 'blonde/brown'


//2. Iterate over the object to console.log the propery or key names. 

for (const key in me) {
	console.log(me[key])
}