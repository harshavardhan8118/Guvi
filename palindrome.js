var a = ['123','harsha','vardh','haan','1234']
function palin(a) 
{
    var b;
    var c = [];
    var d;
    for (var i=0;i<a.length;i++) 
    {
            b = a[i];
            d = a[i].split("").reverse().join("");
            if (b === d) 
            {
                c.push(a[i]);
            }
    } 
    
    return c;
}
console.log(palin(a));