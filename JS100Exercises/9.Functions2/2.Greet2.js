function greet(greeting = "Hello", name = "world") {
  console.log(greeting + ", " + name + "!");
}

greet(); // logs: Hello, world!
greet("Salutations"); // logs: Salutations, world!
greet("Good morning", "Launch School"); // logs: Good morning, Launch School!
