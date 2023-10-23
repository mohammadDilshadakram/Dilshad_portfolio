var typed=new Typed(".text",{
    strings:["Frontend developer","Content writer","Freelancer","Learner"],
    typeSpeed:100,
    backspeed:100,
    backDelay:1000,
    loop:true
})



function showSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='flex'
}

function hideSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='none'
}