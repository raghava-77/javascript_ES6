let employee = { name: "raghava", email: "raghava@.com" };

let newEmployee = { NavigationPreloadManager:"reddy", ...employee, loc: "Banglaore" };
let newcustomer = { ...employee, ...employee, loc: "kadapa" };

console.log(employee);
console.log(newEmployee);
console.log(newcustomer);