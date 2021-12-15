function arr_elements(a)
{
    var b=[];
    for (i=0;i<a.length;i++)
    {
       b[i]=a[i].toUpperCase()
    }
    return b;
   }
 
 
 console.log(arr_elements(["ab","bc","mn"]));