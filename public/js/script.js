// Drum Arrays
let kicks = Array(16).fill(false); 
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);


function toggleDrum (arrayName, index) {
     
     switch (arrayName) {
	     case 'kicks':
		     kicks[index] === false ? kicks[index] = true : kicks[index] = false;
		     console.log(`Kicks ${kicks[index]}`);
		     break;
	     case 'snares':
		     snares[index] === false ? snares[index] = true : snares[index] = false;
		     console.log(`Snares ${snares[index]}`);
		     break;
	     case 'hiHats':
		     hiHats[index] === false ? hiHats[index] = true : hiHats[index] = false;
		     console.log(`hiHats ${hiHats[index]}`);
		     break;
	     case 'rideCymbals':
		     rideCymbals[index] === false ? rideCymbals[index] = true : rideCymbals[index] = false;
		     console.log(`RC ${rideCymbals[index]}`);
		     break;
	     default:
                    if(arrayName === undefined && index === undefined) return null;
     }  
}
