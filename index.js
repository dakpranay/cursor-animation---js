let cursor=document.querySelector('.cursor')
var timeout;
//cursor movement
document.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y=e.pageY;
    cursor.style.top=y+'px';
    cursor.style.left=x+'px';
    cursor.style.display='block';

    setTimeout(mouseStopped,10000);
    function mouseStopped(){
        cursor.style.display='none';
    }
    document.addEventListener('mouseout',()=>{
        cursor.style.display='none';
    })

})