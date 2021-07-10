const classnames = ["austin", "eric", "julia", "vivek", "christopher", "mike", "scott"]
	
const print = arr => {
	for (i = (classnames.length - 2); i>= 0; i-=2) {
		console.log(classnames[i]);
	}
}

print(classnames);