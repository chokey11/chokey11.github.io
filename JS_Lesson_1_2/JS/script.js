var n = prompt ("number", "33721")
var s = 1

while (n > 0)
{
 s *= n % 10
 n = Math.floor(n/10)
}

console.log("result: " + s);
alert (s*s*s);