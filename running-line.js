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
}

function updatePosition(direction, position) {
	
	let newPosition 
	
	setTimeout(function (){
		
	contentElem.style.left = position + 'px'
	
	switch(direction) {
		case 'right': 
			newPosition = position + 1
		
			if (newPosition < containerElem.offsetWidth) {
				updatePosition(direction, newPosition)
			} 
			else {
				updatePosition(direction, -contentElem.offsetWidth)
			}
		break

	
		case 'left':
			newPosition = position - 1
			if (newPosition > -contentElem.offsetWidth) {
				updatePosition(direction, newPosition)
			} 
			else {
				updatePosition(direction, containerElem.offsetWidth)
			}
		break	
	}
	
	}, 4)

}

startRunningLine()



logger('done')