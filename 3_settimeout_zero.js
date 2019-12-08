console.log("--> 1")

setTimeout(() => {
  console.log("--> 2")
}, 0)

let i = 5000000000
while(i) {
  i--
}

console.log("--> 3")
