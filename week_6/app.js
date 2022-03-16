
var array = ["bob", "joe", "frank", "lane", "jane", "bane", "rain", "chance", "tristen", "logan"]

console.log(array)

array[0] = "jake"
array[1] = "jim"
array[2] = "jaclen"

console.log(array)

console.log(array.sort())

console.log(array.length)

console.log(array.toString())


console.log("-----------------------------")

//<------------------------->
var l = ["pencil", "pen", "paper", "desk", "backpack", "lunch", "sizzors", "glue", "colors", "markers"];

console.log(l)

l.pop()

console.log(l)

l.shift()

console.log(l)

l.push("computer")

console.log(l)

l.unshift("headphones")

console.log(l)



//<------------------------->


console.log("-----------------------------")

var l = []; 

console.log(l)
for ( var i = 1; i < 11; i++){
    l.push(i)
    console.log(l)
}
console.log(l)


for (var i = 0; i < 10; i ++){
    l[i]= "hello"; 
    console.log(l)
}


for (var i = 1; i < 11; i ++){
    console.log(l)
    l.pop();

}

console.log(l)