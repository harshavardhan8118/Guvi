function arr(a,b){

    if(b>0)
    {
    for (i=1;i<=b;i++)
    {
     var last=a.shift();
     a.push(last)
    }  
    }
        return a;
    }
console.log(arr([1,2,3,4,5],3));