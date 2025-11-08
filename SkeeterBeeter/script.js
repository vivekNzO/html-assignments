    const cards = document.querySelectorAll(".myAnimatedCard");

    cards.forEach(card=>{
      document.addEventListener("mousemove", (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = e.clientX / w - 0.5;
      const y = e.clientY / h - 0.5;

      const rotateX = y * 30;  // how much to tilt vertically
      const rotateY = -x * 30; // how much to tilt horizontally
      const translateX = -x * 30; // lateral move
      const translateY = -y * 30; // vertical move


      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translate(${translateX}px, ${translateY}px)
        scale(1.05)
      `;
    });
    })
    const cards2 = document.querySelectorAll(".myAnimatedCard2");

    cards2.forEach(card=>{
      document.addEventListener("mousemove", (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = e.clientX / w - 0.5;
      const y = e.clientY / h - 0.5;

      const rotateX = y * 10;  // how much to tilt vertically
      const rotateY = -x * 10; // how much to tilt horizontally
      const translateX = -x * 10; // lateral move
      const translateY = -y * 10; // vertical move


      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translate(${translateX}px, ${translateY}px)
        scale(1.05)
      `;
    });
    })


  const serviceDropdown = document.getElementById('nav-services')
  const asideDropdown = document.getElementById('aside-services')

  serviceDropdown.addEventListener('click',()=>{
    if(serviceDropdown.classList.contains('showDropDown')){
      serviceDropdown.classList.remove('showDropDown')
    }else{
      serviceDropdown.classList.add('showDropDown');
    }
  })

  asideDropdown.addEventListener('click',()=>{
    asideDropdown.classList.toggle('showDropDown')
  })



  const hamburgerBtn = document.querySelector(".hamburger");
  const sidebar =  document.querySelector(".sidebar");
  const closeHamburgerBtn = document.querySelector(".close-hamburger")

  hamburgerBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('active')
  })
  closeHamburgerBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('active')
  })

