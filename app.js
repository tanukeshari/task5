

var li= document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello';
li[1].style.fontWeight='bold';
li[1].style.background.color='green';

for(let i =0;i<li.length; i++)
{
    li[i].style.background="yellow";
    
}   