const texts = ["Digital Footprint", "Growth & Conversion", "Return on Investment"];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const el = document.getElementById("typewriter");

    function typeLoop() {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        charIndex--;
        el.textContent = currentText.substring(0, charIndex);
      } else {
        charIndex++;
        el.textContent = currentText.substring(0, charIndex);
      }

      let timeout = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentText.length) {
        timeout = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        timeout = 500;
      }

      setTimeout(typeLoop, timeout);
    }

    typeLoop();