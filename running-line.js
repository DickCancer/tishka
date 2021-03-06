const contentElem = document.getElementById('running-line-content')
const containerElem = document.querySelector('#running-line-container')

document.getElementById("running-line-content").style.position = "relative";
document.querySelector('#running-line-container').style.overflow = "hidden";

function logger(stringToLog) {
	console.log(new Date +': '+(stringToLog || 'default value')) 
}

function startRunningLine() {
	
	if (containerElem.classList.contains('direction-left')) {
		updatePosition('left', -contentElem.offsetWidth)
	}
	if (containerElem.classList.contains('direction-right')) {
		updatePosition('right', containerElem.offsetWidth) 
	}
	if (containerElem.classList.contains('direction-up')) {
		
		updatePosition('up', -contentElem.offsetHeight)
	}
	if (containerElem.classList.contains('direction-down')) {
		updatePosition('down', containerElem.offsetHeight) 
	}
}

function updatePosition(direction, position) {
	const speed = 1
	let newPosition 
	
	setTimeout(function (){
		
	if(direction == 'left' || direction == 'right') {	
	contentElem.style.left = position + 'px'
	}
	
	if(direction == 'up' || direction == 'down') {	
	contentElem.style.top = position + 'px'
	}
	
	switch(direction) {
		case 'right': 
			newPosition = position + speed
		
			if (newPosition < containerElem.offsetWidth) {
				updatePosition(direction, newPosition)
			} 
			else {
				updatePosition(direction, -contentElem.offsetWidth)
			}
		break

	
		case 'left':
			newPosition = position - speed
			if (newPosition > -contentElem.offsetWidth) {
				updatePosition(direction, newPosition)
			} 
			else {
				updatePosition(direction, containerElem.offsetWidth)
			}
		break	
	
		
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

startRunningLine()



logger('done')