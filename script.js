//your code here!
let totalList=10;
let list=document.getElementById("infi-list")
window.addEventListener('load',()=>{
    for(let i=1;i<=totalList;i++){
        let li=document.createElement('li');
        li.innerText=`Item ${i}`;
        list.append(li);
        }
});
list.addEventListener("scroll",()=>{
    for(let i=0;i<=2;i++){
        let li=document.createElement('li');
        li.innerText=`Item ${++totalList}`;
        list.append(li);
        }   
})