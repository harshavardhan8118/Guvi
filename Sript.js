var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();
request.onload = function()
{
    console.log(this.response);
}
