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
      // const translateZ = (Math.abs(x)+Math.abs(y))*120;



      card.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translate(${translateX}px, ${translateY}px)
        scale(1.05)
      `;
    });
    })

