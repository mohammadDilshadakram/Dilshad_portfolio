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





document.addEventListener('DOMContentLoaded', () => {
  const skullSection = document.querySelector('.skull');

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  skullSection.classList.add('animate-on-visit');
              } else {
                  skullSection.classList.remove('animate-on-visit');
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the section is visible
      }
  );

  if (skullSection) {
      observer.observe(skullSection);
  }
});






document.addEventListener('DOMContentLoaded', () => {
  const skullSection = document.querySelector('.contact');

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  skullSection.classList.add('animate-on-visit');
              } else {
                  skullSection.classList.remove('animate-on-visit');
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the section is visible
      }
  );

  if (skullSection) {
      observer.observe(skullSection);
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const skullSection = document.querySelector('.survices');

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  skullSection.classList.add('animate-on-visit');
              } else {
                  skullSection.classList.remove('animate-on-visit');
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the section is visible
      }
  );

  if (skullSection) {
      observer.observe(skullSection);
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const skullSection = document.querySelector('.about');

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  skullSection.classList.add('animate-on-visit');
              } else {
                  skullSection.classList.remove('animate-on-visit');
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the section is visible
      }
  );

  if (skullSection) {
      observer.observe(skullSection);
  }
});




document.addEventListener('DOMContentLoaded', () => {
  const skullSection = document.querySelector('.home');

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  skullSection.classList.add('animate-on-visit');
              } else {
                  skullSection.classList.remove('animate-on-visit');
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the section is visible
      }
  );

  if (skullSection) {
      observer.observe(skullSection);
  }
});
