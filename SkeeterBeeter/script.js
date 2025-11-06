    const cards = document.querySelectorAll(".myAnimatedCard");

    cards.forEach(card=>{
      document.addEventListener("mousemove", (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = e.clientX / w - 0.5;
      const y = e.clientY / h - 0.5;

      const rotateX = y * 40;  // how much to tilt vertically
      const rotateY = -x * 40; // how much to tilt horizontally
      const translateX = -x * 40; // lateral move
      const translateY = -y * 40; // vertical move


      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translate(${translateX}px, ${translateY}px)
        scale(1.05)
      `;
    });
    })


    const serviceDropdown = document.getElementById('nav-services')

    serviceDropdown.addEventListener('click',()=>{
      if(serviceDropdown.classList.contains('showDropDown')){
        serviceDropdown.classList.remove('showDropDown')
      }else{
        serviceDropdown.classList.add('showDropDown');
      }
    })
