var array=['Cricket','Football','Vollyball','Basketball'];

var container=document.getElementById('container')
var list=document.createElement('ul');
list.id='list';
container.appendChild(list);
array.forEach(item =>{
  var li=document.createElement('li');
  li.className='list_item';
  li.innerText=item;
  list.appendChild(li);
})

var image_div=document.createElement('div');
image_div.id='image_container';
container.insertAdjacentElement("afterend",image_div);
array.forEach(item=>{
  var inner_div=document.createElement('div');
  inner_div.className='box';
  var p=document.createElement('p');
  p.className='text';
  p.innerText=`This is ${item}`;
  inner_div.appendChild(p);
  image_div.appendChild(inner_div);
})


var lists=document.querySelectorAll('li');
var item_array=Array.from(lists);
item_array.forEach(i =>{
    i.addEventListener('click',(e)=>{
        var txt=e.target.textContent.toLowerCase();
        filterItems(txt);
    })
})

function filterItems(inputtxt){
    var search= document.querySelectorAll('.text');
    var search_array= Array.from(search);
    search_array.forEach((i)=>{
        var search_txt=i.textContent.toLocaleLowerCase();
        if(search_txt.includes(inputtxt)){
            i.parentNode.style.display='block'
        }
        else{
            i.parentNode.style.display='none'
        }
        // console.log(search_txt);
    })
    
}
