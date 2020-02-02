function sayHello(name, age){
    s = `Hello! ${name}. you are ${age} years old.`
    return s;
}

const greeting = sayHello("Jiwon",27);
console.log(greeting);

const calculator = {
    plus : function(a,b){
        return a+b;
    }
}

sum = calculator.plus(5,5);
console.log(sum);