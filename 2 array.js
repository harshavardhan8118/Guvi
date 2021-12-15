function arr(a,b){
    
    for (i=0;i<b.length;i++)
    {
        a.push(b[i])
    }
    mid=a.length/2-1
    return (a[mid]+a[mid+1])/2
    }
    
    console.log(arr([1,2,3,4,5],[6,7,8,9,10]));