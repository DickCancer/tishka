const gateway = document.getElementById('test')
console.log(gateway)
gateway.classList.add('portal')

const x = sayText ('Tihon')

// const square = function (x, y){
	// // console.log(text) 
	// return x*y 
// }

const square = (x, y) => {
		// console.log(text) 
	return x*y 
}

const y = square(5, 6)

let Tihon = {
	name: 'Tihon',
	type: 'pidor',
	inventory: 	{
		head: 1,
		legs: 4
	},
	foodPrefer: [
		'fish',
		'milk'	
	],
	
	say: function(text){
		const gateway = document.getElementById('test');
		gateway.innerText = text; 
			}
}


let tihonInventory = Tihon.inventory.head + Tihon.inventory.legs
console.log(tihonInventory, Tihon.foodPrefer.length)

function sayText(text){
	const gateway = document.getElementById('test');
	let resultText = text
	if (!text){
		resultText = 'nothing to say'
		console.log(resultText)	
	
	} 

	if (text && text.length < 5){
		console.log('ti durak?')
		return 'ti durak?'	
	}
	const finalText = 'text to say: '
	gateway.innerText = resultText; 
	return finalText+text
} 

function getEvent(event) {
	console.log(event)
	return event
} 








