var request=new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/lang/en?access_key=7ad856139d55b6ce1995e21300fbe51b');
request.send();
request.onload =function() {
var data=JSON.parse(this.response)

for (i=0;i<data.length;i++)
{
  console.log(data[i])
}
}