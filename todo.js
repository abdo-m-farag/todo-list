const input = document.getElementById('input');
const btn = document.getElementById('btn');
const ul = document.getElementById('ul');
const tasks = [];
function add(){

 if(input.value)
 {
    tasks.push(input.value);
    input.value='';
   render();
}}
 
function render(){
 ul.innerHTML='';
 for(let i =0 ;i<tasks.length;i++)
 { 
  let li =document.createElement('li');
  li.textContent=tasks[i];
  remove=document.createElement('button');
  remove.textContent="remove";
  edit=document.createElement('button');
  edit.textContent="edit";
  li.appendChild(remove)
  li.appendChild(edit)
  ul.appendChild(li)
  remove.id='remove'
  edit.id='edit'
  remove.onclick=function(){
   tasks.splice(i,1)
   render() 
  }
edit.onclick=function(){
 let ne = prompt("enter the edited task",tasks[i])
 tasks[i]=ne;
 render();

}
}



}
btn.onclick=add