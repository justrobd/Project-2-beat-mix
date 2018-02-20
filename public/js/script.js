// Drum Arrays
let kicks = Array(16).fill(false); 
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);


let indexCheck = (index) => index < 0 || index > 16; 


function toggleDrum (arrayName, index) {
     
    // if ( index < 0 || index > 16) return false; 
     if (indexCheck(index)) return false;
     switch (arrayName) {
	     case 'kicks':
		     kicks[index] === false ? kicks[index] = true : kicks[index] = false;
		     break;
	     case 'snares':
		     snares[index] === false ? snares[index] = true : snares[index] = false;
		     break;
	     case 'hiHats':
		     hiHats[index] === false ? hiHats[index] = true : hiHats[index] = false;
		     break;
	     case 'rideCymbals':
		     rideCymbals[index] === false ? rideCymbals[index] = true : rideCymbals[index] = false;
		     break;
	     default:
		     return null;
}

}


function clear (arrayName) {
     switch (arrayName) {
	     case 'kicks': 
		     kicks.fill(false);
		     break;
	     case 'snares':
		     snares.fill(false);
		     break;
	     case 'hiHats':
		     hiHats.fill(false);
		     break;
	     case 'rideCymbals':
		     rideCymbals.fill(false);
		     break;
	     default:
		     return null;
	}
}

function invert (arrayName) {
	switch(arrayName) {
	case 'kicks': 
		  
}

}
