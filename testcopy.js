const welcomeElem = document.getElementById('welcome')

function logger(stringToLog) {
	console.log(new Date +': '+(stringToLog || 'default value')) 
}

function updatePosition(delta = 1) {
	let newPosition = delta + 5
	welcomeElem.style.left = delta + 'px'
	setTimeout(function (){
		if (newPosition < 500) {
			updatePosition(newPosition)
	} else {
		updatePosition(-50)
	}
		
	}, 100)
//	welcomeElem.style.left = (delta || 50) + 'px'
}

updatePosition()

for(position=0; position < 20; position=position+1) {
	console.log(position) 
	}
logger('done')