function getPerson(person) {
  try {
    if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
      throw new Error("Invalid parameter type");
    }
    
    const { name, age } = person;
    return `Name: ${name}, Age: ${age}`;
  } catch (error) {
    return error.message;
  }
}

// Test cases
console.log(getPerson({ name: "Mithun", age: 20 }));  // Output: Name: Mithun, Age: 20
console.log(getPerson({ name: "Mithun" }));            // Output: "Invalid parameter type"
console.log(getPerson(["name", "Mithun"]));            // Output: "Invalid parameter type"
