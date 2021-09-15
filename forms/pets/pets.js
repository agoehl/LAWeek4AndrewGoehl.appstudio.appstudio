let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
console.log(`${petNames}`)

let withSal = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Sal']
console.log(`The third pet is named ${petNames[2]}`)

let lengthWithSal = withSal.length
console.log(`The array has ${lengthWithSal} names in it.`)

withSal.pop()
console.log(`After removal, there are ${withSal} in array.`)