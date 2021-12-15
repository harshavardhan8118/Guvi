function arr_elements(a)
{
    var temp=[];
    temp.push(a[0])
    for (i=1;i<a.length;i++)
    {
        var result=0;
        for(j=0;j<i;j++)
        {
            if(a[i]==a[j])
            result=result+1;
    }
    if(result ===0)
    temp.push(a[i]);
    }
    
    return temp;
}  
console.log(arr_elements([1,2,3,1,2]));