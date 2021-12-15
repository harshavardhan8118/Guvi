function arr_elements(a)
{
   var b=0;
   for (i=0;i<a.length;i++)
   {
      b=b+a[i]
   }
   return b;
  }
  
  console.log(arr_elements([1,5,6,7,9,8]));