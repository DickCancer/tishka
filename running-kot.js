const contentElem = document.getElementById('running-line-content')
const containerElem = document.querySelector('#running-line-container')

document.getElementById("running-line-content").style.position = "relative";
document.querySelector('#running-line-container').style.overflow = "hidden";

function logger(stringToLog) {
	console.log(new Date +': '+(stringToLog || 'default value')) 
}

function startRunningKot() {
	
	if (containerElem.classList.contains('direction-up')) {
		
		updatePosition('up', -contentElem.offsetHeight)
	}
	if (containerElem.classList.contains('direction-down')) {
		updatePosition('down', containerElem.offsetHeight) 
	}
}

function updatePosition(direction, position) {
	const speed = 5
	let newPosition 
	
	setTimeout(function (){
		
	contentElem.style.top = position + 'px'
	
	switch(direction) {
		case 'down': 
			newPosition = position + speed
		
			if (newPosition < containerElem.offsetHeight) {
				updatePosition(direction, newPosition)
			} 
			else {
				updatePosition(direction, -contentElem.offsetHeight)
			}
		break

	
		case 'up':
			newPosition = position - speed
			if (newPosition > -contentElem.offsetHeight) {
				updatePosition(direction, newPosition)
			} 
			else {
				updatePosition(direction, containerElem.offsetHeight)
			}
		break	
	}
	
	}, 4)

}

startRunningKot()



logger('done')